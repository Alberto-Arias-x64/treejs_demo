import * as THREE from 'three';

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 80;
camera.position.y = 0;

export default camera