import { scene, renderer } from './src/scene';
import camera from './src/camera';
import { loadLevel, loopLevel } from './src/level'

function loop(cd) {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
    if (typeof cd === 'function') cd()
    //loopLevel()
}

loop(loopLevel)
loadLevel()