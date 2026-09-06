## 2.1.0 – 6. September 2026 — „Suchen und Finden"

### Behoben

- **Tippen im Suchfeld auf dem Handy.** Wer „sonne" eintippte, sah plötzlich
  „snn" im Feld stehen.

  Grund: Jedes Zeichen löste 150 ms später einen kompletten Neuaufbau der
  Seite aus – einschließlich des Suchfelds, in dem gerade getippt wurde. Die
  Handy-Tastatur hängt aber mit ihrem halbfertigen Wort (Autokorrektur,
  Wortvorschlag, Wischen) an genau diesem Feld. War es weg, schob sie beim
  nächsten Zeichen ihre Reste verdreht in das neue Feld hinein. Am PC fiel
  das nicht auf, weil es dort kein „Wort in Arbeit" gibt.

  Jetzt steckt die Kartenliste in einem eigenen Kasten und wird beim Tippen
  allein neu gezeichnet; das Suchfeld wird dabei nie angefasst. Zusätzlich
  wartet die App, solange die Tastatur an einem Wort baut, und Autokorrektur
  sowie Rechtschreibprüfung sind für das Suchfeld abgeschaltet.

- **Schriftgröße wirkte im Fortschritts-Tab nicht.** Die Einstellung
  klein / normal / groß gilt laut 1.8.0 überall, wo Arabisch steht. Die Zeilen
  unter „🔥 Karten, die nicht klappen" waren davon ausgenommen – sie heißen im
  Aufbau anders als die Zeilen der Kartenliste und wurden von der Regel nicht
  erfasst. Dort blieb das arabische Wort auf Normalgröße.

- **Duplikatprüfung war schwächer als die Suche.** Sie entfernte nur Harakat
  und Tatweel. „أحمد" und „احمد" galten damit als zwei verschiedene Wörter und
  liessen sich doppelt anlegen – beim Abtippen ohne Hamza der häufigste Fall
  überhaupt. Sie benutzt jetzt dieselbe Vergleichsform wie die Suche.

  Mit **einer** Ausnahme: ى und ي bleiben in der Duplikatprüfung getrennt.
  على (auf) und علي (Ali) stehen beide in fast jedem Anfänger-Wortschatz. Die
  Suche darf sie zusammenwerfen – ein Treffer zu viel kostet nichts. Eine
  Warnung zu viel kostet dagegen Vertrauen, und eine Warnung, die man
  gewohnheitsmäßig wegklickt, warnt nicht mehr.

### Die Suche findet, was gemeint ist

Bisher verglich die Suche rohen Text mit rohem Text. Gefunden wurde nur, was
Zeichen für Zeichen gleich geschrieben war. Jetzt läuft jeder Vergleich über
eine Vergleichsform – gespeichert und angezeigt wird selbstverständlich
weiterhin der Originaltext.

- **Ohne Harakat suchen.** Harakat, Sukun, Dagger-Alif und Tatweel fallen beim
  Vergleich weg, أ إ آ ٱ gelten als ا, ى als ي und ة als ه. „شمس" findet
  „الشَّمْس".
- **Deutsch und Umschrift.** ä/ö/ü/ß und Umschrift-Striche (ā ī ū š ṣ ḥ ṭ)
  zählen wie ihre Grundbuchstaben: „grosses" findet „großes", „kitab" findet
  „kitāb", „schlussel" findet „Schlüssel".
- **Artikel egal.** „alshams", „al-shams" und „shams" finden dasselbe, ebenso
  „الشمس" und „شمس". Der Artikel wird nur am **Wortanfang** abgeschnitten und
  nur, wenn danach noch mindestens drei Zeichen stehen – sonst würde „alle" zu
  „le" und fände jedes zweite Wort.
- **Mehrere Wörter gelten UND.** „sonne licht" findet die Karte, auf der beides
  steht – in beliebiger Reihenfolge und in beliebigen Feldern.
- **Reihenfolge der Treffer.** Wortanfänge stehen oben, „irgendwo drin" darunter.
  Vorher stand der beste Treffer gelegentlich auf Platz 40.
- **Ähnliche Treffer als Notfall.** Erst wenn es gar nichts Genaues gibt, wird
  ein Buchstabe Abweichung erlaubt – auch das Vertauschen zweier Zeichen, der
  häufigste Vertipper. „sonen" findet dann „Sonne", mit dem Hinweis, dass es
  kein genauer Treffer ist. Immer an hieße: drei getippte Zeichen passen auf
  fast alles, und man sucht in den Suchergebnissen weiter.
