## 2.13.0 – 8. September 2026 — „Anfang statt Null"

### Geändert

Der Fortschritts-Tab sah bei einem frisch eingespielten Kartensatz aus wie ein
Fehler: fünf Nullen untereinander, ein grauer Balken, zwölf leere Wochen und
sieben leere Balken. Alles rechnerisch richtig – und trotzdem der falsche
erste Eindruck. Ein Anfang soll nicht aussehen wie ein Ausfall.

- **Keine große Null mehr als erste Zahl.** Wer noch keine Serie hat, sieht
  statt „0 Tage am Stück" die nächste Handlung: *Heute wird Tag 1 – Wiederholungen
  erledigen, dann zählt der Tag.* Ist der Tag schon erledigt, steht dort ein
  Haken und *morgen beginnt die Serie*.

- **„beste Serie" erscheint erst, wenn es eine gibt.** Eine zweite Null
  daneben machte es nur schlimmer.

- **„Heute" hat einen Knopf.** Solange etwas offen ist, führt *Weiter lernen*
  direkt dorthin. Ein Tab, der nur zusieht, fühlt sich tot an – die
  Feststellung, dass 21 Karten offen sind, gehört mit dem Weg dorthin
  zusammen.

- **Das Kalenderraster wächst mit.** Gezeigt wird ab der ersten Woche mit
  einem Eintrag, mindestens vier und höchstens zwölf Wochen. Zwölf leere
  Wochen am ersten Tag sahen aus wie ein Fehler; vier Wochen mit einem hellen
  Kästchen sehen aus wie ein Anfang. Ist noch gar nichts aufgezeichnet, steht
  das auch dort.

- **Kein Balken aus einer einzigen Farbe.** Solange alle Karten im selben
  Zustand sind, verteilt der Balken nichts – er sah nur aus, als wäre er
  kaputt. Stattdessen steht dort ein Satz: *Alle 21 Karten sind gerade neu.*

- **Die 7-Tage-Vorschau bleibt weg, wenn in der ganzen Woche nichts ansteht.**
  Sieben leere Balken sagen nichts.

---

## 2.12.1 – 7. September 2026 — Aufräumen

Keine neuen Funktionen. Diese Fassung räumt auf, was sich über die letzten
Veröffentlichungen angesammelt hat.

### Geändert

- **Der Fortschritts-Tab war eine Funktion von 188 Zeilen**, in die vier
  Veröffentlichungen nacheinander etwas hineingeschrieben hatten. Er besteht
  jetzt aus vier Bausteinen – Heute, Wochen, Stoff, Lektionen –, die jeder für
  sich lesbar und änderbar sind. Am Bildschirm ändert sich dadurch nichts.

- **Das Feld „gesperrt" ist aus allen Schreibwegen verschwunden.** Seit 2.7.0
  wird das Schloss berechnet statt gespeichert; das Feld wurde seither an
  fünf Stellen geschrieben und an keiner einzigen gelesen. Genau die Art
  Altlast, die später jemanden auf eine falsche Fährte führt.

  Auch die Weitergabe-Datei trägt es nicht mehr: Welche Lektion offen ist,
  rechnet der Empfänger selbst aus – ein mitgeschicktes Schloss hätte nur so
  ausgesehen, als würde es etwas entscheiden.

- **Zwei tote Funktionen entfernt** (`karteFrei`, `zeigtSchloss`) – Überbleibsel
  aus 2.3.0 und 2.5.0, die durch spätere Fassungen ersetzt worden waren.

---

## 2.12.0 – 7. September 2026 — „Ein Wortschatz"

### Geändert

- **Es gibt jetzt genau eine Stelle, an der die Zustände einer Karte
  definiert sind.** Vorher dachte sich jede Ansicht ihre eigenen Wörter aus:
  Dieselbe Karte hieß im Fortschritt „neu", in der Durchsicht „gesehen" und im
  Lernen-Tab „in der ersten Abfrage". Wer eine Karte gerade durchgesehen
  hatte, fand sie im Fortschritt trotzdem unter „neu" – obwohl er sie eben
  erst gelesen hatte.

  Fünf Zustände, jede Karte in genau einem:

  | | |
  |---|---|
  | **neu** | nie angesehen |
  | **gesehen** | durchgesehen, aber noch nie gewusst |
  | **wackelig** | einmal gewusst, fällt noch leicht wieder raus (Stufe 1–2) |
  | **solide** | hält sich (Stufe 3–5) |
  | **fest** | sitzt (Stufe 6+) |

  Die Grenze zwischen „neu" und „gesehen" ist das Erstbewertungsdatum, alle
  weiteren sind die Stufe. Weil eine Karte nie unter Stufe 1 zurückfällt,
  sobald sie einmal gewusst wurde, bedeutet Stufe 0 immer entweder neu oder
  gesehen – die Einteilung ist damit überschneidungsfrei und lückenlos.

- **Alle Ansichten lesen daraus.** Der Balken im Fortschritt, die Plaketten in
  der Kartenliste und in den Speicherkarten, die Durchsicht, der Faden im
  Lernen-Tab. Statt „Stufe 3" steht an einer Karte jetzt „solide 3", statt
  „✓ gesehen" schlicht „gesehen" – überall derselbe Wortlaut.

- **Die Farben bedeuten überall dasselbe.** Eine Plakette trägt die Farbe
  ihres Zustands, dieselbe wie im Balken des Fortschritts. Der neue Zustand
  „gesehen" bekommt den gedämpften Markenton, weil er zwischen „noch nichts"
  und „wackelig" liegt.

- Die frühere Gruppe „im Aufbau" heißt jetzt **solide**, und die Grenzen sind
  angepasst: „wackelig" beginnt bei Stufe 1 statt bei 0, weil Stufe 0 seit
  2.11.0 „gesehen" bedeutet.

---

## 2.11.5 – 7. September 2026

### Behoben

- **„Abfrage starten" tat nichts.** Der Knopf am Ende des Durchgehens startete
  die Sitzung tatsächlich – sie war nur nirgends zu sehen, weil die Durchsicht
  angezeigt wird, solange sie geöffnet ist. Sie wird jetzt beendet, wenn eine
  Sitzung beginnt.

