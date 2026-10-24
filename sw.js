/* Book des Process · Séréo — consultation sans internet.
   La page est toujours demandée au réseau d'abord (les mises à jour arrivent tout de suite) ;
   sans internet, la dernière version gardée s'ouvre. Les données (Supabase) ne passent jamais par ici. */
const V = "book-sereo-v1";
const STATIC = /\.(?:woff2?|png|webp|jpg|jpeg|svg|webmanifest|js)$/i;
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(["./", "./manifest.webmanifest", "./icon-192.png", "./fonts/poppins-400.woff", "./fonts/poppins-500.woff", "./fonts/poppins-700.woff"]).catch(() => {})));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
const keep = (req, res) => { if (res && (res.ok || res.type === "opaque")) { const cp = res.clone(); caches.open(V).then((c) => c.put(req, cp)); } return res; };
self.addEventListener("fetch", (e) => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin === self.location.origin) {
    if (u.pathname.endsWith("/sw.js")) return;
    if (r.mode === "navigate" || u.pathname.endsWith("/") || u.pathname.endsWith("/index.html")) {
      e.respondWith(fetch(r).then((res) => keep(new Request(new URL("./", self.location).href), res)).catch(() => caches.match(new URL("./", self.location).href)));
      return;
    }
    if (STATIC.test(u.pathname)) e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => keep(r, res))));
    return;
  }
  if (u.hostname === "cdn.jsdelivr.net") e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => keep(r, res))));
});
