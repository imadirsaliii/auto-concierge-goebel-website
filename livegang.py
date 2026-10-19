"""Schaltet die Vorschau live. Nur nach Imads Go ausfuehren:
  python livegang.py            -> noindex raus, robots.txt/sitemap live; ENTWURF-Kaesten bleiben
  python livegang.py --rechtstexte-freigegeben   -> zusaetzlich ENTWURF-Kaesten entfernen
Aendert nur Dateien in diesem Ordner. Danach commit und push in das Website-Repo."""
import glob, os, re, shutil, sys
d = os.path.dirname(os.path.abspath(__file__))
frei = "--rechtstexte-freigegeben" in sys.argv
for f in glob.glob(os.path.join(d, "*.html")):
    s = open(f, encoding="utf-8").read()
    s = re.sub(r'<meta name="robots" content="noindex"><!--[^>]*-->
?', "", s)
    if frei:
        s = re.sub(r'<div class="entwurf-box" data-entwurf>.*?</div>
?', "", s, flags=re.S)
    open(f, "w", encoding="utf-8", newline="
").write(s)
shutil.copyfile(os.path.join(d, "robots_live.txt"), os.path.join(d, "robots.txt"))
print("live gestellt; Kaesten entfernt:", frei)