- **Ein gewöhnliches Backup konnte in einen geführten Kartensatz
  hineinverschmelzen.** Es trägt zwar dieselbe Kennung, ist aber der
  Arbeitsstand des Autors samt seiner eigenen Speicherkarten – und die haben
  im Satz eines anderen nichts verloren. Zusammengeführt wird jetzt nur noch,
  was ausdrücklich als Kartensatz erzeugt wurde; aus allem anderen entsteht
  wie gewohnt ein eigener Bereich.

- **„Übernehmen" für einen Vorgang ohne Wirkung.** Wer dieselbe Ausgabe ein
  zweites Mal einspielte, bekam eine Rückfrage mit dem Inhalt „Am Inhalt
  ändert sich nichts". Jetzt steht dort ein Hinweis und sonst nichts.

### Geändert

- **Der Fortschritt zählt Antworten, nicht Karten.** Dort stand „44 Karten
  bearbeitet", obwohl der Stapel nur 21 Karten hat – das las sich wie ein
  Fehler. Gezählt werden aber Antworten: Eine Karte kann an einem Tag mehrfach
  drankommen, denn „Nicht" hängt sie wieder hinten an. Und wer 21 Karten
  durchsieht und anschließend abfragt, hat zwangsläufig 42 Antworten gegeben.

  Jetzt steht dort „44 Antworten · 23 Karten zum ersten Mal gesehen".

---

## 2.11.4 – 7. September 2026

### Behoben

- **„Zugriff verweigert" nach dem Bestätigen der E-Mail.** Die
  Sicherheitsregeln verlangen eine bestätigte Adresse. Firestore prüft das
  aber nicht am Konto, sondern an dem Ausweis (ID-Token), den der Browser
  mitschickt – und darin steht `email_verified` so, wie es beim *Anmelden*
  war.

  Wer sich anmeldet und erst danach den Link in der Mail anklickt, hat
  deshalb ein Zeitfenster, in dem die App ihn hereinlässt (sie sieht die
  Bestätigung sofort), die Datenbank ihn aber abweist – bis zu einer Stunde
  lang. Für den Betroffenen sieht das aus wie ein kaputtes Konto.

  Die App holt jetzt in dem Fall selbstständig einen frischen Ausweis und lädt
  neu. Das passiert genau einmal pro Sitzung: Liegt es doch an den Regeln,
  entsteht keine Endlosschleife, sondern die Meldung bleibt stehen.

- **Die Fehlermeldung sagt jetzt, was zu tun ist.** Vorher stand dort nur
  „bitte Sicherheitsregeln in Firebase prüfen" – ein Satz, mit dem niemand
  etwas anfangen kann, der die Konsole nie gesehen hat. Jetzt steht dort, dass
  man sich einmal ab- und wieder anmelden soll, und die Regeln erst danach in
  Frage kommen.

### Neu

- **„Ich habe bestätigt – weiter"** auf dem Bestätigungs-Bildschirm. Wer den
  Link angeklickt hatte, saß dort sonst fest, bis er die Seite von sich aus
  neu lud. Der Knopf holt den Kontostand vom Server, dazu einen frischen
  Ausweis – ohne den zweiten Schritt käme er zwar in die App, würde dort aber
  von der Datenbank abgewiesen.

---

## 2.11.3 – 7. September 2026 — Härtung gegen Datenverlust

### Behoben

- **Fehlgeschlagene Speichervorgänge waren nach der ersten Meldung stumm.** Wer
  den einen Hinweis wegtippte, lernte weiter im guten Glauben, alles werde
  gespeichert – während nichts mehr ankam. Jetzt bleibt oben eine Zeile
  stehen, solange es klemmt, mit der Aufforderung, ein Backup zu ziehen.

  Offline ist ausdrücklich **kein** Fehlerfall: Firestore nimmt Änderungen
  entgegen und schickt sie los, sobald die Verbindung wieder steht. Die
  Warnung erscheint nur bei echten Ablehnungen.

- **Serie und Einstellungen konnten still verschwinden.** Sie gingen mit einem
  stummen `.catch()` raus. Existierte das Nutzerdokument noch nicht – frisch
  angelegtes Konto, das Anlegen läuft noch –, scheiterte der Schreibvorgang
  mit „not-found", und die erste Serie war weg, ohne dass es jemand merkte.
  Jetzt wird das Dokument in dem Fall angelegt und danach neu geschrieben.

- **„Rückgängig" hob den Höchststand einer Karte nicht auf.** Ein Fehltipp auf
  „Sicher" blieb damit für immer stehen – und bei der letzten Karte einer
  Lektion hätte ein einziger Fehlgriff die nächste Lektion dauerhaft
  aufgeschlossen.

### Geändert

- **Beim Löschen eines Bereichs wird nichts mehr behauptet, was sich nicht
  prüfen lässt.** Statt „Ein Backup wurde heruntergeladen" steht dort jetzt,
  dass es zum Herunterladen angeboten wurde und man in den Downloads
  nachsehen soll. Auf manchen Geräten kann ein automatischer Download
  stillschweigend blockiert werden – dann wäre die Zusage eine Lüge gewesen.

---

## 2.11.2 – 7. September 2026

### Behoben

- **Der allererste Bildschirm schickte neue Nutzer in die falsche Richtung.**
  Wer sich gerade angemeldet hatte, las im leeren Bereich nur: „leg welche
  unter Verwalten an". Wer stattdessen eine Kartensatz-Datei bekommen hatte –
  also der Regelfall für alle, die einen Satz geschickt bekommen – las
  ausgerechnet die Aufforderung, alles selbst zu tippen. Vom Import stand dort
  kein Wort; der versteckte sich als kleiner Link oben rechts zwischen zwei
  Backup-Knöpfen.

  Jetzt steht der Import dort zuerst und als richtiger Knopf, das eigene
  Anlegen darunter als Alternative.

---

## 2.11.1 – 7. September 2026

### Behoben

