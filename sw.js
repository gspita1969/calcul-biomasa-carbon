const CACHE_NAME = 'biomasa-cache-v6.1';
const FILES_TO_CACHE = [ 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'logo.png' ];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES_TO_CACHE))); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
self.addEventListener('message', e => { if(e.data && e.data.type==='SKIP_WAITING'){ self.skipWaiting(); } });
