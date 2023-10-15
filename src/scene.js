import * as THREE from 'three';
import camera from './camera';

// Scene
const scene = new THREE.Scene();
const canvas = document.querySelector("#canva_1")

// Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

export { scene, renderer }