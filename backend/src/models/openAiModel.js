const mongoose = require('mongoose');

const openAiSchema = new mongoose.Schema({
  contentSystem: {
    type: String,
    required: true,
  },
  contentUser: {
    type: String,
    required: true,
  },
  contentResponse: {
    type: String,
    required: true,
  },
  contentModel: {
    type: String,
    required: true,
  },
  contentMaxToken: {
    type: Number,
    required: true,
  },
  contentUserUUID: {
    type: String,
    required: true,
  },
});

const openAiModel = mongoose.model('openAi', openAiSchema);

module.exports = { openAiModel };
