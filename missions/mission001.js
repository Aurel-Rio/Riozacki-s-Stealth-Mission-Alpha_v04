// Importer les classes Keyboard et Gamepad depuis le module keyboard.js et gamepad.js respectivement
import { Keyboard } from '../models/class/keyboard.js';
import { Gamepad } from '../models/class/gamepad.js';

// Sélectionner le canvas dans le document HTML et créer une instance de PIXI.Application avec ce canvas
const canvas = document.getElementById('mission001');
const app = new PIXI.Application({ view: canvas });

// Charger les images des sprites avec la méthode Loader de PixiJS
app.loader.add('riozacki_back_default', '../sprites/riozacki_1_back_default.png');
app.loader.add('riozacki_back_run_1', '../sprites/riozacki_back_run_1.png');
app.loader.add('riozacki_back_run_2', '../sprites/riozacki_back_run_2.png');

// Lancer le chargement des images et exécuter le code suivant une fois le chargement terminé
app.loader.load(() => {

  // Créer un PIXI.AnimatedSprite avec un tableau de PIXI.Texture représentant les images des animations
  const sprite = new PIXI.AnimatedSprite([
    PIXI.Texture.from('riozacki_back_default'),
    PIXI.Texture.from('riozacki_back_run_1'),
    PIXI.Texture.from('riozacki_back_run_2')
  ]);

  // Ajouter le sprite à la scène de l'application PIXI
  app.stage.addChild(sprite);

  // Positionner le sprite à une position initiale de (200, 200)
  sprite.position.set(200, 200);

  // Définir la vitesse de l'animation à 0.2 (20% de la vitesse normale) et lancer l'animation
  sprite.animationSpeed = 0.2;
  sprite.play();

  // Variables pour gérer l'alternance des textures de course
  let isRunningTexture1 = true;
  let runningTextureTimer = 0;
  const runningTextureInterval = 10;

  function gameLoop() {
    // Déplacez le sprite en fonction de la saisie utilisateur
    const speed = 5;

    if (keyboard.isDown(38) || gamepad.up) {
      // Alterner les textures de course
      runningTextureTimer += 1;
      if (runningTextureTimer >= runningTextureInterval) {
        if (isRunningTexture1) {
          sprite.textures = [            PIXI.Texture.from('riozacki_back_run_2')          ];
          isRunningTexture1 = false;
        } else {
          sprite.textures = [            PIXI.Texture.from('riozacki_back_run_1')          ];
          isRunningTexture1 = true;
        }
        runningTextureTimer = 0;
      }

      sprite.animationSpeed = 0.2;
      sprite.play();
      sprite.y -= speed;
    } else {
      // Si aucune touche n'est appuyée, afficher la texture par défaut
      sprite.textures = [        PIXI.Texture.from('riozacki_back_default')      ];
      sprite.animationSpeed = 0.2;
      sprite.play();
      runningTextureTimer = 0;
      isRunningTexture1 = true;
    }

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
});