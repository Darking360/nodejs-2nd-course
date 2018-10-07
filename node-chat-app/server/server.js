const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const { generateMessage } = require('./utils/message');

let app = express();

const port = process.env.PORT || 3000;

let server = http.createServer(app);

let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected!')

  socket.emit('newMessage', generateMessage('Server', 'Hello from server'));

  socket.on('createMessage', (message, callback) => {
    console.log('Message from client');
    console.log(message)
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
})

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Magic happening on port ${port}`);
});