- **Eine freigeschaltete Lektion konnte nach dem Neuladen wieder zugehen.**
  Der höchste je erreichte Stand einer Karte wurde beim Bewerten zwar im
  Speicher nachgezogen, aber **nie in die Cloud geschrieben**. Beim nächsten
  Laden errechnete die App ihn ersatzweise aus der *aktuellen* Stufe. Für eine
  Karte, die einmal auf Stufe 2 stand und später zurückfiel, hieß das:
  Höchststand wieder 1 – und die Lektion dahinter war wieder gesperrt.

  Genau der Fall, den „einmal erreicht" verhindern sollte. Auf demselben Gerät
  fiel es nicht auf, weil der Wert dort im Speicher stand; erst nach einem
  Neuladen oder auf einem zweiten Gerät.

- **Die erste Abfrage konnte Karten „verbrennen".** Seit 2.11.0 stellt
  „Gesehen" eine Karte in die Abfrage, ohne ihr eine Stufe zu geben – damit
  galt sie sofort als „nicht mehr neu". Wer sie in der ersten Abfrage nicht
  wusste, sammelte Rückfälle für etwas, das er gerade zum ersten Mal gelesen
  hatte; nach fünf Malen wäre die Karte als verbrannt markiert worden.

  Ein Rückfall zählt jetzt erst, wenn die Karte **schon einmal gesessen hat** –
  gemessen am Höchststand, nicht daran, ob sie schon angefasst wurde.

### Geändert

- **Frisch durchgesehene Karten heißen nicht mehr „Wiederholungen".** Im
  Lernen-Tab steht jetzt „21 Karten in der ersten Abfrage" statt „21
  Wiederholungen" – man hat sie ja noch nie gewusst.

---

## 2.11.0 – 7. September 2026 — „Ansehen, prüfen, wiederholen"

### Geändert

- **Der Haken beim Durchgehen heißt „Gesehen" und gibt keine Stufe mehr.**

  Vorher setzte er die Karte direkt auf Stufe 1. Damit war er eine
  Selbstauskunft ohne Gegenprobe: Wer 21-mal blind tippt, hätte 21 Karten auf
  Stufe 1 gehabt, ohne eine einzige gelernt zu haben. Aufgefallen wäre es erst
  am nächsten Tag – und dann ist der erste Eindruck verschenkt, gerade der
  zählt beim ersten Kontakt am meisten.

  Jetzt stellt der Haken die Karte für **heute** in die Abfrage: Sie gilt als
  begonnen, bleibt aber auf Stufe 0 und ist sofort fällig. Die Stufe 1
  verdient man sich in der Abfrage, nicht durch Tippen. Am Ende der
  Durchsicht steht deshalb ein Knopf, der direkt dorthin führt.

  Ablauf: **ansehen → gleich prüfen → morgen wieder.** Statt: tippen → morgen.

- **An einer Lektion stehen keine Knöpfe mehr.** Vorher stand dieselbe Lektion
  an zwei Orten und wollte an beiden etwas: Der Lernen-Tab führte einen
  hindurch, und im Verwalten-Tab lag ein zweiter Weg daneben. Man wusste
  nicht, welcher der richtige ist. Jetzt gilt: **gelernt wird im Lernen-Tab,
  im Verwalten-Tab wird nachgeschaut.** Die Lektion zeigt dort nur noch, wie
  viele ihrer Karten sitzen.

- **Lektionen stehen jetzt über den Kategorien.** Sie sind der Weg;
  Kategorien sind zum Nachschlagen, eigene Speicherkarten wachsen erst mit
  der Zeit. Reihenfolge der Abschnitte: Lektionen, Kategorien, Eigene.

### Behoben

- **Auf dem Handy wurde der Name einer Speicherkarte zu einer
  Buchstabensäule.** Name, Plakette und zwei Knöpfe kämpften in einer Zeile um
  den Platz. Ab schmalen Bildschirmen bekommt der Name jetzt eine eigene Zeile
  über den Knöpfen. Auf breiten Bildschirmen bleibt alles wie es war.

### Neu

- **„☆ Merken" mitten in der Abfrage.** Eigene Speicherkarten gab es längst,
  aber der Weg dorthin führte über Verwalten, Auswahlmodus und einen Stern –
  das findet niemand. Gemerkt wird eine Karte aber genau in dem Moment, in dem
  auffällt, dass sie schwer ist: mitten im Abfragen. Der Knopf legt die
  Sammelkarte „Schwierige Wörter" beim ersten Mal selbst an.

  Damit haben auch die Empfänger eines geführten Kartensatzes wieder das,
  wofür die Speicherkarten ursprünglich erfunden wurden.

- **Bereich löschen ist abgesichert.** Zwei Sicherungen statt einer Nachfrage,
  die man wegtippt:

  1. Die App lädt vorher **ohne zu fragen ein Backup dieses Bereichs**
     herunter. Es kostet nichts und ist im Ernstfall alles.
  2. Zum Bestätigen muss der **Name des Bereichs getippt** werden. Ein
     „Ja"-Knopf lässt sich blind drücken, ein Name nicht – dafür muss man
     hinsehen. Dreimal nachfragen hätte nichts gebracht, das klickt man
     genauso weg.

---

## 2.10.2 – 7. September 2026

### Behoben

- **Die App überschrieb fremde Änderungen mit ihrem eigenen, alten Stand.**
  Bisher schrieb jeder Anlass den *kompletten* Serien-Stand aus dem Speicher
  zurück – auch die bloße Tagesprüfung, die nur ein Datum setzt. War die App
  dabei offline oder im Hintergrund und der Wert in der Cloud hatte sich
  inzwischen geändert, überbügelte sie ihn. Genau so verschwand ein von Hand
  gesetzter Zähler wieder.

  Jetzt geht nur noch an den Server, was der Auslöser wirklich angefasst hat.
  Die Tagesprüfung schreibt ihr Datum, sonst nichts.

- **Dasselbe beim Tagesprotokoll.** Es schrieb bei jeder Karte alle 120 Tage
  zurück; wer aufräumte, hatte Sekunden später alles wieder da. Jetzt geht nur
  der heutige Eintrag raus.

  Alte Tage werden beim Laden einmal aus der Cloud entfernt, statt bei jedem
  Schreibvorgang mitgeschleppt zu werden.

### Neu

- **„Verlauf zurücksetzen"** unter dem Kalender. Löscht das Tagesprotokoll –
  Balken, Kalender und Wochenzahlen fangen bei null an. Karten, Stufen und
  Fälligkeiten bleiben unberührt.

  Der Knopf steht in der App, damit niemand dafür in die Firebase-Konsole muss:
  Von dort aus verliert man gegen ein laufendes Gerät, das seinen Speicherstand
  zurückschreibt.

