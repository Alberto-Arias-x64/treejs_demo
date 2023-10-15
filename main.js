import * as THREE from 'three';
import { scene, renderer } from './src/scene';
import cube from './src/geometries/cube';
import camera from './src/camera';
import addStaticLight from './src/light'

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
}
animate();
addStaticLight()