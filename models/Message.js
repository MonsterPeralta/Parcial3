const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  latitud: {
    type: Number,
    required: true,
  },
  longitud: {
    type: Number,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);
