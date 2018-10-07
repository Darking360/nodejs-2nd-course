var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');


  socket.emit('createMessage', {
    from: 'Miguel',
    text: 'Yeah, that works',
  }, () => {
    console.log('Message sent');
  })
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
})

socket.on('newMessage', (message) => {
  console.log('New message!');
  console.log(message);
});

jQuery('#message-form').on('submit', (e) => {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'Miguel',
    text: jQuery('[name=message]').val(),
  }, () => {
    console.log('Message sent');
  })
});
