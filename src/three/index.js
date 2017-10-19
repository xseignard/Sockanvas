import * as THREE from 'three';
import TweenMax from 'gsap';
import threeOrbitControls from './utils/OrbitControls';
import Game from './game';
import Table from './table';
import Lights from './lights';
import Particles from './particles';
import './index.css';

// attach orbit controls to THREE
const OrbitControls = threeOrbitControls(THREE);

// stats
// const stats = new Stats();
// document.body.appendChild(stats.domElement);

// scene, renderer, camera, mesh (geometry + material)
const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
// enbale the drawing of shadows
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

let scoreJ1 =  document.getElementById('j1').innerHTML;
let scoreJ2 =  document.getElementById('j2').innerHTML;
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];
span.onclick = () => {
    modal.style.display = "none";
}




//Scene
const scene = new THREE.Scene();

//Lumiere ambiante
const light = new THREE.AmbientLight(0x888888);
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(-15, 30, 95);

// controls
const controls = new OrbitControls(camera, renderer.domElement);

const lights = Lights();
scene.add(lights.group);

const table = Table();
scene.add(table.group);

const game = Game();
scene.add(game.group);

const particlesJ1 = Particles();
particlesJ1.group.position.set(-2.5, 7, game.z-2.5);
scene.add(particlesJ1.group);

const particlesJ2 = Particles();
particlesJ2.group.position.set(-2.5, 7, -game.z-2.5);
scene.add(particlesJ2.group);

let direction= '-';
let yDestination = 3;
let win = false;
let touchable=true;

// const timer = () => {
//     let seconds = 5;
//     const interval = setInterval(() => {
//             seconds --;
//             if (seconds >=0) {
//                 document.getElementById('rebours').innerHTML = seconds;
//             }else {
//                 console.log(game.balle.position.z);
//                 direction == '-' ? direction = '+' : direction = '-';
//                 game.balle.position.z <0 ? game.balle.position.z = game.z : game.balle.position.z = -game.z;
//                 seconds=5;
//                 timer();
//             }
//     }, 1000);
// }

const speed = game.z*2;
const angle = 0;


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const handleClick = e => {

    e.preventDefault();
    mouse.x = e.clientX / window.innerWidth * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(game.group.children);

    if (intersects.length > 0 && intersects[0].object.uuid === game.balle.uuid && touchable==true) {

        // timer(true);

        if (angle == 0 && speed == game.z*2){
            yDestination = 8;
            win = true;
        }

        TweenMax.to(game.balle.position, 0.9, {
            x: angle,
            z: `${direction}=${speed}`,
        });

        TweenMax.to(game.balle.position, 0.6, {
            y: yDestination,
            ease: Power2.easeIn,
        }).delay(0.3);

        touchable = false;

        const timeout1 = setTimeout(() => {

            if (win==true && game.balle.position.z < 0) {

                modal.style.display = "block";
                scoreJ1++;
                document.getElementById('j1').innerHTML = scoreJ1/5;

                // let i = 0;
                // const interval = setInterval(() => {
                //     if (i <= 1000) {
                //         particlesJ2.particles[i].fart();
                //         i++;
                //     } else clearInterval(interval);
                // }, 10);

            }else if (win == true && game.balle.position.z >0) {

                modal.style.display = "block";
                scoreJ2++;
                document.getElementById('j2').innerHTML = scoreJ2/5;

                // let i = 0;
                // const interval = setInterval(() => {
                //     if (i <= 1000) {
                //         particlesJ1.particles[i].fart();
                //         i++;
                //     } else clearInterval(interval);
                // }, 10);

            }

        }, 800);



        const timeout2 = setTimeout(() => {

            if (win==true) {
                if (game.balle.position.z <0) {
                    TweenMax.to(game.balle.position, 1.5, {
                        x: 0,
                        y: game.hauteurBalle,
                        z: -game.z,
                    });
                    // TweenMax.to(camera.position, 2, {
                    // 	x: '15',
                    // 	y: '30',
                    // 	z: `-95`,
                    // });
                    // game.balle.position.set(0,game.hauteurBalle,-game.z);
                    direction='+';
                }else {
                    TweenMax.to(game.balle.position, 1.5, {
                        x: 0,
                        y: game.hauteurBalle,
                        z: game.z,
                    });
                    // TweenMax.to(camera.position, 2, {
                    // 	x: '-15',
                    // 	y: '30',
                    // 	z: `95`,
                    // });
                    // game.balle.position.set(0,game.hauteurBalle,game.z);
                    direction='-';
                }
            }

            touchable = true;

        }, 2000);

    }
};
addEventListener('click', handleClick);

let nb = 50;
let animation = true;
let hsl = 0;
const animate = timestamp => {

    if (hsl <=360) {
        modal.style.backgroundColor = `hsl(${hsl},50%,80%)`;
        span.style.color = `hsl(${hsl},50%,80%)`;
        hsl+=0.5;
    }else {
        hsl = 0;
    }

    if (nb <= 0) {
        game.geometryContenuVerre.vertices.forEach(v => {
            if (Math.random() < 0.5) v.y = Math.random() * 2;
        });
        game.geometryContenuVerre.verticesNeedUpdate = true;
        nb = 50;
    }
    nb --;

    if (animation==true) {
        // timer();
        animation = false
    }

    // stats.begin();

    renderer.render(scene, camera);
    // stats.end();
    requestAnimationFrame(animate);
};
animate();