- **Fundstellen sind markiert.** Der Teil, der gepasst hat, ist in der Zeile
  hervorgehoben – beantwortet die Frage „warum ist das hier drin?" von allein.
- **Trefferzahl** über der Liste und ein **✕** im Suchfeld zum Leeren.
- Gesucht wird weiterhin in Wort, Übersetzung **und** Notiz. Der Platzhalter
  sagt das jetzt auch.

### Listen lesbarer

- Übersetzung und Notiz hatten dieselbe Farbe und keinen Abstand – die drei
  Zeilen lasen sich als ein Block. Die Übersetzung steht jetzt in voller
  Textfarbe, die Notiz bleibt gedämpft und bekommt einen Strich am Rand wie
  ein Zitat.
- Dieselbe Verbesserung gilt jetzt auch für die Zeilen im Fortschritts-Tab.
  Dort standen Wort und Übersetzung in gleicher Größe direkt übereinander.

### Nicht enthalten, bewusst

- **Latein zu Arabisch** („shams" findet شمس, ohne dass „shams" irgendwo auf der
  Karte steht). Das bräuchte eine Umschrifttabelle, und Arabisch lässt sich auf
  zehn Arten umschreiben – das rät mehr als es findet. Steht die Umschrift in
  der Notiz, wird sie ohnehin gefunden.

---

## 2.0.0 – 5. September 2026 — „Umbau"

### Karten als eigene Datensätze (C1)

- Bisher lagen alle Bereiche und alle Karten zusammen in **einem** Datensatz.
  Der darf höchstens 1 MiB groß werden – bei etwa 5.000 bis 7.000 Karten wäre
  Schluss gewesen, und zwar hart: Ab da ließe sich keine Karte mehr anlegen.
  Jetzt hat jede Karte ihren eigenen Datensatz und diese Grenze fällt weg.

  Neuer Aufbau: `users/{uid}` (Name, Streak, Einstellungen),
  `users/{uid}/bereiche/{bid}` (Name, Reihenfolge, Speicherkarten),
  `users/{uid}/karten/{cid}` (Feld `bereichId` plus die Felder der Karte).

  Die Karten liegen flach, mit dem Bereich als Feld – nicht unterhalb des
  Bereichs. Dadurch bleibt die Suche über alle Bereiche eine einzige Abfrage,
  und das Verschieben einer Karte ändert nur ein Feld statt Kopieren und
  Löschen.

- **Einmaliger Umzug beim ersten Start.** Vorher muss ein Backup
  heruntergeladen werden – erst danach lässt sich der Umzug starten. Der alte
  Datensatz bleibt als Sicherheitsnetz stehen und wird nicht gelöscht.
  Bricht der Umzug ab, bleibt der alte Stand maßgeblich und der Versuch
  beginnt beim nächsten Start von vorn.

- Karten-IDs waren bisher nur innerhalb eines Bereichs eindeutig. Bei einer
  Dopplung bekommt die zweite Karte während des Umzugs eine neue ID;
  Speicherkarten, die auf die alte zeigten, werden mitgezogen.

- Geladen werden weiterhin **alle** Karten des Nutzers. Nur die fälligen zu
  laden wäre erst bei Zehntausenden Karten ein Gewinn und müsste Fortschritt,
  Suche, Duplikatprüfung und Export mit umbauen. Die neue Struktur lässt das
  jederzeit nachträglich zu, ohne die Daten noch einmal umzuziehen.

- Beim Löschen eines Bereichs werden seine Karten jetzt einzeln mitgelöscht.
  Firestore räumt Unter-Sammlungen nicht von selbst auf – sie blieben sonst
  für immer liegen.

### Lange Kartenlisten (C2)

- **Suche** zeichnet die Liste erst neu, wenn 150 ms lang nichts mehr getippt
  wurde. Vorher rechnete jeder Tastendruck die Treffer aus und baute alle
  Zeilen neu.
- **Ein Haken im Auswahlmodus** ändert nur noch seine eigene Zeile und die
  Zahl in der Aktionsleiste, statt die ganze Liste neu zu bauen.
- **Seitenweise ab 150 Karten**, 100 pro Seite, mit Blätter-Leiste oben und
  unten. Darunter bleibt alles wie bisher – keine Seitenleiste, kein
  Unterschied. Ziehen zum Sortieren wirkt innerhalb der sichtbaren Seite;
  über die Seitengrenze hinaus geht „↪ Verschieben" im Auswahlmodus.

### Hinweis für mehrere Geräte

Der Umzug gehört auf ein Gerät. Ist die App auf einem anderen Gerät während
des Umzugs noch offen, schreibt sie dort weiter ins alte Format – diese
Änderungen wären verloren. Alle anderen Geräte danach einmal neu laden.

