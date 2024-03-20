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
  './assets/img/Constuction.jpg',
  './assets/img/Constuctionv2.jpg',
  './assets/img/Constuctionv3.jpg',
  './assets/img/Logo.png',
  './assets/img/Untitled5.gif',
  './assets/img/Untitled6.gif',
  './assets/img/Untitled7.gif',
  './assets/logo.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
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