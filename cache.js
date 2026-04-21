const CACHE_NAME = 'my-site-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/images/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return fetch(event.request)
        .then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        .catch(() => caches.match(event.request));
    })
  );
});