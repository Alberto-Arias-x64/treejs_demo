import * as THREE from 'three';
import { degreesToRadians as DTR } from '../utils'

//Geometries
const geometry = new THREE.CylinderGeometry(30, 30, 80, 30)
const material = new THREE.MeshStandardMaterial({ color: 0xffff00 }); //material standard
const terrain = new THREE.Mesh(geometry, material);
terrain.rotateZ(DTR(90))

export default terrain