---

## 1.9.0 – 4. September 2026
- A4: Änderungen werden gezielt gespeichert statt das ganze Dokument
  zu überschreiben. Zwei Geräte können sich nicht mehr gegenseitig
  Karten löschen.
- A3: Der offene Bereich hängt an seiner ID statt an einer
  Positionsnummer. Karten landen nicht mehr im falschen Bereich, wenn
  auf einem anderen Gerät ein Bereich gelöscht oder umsortiert wurde.
- firestore.rules liegt jetzt im Repo; die Regeln verlangen zusätzlich
  eine bestätigte E-Mail-Adresse.

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

---

## 1.8.0 – 4. September 2026

### Schreiben (E5)

- Das Zeichenfeld im Handschrift-Übungsmodus hat jetzt eine Grundlinie wie im
  Schreibheft. Sie sitzt bei zwei Dritteln der Höhe, damit die Buchstaben, die
  unter die Linie hängen, noch Platz haben.
- „Fertig" schließt das Vollbild automatisch. Vorher lag die Zeichenfläche als
  eigenes Fenster über der Lösung – man musste erst „Verkleinern" drücken, um
  überhaupt zu sehen, was richtig gewesen wäre.
- Nach dem Aufdecken rutscht die Seite nur so weit, dass die Lösung sichtbar
  wird. Die eigene Zeichnung bleibt dabei im Bild.

### Einzelnen Strich zurücknehmen (D9)

- Neuer Knopf **↶ Strich zurück** neben „Löschen". Er erscheint ab dem ersten
  Strich und verschwindet nach dem Aufdecken.

### Schriftgröße für Arabisch (E7)

- Auf dem Lernen-Tab drei Knöpfe: klein / normal / groß. Die Einstellung gilt
  überall, wo Arabisch steht, und liegt in der Cloud – also auf jedem Gerät
  gleich.

### Suche über alle Bereiche (D7)

- Im Verwalten-Tab schaltet ein Umschalter zwischen „nur dieser Bereich" und
  „alle Bereiche". Treffer aus einem anderen Bereich tragen dessen Namen; der
  ✏️-Knopf springt dorthin und öffnet die Karte.

### Eigene Dialoge (D2)

- Alle 22 System-Kästen (`alert`, `confirm`, `prompt`) sind durch eigene
  Dialoge im Stil der App ersetzt. Sie zeigen einen echten Titel statt der
  Seiten-Adresse, Löschen-Knöpfe sind rot, und Enter beziehungsweise Escape
  funktionieren. `prompt()` wurde von manchen Browsern schlicht ignoriert –
  dann passierte gar nichts und niemand wusste, warum.

### Kleinigkeiten

- Das Datum des letzten Backups liegt jetzt in der Cloud statt nur im Gerät
  (D5). Auf einem neuen Handy hieß es vorher immer „noch nie gesichert".
- Arabischer Text ist in Listen, Lernkarte und Fortschritts-Tab als Arabisch
  ausgezeichnet (D4). Der Browser wählt danach Schrift und Leserichtung.
- Die Emoji-Knöpfe haben Beschriftungen für Vorlesefunktionen bekommen (D3).

### Nicht enthalten, bewusst

Audio pro Karte · zweite Abfragerichtung · Vorlage zum Nachfahren ·
Zeichnung speichern · Tippen statt Aufdecken · Filter „nur schwierige Karten" ·
Hell/Dunkel · Tastatur-Kürzel anzeigen · Session-Länge wählbar ·
Quran-Schrift ins Repo. Begründungen stehen in der Projektakte.

---

## 1.7.0 – 4. September 2026 — „Für die Brüder"

*(rekonstruiert aus der Projektakte, Abschnitte 10 und 11 – nicht wortgleich mit dem Original)*

### Neu

- **Fortschritt sichtbar (E4/D10).** Ein neuer Tab zeigt Kennzahlen, wie fest
  der Stoff sitzt (Verteilung über die Wiederholungsstufen), die nächsten
  7 Tage an Wiederholungen und eine Liste der Karten, die immer wieder
  entfallen.
- **Verbrannte Karten (E6).** Karten, die wiederholt nicht klappen, bekommen
  ab 5 Rückfällen eine 🔥-Markierung – ein Hinweis, sie umzuformulieren oder
  in zwei Karten aufzuteilen, statt weiter Lernzeit zu kosten. Neues Feld
  `karten.*.rueckfaelle`; alte Karten starten bei 0.
