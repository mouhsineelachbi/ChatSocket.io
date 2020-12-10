const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

//  Listening to connection event which is called here connection
io.on('connection', (socket) => {

    console.log('a user connected');
    
    //  Listening to a costumed event called message
    socket.on('message', (message) => {
        console.log(message)
        // Reemit the received message to others
        io.emit('message', `${socket.id} said ${message}`);
    });

})

http.listen(8080, () => console.log('Listening on http://localhost:8080'))