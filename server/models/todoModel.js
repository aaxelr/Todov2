const mongoose = require('mongoose');

const User = require('./userModel');

const TodoSchema = new mongoose.Schema({
  uuid: String,
  author: {
    type: mongoose.ObjectId,
    ref: User,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
