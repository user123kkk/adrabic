# Changelog

Alle nennenswerten Änderungen an Adrabic-Wiederholung.
Neueste Version steht oben.

Regel bei jeder Veröffentlichung:
1. `APP_VERSION` in `index.html` hochzählen
2. `CACHE_NAME` in `sw.js` auf denselben Wert setzen
3. hier einen Eintrag schreiben
4. `git tag v1.5.0 && git push --tags`

---

## 1.5.0 – 2026-09-03

Diese Version bringt keine neuen Funktionen. Sie repariert Fehler, die im Alltag
Daten kosten oder das Schreibtraining unbrauchbar machen.

### Behoben
- **Handschrift wurde verzerrt gezeichnet.** Die Zeichenfläche war fest 700×260 groß,
  wurde auf dem Handy aber etwa 350×240 angezeigt – waagerecht um Faktor 2 gestaucht,
  senkrecht kaum. Runde Bögen wurden zu Ellipsen. Die Fläche wird jetzt in ihrer
  echten Größe und in der Auflösung des Bildschirms gezeichnet.
- **Getippte Vokabeln gingen verloren.** Kam während der Eingabe ein Datensatz aus
  der Cloud herein, wurde das Formular geleert. Eingaben werden jetzt zwischengespeichert,
  und der Cursor bleibt an seiner Stelle.
- **Absturz beim Bewerten**, wenn eine Karte auf einem anderen Gerät gelöscht wurde,
  während die Lernsession noch offen war.
- **Karten konnten verschwinden.** Eine sehr hohe Wiederholungsstufe erzeugte ein
  ungültiges Fälligkeitsdatum; die Karte galt danach nie wieder als fällig.
  Die Stufe ist jetzt auf 12 begrenzt (entspricht 2048 Tagen).

### Verbessert
- Nach „Karte hinzufügen" steht der Cursor wieder im Wort-Feld. Mehrere Vokabeln
  hintereinander einzugeben geht jetzt ohne Zwischenklick.
- Die Versionsnummer steht unten auf jeder Seite.
- Service Worker: Die Quran-Schrift wird jetzt mit zwischengespeichert und
  funktioniert offline. Fehlt offline eine Datei, bekommt der Browser keine
  HTML-Seite mehr untergeschoben, wo er JavaScript erwartet.
- Zeichenfläche wird beim Drehen des Geräts neu vermessen.

### Bekannt, noch offen
Siehe `docs/review-v-next.md`, Abschnitte B (Lernlogik) und C (Skalierung).
Die Terminplanung und die Datenstruktur bleiben unverändert.

---

## 1.6.0 – PLAN (nicht fertig)

Lernlogik überarbeiten, damit die App über Wochen hinweg nutzbar bleibt.

### Neu
- Drei Tasten statt zwei: „Nicht" / „Fast" / „Sicher" beim Bewerten
- Tageslimit: maximal 20 neue Karten pro Tag (verhindert die Lawine)
- Massen-Import: Vokabeln als Liste einfügen (mehrere auf einmal)

### Behoben
- Wiederholungsintervall gekürzt: Ab Stufe 10 war eine Karte praktisch weg
- Streak repariert: funktioniert jetzt richtig, auch mit mehreren Bereichen
- Tagesgrenze verschoben: Tag beginnt um 4 Uhr morgens statt Mitternacht

---

## 1.7.0 – PLAN (nicht fertig)

Werkzeuge für die Brüder.

### Neu
- Geteilte Kartensätze: Medina Buch 1 und andere Sets als Vorlage importieren
- Fortschritt sichtbar: Balken, Grafik der letzten 30 Tage, Vorschau nächste Woche
- E-Mail-Bestätigung: Bei der Registrierung muss man seine E-Mail-Adresse prüfen

### Einstellungen (in der Firebase-Konsole)
- E-Mail-Vorlagen angepasst (nicht mehr „lernkarte-925c2")
- App Check aktiviert (verhindert Missbrauch)

---

## 2.0.0 – PLAN (nicht fertig)

Datenstruktur für 1000+ Karten umgebaut.

### Neu
- Karten in einer Subcollection statt einem großen Dokument
- Nur fällige Karten laden (statt alle)

### Migration
- Alte Daten werden automatisch in das neue Format überführt
- Erzwungenes Backup vor der Migration

### Breaking Changes
- Bereichs-Indizes zu IDs umgestellt (intern, ohne Nutzer-Auswirkung)