---

## 2.10.1 – 7. September 2026

### Behoben

- **„Heute" meldete „fertig ✓", obwohl noch nichts gelernt war.** In den
  Tagesbalken zählten nur Wiederholungen als offen. Wer einen frisch
  eingespielten Kartensatz vor sich hatte, sah einen vollen Balken – dabei war
  die erste Lektion noch komplett ungelernt. Neue Karten zählen jetzt mit.

  Für die Streak gilt das ausdrücklich **nicht**: dort zählen weiterhin nur
  Wiederholungen, damit das Freischalten einer Lektion niemandem die Flamme
  kostet.

- **Am ersten Tag gab es keine Flamme.** Sie sprang nur am Ende einer
  Lernsession an – an einem Tag mit einem neuen Kartensatz gibt es aber gar
  keine Wiederholungen. Wer 21 Karten durchgegangen war, stand trotzdem bei 0.
  Das Durchgehen zählt jetzt auch für den Tag.

---

## 2.10.0 – 7. September 2026 — „Mitgenommen werden"

### Neu

- **Sprung und Aufleuchten**, übernommen aus dem Adrabic-Trainer. Dort führt
  ein Tipp auf ein Kategorie-Zeichen in der Checkliste sanft zum passenden
  Modul, und das Modul leuchtet kurz auf – so sieht man, *was* sich geändert
  hat.

  Dasselbe gilt jetzt hier für jede Aktion, deren Wirkung nicht dort steht, wo
  man getippt hat: 🔁 Üben und ▶ Durchgehen aus einer Speicherkarte heraus
  starten oben eine Sitzung, während man unten in der Kartenliste steht. Ohne
  den Sprung sah es aus, als sei nichts passiert. Gleiches Aufleuchten,
  gleiche 1,4 Sekunden, gleicher Creme-Ton – und wie im Trainer wird
  `prefers-reduced-motion` beachtet.

### Geändert

- **„▶ Lernen" heißt an der Speicherkarte jetzt „▶ Durchgehen".** Es stand
  direkt neben „🔁 Üben", und beides klang nach demselben – dabei ist das eine
  Ansehen und das andere Abfragen. „Durchgehen" ist außerdem das Wort, das im
  Lernen-Tab schon auf dem Knopf steht.

  Die Erklärzeile über den Lektionen sagt den Unterschied jetzt ausdrücklich:
  Durchgehen heißt ansehen und abhaken, Üben heißt abfragen und ändert nichts
  am Fortschritt.

### Behoben

- **Ein Update konnte den Lernstand aller Karten austauschen.** Beim
  Zusammenführen wurden Karten nur über ihre Herkunfts-Nummer zugeordnet.
  Traf eine Datei ohne solche Nummern – etwa ein gewöhnliches Backup – auf
  einen geführten Kartensatz, passte keine einzige Karte: alle galten als neu,
  alle vorhandenen als weggefallen. Aus 133 Karten wurden 133 andere, der
  Lernstand war weg.

  Jetzt dient das arabische Wort als Rückfallebene, wenn die Nummer fehlt, und
  eine fehlende Nummer wird beim Zusammenführen nachgetragen.

- **Notbremse beim Zusammenführen.** Fiele mehr als die Hälfte der Karten weg,
  steht das jetzt als Warnung im Dialog. Das passt fast nie und heißt
  meistens, dass die Datei nicht aus derselben Reihe stammt.

---

## 2.9.0 – 7. September 2026 — „Beste Serie"

### Neu

- **Die beste Serie geht nie verloren.** Neben der laufenden Serie steht jetzt
  der eigene Rekord. Ein gerissener Zähler fühlt sich sonst an, als wäre alles
  weg – und genau dann hört man auf. Derselbe Begriff wie im
  Adrabic-Trainer.

- **Ein Riss wird gesagt, nicht verschwiegen.** Vorher sprang die Zahl still
  auf 0 und man rätselte. Jetzt steht da, auf welchem Stand die Serie war und
  wann sie gerissen ist.

- **„Serie fortsetzen".** Zwei Tage lang lässt sich ein Riss zurücknehmen.
  Gedacht für den Fall, dass die Serie an etwas gerissen ist, das mit dem
  Lernen nichts zu tun hatte: ein zweiter Bereich, der nach einem Import noch
  herumstand, oder ein zweites Gerät. Ohne diesen Knopf bleibt nur der Weg
  über die Firebase-Konsole.

### Geändert

- **Der Fortschritts-Tab trägt jetzt die Handschrift von Adrabic.** Dieselbe
  Palette wie der Adrabic-Trainer war schon da – neu sind:

  - Die Serie steht oben in einer eigenen Karte mit Creme-Verlauf und der
    großen Zahl im Markenton, statt als Zeile unter einem Balken.
  - **Arabisch-indische Ziffern** als stille Zierde neben den großen Zahlen
    (٤ neben 4, ١٣٣ neben 133), gesetzt in derselben Quran-Schrift wie die
    Karten. Ein Zeichen statt eines beliebigen Symbols – und man lernt die
    Ziffern nebenbei mit.
  - Der Kalender und der Tagesbalken laufen in der Markenfarbe statt in Grün.
    Der Kalender ist das größte Element im Tab, deshalb trägt er den Akzent.

---

## 2.8.0 – 7. September 2026 — „Fortschritt"

### Neu

- **Ein Tagesprotokoll.** Bis 2.7.0 speicherte die App nur den *aktuellen*
  Zustand jeder Karte. Damit ließ sich kein Verlauf zeigen: kein „diese
  Woche", kein Vergleich mit gestern, kein Kalender. Der Fortschritts-Tab
  konnte gar nicht lebendig sein – er hatte nichts, woraus sich eine Bewegung
  ergibt.

  Jetzt werden pro Tag zwei Zahlen mitgeschrieben: wie viele Wiederholungen
  bewertet und wie viele Karten zum ersten Mal gelernt wurden. 120 Tage
  werden aufgehoben, das sind ein paar Kilobyte. Geschrieben wird gebündelt,
  nicht bei jeder Karte – das Protokoll ist Anzeige, es hängt nichts daran.

