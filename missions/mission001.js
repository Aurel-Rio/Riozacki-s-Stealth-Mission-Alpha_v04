import { Keyboard } from '../models/class/keyboard.js';

const canvas = document.getElementById('mission001');
const app = new PIXI.Application({ view: canvas });
const sprite = PIXI.Sprite.from('../sprites/riozacki-back.png');
app.stage.addChild(sprite);

sprite.position.set(200, 200);

function gameLoop() {
  const speed = 5;

  if (new Keyboard().isDown(Keyboard.RIGHT_ARROW)) {
    sprite.x += speed;
  }
  if (new Keyboard().isDown(Keyboard.LEFT_ARROW)) {
    sprite.x -= speed;
  }
  if (new Keyboard().isDown(Keyboard.DOWN_ARROW)) {
    sprite.y += speed;
  }
  if (new Keyboard().isDown(Keyboard.UP_ARROW)) {
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