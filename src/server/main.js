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
let clients = [];
let currentclient = {};
io.on('connection', socket => {
    let DesktopExist = false;

    socket.on('clientConnect', (client) => {

        let DeviceCount = 0;
        clients.forEach((e) => {
            if (e.type === 'desktop')
                DesktopExist = true;
            if (e.type === 'device')
                DeviceCount++;
        });
        if (client.type === 'desktop' && DesktopExist === false) {
            socket.join('master');
            currentclient = {
                id: client.id,
                type: client.type,
                name: 'DesktopMaster',
                rooms: getRoomsByClient(client.id)
            };
            clients.push(currentclient);
        } else if (client.type === 'device' && DeviceCount < 2) {
            socket.join('devices');
            currentclient = {
                id: client.id,
                type: client.type,
                name: 'Device' + DeviceCount,
                rooms: getRoomsByClient(client.id)
            };
            clients.push(currentclient);
        } else {
            socket.emit('clientCantPlay');
        }
        socket.emit('displayClientInfo', clients)
    });

    socket.on('disconnect', () => {
        for (let i = 0; i < clients.length; i++) {
            if (socket.id == clients[i].id) {
                clients.splice(i, 1);
            }
        }
    })

    // socket.on('messageToMaster', () => {
    // console.log(users);
    // io.to('master').emit('messageToMaster', 'test');
    // });

});

function getRoomsByClient(id) {
    let usersRooms = [];
    let rooms = io.sockets.adapter.rooms;

    for (let room in rooms) {
        if (rooms.hasOwnProperty(room)) {
            let sockets = rooms[room].sockets;
            if (id in sockets)
                usersRooms.push(room);
        }
    }

    return usersRooms;
}
