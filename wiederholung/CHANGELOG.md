# Changelog

Neueste Version oben. Einträge werden **ergänzt**, nie ersetzt.

## 1.7.0 – 3. September 2026

**Neue Funktionen**
- **Fortschritts-Tab**: Stufenverteilung in vier Farben (neu/wackelig/im Aufbau/sitzt),
  7-Tage-Vorschau mit Warnung ab 60 Karten/Tag, 30-Tage-Verlauf neu eingeführter Karten.
  Umschalter zwischen allen Bereichen und nur dem offenen Bereich. Rechnet nichts neu,
  speichert nichts – nur Anzeige aus vorhandenen Feldern.
- **Verbrannte Karten**: Nach 5 Rückfällen wird eine Karte im Fortschritts-Tab rot
  gekennzeichnet (🔥-Plakette) – Signal, dass die Karte umformuliert oder geteilt werden
  sollte statt einfach immer wieder versucht zu werden. Im Verwalten-Tab mit Badge.
  Übungsmodus zählt nicht, der Zähler wird nur beim echten Lernen hochgezählt.
- **E-Mail-Bestätigung**: Nach der Registrierung wird eine Bestätigungs-E-Mail versendet.
  Die App sperrt sich selbst, bis der Nutzer den Link bestätigt hat. Verhindert
  Fake-Registrierungen mit erfundenen Adressen. Button „E-Mail erneut senden" auf der
  Verifikations-Seite, falls der Link nicht ankommt.

**Datenformat**
- Neu: `karten.*.rueckfaelle` (Zähler für Rückfälle beim Bewerten). Alte Karten starten
  bei 0; die Zählung beginnt mit dem Einbau. Nach 5 Rückfällen gelten Karten als
  „verbrannt" und werden gekennzeichnet.

**Sonstiges**
- Reste von E1 (Massen-Import) aufgeräumt – leere Zeilen und verwaiste Kommentare
  entfernt.

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
