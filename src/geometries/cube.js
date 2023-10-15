import * as THREE from 'three';
import { scene } from '../scene'

//Geometries
const geometry = new THREE.CylinderGeometry(1, 2, 1, 30)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //material emissive
const material_2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); //material standard
const cube = new THREE.Mesh(geometry, material_2);
scene.add(cube);

export default cube