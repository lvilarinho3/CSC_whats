
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('csc-wa-frontonly-v1').then((c)=>c.addAll([
    './','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo.png'
  ])));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== 'csc-wa-frontonly-v1' && caches.delete(k)) )));
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
