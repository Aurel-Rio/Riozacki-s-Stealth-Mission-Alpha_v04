import playSound from "./sound.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Constantes du jeu
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SPEED = 5;

// Variables du jeu
let playerX = GAME_WIDTH / 2;
let playerY = GAME_HEIGHT / 2;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Chargement des ressources
function loadResources() {
  // Chargement de l'image du sprite
  const spriteImage = new Image();
  spriteImage.src = "sprites/riozacki-back.png";

  // Vérification que l'image a bien été chargée avant de démarrer le jeu
  return new Promise((resolve) => {
    spriteImage.onload = function () {
      resolve();
    };
  });
}

// Fonction de mise à jour du jeu
function update() {
  // Déplacement du joueur en fonction des touches enfoncées
  if (leftPressed) {
    playerX -= PLAYER_SPEED;
  }
  if (rightPressed) {
    playerX += PLAYER_SPEED;
  }
  if (upPressed) {
    playerY -= PLAYER_SPEED;
  }
  if (downPressed) {
    playerY += PLAYER_SPEED;
  }
}

// Coordonnées du sprite à extraire
const spriteX = 0;
const spriteY = 0;
const spriteWidth = 32;
const spriteHeight = 32;

// Fonction de chargement du sprite
function loadSprite() {
  // Dessin du sprite sur le canvas
  context.drawImage(spriteImage, playerX, playerY);
}

// Fonction de rendu du jeu
function render() {
  // Effacement du canvas
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Dessin du joueur
  loadSprite();
}

// Fonction de démarrage du jeu
function startGame() {
  // Ajout des événements d'écoute pour les touches du clavier
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      leftPressed = true;
    }
    if (event.key === "ArrowRight") {
      rightPressed = true;
    }
    if (event.key === "ArrowUp") {
      upPressed = true;
    }
    if (event.key === "ArrowDown") {
      downPressed = true;
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
      leftPressed = false;
    }
    if (event.key === "ArrowRight") {
      rightPressed = false;
    }
    if (event.key === "ArrowUp") {
      upPressed = false;
    }
    if (event.key === "ArrowDown") {
      downPressed = false;
    }
  });

  // Démarrage de la boucle de jeu
  function main() {
    update();
    render();
    window.requestAnimationFrame(main);
  }

  // Chargement des ressources et démarrage du jeu
  loadResources().then(() => {
    main();
  });
}

// Attente du clic sur le bouton "Jouer"
document.getElementById("player1").addEventListener("click", () => {
  document.getElementById("menu").style.display = "none";
  startGame();
});

// Attente du clic sur le bouton "Sons"
const soundsMenu = document.getElementById("sounds-menu");
const soundsButton = document.getElementById("button-sounds");
soundsButton.addEventListener("click", function () {
  soundsMenu.style.display = soundsMenu.style.display === "none" ? "block" : "none";
});

// Attente du clic sur le bouton "Retour"
const backButton = document.getElementById("button-back");
backButton.addEventListener("click", function () {
  soundsMenu.style.display = "none";
});

// Chargement des ressources et démarrage du jeu
loadResources().then(() => {
  startGame();
});