- **Der Fortschritts-Tab ist neu aufgebaut**, in vier Ebenen von schnell nach
  langsam:

  - **Heute** – ein Balken, der voll wird, und morgen wieder bei null steht.
    Das Einzige im Tab, das täglich abschließbar ist.
  - **Die letzten 12 Wochen** – ein Kalenderraster, sieben Zeilen für die
    Wochentage. Man sieht in einer Sekunde, ob man dranbleibt.
  - **Dein Stoff** – „84 von 133 Karten saßen schon mindestens einmal". Diese
    Zahl kann nie zurückgehen, weil sie an der höchsten je erreichten Stufe
    hängt und nicht an der aktuellen. Der bisherige Stapelbalken steht als
    Detail darunter – der schwankt, sobald man etwas vergisst, und taugt
    deshalb nicht als Hauptzahl.
  - **Lektionen** – eine Kachel je Lektion mit eigenem Balken. Ein Ziel wirkt,
    wenn es nah ist; 21 Karten sind eines, 133 nicht. Der Block erscheint nur,
    wenn es Lektionen gibt.

- **Ein Ausfalltag reißt die Serie nicht mehr sofort.** Serien wirken, weil man
  ungern verliert – genau deshalb hören viele nach dem ersten gerissenen Tag
  ganz auf. Höchstens einmal pro Woche wird ein Ausfall überbrückt; das fängt
  Krankheit und Reisen ab, ohne die Serie wertlos zu machen. Der Tab sagt
  dazu, wenn ein Tag überbrückt wurde.

### Geändert

- **„Karten insgesamt" ist raus.** Eine Zahl, die nichts über den Lernstand
  sagt und nur größer wird, weil man fleißig anlegt.

- Bewusst **nicht** eingebaut: Punkte, Ligen, Abzeichen. Äußere Belohnungen
  können die innere Motivation verdrängen – bei diesem Stoff besonders
  schade. Alle Zahlen im Tab beschreiben den Stoff, nicht den Fleiß.

- Der Hinweis bei einem vollen Wiederholungstag verweist nicht mehr auf das
  Tageslimit, das es seit 2.3.0 nicht mehr gibt.

---

## 2.7.0 – 7. September 2026 — „Der Faden"

### Neu

- **Lektionen schalten sich von selbst frei.** Eine Lektion ist offen, sobald
  jede Karte der Lektion davor **schon einmal** Stufe 2 erreicht hat.

  Das Wort „einmal" ist der ganze Trick. Die Bedingung hängt nicht an der
  aktuellen Stufe, sondern an der höchsten je erreichten – deshalb kann sie
  nie wieder falsch werden. Wer bei einer alten Karte ehrlich „Nicht" drückt
  und sie zurückfallen lässt, sperrt damit keine Lektion wieder zu. Ohne diese
  Unterscheidung wäre jede ehrliche Antwort bestraft worden.

  Dafür trägt jede Karte jetzt ihre höchste je erreichte Stufe mit. Bei
  vorhandenen Karten gilt die aktuelle Stufe als Höchststand.

- **Eine verbrannte Karte hält nichts auf.** Wer ein Wort fünfmal verhauen hat,
  soll deswegen nicht wochenlang feststecken – das ist der Moment, in dem man
  eine App zumacht. Karten mit fünf Rückfällen zählen für die Bedingung nicht
  mit.

- **Der Faden im Lernen-Tab.** In einem geführten Kartensatz steht dort jetzt
  immer genau ein Schritt: ein Satz, ein Knopf.

  - Neuer Stoff da → *Lektion 1 · 21 Karten, noch keine davon gelernt* →
    **Durchgehen**
  - Mittendrin → *Noch 8 von 21 Karten* → **Weiter durchgehen**
  - Nur Wiederholungen → *21 Wiederholungen aus „Lektion 1"* → **Los**
  - Fertig für heute → *✓ Für heute erledigt* und darunter, was die nächste
    Lektion noch braucht, samt Datum der nächsten fälligen Karte

### Geändert

- **Das Schloss wird berechnet statt gespeichert, und lässt sich nicht mehr
  von Hand bedienen.** Vorher gab es einen gespeicherten Zustand, der mit der
  Wirklichkeit auseinanderlaufen konnte, und eine Entscheidung, die niemand
  treffen will. Jetzt gilt schlicht: Lektion 1 ist offen, Lektion N ist offen,
  sobald Lektion N−1 sitzt. Das Symbol in der Zeile ist nur noch Anzeige.

  Das gespeicherte Feld bleibt in den Daten, damit ältere Dateien und ältere
  Fassungen der App weiter funktionieren – gelesen wird es nicht mehr.

- **Die Notiz ist nach dem Aufdecken offen.** Vorher klappte sie nach *jeder*
  Karte wieder zu – bei 21 Karten also 21 Extra-Tipps für etwas, das man
  eigentlich immer sehen will. Rückmeldung aus der Praxis war, dass Leute
  deswegen anfangen, den Notiztext in die Übersetzung zu schreiben. Das macht
  zwei Dinge kaputt: Die Übersetzung ist das, was abgefragt wird, und im
  Handschrift-Modus wird sie zur Vorderseite – dann steht der ganze
  Beispielsatz als Frage da.

- **Die Wegbeschreibung im Lernen-Tab ist weg.** Statt „schalte die nächste
  Lektion unter Verwalten bei den Speicherkarten mit dem 🔓 frei" passiert das
  Weiterkommen jetzt dort, wo man steht. Auch das Banner im Verwalten-Tab ist
  von fünf Zeilen auf zwei geschrumpft.

- **Der Modus „Lernen" hat einen Abschluss.** Ist alles abgehakt, stand vorher
  nur eine Liste abgeblendeter Karten da und man wusste nicht, ob man fertig
  ist. Jetzt steht es dort.

---

## 2.6.0 – 6. September 2026 — „Eigene Reihenfolge"

### Geändert

