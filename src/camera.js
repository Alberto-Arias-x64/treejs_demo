import * as THREE from 'three';
import { degreesToRadians as DTR } from './utils'

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 80;
camera.position.y = 0;
camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0),DTR(90))

export default camera