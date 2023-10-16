function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

class KeyController {
    constructor() {
        this.keysPressed = {};

        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        this.keysPressed[event.key] = true;
    }

    handleKeyUp(event) {
        this.keysPressed[event.key] = false;
    }

    isKeyPressed(key) {
        return this.keysPressed[key] === true;
    }
}

const keyController = new KeyController();

export { degreesToRadians, keyController }