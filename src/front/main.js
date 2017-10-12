require('./main.css');

import io from 'socket.io-client';

const socket = io('http://localhost:1337');

socket.on('connect', () => {
    let type = '';
    if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
        type = 'mobile';
    } else {
        type = 'desktop';
    }
    socket.emit('userConnect', {id: socket.id, type: type, name: 'desktop1'});
});


/*
* Fonction de débug pour afficher les caractéristiques de l'utilisateur
*/
socket.on('displayUserInfo', (infos) => {
    console.log(infos);
});