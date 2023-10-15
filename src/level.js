import cube from './geometries/cube';
import { scene } from './scene'
import { light, directionalLight } from './light';
import camera from './camera';
import terrain from './geometries/terrain';

function loadLevel() {
    scene.add(cube);
    scene.add(terrain);
    scene.add(light);
    scene.add(directionalLight);
}

function loopLevel() {
    cube.position.x += 0.01
    //camera.lookAt(cube.position)
}

camera.lookAt(terrain.position)

export { loadLevel, loopLevel }
