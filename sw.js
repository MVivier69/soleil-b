/* =========================================================================
   SOLEIL BEAUJOLAIS — SERVICE WORKER
   -------------------------------------------------------------------------
   Deux comportements distincts :

   1. LE MOTEUR (index.html, sw.js, manifest.json) est mis en cache.
      Il ne change que rarement. Quand il change, il FAUT incrementer
      le numero de version ci-dessous : sb-v1 -> sb-v2, etc.

   2. LE CONTENU (config.js et tout le dossier images/) est recupere
      en priorite depuis le reseau. Une modification de texte, de lien
      ou d'image apparait donc des le rechargement suivant, SANS avoir
      a toucher a la version. Le cache ne sert que de secours hors ligne.
   ========================================================================= */

var VERSION = "sb-v4";

var SOCLE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images/icone-192.png",
  "./images/icone-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION)
      .then(function (c) { return c.addAll(SOCLE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(noms.map(function (n) {
        return n === VERSION ? null : caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  var contenu = url.pathname.indexOf("config.js") !== -1 ||
                url.pathname.indexOf("/images/") !== -1;

  if (contenu) {
    /* reseau d'abord, cache en secours */
    e.respondWith(
      fetch(req).then(function (rep) {
        var copie = rep.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copie); });
        return rep;
      }).catch(function () {
        return caches.match(req);
      })
    );
    return;
  }

  /* cache d'abord, reseau en secours */
  e.respondWith(
    caches.match(req).then(function (rep) {
      return rep || fetch(req).then(function (r) {
        var copie = r.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copie); });
        return r;
      });
    }).catch(function () { return caches.match("./index.html"); })
  );
});
