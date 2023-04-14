let context = null;

function initAudioContext() {
  // Crée le contexte audio lorsqu'un événement utilisateur est détecté
  context = new AudioContext();
}

function playSound() {
  // Vérifie si le contexte audio a été initialisé
  if (!context) {
    // Si le contexte audio n'a pas encore été initialisé, lance l'initialisation
    initAudioContext();
  }

  // Crée un nœud source pour lire le son
  const source = context.createBufferSource();

  // Charge le fichier audio
  fetch('sound/menu_select.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      // Associe le buffer audio au nœud source
      source.buffer = audioBuffer;

      // Connecte le nœud source au contexte audio
      source.connect(context.destination);

      // Lance la lecture du son
      source.start();
    });
}

// Exporte la fonction playSound sous le nom playSound
export { playSound as default };