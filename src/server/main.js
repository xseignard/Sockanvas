const path = require('path');

// Express Server
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static('dist'));
const server = require('http').Server(app);

// Socket io
const io = require('socket.io')(server);
server.listen(1337); //Server

// Twig
const Twig = require('twig');
app.set("twig options", {
    strict_variables: false
});

app.get('/', (req, res) => {
    const ua = req.headers['user-agent'];
    let device = /mobile/i.test(ua);

    if (device === true && device !== null) {
        res.render('device.html.twig', {});
    } else if (device === false && device !== null) {
        res.render('desktop.html.twig', {});
    }
});

app.get('/waiting', (req, res) => {
    const ua = req.headers['user-agent'];
    let device = /mobile/i.test(ua);
    res.render('waiting.html.twig', {device: device});
});


let clients = [];
io.on('connection', socket => {
    let currentclient = {};

    // On emet l'url du client
    socket.on('emitURL', (location) => {
        // Si le client est sur la page '/'
        if (location !== '/waiting') {
            socket.on('clientConnect', (client) => {
                let deviceCount = 0;
                let desktopCount = 0;

                clients.forEach((e) => {
                    if (e.type === 'desktop')
                        desktopCount++;
                    if (e.type === 'device')
                        deviceCount++;
                });
                if (client.type === 'desktop' && desktopCount === 0) {
                    socket.join('master');
                    currentclient = {
                        id: client.id,
                        type: client.type,
                        name: 'DesktopMaster',
                        rooms: getRoomsByClient(client.id)
                    };
                    clients.push(currentclient);
                    socket.emit('displayClientInfo', clients);
                } else if (client.type === 'device' && deviceCount < 2) {
                    socket.join('devices');
                    currentclient = {
                        id: client.id,
                        type: client.type,
                        name: 'Device' + deviceCount,
                        rooms: getRoomsByClient(client.id)
                    };
                    clients.push(currentclient);
                    socket.emit('displayClientInfo', currentclient);
                } else {
                    // Redirection sur la page d'attente si le client ne peut pas jouer
                    socket.emit('redirect', '/waiting')
                }
            });
        } else {
            // Toutes les 15 secondes on refresh
            setTimeout(() => {
                socket.emit('redirect', '/');
            }, 15000)
        }
        socket.on('disconnect', () => {
            for (let i = 0; i < clients.length; i++) {
                if (socket.id == clients[i].id) {
                    clients.splice(i, 1);
                }
            }
        })
    });
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