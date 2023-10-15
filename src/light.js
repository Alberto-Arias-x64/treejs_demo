import * as THREE from 'three';
import { scene } from './scene'

function addStaticLight() {
    // Ambient light
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);
}

export default addStaticLight