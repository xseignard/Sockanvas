
// Express Server
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(1337); //Server

app.use(cors());
app.use(express.static('dist'));

//Code server
io.on('connection', socket => {
    const users = [];

    //TODO : add the current room to the user and dispay it
    // Detect number of mobile
    // Block if number of mobile > 2
    
    socket.on('userConnect', (msg) => {
        if(msg.type === 'desktop') {
            socket.join('master');
            let user = {
                id: msg.id,
                type: msg.type,
                name: msg.name,
                room: socket.rooms
            };
            users.push(user);
            user = [];
        } else {
            socket.join('devices');
            let user = {
                id: msg.id,
                type: msg.type,
                name: msg.name,
                room: socket.rooms
            };
            users.push(user);
            user = [];
        }
        console.log(users); //affichage en console du tableau users

        socket.emit('displayUserInfo', msg)
    });

});

