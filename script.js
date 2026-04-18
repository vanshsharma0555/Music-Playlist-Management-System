let playlist = [];
let currentIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const list = document.getElementById("list");

function addTrack() {
  const name = document.getElementById("name").value;
  const artistName = document.getElementById("artistInput").value;
  const url = document.getElementById("url").value;

  if (!url) {
    alert("Audio URL required!");
    return;
  }

  const track = { name, artist: artistName, url };
  playlist.push(track);

  const li = document.createElement("li");
  li.textContent = `${name} - ${artistName}`;

  li.onclick = () => {
    currentIndex = playlist.indexOf(track);
    loadTrack();
    audio.play();
  };

  list.appendChild(li);
}

function loadTrack() {
  const track = playlist[currentIndex];
  audio.src = track.url;
  title.textContent = track.name;
  artist.textContent = track.artist;
}

function togglePlay() {
  if (!audio.src) return;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function next() {
  if (playlist.length === 0) return;
  currentIndex = (currentIndex + 1) % playlist.length;
  loadTrack();
  audio.play();
}

function prev() {
  if (playlist.length === 0) return;
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadTrack();
  audio.play();
}