- **E-Mail-Bestätigung (C4).** Nach der Registrierung muss die E-Mail-Adresse
  bestätigt werden, bevor die App nutzbar ist – verhindert Registrierungen mit
  erfundenen Adressen.

### Aufgeräumt

- Reste der in 1.6.0 kurzzeitig vorhandenen Funktion „Liste einfügen" (E1)
  entfernt: verwaiste Kommentare, leere Zeilen im Aktions-Verteiler, eine
  Lücke im CSS.

### Kurzzeitig enthalten, wieder entfernt

- Ein „Bibliothek"-Tab mit öffentlichen, kopierbaren Kartensätzen (E2) wurde
  eingebaut und auf Wunsch des Betreibers vollständig wieder herausgenommen –
  dauerhaft, nicht nur für diese Version.

---

## 1.6.0 – 3. September 2026 — „Lernlogik"

*(rekonstruiert aus der Projektakte, Abschnitte 6, 7 und 9 – nicht wortgleich mit dem Original)*

### Behoben

- **Intervall ohne Deckel (B1).** Wiederholungsabstände verdoppelten sich ohne
  Obergrenze und wurden nach einigen Monaten unrealistisch lang. Jetzt bei
  180 Tagen gedeckelt.
- **„Wusste ich nicht" warf zu hart zurück (B2).** Eine dritte Bewertungstaste
  unterscheidet jetzt „nicht gewusst" von „fast gewusst" statt beides gleich
  zu behandeln.
- **Kein Tageslimit für neue Karten – Lawineneffekt (B3).** Neue Karten kamen
  unbegrenzt dazu und rissen bestehende Wiederholungen mit sich. Jetzt ein
  einstellbares Tageslimit (`settings.neuProTag`).
- **Kein Jitter (B4).** Karten aus derselben Sitzung kamen exakt am selben
  Tag wieder zurück und stauten sich. Ein kleiner Zufallswert verteilt sie
  jetzt leicht.
- **Der Tag begann um Mitternacht (B5).** Für jemanden, der nach Mitternacht
  noch lernt, fühlte sich das falsch an; die Tagesgrenze liegt jetzt bei 4 Uhr.
- **Streak riss bei mehreren Bereichen (A7).** Der Streak-Zähler prüfte nur
  einen Bereich statt alle zusammen.
- **Keine Duplikatprüfung (D6).** Dasselbe Wort ließ sich zweimal im selben
  Bereich anlegen. Jetzt eine Warnung beim Speichern und beim Import, Vergleich
  ohne Harakat und Tatweel.

### Neu, später wieder entfernt

- **Massen-Import („Liste einfügen", E1).** Mehrere Vokabeln auf einmal per
  Textfeld einfügen. Auf Wunsch des Betreibers nach dieser Version wieder
  vollständig entfernt – siehe Projektakte, Abschnitt 10.

Neue Felder: `karten.*.ersteBewertung`, `settings.neuProTag`. Bestehende
Fälligkeitsdaten blieben unangetastet.

---

## 1.5.0 – Datum nicht in der Akte vermerkt — „Reparieren und Grundlagen"

*(rekonstruiert aus der Projektakte, Abschnitt 6 und 9 – nicht wortgleich mit dem Original; siehe Hinweis ganz oben zur verlorenen Originalfassung)*

### Behoben

- **Absturz beim Bewerten (A1).** Wurde eine Karte auf einem anderen Gerät
  gelöscht, während die Session hier offen war, stürzte die Bewertung mit
  einem TypeError ab.
- **Handschrift wurde verzerrt gezeichnet (A2).** Die Zeichenfläche war intern
  700×260 Pixel groß, wurde aber verzerrt angezeigt – auf dem Handy waagerecht
  um fast das Doppelte gestaucht. Runde Bögen wurden zu Ellipsen.
- **Wiederholungsstufe war nach oben offen (A5).**
- **Getippter Text ging verloren (A6).** Kam während der Eingabe ein
  Cloud-Snapshot herein oder wurde ein anderer Knopf gedrückt, war die halb
  getippte Vokabel weg. Ein Zwischenspeicher (`formDraft`) hält den Entwurf
  jetzt bei jedem Tastendruck fest.
- **Veraltetes Meta-Tag (D8).** `apple-mobile-web-app-capable` durch das
  aktuelle `mobile-web-app-capable` ergänzt.

### Neu

- Versionsnummer sichtbar in der App.
- `sw.js` überarbeitet.
- `CHANGELOG.md` angelegt.
- Fokus bleibt nach „Karte hinzufügen" im Eingabefeld, statt bei jeder
  weiteren Karte neu hineinklicken zu müssen (D1).
