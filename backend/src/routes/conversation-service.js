const express = require('express');

const OpenAIData = require('../models/open-ai-data');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await OpenAIData.find();
  return res.status(200).json(data);
});

router.get('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const data = await OpenAIData.find({ contentUserUUID: uuid });
  return res.status(200).json(data);
});

router.post('/', async (req, res) => {
  const newOpenAi = OpenAIData({ ...req.body });
  const insertedOpenAi = await newOpenAi.save();
  return res.status(201).json(insertedOpenAi);
});

router.delete('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const deletedOpenAi = await OpenAIData.deleteMany({ contentUserUUID: uuid });
  return res.status(200).json(deletedOpenAi);
});

module.exports = router;
