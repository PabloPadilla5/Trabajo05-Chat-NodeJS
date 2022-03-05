const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);
const port = 5000;

server.listen(port);

/*app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});*/

app.get('/', function (req, res) {
    //res.send('GET request to homepage')
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket) {
    socket.on('chat', (message) => {
        io.emit('chat', message);
    });
});