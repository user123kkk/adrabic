/* Service Worker für Adrabic-Wiederholung
   Ziel: die App-Hülle (index.html + Firebase-SDK-Dateien) zwischenspeichern,
   damit die App auch ohne Internet startet. Echte Firebase-/Google-API-Aufrufe
   (Login, Firestore-Sync) werden NICHT angefasst – dafür sorgt Firebase selbst
   mit seinem eigenen Offline-Cache.

   Bei Änderungen an dieser Datei bitte CACHE_NAME hochzählen (z.B. v2),
   sonst behalten Nutzer:innen die alte Version im Cache. */

const CACHE_NAME = "adrabic-shell-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function isCacheable(url) {
  // Nur die eigene App und die Firebase-SDK-Dateien von gstatic cachen.
  return url.origin === self.location.origin || url.origin === "https://www.gstatic.com";
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return; // Firestore-Schreibvorgänge etc. unangetastet lassen

  const url = new URL(req.url);
  if (!isCacheable(url)) return; // Auth-/Firestore-API-Aufrufe komplett durchreichen

  event.respondWith(
    fetch(req)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() =>
        caches.match(req).then(cached => cached || caches.match("./index.html"))
      )
  );
});
