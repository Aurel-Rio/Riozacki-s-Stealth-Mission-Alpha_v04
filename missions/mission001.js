import { Keyboard } from '../models/class/keyboard.js';

const canvas = document.getElementById('mission001');
const app = new PIXI.Application({ view: canvas });
const sprite = PIXI.Sprite.from('../sprites/riozacki-back.png');
app.stage.addChild(sprite);

sprite.position.set(200, 200);

function gameLoop() {
  // Déplacez le sprite en fonction de la saisie utilisateur
  const speed = 5;

  if (keyboard && (keyboard.right.isDown || gamepad.right)) {
    sprite.x += speed;
  }
  if (keyboard && (keyboard.left.isDown || gamepad.left)) {
    sprite.x -= speed;
  }
  if (keyboard && (keyboard.down.isDown || gamepad.down)) {
    sprite.y += speed;
  }
  if (keyboard && (keyboard.up.isDown || gamepad.up)) {
    sprite.y -= speed;
  }

  // Mettre à jour l'animation du sprite
  sprite.animationSpeed = 0.15;
  sprite.play();

  // Rafraîchir le rendu
  app.renderer.render(app.stage);

  // Répéter cette boucle de jeu à chaque image
  requestAnimationFrame(gameLoop);
}

// Détecter les saisies utilisateur
const keyboard = new Keyboard();
const gamepad = new Gamepad();

// Démarrer la boucle de jeu
gameLoop();