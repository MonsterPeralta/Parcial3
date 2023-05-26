const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const dbConnection = process.env.DB_CONNECTION;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configuración de Socket.IO
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });

  socket.on('enviar-mensaje', (message) => {
    // Guardar el mensaje en la base de datos
    // ...

    // Emitir el mensaje a todos los clientes
    io.emit('recibir-mensaje', message);
  });
});

// Rutas API
app.use('/api', apiRoutes);

// Servir archivos estáticos
app.use(express.static('public'));

// Iniciar el servidor
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
