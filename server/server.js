const path = require('path');
const publicPath = path.join(__dirname, '/..', '/public');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');
    
    socket.emit('newEmail', {
        from: 'abc@test.com',
        subject: 'new email subject'
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    })
    
    socket.on('disconnect', ()=> {
        console.log('client disconnected');
    })
});

server.listen(port, ()=> {
    console.log('start to listening', port);
});


