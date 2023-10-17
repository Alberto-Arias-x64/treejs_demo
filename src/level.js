import cube from './geometries/cube';
import { scene } from './scene'
import { light, directionalLight } from './light';
import camera from './camera';
import plane from './geometries/plane';
import { keyController } from './utils'

function loadLevel() {
    scene.add(cube);
    scene.add(plane);
    scene.add(light);
    scene.add(directionalLight);
}

function loopLevel() {
    if (keyController.isKeyPressed('w')) cube.position.y += 1
    if (keyController.isKeyPressed('s')) cube.position.y -= 1
    if (keyController.isKeyPressed('a')) cube.position.x -= 1
    if (keyController.isKeyPressed('d')) cube.position.x += 1
    camera.lookAt(cube.position)
}

camera.lookAt(cube.position)

export { loadLevel, loopLevel }
