const songName = this.dataset.song;
if ('caches' in window) {
    // Open a cache with a specific name
    caches.open('songCache').then(function(cache) {
        // Fetch the list of songs from the server
        fetch('/musicIndex.json').then(function(response) {
            return response.json();
        }).then(function(songs) {
            // Cache each song
            for (const song of songs) {
                var songSrcCache = `${musicServerURL}/${songName}.mp3`;
                cache.add(songSrcCache);
            }
        });
    });
}