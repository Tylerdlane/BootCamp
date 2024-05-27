// Require express and initialize it
const express = require('express');
const app = express();

// Declare a port variable
const PORT = process.env.PORT || 3000;

// Require socket.io and pass the server object to it
const io = require('socket.io')(
    app.listen(PORT, () => {
        console.log('App listening on port: ', PORT)
    })
);

// Tell our app to use our client folder as static code
app.use(express.static('client'));

// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on('connection', socket => {
    console.log('A NEW USER CONNECTED')

    socket.on('New User', nickname => {
        console.log(`${nickname} has joined the chat!`);
        io.emit('New User', nickname)
    })

    socket.on('New Message', message => {
        console.log(message);
        io.emit('New Message', message)
    })

});
