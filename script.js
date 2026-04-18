const playlist = [];
const audioPlayer = document.getElementById("audioPlayer");
const playlistUI = document.getElementById("playlist");

function addSong() {
  const input = document.getElementById("songInput");
  const song = input.value.trim();

  if (!song) {
    alert("Enter a valid song URL or path!");
    return;
  }

  playlist.push(song);

  const li = document.createElement("li");
  li.textContent = song;

  li.onclick = () => {
    playSong(song);
  };

  playlistUI.appendChild(li);
  input.value = "";
}

function playSong(song) {
  audioPlayer.src = song;
  audioPlayer.play().catch(err => {
    console.error("Playback failed:", err);
    alert("Cannot play this audio. Check file path or format.");
  });
}
