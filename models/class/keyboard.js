class Keyboard {
    constructor() {
      // Tableau pour stocker les touches enfoncées
      this.keys = [];
  
      // Ajouter des écouteurs d'événements pour les touches enfoncées et relâchées
      document.addEventListener('keydown', (event) => {
        this.keys[event.keyCode] = true;
      });
  
      document.addEventListener('keyup', (event) => {
        this.keys[event.keyCode] = false;
      });
    }
  
    // Méthode pour vérifier si une touche est enfoncée
    isDown(keyCode) {
      return this.keys[keyCode] === true;
    }
  }

