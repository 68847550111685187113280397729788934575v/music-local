fetch("/playlists.json")
  .then((response) => response.json())
  .then((data) => {
    const playlistContainer = document.getElementById("playlistContainer");
    if (Array.isArray(data)) {
      data.forEach((playlist, index) => {
        const link = document.createElement("a");
        link.href = playlist.url === window.location.href ? "/" : playlist.url;
        link.textContent = playlist.name;
        playlistContainer.appendChild(link);
        if (index < data.length - 1) {
          playlistContainer.appendChild(document.createTextNode("|"));
        }
      });
    } else {
      console.error("Invalid data format:", data);
    }
  })
  .catch((error) => {
    console.error("Error fetching playlists:", error);
  });
