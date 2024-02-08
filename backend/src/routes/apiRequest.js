const express = require('express');
const { OpenAI } = require('openai');
const { openAiModel } = require('../models/openAiModel');

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Your key must be saved in the root folder in an .env file. This is what the .env file should look like OPENAI_API_KEY=yourKey
});

router.post('/', async (req, res) => {
  console.log('Anfrage wurde gestellt!');

  try {
    const { text, uuid } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Kein Text zur Verarbeitung bereitgestellt' });
    }

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: process.env.SYSTEM_CONTENT,
        },
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

    const newEntry = new openAiModel({
      contentSystem: process.env.SYSTEM_CONTENT,
      contentUser: text,
      contentResponse: generatedText,
      contentModel: process.env.AI_MODEL,
      contentMaxToken: parseInt(process.env.MAX_TOKEN, 10),
      contentUserUUID: uuid,
    });

    await newEntry.save();
  } catch (error) {
    console.error('Fehler bei der Kommunikation mit der OpenAI API:', error);
    res.status(500).json({ message: 'Interner Serverfehler' });
  }
});

module.exports = router;
