importScripts('./workbox-sw.js');

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
);

const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/main.js',
  './assets/img/Construction.jpg',
  './assets/img/Constructionv2.jpg',
  './assets/img/Constructionv3.jpg',
  './assets/img/Logo.png',
  './assets/img/Untitled5.gif',
  './assets/img/Untitled6.gif',
  './assets/img/Untitled7.gif',
  './logo.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return Promise.all(
          urlsToCache.map(function(url) {
            return fetch(url).then(function(response) {
              if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
              }
              return cache.put(url, response);
            }).catch(function(error) {
              console.log('There has been a problem with your fetch operation for ' + url + ': ' + error.message);
            });
          })
        );
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .catch(function(error) {
            console.log('Error al realizar la solicitud:', error);
            return caches.match('./offline.html');
          });
      })
  );
});