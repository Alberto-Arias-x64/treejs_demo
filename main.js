import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();
const canvas = document.querySelector("#canva_1")

// Camera
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

// Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

//Geometries
const geometry = new THREE.CylinderGeometry(1, 1, 1, 30)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 6;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();