- **Die Karten in einer Speicherkarte stehen in der Reihenfolge, die man
  selbst gewählt hat** – also so, wie sie beim Auswählen angehakt oder danach
  am ⠿-Griff zurechtgeschoben wurden.

  Bis 2.5.0 wurden sie nach der Reihenfolge des Bereichs sortiert. Das war
  eine *gerechnete* Reihenfolge, keine *gewählte*: Die Karten einer Lektion
  ließen sich nicht in die Abfolge des Videos bringen, ohne den ganzen
  Bereich umzusortieren. Jetzt gehört jeder Speicherkarte ihre eigene Ordnung.

### Neu

- **Sortieren innerhalb einer Speicherkarte.** In der aufgeklappten
  Speicherkarte hat jede Kartenzeile einen ⠿-Griff. Er ändert nur die
  Reihenfolge in dieser einen Speicherkarte – die Reihenfolge im Bereich und
  damit die Nummern der Karten bleiben unberührt. Dieselbe Karte kann also in
  „Lektion 1" an dritter und in „Nomen" an zwölfter Stelle stehen.

### Behoben

- **Der Griff an einer Karte innerhalb einer Speicherkarte hätte die ganze
  Speicherkarte gezogen.** Beim Suchen nach der gezogenen Zeile wurde zuerst
  nach dem Kasten der Speicherkarte gesucht und erst danach nach der
  Kartenzeile – eine Kartenzeile liegt aber *innerhalb* dieses Kastens, also
  gewann immer der Kasten. Die Reihenfolge der Prüfung ist umgedreht.

---

## 2.5.0 – 6. September 2026 — „Nachschub"

### Neu

- **Eine zweite Ausgabe eines Kartensatzes ergänzt den vorhandenen, statt ihn
  doppelt anzulegen.**

  Bis 2.4.0 legte jeder Import einen neuen Bereich an. Für ein normales Backup
  ist das richtig – es schützt davor, dass eine alte Datei einen neueren Stand
  überbügelt. Für die zweite Ausgabe eines weitergegebenen Kartensatzes wäre es
  fatal: Wer Lektion 6–10 nachbekommt, hätte danach zweimal „Medina 1", die
  ersten 125 Karten doppelt, und seinen Lernstand von vier Wochen im falschen
  der beiden Bereiche.

  Möglich macht das die Kennung am Bereich und die Herkunfts-Nummer an jeder
  Karte, beide seit 2.3.0 in jeder Weitergabe-Datei. Die Karten-Nummern ändern
  sich beim Import – die Herkunfts-Nummer bleibt, sie ist das Einzige, was über
  zwei Veröffentlichungen hinweg hält.

- **Wer was bestimmt, ist klar getrennt.**

  - Der **Autor** bestimmt den Inhalt: Text, Notiz, Reihenfolge, welche Karten
    es gibt, welche Lektionen es gibt. Berichtigte Texte kommen an, weggefallene
    Karten verschwinden, neue Lektionen kommen gesperrt dazu.
  - Der **Lernende** behält seinen Fortschritt: Stufe, Fälligkeit, Rückfälle –
    und welche Lektionen er freigeschaltet hat. Eine Lektion, die er offen hat,
    wird nicht wieder zugesperrt, nur weil sie in der Datei gesperrt steht.
  - **Eigene Speicherkarten** des Lernenden bleiben unangetastet; sie verlieren
    nur Verweise auf Karten, die es nicht mehr gibt.

- **Vor dem Übernehmen steht, was passiert.** Der Dialog zählt auf, wie viele
  Karten dazukommen, wie viele im Text berichtigt werden und wie viele
  wegfallen – und sagt zu, dass Lernstand und freigeschaltete Lektionen
  bleiben. Dieselbe Ausgabe ein zweites Mal eingespielt ändert nichts und sagt
  das auch.

- **Zusammengeführt wird nur in einen geführten Bereich.** Der eigene Bereich,
  aus dem der Satz stammt, trägt dieselbe Kennung – ohne diese Bedingung würde
  ein Testimport der eigenen Datei den eigenen Meisterbereich umbauen. So
  entsteht stattdessen eine geführte Kopie zum Ausprobieren, genau wie bei
  einem Bruder.

### Geändert

- **Schloss, Gruppen und der Modus „Lernen" erscheinen nur noch in einem
  weitergegebenen Kartensatz.** In 2.3.0 und 2.4.0 standen sie in jedem
  Bereich – auch im eigenen, wo sie nichts zu suchen haben: Dort gibt es
  niemanden, der etwas freischalten müsste, und ein Schloss hätte dort nicht
  einmal eine Wirkung. Es wäre ein Knopf, der lügt.

  Ein eigener Bereich sieht damit wieder aus wie vor 2.3.0: eine schlichte
  Liste von Speicherkarten, ohne Abschnitte, ohne Schlösser, ohne ▶ Lernen.

- **Die Art einer Speicherkarte vergibt man über einen Schalter.** Über der
  Liste steht „🛠 Arten vergeben"; erst danach erscheinen die Auswahlfelder in
  den Zeilen. Ein Auswahlfeld in jeder Zeile machte das Feld unruhig, obwohl
  die Art einmal pro Speicherkarte vergeben und dann nie wieder angefasst
  wird. Der Schalter erscheint nur im Autorenmodus.

  Gruppiert wird trotzdem, sobald wirklich eine Art vergeben ist – sonst
  stünden 20 Lektionen und 6 Kategorien wieder als flache Liste da.

---

## 2.4.0 – 6. September 2026 — „Lernen"

### Neu

- **Ein dritter Modus: „Lernen".** Neben dem ▶-Knopf steht bei jeder
  Speicherkarte im Verwalten-Tab jetzt ein zweiter Weg hinein – und der ist
  ausdrücklich **keine Abfrage**.

  „Üben" deckt ab und fragt ab, der Lernen-Tab bewertet. Für die erste
  Begegnung mit neuem Stoff taugt beides nicht: Wer ein Video schaut und das
  Buch danebenliegen hat, will die Karten *sehen*. Genau das ist dieser Modus –
  Wort, Übersetzung und die Notiz hinter dem ▸, nichts verdeckt.

  Drei Entscheidungen machen ihn aus:

  - **Reihenfolge statt Zufall.** Die Karten stehen in der Reihenfolge, in der
    sie im Bereich liegen – also so, wie sie zurechtgeschoben wurden. Solange
    alle auf derselben Stufe stehen, wäre Mischen sinnlos. Erst wenn die
    Stufen auseinanderlaufen, ist Zufall richtig, und das ist der Lernen-Tab.
  - **Ein Haken statt Bewertungsknöpfen.** Es gibt nichts zu bewerten, was man
    gerade zum ersten Mal liest. „Gelernt" setzt die Karte auf Stufe 1; ab
    morgen kommt sie im Lernen-Tab als Wiederholung.
  - **Kein eigener Zwischenstand.** Wer 25 Karten offen hat, 17 abhakt und
    rausgeht, findet beim nächsten Öffnen genau die 8 übrigen vor. „Abgehakt"
    heißt schlicht „hat eine Stufe" – es gibt nichts zu speichern, was mit dem
    Rest der App auseinanderlaufen könnte.

