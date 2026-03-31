self.addEventListener("install", event => {
  console.log("Service Worker installiert");
  event.waitUntil(
    caches.open("focusflow-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "Copilot_20260331_183952.png",
        
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
