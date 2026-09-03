# Changelog

Neueste Version oben. Einträge werden **ergänzt**, nie ersetzt.

## 1.6.0 – 3. September 2026

**Lernlogik**
- Wiederholungsabstände neu berechnet: `1,8^(Stufe-1)` statt Verdopplung, gedeckelt
  bei 180 Tagen (1, 2, 3, 6, 10, 19, 34, 61, 110, dann 180). Jede Karte kommt damit
  mindestens zweimal im Jahr wieder. Bestehende Fälligkeitsdaten bleiben unverändert;
  die neue Formel greift ab der nächsten Bewertung.
- Dritte Bewertungstaste: **Nicht** (zwei Stufen zurück, kommt in derselben Runde
  wieder) · **Fast** (eine Stufe zurück, morgen wieder) · **Sicher** (eine Stufe hoch).
  Bisher warf jedes „nicht gewusst" die Karte auf Stufe 0 zurück. Tastatur: ←/↓/→
  oder 1/2/3.
- Termine streuen um ±15 %, damit nicht alle Karten eines Lerntags für immer am
  selben Tag zurückkommen. Der Deckel von 180 Tagen bleibt dabei hart.
- Tageslimit für neue Karten, Standard 20, einstellbar auf dem Lernen-Tab. Gilt für
  alle Bereiche zusammen. Wiederholungen sind nie limitiert. Damit läuft auch ein
  Import von 500 Vokabeln nicht mehr aus dem Ruder.
- Der Lerntag beginnt um 4 Uhr morgens statt um Mitternacht. Wer nach ʿIshāʾ um 00:30
  noch lernt, bleibt im selben Lerntag.

**Neue Funktionen**
- Vokabellisten einfügen: Knopf „📋 Liste einfügen" im Verwalten-Tab. Trennzeichen
  wird automatisch erkannt (Tabulator, Gedankenstrich, Semikolon, senkrechter Strich,
  Komma) oder von Hand gewählt. Eine dritte Spalte landet im Notizfeld, Zeilen mit `#`
  werden übersprungen, die Spaltenreihenfolge lässt sich tauschen. Vor dem Import gibt
  es eine Vorschau mit Zeile-für-Zeile-Status.
- Duplikatprüfung beim Anlegen einzelner Karten und im Import. Verglichen wird ohne
  Vokalzeichen und Tatweel, damit كِتَاب und كتاب als dasselbe Wort erkannt werden.

**Behoben**
- Die Streak riss, sobald es mehr als einen Bereich gab, ohne dass irgendwo stand,
  warum. Neue Karten zählen jetzt nicht mehr als „verpasst", und auf dem Lernen-Tab
  steht, welcher Bereich für die Streak noch offen ist.
- Rückgängigmachen setzt auch zurück, dass eine Karte heute eingeführt wurde – ein
  Fehlgriff verbraucht nicht mehr einen Platz des Tageslimits.

**Datenformat**
- Neu: `karten.*.ersteBewertung` (Datum der ersten Bewertung oder `null` = neue Karte)
  und `settings.neuProTag`. Ältere Karten werden beim Laden automatisch ergänzt:
  Stufe > 0 gilt als bereits bewertet, Stufe 0 als neu.

## 1.5.0

- Absturz beim Bewerten behoben, wenn die Karte auf einem anderen Gerät gelöscht wurde
- Handschrift-Canvas zeichnete verzerrt (Kreise wurden oval) – behoben
- Wiederholungsstufe nach oben begrenzt; vorher konnte das Fälligkeitsdatum ungültig
  werden und die Karte verschwand stillschweigend
- Getippter Text ging verloren, wenn zwischendurch Daten aus der Cloud kamen – behoben
- Nach „Karte hinzufügen" steht der Cursor wieder im Wort-Feld
- Veraltetes Meta-Tag ersetzt
- Versionsnummer wird unten in der App angezeigt
- `sw.js` überarbeitet, `CHANGELOG.md` angelegt