- **Nummern an den Karten.** Jede Karte trägt ihre Position im Bereich, nicht
  in der gerade geöffneten Auswahl. Damit lässt sich außerhalb der App sagen
  „Video 3 = Karten 41–63", und die Zahl bleibt dieselbe, egal über welche
  Speicherkarte man hereinkommt.

- **Eine Liste statt einer Karte pro Bildschirm.** Wer mit einem Video mitgeht,
  will blättern können und nicht 25-mal weitertippen. Auf dem Handy steht eine
  Karte pro Zeile, auf einem breiten Bildschirm zwei nebeneinander – das macht
  das Raster von selbst, ohne zweite Ansicht und ohne Zoomstufen.

- **Der Blick wandert mit.** Nach jedem Haken rutscht die nächste noch offene
  Karte in die Mitte. Gesucht wird dabei ab der gerade abgehakten Karte nach
  vorn: Wer Karte 10 zuerst abhakt, wird nicht an den Anfang zurückgeworfen.
  Und gescrollt wird nur, wenn die Zielkarte gerade nicht zu sehen ist – sonst
  ruckelte die Seite bei jedem Tipp.

- **Freischalten passiert dort, wo man ohnehin hinwill.** Ein Tipp auf ▶ Lernen
  bei einer gesperrten Lektion fragt einmal nach und macht sie auf. Ein eigenes
  Freischalt-Ritual müsste man erst finden; das Schloss in der Zeile bleibt
  daneben als zweiter Weg.

- **↩ Rückgängig.** Ein Fehltipp auf „Gelernt" lässt sich sofort zurücknehmen.
  Ohne das wäre er nur über das Formular im Verwalten-Tab zu heilen.

### Geändert

- **„Backup · zum Weitergeben" ist nur noch für den Autor sichtbar.** Wäre der
  Knopf für alle da, kämen früher oder später halbfertige Kartensätze mit
  fremden Kennungen in Umlauf – und die Update-Erkennung hätte zwei
  verschiedene Sätze mit derselben Kennung vor sich.

  Eingerichtet wird das über die Konstante `AUTOR_UID` ganz oben in der
  index.html. Dort kommt die eigene Nutzernummer hinein; solange sie leer ist,
  zeigt die App oben eine rote Zeile mit der Nummer zum Abschreiben.

  Bewusst die Nutzernummer und nicht die E-Mail-Adresse: Die Nummer ist eine
  zufällige Zeichenfolge und verrät nichts über die Person, während eine
  Adresse in einem öffentlichen Repo von Spam-Sammlern gelesen würde.

  Was das leistet und was nicht: Wer nur in der App klickt, findet nichts. Wer
  ein zweites Konto anlegt, kommt nicht weiter, weil die Nummer nicht stimmt.
  Wer aber die index.html selbst öffnet und liest, sieht die Stelle – daran
  kann keine Seite etwas ändern, die im Browser des Lesers läuft. Der Zweck
  ist, dass niemand *versehentlich* etwas in Umlauf bringt.

- **Eine schon gelernte Karte lässt sich im neuen Modus nicht zurückwerfen.**
  Sie zeigt statt des Hakens ihre Stufe. Sonst könnte eine Durchsicht eine
  Karte, die auf Stufe 5 sitzt, auf 1 zurücksetzen.

---

## 2.3.0 – 6. September 2026 — „Gruppen und Schlösser"

### Neu

- **Speicherkarten haben jetzt eine Art.** Im Verwalten-Tab stehen sie in drei
  Abschnitten untereinander, jeder mit einer Zeile, die erklärt, was er tut:

  - **📚 Kategorien** – die großen Sammelmappen quer durch den Stoff (Nomen,
    Verben, Grammatik …). Immer offen, nie sperrbar.
  - **📖 Lektionen** – eine Einheit des Buchs bzw. ein Video. Nur Lektionen
    lassen sich sperren, und nur sie geben Karten frei.
  - **⭐ Eigene** – selbst zusammengestellt, zum gezielten Üben. Genau dafür
    waren die Speicherkarten ursprünglich gedacht.

  Umgestellt wird die Art über das kleine Auswahlfeld rechts in der Zeile.
  Alle vorhandenen Speicherkarten gelten zunächst als „Eigene" und verhalten
  sich damit exakt wie bisher.

- **Das Schloss an den Lektionen.** Ein Tipp auf das 🔓 in der Zeile schaltet
  eine Lektion frei, ein Tipp auf das 🔒 sperrt sie wieder. Gesperrt heißt
  wirklich zu: die Karten sind nicht fällig, lassen sich nicht üben, nicht
  aufklappen, nicht auswählen und zählen nicht im Fortschritt.

  Die Regel dahinter in einem Satz: **Eine Karte ist frei, wenn sie in
  mindestens einer nicht gesperrten Lektion liegt.** Kategorien und eigene
  Speicherkarten geben nie frei – sie zeigen nur an. Deshalb darf dieselbe
  Karte in beliebig vielen Kategorien liegen, ohne dass es die Freigabe stört.

- **Geführte Kartensätze.** Ein Bereich, der aus einem weitergegebenen Satz
  entstanden ist, ist schreibgeschützt: keine neuen Karten, kein Bearbeiten,
  kein Löschen, kein Umsortieren. Nur so steht der Stoff bei allen in
  derselben Reihenfolge – und nur so kann eine spätere Ausgabe des Satzes
  sauber nachziehen, ohne etwas durcheinanderzubringen. Eigene Speicherkarten
  darf sich trotzdem jede:r anlegen; aufnehmen lassen sich darin allerdings
  nur freigeschaltete Karten.

  Im eigenen Bereich ändert sich davon nichts. Dort ist weiterhin alles frei
  und alles bearbeitbar.

