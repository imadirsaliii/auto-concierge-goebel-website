# Hinweise Website „Auto-Concierge Göbel“ (final, 19.10.2026)

Statische Seite ohne Build-Schritt. Lokal ansehen: `python -m http.server 8765 -d "E:\0. Github\42. Projekt AC\05. Website\final"`. **Nichts deployt, nichts gepusht, kein Konto angelegt.** Stand: deploy-fertig im Vorschau-Modus (`noindex`).

## Dateien (Ordner `E:\0. Github\42. Projekt AC\05. Website\final\`)

- Seiten: `index.html`, `impressum.html`, `datenschutz.html`, `agb.html`, `widerrufsbelehrung.html`, `danke.html`, `404.html`
- `styles.css`, `script.js` (Formular), `CNAME` (`auto-concierge-goebel.de`), `robots.txt` (Vorschau: Disallow), `robots_live.txt`, `sitemap.xml`, `livegang.py`
- `assets/`: Wortmarke, Favicons (svg/ico), `apple-touch-icon.png`, `og-bild.png` (1200x630), `fotos/fahrzeug-01..07.webp` (aus `Referenzbilder_anonymisiert`, je unter 200 KB, neutrale Alt-Texte, Dateinamen ohne Kundendaten)
- `fonts/SchibstedGrotesk.woff2` plus `OFL.txt` (Lizenztext SIL OFL 1.1; Copyright-Zeile vor Livegang gegen Google Fonts abgleichen)

## Inhalt und Regeln (eingearbeitet)

- Aus dem 5-Personen-Test (Simulation): Erklärzeile unter der Wortmarke, Telefon in Kopfzeile (mobil als Telefon-Symbol) und unter dem Hero-Knopf, Preis-Knopf graphit, Firmenwagen-Hinweis (ohne Finanzierung/Leasing), „So werden wir bezahlt“ als Abschnitt 4 (vor „So läuft es“) plus Satz im Hero, „Concierge“ erklärt (Abschnitt „Was wir übernehmen“ und FAQ), Dauer der Suche ohne Zahl („hängt vom Wunschfahrzeug ab, ehrliche Einschätzung im Rückruf“, weil keine belegte Dauer in `fakten_pac.json`).
- Kleinunternehmer § 19 UStG: nur Endpreise „ab 79 €“ und „ab 165 €“, Endpreis-Zeile im Preisabschnitt, Impressum ohne Steuernummer und ohne USt-Zeile. Keine Staffelbeträge auf der Seite (auch nicht in den AGB).
- Nur Vermittlung; Unabhängigkeitssatz wortgleich aus `unabhaengigkeitserklaerung_goebel.md` (Bezahlt-Abschnitt, FAQ, AGB § 3a Abs. 5). „Kein Kauf, keine Kosten“ nur für die Vermittlung, mit den Ausnahmen laut AGB § 4 Abs. 4.
- Markenaussage nur aus `fakten_pac.json` → `markenaussage.erlaubt`. Keine Göbel-Porträts, kein Zitat. Keine Partnernamen, kein Hol-/Bringservice, kein Service-Abo.
- Anmeldung/Zulassung: nur „auf Anfrage“ (laut AGB nicht im Honorar enthalten).
- Mail überall `info@auto-concierge-goebel.de`.

## Schalter noindex / Livegang (nur nach Imads Go)

- Aktuell: `<meta name="robots" content="noindex">` auf allen 7 Seiten, `robots.txt` = `Disallow: /`.
- Livegang: `python "E:\0. Github\42. Projekt AC\05. Website\final\livegang.py"` entfernt `noindex`, ersetzt `robots.txt` durch `robots_live.txt` (Allow, Sitemap). Die ENTWURF-Kästen bleiben dabei stehen. Erst wenn Imad die Rechtstexte freigibt: `python .../livegang.py --rechtstexte-freigegeben` (entfernt zusätzlich die Kästen auf `agb.html` und `widerrufsbelehrung.html`).

## Offen für Imad (Rechtsprüfung, keine Rechtsberatung)

