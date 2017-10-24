require('./styles/main.scss');

import io from 'socket.io-client';

const socket = io('http://192.168.0.11:1337'); //home
// const socket = io('http://192.168.1.27:1337');

socket.on('connect', (client) => {
    socket.emit('emitURL', window.location.pathname);

    let type = '';
    if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
        type = 'device';
    } else {
        type = 'desktop';
    }
    socket.emit('clientConnect', {id: socket.id, type: type});
});

/*
* Debug to display informations about a client / clients
*/
socket.on('displayClientInfo', (clientDebug) => {
    console.log(clientDebug);
});

socket.on('redirect', (url) => {
    window.location.href = window.location.origin+url;
});