const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.post('/messages', async (req, res) => {
  const { content } = req.body;

  try {
    const message = await messageController.sendMessage(content);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/messages', async (req, res) => {
  try {
    const messages = await messageController.getMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
