var socket = io();
socket.on('connect', function(){
    console.log('connected to server');

    socket.emit('createEmail', {
        from:'client@test.com',
        subject: 'client subject'
    })
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
})

socket.on('newEmail', function(email) {
    console.log('new email!', email.from, email.subject);
})