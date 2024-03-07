const mongoose = require('mongoose');

const OpenAIDataSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});

class OpenAIData {}

OpenAIDataSchema.loadClass(OpenAIData);
module.exports = mongoose.model('OpenAIData', OpenAIDataSchema);
