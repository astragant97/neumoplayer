// 02: Declaration of constants and variables
let song = document.getElementById("song");
const background = document.querySelector('#fondo'); // background derived from album cover below
let thumbnail = document.querySelector("#thumbnail");

const songArtist = document.querySelector(".player__artist");
const songTitle = document.querySelector(".player__song");
const progressBar = document.querySelector(".player__level");

let songIndex = 0;
let songs = ["./assets/media/track1.mp3", "./assets/media/track2.mp3"];
let thumbnails = ["./assets/img/cover1.png", "./assets/img/cover2.jpg"];
let songArtists = ["Devil Electric", "Royal Blood"];
let songTitles = ["The Dove and the serpent", "Out of the Black"];
let playing = true;

function playPause() {
  if (playing) {
    thumbnail = document.querySelector('#thumbnail');
    song = document.querySelector("#song");

    const playPause = document.getElementById("play");

    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    thumbnail.style.transform = "scale(1.15)";

    song.play();
    playing = false;
  } else {
    const playPause = document.getElementById("play");

    playPause.querySelector(".play-btn").classList.toggle("hide");
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    thumbnail.style.transform = "scale(1)";

    song.pause();
    playing = true;
  }
}

song.addEventListener("ended", function () {
  nextSong();
});

function nextSong() {
  songIndex++;
  if (songIndex > 1) {
    songIndex = 0;
  }

  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;

  playPause();
  resetPlayButton();
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 1;
  }

  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
  resetPlayButton();
}

function resetPlayButton() {
  const playPause = document.getElementById("play");
  playPause.querySelector(".play-btn").classList.remove("hide");
  playPause.querySelector(".pause-btn").classList.add("hide");
  thumbnail.style.transform = "scale(1)";
}

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector(".start").innerHTML = formatTime(Math.floor(song.currentTime));
  if (document.querySelector(".end").innerHTML === "NaN:NaN") {
    document.querySelector(".end").innerHTML = "0:00";
  } else {
    document.querySelector(".end").innerHTML = formatTime(Math.floor(song.duration));
  }
}

// convertir song.currentTime y song.duration en formato MM:SS (minutos : segundos)
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
  song.currentTime = progressBar.value;
}
