const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');

let app = express();

const port = process.env.PORT || 3000;

let server = http.createServer(app);

let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected!')
})

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Magic happening on port ${port}`);
});

