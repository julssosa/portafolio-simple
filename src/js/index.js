//import { bro } from './scripts/bro';

//document.querySelector(".header h1").textContent = bro("Wasssup");

import LocomotiveScroll from 'locomotive-scroll';

import * as THREE from 'three';

import './scripts/particles.js';

import '../sass/style.scss';


const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  class: 'is-inview',
  scrollFromAnywhere: true,

});

const navBtn = document.querySelectorAll('nav button');

navBtn.forEach(item => {
  item.addEventListener('click', event => {
    let theSectionToScrollTo = `.the-section--${item.id}`;
    scroll.scrollTo(document.querySelector(theSectionToScrollTo));
  })
})

document.querySelector('#work-web-projects').addEventListener('click', event => {
  document.querySelector('.the-section--work .section--horizontal-scroll-sections').classList += ' scrolled-to-right';
 })

// 3D landing

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 8, 5);
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer({
  alpha: true
});
var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.the-section--landing-bouncy').appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('../src/assets/green-texture.jpg');

const mirrorMaterial = new THREE.MeshLambertMaterial({
  alphaMap: texture,

  reflectivity: 5,
  combine: THREE.MixOperation

});

const simpleMaterial = new THREE.MeshBasicMaterial({
  color: 0x333333,
  wireframe: true
});

var plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 10, 5, 10), mirrorMaterial);
plane.rotation.x = -Math.PI * 0.5;
//scene.add(plane);

var ballMaterial = new THREE.MeshBasicMaterial({
  color: 0x96F300,
  wireframe: false,
  flatShading: false
});

var ballGeometry = new THREE.SphereGeometry(1, 30, 30, 0, Math.PI * 2, 0, Math.PI * 2);

var ball = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ball);

var clock = new THREE.Clock();
var time = 0;
var delta = 0;

render();

function render() {
  requestAnimationFrame(render);
  delta = clock.getDelta();
  time += delta;
  ball.rotation.x = time * 4;
  ball.position.y = 0.5 + Math.abs(Math.sin(time * 3)) * 2;
  ball.position.z = Math.cos(time) * 4;
  renderer.render(scene, camera);
}




// Who am I lluvia 

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var container = document.querySelector('.the-section--who-am-i--lluvia')

function spawn() {
  var image = document.createElement("div");
  image.classList.add("the-section--who-am-i--lluvia-drop");

  image.style.left = getRndInteger(0, 90) + '%';
  image.style.top = getRndInteger(-10, 40) +
    '%';

  container.appendChild(image)

  setTimeout(function () {
    container.removeChild(image)
  }, 3500)

}

setTimeout(function run() {
  spawn()
  setTimeout(run, 100 + Math.random() * 300)
}, 500 + Math.random() * 100)

spawn()

// const jsonPath = require('./particlessettings.json');


//  particlesJS.load('particles-js', jsonPath, function () {
//    console.log('loaded');
//  });

// Sección proyectos


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 3,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "https://github.com/julssosa/portafolio-simple/blob/main/src/assets/objeto_negro.png?raw=true",
        "width": 1000,
        "height": 1000
      }
    },
    "opacity": {
      "value": 0.1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 450,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4.872463273808071,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 5692.112816072607,
        "rotateY": 1843.9238699953512
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}, function () {
  console.log('particles loaded');
});