- **In den Kategorien ist zu sehen, was schon dran ist.** Freigeschaltete
  Karten sind hervorgehoben – dieselbe Farbe wie bei den Suchtreffern –,
  gesperrte stehen ausgegraut mit 🔒 daneben. Wer „Nomen" mit seinen 96 Karten
  öffnet, sieht auf einen Blick, welche davon er anfassen darf.

- **Ein dritter Backup-Knopf: „zum Weitergeben".** Er erzeugt aus dem offenen
  Bereich eine Datei für andere: alle Karten auf Stufe 0 ohne Lernverlauf,
  alle Lektionen gesperrt bis auf die erste, Schreibschutz gesetzt.

  Der Unterschied fällt damit beim **Erzeugen** der Datei, nicht beim
  Einspielen. Das ist Absicht: So gibt es keinen Import-Knopf, mit dem sich
  aus Versehen der eigene Lernstand auf Null setzen ließe. Der Import liest
  schlicht, was in der Datei steht, und bleibt ein einziger Knopf.

  Die Datei trägt außerdem eine Kennung des Satzes, eine laufende Nummer und
  eine Herkunfts-Nummer an jeder Karte. Das tut heute noch nichts – es muss
  aber schon in der allerersten Datei stehen, weil sich Dateien, die einmal
  draußen sind, nicht nachrüsten lassen. Ohne diese Angaben könnte eine
  spätere Ausgabe den vorhandenen Satz nicht wiedererkennen und würde einen
  zweiten Bereich mit allem doppelt anlegen.

### Geändert

- **Das Tageslimit für neue Karten ist entfallen.** Es war die Notbremse gegen
  500 fällige Karten am ersten Tag. Diese Aufgabe übernimmt jetzt das Schloss,
  und zwar besser: Es bremst am Stoff statt an einer Zahl, die niemand
  einstellen will – und man sieht, *warum* heute nicht mehr kommt, statt nur,
  dass etwas fehlt.

  In einem eigenen Bereich ohne Lektionen gibt es damit keine Bremse mehr.
  Wer dort auf einmal viele Karten anlegt, hat sie auch alle am selben Tag
  fällig.

- **Für die Streak zählen nur noch Wiederholungen.** Neuer Stoff ist
  freiwillig, Wiederholungen sind die Pflicht.

  Ohne diese Trennung könnte das Freischalten einer Lektion die Flamme kosten:
  Wer abends Lektion 3 aufschließt und sie nicht mehr durcharbeitet, hätte
  plötzlich 25 offene Karten, obwohl er alles Fällige erledigt hatte. Vorher
  hielt das Tageslimit neue Karten zurück und das Problem fiel nicht auf; ohne
  Limit fällt es sofort auf.

- **Die vier Knöpfe oben rechts heißen nach dem, was sie tun.** „Backup" und
  „exportieren" bezeichneten vorher dasselbe und sahen nach zwei verschiedenen
  Funktionen aus. Jetzt: 💾 Backup · alles, 💾 Backup · nur „X",
  💾 Backup · zum Weitergeben, 📥 Import.

- **Der Fortschritts-Tab lässt gesperrte Karten weg.** Sonst stünden bei einem
  frisch eingespielten Satz 500 Karten in der Gruppe „neu" und der Fortschritt
  sähe aus, als wäre nichts geschafft – obwohl die erste Lektion sitzt.

- **Speicherkarten werden innerhalb ihrer Gruppe sortiert.** Der ⠿-Griff zieht
  weiterhin, aber nur zwischen Speicherkarten derselben Art. Die Art wechselt
  man über das Auswahlfeld, nicht durchs Ziehen.

---

## 2.2.0 – 6. September 2026 — „Speicherkarten"

### Neu

- **Speicherkarten sind zugeklappt, bis man sie braucht.** Über der Kartenliste
  steht jetzt nur noch eine Zeile: „▸ ⭐ Speicherkarten (6)". Ein Tipp darauf
  klappt sie auf. Beim nächsten Start ist sie wieder zu.

  Grund: Das Feld wuchs mit jeder neuen Speicherkarte weiter nach unten und
  schob Suchfeld und Kartenliste aus dem Bild. Wer Speicherkarten pro Lektion
  anlegt, hätte nach einem halben Buch ein Dutzend Zeilen vor sich, bevor die
  erste Vokabel kommt.

- **Speicherkarten lassen sich sortieren.** Derselbe ⠰-Griff wie bei den
  Karten, gezogen wird der ganze Block samt aufgeklappter Kartenliste. Damit
  ordnest du selbst, was oben steht – zum Beispiel die festen Gruppen oben und
  die Lektionen darunter. Eine eigene Gruppierungsfunktion braucht es dafür
  nicht: Die Reihenfolge ist die Gruppierung.

### Behoben

- **Import konnte bestehende Karten überschreiben.** Er behielt die
  Karten-Nummern aus der Datei bei. Seit dem Umbau in 2.0.0 liegt jede Karte
  als eigener Datensatz unter ihrer Nummer – gab es diese Karten im Konto
  noch, zog der Import sie in den neuen Bereich hinüber und ließ den alten
  leer zurück. Betroffen war vor allem der zweite Import derselben Datei.

  Jede importierte Karte bekommt jetzt eine neue Nummer; die Verweise in den
  Speicherkarten werden mit umgeschrieben.

---

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

- **„Noch offen für die Streak" versprach zu viel.** Das Tageslimit für neue
  Karten gilt über alle Bereiche zusammen. Die Zeile fragte aber jeden Bereich
  einzeln, und jeder rechnete mit dem vollen Restbudget – bei Limit 10 und drei
  Bereichen voller neuer Karten stand dort 30, obwohl heute 10 eingeführt
  werden. Der Streak-Zähler selbst war davon nicht betroffen, und nach zehn
  gelernten Karten sprang die Anzeige von selbst auf 0. Jetzt wird das Budget
  der Reihe nach verteilt; der geöffnete Bereich kommt zuerst dran, weil dort
  als Nächstes gelernt wird.

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
