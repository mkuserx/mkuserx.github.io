self.addEventListener('install', event => {
  console.log('SW instalado');
  event.waitUntil(
    caches.open('chatbot-v1').then(cache => {
      return cache.addAll([
        '/',
        '/chatbot.html',
        '/manifest.json',
        '/respuestas.json',
        '/icon-192.png',
        '/icon-512.png'
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
      '/12345ttyyghjhguivdjjfjr.sec.css'
      'function.ch.js'
        // Agregar 
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
