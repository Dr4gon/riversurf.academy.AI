const express = require('express');

const { openAiModel } = require('../models/openAiModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await openAiModel.find();
  return res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await openAiModel.findById(id);
  return res.status(200).json(data);
});

router.post('/', async (req, res) => {
  const newOpenAi = openAiModel({ ...req.body });
  const insertedOpenAi = await newOpenAi.save();
  return res.status(201).json(insertedOpenAi);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedOpenAi = await openAiModel.findByIdAndDelete(id);
  return res.status(200).json(deletedOpenAi);
});

module.exports = router;
