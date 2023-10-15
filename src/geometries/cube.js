import * as THREE from 'three';

//Geometries
const geometry = new THREE.CylinderGeometry(1, 2, 1, 30)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //material emissive
const material_2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); //material standard
const cube = new THREE.Mesh(geometry, material_2);

function controls(params) {
    console.log(params)
}

export default cube
export { controls }