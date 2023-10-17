import * as THREE from 'three';
import { degreesToRadians as DTR } from '../utils'

//Geometries
const geometry = new THREE.PlaneGeometry(100, 100)
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); //material standard
const plane = new THREE.Mesh(geometry, material);
//plane.rotateX(DTR(90))

export default plane