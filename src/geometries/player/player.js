import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const loader = new GLTFLoader();

loader.load('path/to/model.glb', (gltf) => {
    scene.add(gltf.scene);
})