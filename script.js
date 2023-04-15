const buttonOnePlayer = document.getElementById('button_start_player_one');
const titleAudio = document.getElementById('title_audio');
const playButton = document.querySelector('.play-button');
buttonOnePlayer.addEventListener('click', (e) => {
  window.location.href = 'missions/mission001.php';
});

playButton.addEventListener('click', function() {
  titleAudio.play();
});