const audioPlayer = document.getElementById("audioPlayer"),
  musicList = document.getElementById("songList"),
  playPauseBtn = document.getElementById("playPauseBtn"),
  progressSlider = document.getElementById("progressSlider"),
  progressTime = document.getElementById("progressTime"),
  speedSelect = document.getElementById("speedSelect"),
  randomBtn = document.getElementById("randomBtn"),
  loopBtn = document.getElementById("loopBtn"),
  volumeSlider = document.getElementById("volumeSlider"),
  scriptPath = document.currentScript.src,
  folderName = window.location.pathname.split("/")[2];
songsJsonPath = `/playlists/${folderName}/songs.json`;
musicServerURL = "https://music-8be.pages.dev/music2";

let songNameContainer = document.getElementById("songNameContainer"),
  isPlaying = false,
  isSeeking = false,
  isRandom = false,
  isLooping = false;

function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = "▶";
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = "▐ ▌";
  }
  isPlaying = !isPlaying;
}

function updateProgressSlider() {
  if (!isSeeking) {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    progressSlider.value = currentTime;
    progressTime.textContent = `${formatTime(currentTime)} / ${formatTime(
      duration
    )}`;
  }
}

// Event listener for the audio metadata loaded event
audioPlayer.addEventListener("loadedmetadata", function () {
  // Set the max value of the progress slider to the duration of the audio
  progressSlider.max = audioPlayer.duration;
});

// Event listener for the audio time update event
audioPlayer.addEventListener("timeupdate", function () {
  // Update the value of the progress slider
  progressSlider.value = audioPlayer.currentTime;
});

function addDownloadButton(li, songName) {
  const downloadDiv = document.createElement("div");
  downloadDiv.className = "download-div";

  const downloadBtn = document.createElement("button");
  downloadBtn.textContent = "Download";
  downloadBtn.className = "download-btn";
  downloadBtn.setAttribute("data-song", songName);

  // Event listener for the download button
  downloadBtn.addEventListener("click", function () {
    const songName = this.getAttribute("data-song");
    const songSrc = `${musicServerURL}/${songName}.mp3`;
    const link = document.createElement("a");
    link.href = songSrc;
    link.download = `${songName}.mp3`;
    link.click();
  });

  downloadDiv.appendChild(downloadBtn);
  li.appendChild(downloadDiv);

  const songNameDiv = document.createElement("div");
  songNameDiv.textContent = songName;
  songNameDiv.className = "song-name";

  // Event listener for the song name
  songNameDiv.addEventListener("click", function () {
    const currentSong = document.querySelector(".song-name.darken");
    if (currentSong) {
      currentSong.classList.remove("darken");
    }
    const songName = this.textContent;
    const songSrc = `${musicServerURL}/${songName}.mp3`;
    audioPlayer.src = songSrc;
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.textContent = "▐ ▌";
    songNameDiv.classList.add("darken");
  });

  li.appendChild(songNameDiv);
  musicList.appendChild(li);
}

function toggleRandom() {
  isRandom = !isRandom;
  randomBtn.classList.toggle("active", isRandom);
  if (isRandom) {
    shuffleMusicList();
  }
}

function toggleLoop() {
  isLooping = !isLooping;
  loopBtn.classList.toggle("active", isLooping);
  audioPlayer.loop = isLooping;
}

// Shuffle the music list randomly
function shuffleMusicList() {
  const songs = Array.from(musicList.children);
  for (let i = songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }
  musicList.innerHTML = "";
  songs.forEach((song) => {
    musicList.appendChild(song);
  });
}

// Load and cache all songs locally
function loadAndCacheSongs(songs) {
  songs.forEach((songName) => {
    const songSrc = `${musicServerURL}/${songName}.mp3`;
    const li = document.createElement("li");
    li.setAttribute("data-src", songSrc);
    addDownloadButton(li, songName); // Add the download button
  });
}

// Event listener for the play/pause button
playPauseBtn.addEventListener("click", togglePlay);

// Event listener for the progress slider (when the user drags the slider)
progressSlider.addEventListener("input", function () {
  const seekTime = parseFloat(this.value);
  audioPlayer.currentTime = seekTime;
  progressTime.textContent = `${formatTime(seekTime)} / ${formatTime(
    audioPlayer.duration
  )}`;
  isSeeking = true;
});

// Event listener for the progress slider (when the user releases the slider)
progressSlider.addEventListener("change", function () {
  isSeeking = false;
});

// Event listener for the audio time update to update the progress slider
audioPlayer.addEventListener("timeupdate", updateProgressSlider);

// Event listener for the speed selection
speedSelect.addEventListener("change", function () {
  audioPlayer.playbackRate = parseFloat(this.value);
});

// Event listener for the random button
randomBtn.addEventListener("click", function () {
  toggleRandom();
  if (isRandom) {
    shuffleMusicList();
    playRandomSong();
  } else {
    playNextSong();
  }
});

// Event listener for the loop button
loopBtn.addEventListener("click", toggleLoop);

// Event listener for the volume slider
volumeSlider.addEventListener("input", function () {
  const volume = parseFloat(this.value);
  audioPlayer.volume = volume;
});

// Helper function to format time in MM:SS format
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

