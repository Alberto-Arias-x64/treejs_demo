import { scene, renderer } from './src/scene';
import camera from './src/camera';
import { loadLevel, loopLevel } from './src/level'

function loop() {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
    loopLevel()
}

loop()
loadLevel()