1. **AGB** (`agb.html`, Kasten ENTWURF): anwaltliche Gesamtprüfung nach `rechtsfragen_offen.md` Punkt 3. Annahmen von mir, die nicht aus den Bausteinen stammen: Fristen 14 Tage (Angebot, Zahlung), Rückabwicklung drei Monate, Absage durch den Kunden („Berechnung nur nach vorheriger Mitteilung“), Leistungsumfang Verkauf im Auftrag (Marktwert, Vermarktung, Kontakt/Besichtigungen, Verhandlung, Abwicklung), Prüfumfang im Vermittlungshonorar ohne Stufenangabe, Mindestfahrzeugwerte 3.000/8.000 € bewusst weggelassen, OBD/Lackdicke bewusst weggelassen. Verkauf im Auftrag (§ 4b) ist ein Entwurfsbaustein; Widerspruch in `fakten_pac.json` („auf Anfrage“ vs. Staffel) klären.
2. **Widerrufsbelehrung** (`widerrufsbelehrung.html`, Kasten ENTWURF): Wortlaut Satz für Satz gegen den amtlichen Text der Anlagen 1 und 2 zu Art. 246a § 1 EGBGB abgleichen (nur über Zusammenfassungen belegt). Ablauf: Belehrung nachweislich vor der Vertragserklärung in Textform senden. Online-Widerrufsfunktion (§ 356a BGB) klären, ob das Rückruf-Formular darunter fällt.
3. **Unabhängigkeitssatz** darf erst öffentlich stehen, wenn Göbel in Textform bestätigt hat (Drive `01. Recht & Vertraege/`); sonst vor Livegang die drei Fundstellen (Bezahlt-Abschnitt, FAQ, AGB § 3a Abs. 5) durch die Übergangsfassung ersetzen lassen.
4. **Datenschutz** (`datenschutz.html`): GitHub Pages (USA, Garantien nach Kapitel V) bestätigen, Löschfrist 6 Monate bestätigen, Facebook-Abschnitt (gemeinsame Verantwortlichkeit) erst relevant, wenn die Seite öffentlich ist.
5. **Impressum**: Streitbeilegungs-Aussage mit AGB § 9 abgleichen (§ 36 VSBG).
6. Leistungsversprechen („Zwischenstand nach jedem Schritt“, Rückruf in Wunschzeit 9–12/12–17/17–20 Uhr): Göbel bestätigt, dass er sie hält; Zeiten mit Google-Profil und Facebook abgleichen.
7. Kundeneinverständnis für die sieben Fahrzeugbilder: laut Imad vorhanden (19.10.2026). Bild 1 (Hero): Kennzeichen und Person verpixelt, geprüft.

## Formular (Mechanik wie PS, nur Technik)

`script.js` sendet bei gesetztem `FORM_ENDPOINT` JSON per POST an einen eigenen Endpunkt (wie PS) und fällt sonst auf ein vorbereitetes E-Mail-Programm (`mailto:`) zurück. **Aktuell ist `FORM_ENDPOINT` leer**, es läuft nur der E-Mail-Weg; kein Drittanbieter, Datenschutz-Abschnitt 3 beschreibt genau das. Für den Server-Weg braucht es einen eigenen Endpunkt auf dem VPS (Chip, PS-Webhook als Vorbild) und danach eine Anpassung von `FORM_ENDPOINT` und Datenschutz Abschnitt 3. Vor Livegang echter Absendetest (Zwei-Sichten-Prüfung).

## Deploy-Schritte (nur mit Imads Go)

1. **Repo:** neues öffentliches GitHub-Repo, Vorschlag `auto-concierge-goebel-website` (GitHub Pages im Free-Plan nur für öffentliche Repos). Inhalt von `final\` direkt ins Hauptverzeichnis (inkl. `CNAME`, ohne `livegang.py` nötig, schadet aber nicht). Settings → Pages → Branch `main` / `/ (root)`, Custom domain `auto-concierge-goebel.de`, „Enforce HTTPS“ aktivieren.
2. **DNS bei IONOS** (Domains & SSL → auto-concierge-goebel.de → DNS), vorhandene A-/AAAA-Einträge auf `@` vorher entfernen, MX-/Mail-Einträge nicht anfassen:

   | Typ | Host | Wert |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `<github-benutzername>.github.io` |

3. **Postfach** `info@auto-concierge-goebel.de` bei IONOS anlegen, Senden und Empfangen testen (Impressum und Formular hängen daran).
4. Vorschau unter der Domain mit `noindex` prüfen (Formular-Absendetest, 1280 und 375 px, mit und ohne Vorschau-Link).
5. **Livegang** nur nach Imads Go: `livegang.py` (siehe oben), commit, push, Sitemap in der Search Console nur mit Imads Zustimmung. Facebook-Seite und Google-Profil mit der Domain verknüpfen, alte Domain `goebel-automobil-coach.de` per 301 umleiten (Netlify-Zugang ungeklärt), Signatur in `nachrichten_standard.md` auf die neue Domain (Imads Ja).