fetch(songsJsonPath)
  .then((response) => response.json())
  .then((data) => {
    loadAndCacheSongs(data);
    if (data.length > 0) {
      playSong(0);
    }
  })
  .catch((error) => {
    console.error(error);
    fetch("/songs.json")
      .then((response) => response.json())
      .then((data) => {
        loadAndCacheSongs(data);
        if (data.length > 0) {
          playSong(0);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

function playSong(index) {
  const songs = Array.from(musicList.children);
  const song = songs[index];
  const songSource = song.getAttribute("data-src");
  audioPlayer.src = songSource;
  audioPlayer.play();
  isPlaying = true;
  playPauseBtn.textContent = "▐ ▌";
  currentSongIndex = index;

  audioPlayer.addEventListener("ended", function () {
    if (isRandom) {
      playRandomSong();
    } else {
      playNextSong();
    }

    const songName = decodeURIComponent(
      audioPlayer.src.split("/").pop().split(".").shift()
    );
    updateSongName(songName);
    const currentSongElement = document.querySelector(
      `li[data-src="music/${songName}.mp3"] .song-name`
    );
    if (currentSongElement) {
      currentSongElement.classList.add("darken");
    }
  });
}

function playNextSong() {
  const songs = Array.from(musicList.children);
  const nextIndex = (currentSongIndex + 1) % songs.length;
  playSong(nextIndex);
}

function playRandomSong() {
  const songs = Array.from(musicList.children);
  const randomIndex = Math.floor(Math.random() * songs.length);
  playSong(randomIndex);
}

randomBtn.addEventListener("click", function () {
  toggleRandom();
  if (isRandom) {
    shuffleMusicList();
    playRandomSong();
  } else {
    playNextSong();
  }
});

// Event listener for the audio play event
audioPlayer.addEventListener("play", function () {
  const currentSong = document.querySelector(".song-name.darken");
  if (currentSong) {
    currentSong.classList.remove("darken");
  }
  const songName = decodeURIComponent(
    audioPlayer.src.split("/").pop().split(".").shift()
  );
  updateSongName(songName);
  const currentSongElement = document.querySelector(
    `li[data-src="music/${songName}.mp3"] .song-name`
  );
  if (currentSongElement) {
    currentSongElement.classList.add("darken");
  }
});

audioPlayer.addEventListener("ended", function () {
  if (isRandom) {
    playRandomSong();
  } else {
    playNextSong();
  }

  // Update the document title and song name container
  const currentSong = document.querySelector(".song-name.darken");
  if (currentSong) {
    currentSong.classList.remove("darken");
  }

  const songName = decodeURIComponent(
    audioPlayer.src.split("/").pop().split(".").shift()
  );
  document.title = `AJMAL MUSIC | ${songName}`;

  songNameContainer.textContent = songName;
  const currentSongElement = document.querySelector(
    `li[data-src="music/${songName}.mp3"] .song-name`
  );
  if (currentSongElement) {
    currentSongElement.classList.add("darken");
  }
});

// Add event listener to play the corresponding song
musicList.addEventListener("click", function (event) {
  if (
    event.target.tagName === "LI" ||
    (event.target.tagName === "BUTTON" &&
      event.target.classList.contains("download-btn"))
  ) {
    const songIndex = Array.from(musicList.children).indexOf(
      event.target.closest("li")
    );
    const songSource = event.target.closest("li").getAttribute("data-src");
    const songName = event.target
      .closest("li")
      .textContent.replace("Download", "");

    // Update the document title
    document.title = `AJMAL MUSIC | ${songName}`;

    // Set the song name in the container
    const songNameContainer = document.getElementById("songNameContainer");
    if (songNameContainer) {
      songNameContainer.textContent = songName;
    }

    // Play the song
    audioPlayer.src = songSource;
    audioPlayer.play();

    // Update the play/pause button and isPlaying state
    playPauseBtn.textContent = "▐ ▌";
    isPlaying = true;

    // Update the current song index
    currentSongIndex = songIndex;
  }
});

const titleElement = document.querySelector(".title");
titleElement.addEventListener("click", function () {
  window.location.href = "/";
});

randomBtn.addEventListener("click", toggleRandom);

loopBtn.addEventListener("click", toggleLoop);

function updateSongName(songName) {
  document.title = `AJMAL MUSIC | ${songName}`;
  songNameContainer.textContent = songName;
}

// Event listener for the audio play event
audioPlayer.addEventListener("play", function () {
  const currentSong = document.querySelector(".song-name.darken");
  if (currentSong) {
    currentSong.classList.remove("darken");
  }
  const songName = decodeURIComponent(
    audioPlayer.src.split("/").pop().split(".").shift()
  );
  updateSongName(songName);
  const currentSongElement = document.querySelector(
    `li[data-src="music/${songName}.mp3"] .song-name`
  );
  if (currentSongElement) {
    currentSongElement.classList.add("darken");
  }
});

audioPlayer.addEventListener("ended", function () {
  if (isRandom) {
    playRandomSong();
  } else {
    playNextSong();
  }

  const songName = decodeURIComponent(
    audioPlayer.src.split("/").pop().split(".").shift()
  );
  updateSongName(songName);
  const currentSongElement = document.querySelector(
    `li[data-src="music/${songName}.mp3"] .song-name`
  );
  if (currentSongElement) {
    currentSongElement.classList.add("darken");
  }
});
