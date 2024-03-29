const express = require('express');
const { OpenAI } = require('openai');
const OpenAIData = require('../models/open-ai-data');

const path = require('path');
const fs = require('fs');

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get('/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;
    const messages = await findUserMsgs(uuid);

    res.json(generateUserContext(messages, false));
  } catch (error) {
    console.error('Fehler beim Laden der Nachrichten:', error);
    res.sendStatus(500).json({ message: 'Interner Serverfehler' });
  }
});

router.put('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const { response, useful } = req.body;
  const messages = await findUserMsgs(uuid);
  let message = messages.find(message => message.contentResponse === response);
  message.contentResponseUseful = useful;
  await message.save();
  res.sendStatus(200);
});

router.post('/', async (req, res) => {
  try {
    const { text, uuid } = req.body;

    console.log(`${new Date()} Request from ${uuid} with text: ${text} is processed.`);

    if (!text) {
      return res.status(400).json({ message: 'Kein Text zur Verarbeitung bereitgestellt' });
    }

    const previousMessages = await OpenAIData.find({
      contentUserUUID: uuid,
      contentResponseUseful: true,
    });

    userContext = generateUserContext(previousMessages, true);

    const trainingdata = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../assets/trainingdata.json')));
    const taskdata = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../assets/taskdata.json')));

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: process.env.SYSTEM_CONTENT,
        },
        ...taskdata.messages,
        ...trainingdata.messages,
        ...userContext,
        {
          role: 'user',
          content: text,
        },
      ],
      model: process.env.AI_MODEL,
      max_tokens: parseInt(process.env.MAX_TOKEN, 10),
    });

    const generatedText = response.choices[0].message.content;

    res.json({ reply: generatedText });

    const newEntry = new OpenAIData({
      contentSystem: process.env.SYSTEM_CONTENT,
      contentUser: text,
      contentResponse: generatedText,
      contentModel: process.env.AI_MODEL,
      contentMaxToken: parseInt(process.env.MAX_TOKEN, 10),
      contentUserUUID: uuid,
      contentResponseUseful: true,
    });

    await newEntry.save();
  } catch (error) {
    console.error('Fehler bei der Kommunikation mit der OpenAI API:', error);
    res.status(500).json({ message: 'Interner Serverfehler' });
  }
});

async function findUserMsgs(uuid) {
  const messages = await OpenAIData.find({
    contentUserUUID: uuid,
    date: { $gte: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  });
  return messages;
}

function generateUserContext(previousMessages, isRequest) {
  userContext = [];

  previousMessages.forEach(message => {
    userContext.push({
      role: 'user',
      content: message.contentUser,
    });
    if (isRequest)
      userContext.push({
        role: 'assistant',
        content: message.contentResponse,
      });
    else {
      userContext.push({
        role: 'assistant',
        content: message.contentResponse,
        useful: message.contentResponseUseful,
      });
    }
  });

  return userContext;
}

module.exports = router;
