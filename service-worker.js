const CACHE_NAME = "AJMALMUSIC-0-5-1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return fetch("musicIndex.json")
        .then((response) => response.json())
        .then((musicIndex) => {
          // Pre-cache all songs
          const songCachePromises = musicIndex.songs.map((song) => {
            const songSrc = `/music/${song}.mp3`;
            return cache.add(songSrc);
          });

          // Cache other essential resources
          const otherResources = [
            "/",
            "/assets/scripts/app.js",
            "/assets/scripts/auth.js",
            "/assets/scripts/one.js",
            "/assets/scripts/playlists.js",
            "/assets/scripts/redirect.js",
            "/assets/scripts/watermark.js",
            "/assets/styles/main.css",
            "/index.html",
            "/script.js",
            "/style.css",
            "/musicIndex.json",
            "/fonts.css",
          ];

          const resourceCachePromises = otherResources.map((resource) => {
            return cache.add(resource);
          });

          return Promise.all([...songCachePromises, ...resourceCachePromises]);
        })
        .then(() => self.skipWaiting()); // Activate this service worker immediately
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            // Delete old caches to clean up
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the resource is in cache, return it
      if (response) {
        return response;
      }

      // If the resource is not in cache, fetch and cache it
      return fetch(event.request).then((response) => {
        // Clone the response to cache and return it
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
