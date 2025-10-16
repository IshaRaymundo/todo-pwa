self.addEventListener('install', event => {
  console.log('Service worker instalado.');
});

self.addEventListener('activate', event => {
  console.log('Service worker activado.');
});

self.addEventListener('fetch', event => {
  console.log('Fetch interceptado para:', event.request.url);
});
