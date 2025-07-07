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
        // Agrega aquí tus scripts y CSS si tienes
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
