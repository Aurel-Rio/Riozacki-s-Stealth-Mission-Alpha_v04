export class Gamepad {
    constructor() {
      // Liste des gamepads connectés
      this.gamepads = [];
  
      // Ajouter un écouteur pour les nouveaux gamepads connectés
      window.addEventListener('gamepadconnected', (event) => {
        this.gamepads[event.gamepad.index] = event.gamepad;
      });
  
      // Ajouter un écouteur pour les gamepads déconnectés
      window.addEventListener('gamepaddisconnected', (event) => {
        delete this.gamepads[event.gamepad.index];
      });
    }
  
    // Méthode pour vérifier si une touche est enfoncée sur un gamepad
    isDown(buttonIndex, gamepadIndex = 0) {
      const gamepad = this.gamepads[gamepadIndex];
      return gamepad && gamepad.buttons[buttonIndex].pressed;
    }
  
    // Propriété pour obtenir la position du joystick gauche sur l'axe horizontal
    get leftStickX() {
      const gamepad = this.gamepads[0];
      return gamepad ? gamepad.axes[0] : 0;
    }
  
    // Propriété pour obtenir la position du joystick gauche sur l'axe vertical
    get leftStickY() {
      const gamepad = this.gamepads[0];
      return gamepad ? gamepad.axes[1] : 0;
    }
  
    // Propriété pour obtenir la position du joystick droit sur l'axe horizontal
    get rightStickX() {
      const gamepad = this.gamepads[0];
      return gamepad ? gamepad.axes[2] : 0;
    }
  
    // Propriété pour obtenir la position du joystick droit sur l'axe vertical
    get rightStickY() {
      const gamepad = this.gamepads[0];
      return gamepad ? gamepad.axes[3] : 0;
    }
  }