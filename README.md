# JLTG Osnabrück — Stationskarte

Interaktive Karte für eine private Spielrunde am **9.–11. Oktober 2026**,
Start Osnabrück Hbf, gespielt mit dem Deutschlandticket.

**[→ Karte öffnen](index.html)**

Die Spielfunktionen sind **verschlüsselt**. Beim ersten Öffnen fragt die
Karte nach dem Passwort; das gibt es von der Spielleitung. Auf Wunsch merkt
sich ein Gerät den Schlüssel, danach startet die Karte ohne Eingabe, auch
offline. Die Kartendaten selbst liegen offen in der Datei.

---

## Was die Karte kann

- **Suche** über alle 6.709 Stationen, auch nach DS100-Kürzel
- **Ebenen** für Bahnhöfe, Haltepunkte, Stadtbahn, U-Bahn und Straßenbahn,
  einzeln zuschaltbar
- **Play-Area-Grenze** mit abgedunkeltem Außenbereich
- **Hauptbahnhöfe** dauerhaft beschriftet, als Orientierung
- eigener Standort, hell/dunkel, vier Hintergrundvarianten

Die Karte zeichnet Schienennetz, Küste und Flüsse selbst. Sie braucht
dafür **keinen Kartendienst und kein Internet** — `index.html` ist eine
einzelne Datei, in der alles steckt, auch die Programmbibliotheken.

## Was drauf ist

| Kategorie | Anzahl |
|---|---|
| Bahnhöfe | 1.666 |
| Haltepunkte | 1.695 |
| Straßenbahn | 2.843 |
| U-Bahn | 396 |
| Stadtbahn | 109 |
| **gesamt** | **6.709** |
| Streckenwege | 91.507 |

Museums-, Güter-, Werks- und Freizeitparkbahnen sind aussortiert — 537
Stationen, die kein Nahverkehr sind.

Dazu Orte, Gewässer, Küste, Verwaltungsgrenzen und ein Höhenmodell, alle
auf die Play Area zugeschnitten: was außerhalb liegt, ist nicht enthalten.
Orte nur mit Namen; Gewässer sind Meer, Seen und Teiche ab 3 ha
(einschließlich Stau-, Rückhalte- und Hafenbecken), Flüsse und benannte
Kanäle.

## Die Play Area

`play-area.kml` ist der Export aus Google My Maps.

| | |
|---|---|
| Fläche | 204.474 km² |
| Ausdehnung | 663 km Nord–Süd, 427 km Ost–West |
| Ecken | Flensburg im Norden, Karlsruhe im Süden, Magdeburg im Osten |

---

## Aufs Handy

Einmal mit Netz öffnen und entsperren, danach liegt die Karte im Gerät. Sie
startet dann auch im Funkloch, kostet beim Neuladen keine Daten und
übersteht es, wenn Android den Tab im Hintergrund schließt. Im Menü steht
unter „Datenstand“, ob sie offline gespeichert ist.

Am besten als App installieren: Menü → „Als App installieren“, oder im
Chrome-Menü „Zum Startbildschirm hinzufügen“. Sie startet dann im
Vollbild mit eigenem Symbol.

**Neue Fassungen kommen nie ungefragt.** Die Karte sieht nach, ob es eine
gibt, und bietet sie an — mit dem Hinweis, ob sich dabei der Datenstand
ändert. Mitten im Spiel soll kein Handy still auf andere Daten wechseln.

---

## Was nur über https funktioniert

**Das Entsperren.** Browser stellen die Verschlüsselungsfunktionen nur
sicheren Seiten zur Verfügung; als lokal geöffnete Datei (`file://`)
lässt sich die Karte nicht entsperren.

**Die Hintergrundkacheln.** OpenStreetMap liefert nur eine Hinweiskachel,
wenn die Anfrage keinen `Referer` mitschickt — und Browser senden bei
lokal geöffneten Dateien grundsätzlich keinen.

**Die Standortanzeige.** Browser geben Ortung nur auf sicheren Seiten frei.

Über GitHub Pages ist alles davon erfüllt.

---

## Daten und Lizenz

Kartendaten © **OpenStreetMap**-Mitwirkende, verfügbar unter der
**[Open Database License (ODbL) 1.0](https://opendatacommons.org/licenses/odbl/)**.

Die in `index.html` eingebetteten Stations-, Netz- und Geodaten sind eine
abgeleitete Datenbank im Sinne der ODbL und stehen ebenfalls unter dieser
Lizenz; sie liegen unverschlüsselt in der Datei. Näheres in
[`DATEN-LIZENZ.md`](DATEN-LIZENZ.md).

Der Seitencode steht unter der MIT-Lizenz, siehe [`LICENSE`](LICENSE).
Eingebettet sind außerdem [Leaflet](https://leafletjs.com/) (BSD-2-Clause),
[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
(MIT) und die Schrift [IBM Plex](https://github.com/IBM/plex) (© IBM Corp.,
SIL Open Font License 1.1, Lizenztext in
[`SCHRIFT-LIZENZ.txt`](SCHRIFT-LIZENZ.txt)).

Die Skripte, mit denen die Daten geholt und die Karte gebaut wurde, liegen
nicht in diesem Repo.
