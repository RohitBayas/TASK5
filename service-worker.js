self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('aryan-portfolio-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './manifest.json',
        './RBlogo.png',
        './RB icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
