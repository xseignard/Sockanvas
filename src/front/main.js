require('./main.css');

import io from 'socket.io-client';

const socket = io('http://192.168.0.11:1337');

socket.on('connect', (client) => {
    let type = '';
    if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {
        type = 'device';
    } else {
        type = 'desktop';
    }
    socket.emit('clientConnect', {id: socket.id, type: type});
    // socket.emit('messageToMaster');
});


/*
* Fonction de débug pour afficher les caractéristiques de l'utilisateur
*/
socket.on('displayClientInfo', (clientDebug) => {
    console.log(clientDebug);
});

/*
* Fonction d'avertissement empechant le socket de particper au jeu
* */
socket.on('clientCantPlay', () => {
    alert('Vous n\'etes ni le premier Desktop, ni un mobile');
});