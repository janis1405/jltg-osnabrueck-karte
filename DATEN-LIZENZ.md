# Daten: Herkunft und Lizenz

## Herkunft

Die Geodaten in `index.html` stammen aus **OpenStreetMap** und wurden über
die öffentliche [Overpass-API](https://overpass-api.de/) abgefragt — die
dafür vorgesehene Schnittstelle des Projekts. Die Abfragen hielten sich an
die Nutzungsrichtlinie: gekachelt, wartend auf freie Bearbeitungsplätze
und nacheinander statt parallel.

Die Daten für die Fragen (Einrichtungen, Verwaltungsgrenzen, Gewässer,
Küste) kommen aus den OpenStreetMap-Abzügen von
[Geofabrik](https://download.geofabrik.de/) für Deutschland und die
Nachbarländer, ebenfalls OpenStreetMap unter der ODbL.

Eingebettet sind:

| Inhalt | Umfang |
|---|---|
| Stationen mit Name, Lage, Art, Betreiber, Netz | 6.709 |
| Schienennetz, zu Linienzügen verkettet | 91.507 Wege |
| Küstenlinie und benannte Flüsse | 12.887 Linien |

`play-area.kml` ist dagegen eigene Arbeit und stammt nicht aus
OpenStreetMap.

## Lizenz

Kartendaten © OpenStreetMap-Mitwirkende, lizenziert unter der
**Open Database License (ODbL) v1.0**.

- Lizenztext: <https://opendatacommons.org/licenses/odbl/1-0/>
- Hinweise von OpenStreetMap: <https://www.openstreetmap.org/copyright>

### Was das bedeutet

Die in `index.html` eingebetteten Daten sind eine **Derivative Database**
im Sinne der ODbL. Sie stehen daher unter derselben Lizenz, und wer sie
weitergibt, darf keine zusätzlichen Einschränkungen auferlegen. Die Daten
liegen unverändert lesbar in der Datei — die Lizenzpflicht, die abgeleitete
Datenbank verfügbar zu halten, ist damit erfüllt.

### Namensnennung

Sie steht dauerhaft unten rechts in der Karte, unabhängig davon, ob eine
Hintergrundkarte geladen ist:

> Stations- und Netzdaten © OpenStreetMap-Mitwirkende, ODbL 1.0

## Höhenmodell

Für die Frage „näher am Meeresspiegel“ ist ein Höhenmodell eingebettet.
Es stammt **nicht** aus OpenStreetMap, sondern aus den öffentlichen
[Terrain Tiles](https://registry.opendata.aws/terrain-tiles/) von
Mapzen/Tilezen auf AWS (Zoomstufe 10, Terrarium-Kodierung).

Bearbeitung: je 3 × 3 Pixel gemittelt (Raster rund 280 m), Höhen bis 50 m
auf ganze Meter, darüber auf 5 m gerundet, Meerestiefen unter −10 m auf 0
gesetzt, anschließend verlustfrei gepackt.

Namensnennung nach den
[Vorgaben der Terrain Tiles](https://github.com/tilezen/joerd/blob/master/docs/attribution.md),
beschränkt auf die Quellen, die unseren Ausschnitt abdecken:

- Mapzen
- Europe terrain data produced using Copernicus data and information funded
  by the European Union – EU-DEM layers
- Global GMTED2010 and SRTM terrain data courtesy of the U.S. Geological
  Survey
- Global ETOPO1 terrain data U.S. National Oceanic and Atmospheric
  Administration

In der Karte steht dazu unten rechts:

> Höhen: Mapzen, EU-DEM (Copernicus, EU), USGS, NOAA

## Schrift

Eingebettet ist außerdem die Schrift **IBM Plex** (Sans, Sans Condensed,
Mono), © 2017 IBM Corp., mit dem reservierten Schriftnamen „Plex“. Sie
steht unter der **SIL Open Font License 1.1**, der vollständige Text liegt
in [`SCHRIFT-LIZENZ.txt`](SCHRIFT-LIZENZ.txt). Verwendet werden IBMs
eigene WOFF2-Dateien aus den npm-Paketen `@ibm/plex-*`, unverändert und
nicht beschnitten. Die Lizenz erlaubt das Einbetten und Weitergeben
ausdrücklich, solange der Lizenztext beiliegt.

## Keine personenbezogenen Daten

Die Daten beschreiben Verkehrsinfrastruktur — Bahnhöfe, Haltestellen,
Gleise, Gewässer. Personenbezogene Daten sind nicht enthalten.
