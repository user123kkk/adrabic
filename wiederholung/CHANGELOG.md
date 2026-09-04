# Diesen Block OBEN in wiederholung/CHANGELOG.md einfügen

Ergänzen, nicht ersetzen. Der Eintrag zu 1.8.0 bleibt darunter stehen.
Danach diese Hilfsdatei wegwerfen – sie gehört nicht ins Repo.

---

## 1.8.1 – 4. September 2026

### Entfernt

- Die Grafik **„Neu eingeführt (letzte 30 Tage)"** im Fortschritts-Tab ist raus.

  Sie zählte, wie viele Karten an einem Tag zum ersten Mal bewertet wurden.
  Für bestehende Sammlungen konnte sie nie etwas anzeigen: Karten aus der Zeit
  vor 1.6.0 haben kein bekanntes Datum der ersten Bewertung und fallen aus dem
  Zeitfenster. Wer gerade keine neuen Karten anlegt, sah dauerhaft eine leere
  Grafik – das sieht wie ein Fehler aus, obwohl nichts kaputt war. Und was man
  täglich wirklich tut, nämlich wiederholen, konnte sie prinzipiell nicht
  zeigen.

  Mitentfernt: die Rechenfunktion `neuVerlauf()` und die nur dort benutzten
  Stile. Die 7-Tage-Vorschau ist davon nicht berührt.

### Korrigiert

- **„Strich zurück" im Übungsmodus** erschien bisher erst, nachdem man einmal
  ins Vollbild gewechselt hatte. Grund: Nur dieser Wechsel löste ein
  Neuzeichnen der Werkzeugleiste aus; das Schreiben selbst malt nur roh aufs
  Zeichenfeld. Der Knopf erscheint jetzt direkt nach dem ersten Strich.
- **Übungsmodus zeigt nur noch zwei Bewertungsknöpfe** statt drei. „Fast" und
  „Sicher" taten dort bisher exakt dasselbe, weil es im Übungsmodus keine
  Wiederholungsstufe gibt, die sich ändern könnte. Jetzt: **Nochmal** (Karte
  kommt in derselben Runde gleich wieder) und **Weiter** (nächste Karte). Im
  normalen Lernen-Tab bleiben es weiterhin drei – dort wirken sie wirklich
  unterschiedlich.
- **Scrollen nach dem Aufdecken oder Aufklappen der Beispielsätze** zielt jetzt
  auf die Bewertungszeile statt nur auf die Lösung, mit etwas Luft zum unteren
  Bildschirmrand. Vorher musste man nach dem Vergleichen oft nochmal von Hand
  weiterscrollen, um überhaupt bewerten zu können.

### Vereinfacht

- Das Feld „Wiederholungsstufe" beim Bearbeiten einer Karte zeigt nur noch
  seinen Namen, nicht mehr die komplette Intervall-Tabelle in Klammern.

### Neu

- **Rand-Scrollen mit der Maus (nur PC).** Die Seite scrollt jetzt von selbst,
  wenn die Maus ganz ohne Klick oben oder unten an den Bildschirmrand kommt –
  je näher am Rand, desto schneller, dieselbe Beschleunigung wie beim
  Sortieren der Karten per Ziehen. Reagiert nicht, während eine Karte gezogen
  wird, während im Übungsmodus geschrieben wird, bei offenem Dialog oder in
  einem Textfeld. Auf dem Handy unverändert: normales Wischen mit dem Finger.
