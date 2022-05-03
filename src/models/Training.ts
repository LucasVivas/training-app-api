const mongoose = require('mongoose');

const trainingSchema = mongoose.Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  description: { type: String, required: false },
}); 

module.exports = mongoose.model('Training', trainingSchema);