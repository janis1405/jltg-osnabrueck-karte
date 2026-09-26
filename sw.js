/* ===================== Service Worker: die Karte liegt im Geraet ==========
   Die Karte ist EINE Datei mit allen Daten. Dieser Worker legt sie beim
   ersten Besuch in einen eigenen Speicher und liefert sie von da an immer
   von dort aus — auch ohne Netz, auch nachdem der Browser den Tab
   verworfen hat, und ohne jedes Mal Daten zu verbrauchen.

   Was er bewusst NICHT tut: sich selbst eine neue Fassung holen. Eine Karte,
   die sich mitten im Spiel still aktualisiert, hat danach vielleicht einen
   anderen Datenstand als die Handys der anderen. Neue Fassungen holt die
   Seite selbst, erst nach Rueckfrage (59-fassung.js). Dafuer greift sie
   direkt in denselben Speicher.

   Der Worker bedient nur den Seitenaufruf der Karte. Alles andere — die
   Versionsdatei, Kartenkacheln, Links — geht unveraendert ins Netz.

   Diese Datei soll sich moeglichst nie aendern. Der Browser vergleicht sie
   bei jedem Aufruf; eine geaenderte installiert sich neu, laesst den
   Speicher mit der Karte aber stehen.                                   */
const SPEICHER = 'jltg-karte';

/* Welche Adresse die Karte ist, sagt die Seite beim Anmelden mit. Lokal
   heisst sie anders als auf GitHub Pages. */
const SEITE = new URL(new URL(self.location).searchParams.get('seite') || './',
                      self.registration.scope).href;
const normal = u => { const x = new URL(u); x.hash = ''; x.search = '';
  if (x.pathname.endsWith('/')) x.pathname += 'index.html'; return x.href; };

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SPEICHER);
    // Liegt schon eine Fassung da, bleibt sie: Worker-Update ist kein Karten-Update.
    // Sonst kommt sie in aller Regel aus dem HTTP-Zwischenspeicher, kostet also nichts.
    if (!(await c.match(normal(SEITE)))) await c.add(normal(SEITE));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.mode !== 'navigate' || r.method !== 'GET' || normal(r.url) !== normal(SEITE)) return;
  e.respondWith((async () => {
    const c = await caches.open(SPEICHER);
    const da = await c.match(normal(SEITE));
    if (da) return da;
    const frisch = await fetch(r);
    if (frisch.ok && !frisch.redirected) await c.put(normal(SEITE), frisch.clone());
    return frisch;
  })());
});
