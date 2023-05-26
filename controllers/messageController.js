const Message = require('../models/Message');

async function sendMessage(content) {
  try {
    const message = new Message({ content });
    await message.save();
    return message;
  } catch (error) {
    throw new Error('Error al enviar el mensaje');
  }
}

async function getMessages() {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return messages;
  } catch (error) {
    throw new Error('Error al obtener los mensajes');
  }
}

module.exports = {
  sendMessage,
  getMessages,
};
