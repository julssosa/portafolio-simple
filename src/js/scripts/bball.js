var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 8, 5);
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer({ alpha: true });
var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.the-section--landing-bouncy').appendChild(renderer.domElement);

var plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 10, 5, 10), new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true
}));
plane.rotation.x = -Math.PI * 0.5;
scene.add(plane);

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
