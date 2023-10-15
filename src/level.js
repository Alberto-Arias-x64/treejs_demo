import cube from './geometries/cube';
import { scene } from './scene'
import { light, directionalLight } from './light';
import camera from './camera';

function loadLevel() {
    scene.add(cube);
    scene.add(light);
    scene.add(directionalLight);
}

function loopLevel() {
    cube.position.x += 0.02
    cube.position.y -= 0.02
    camera.lookAt(cube.position)
}

export { loadLevel, loopLevel }
