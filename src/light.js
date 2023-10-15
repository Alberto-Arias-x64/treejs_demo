import * as THREE from 'three';
import { scene } from './scene'

// Ambient light
const light = new THREE.AmbientLight(0xffffff);

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);


export { light, directionalLight }