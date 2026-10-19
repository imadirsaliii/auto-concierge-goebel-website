"""Schaltet die Vorschau live. Nur nach Imads Go ausfuehren:
  python livegang.py            -> noindex raus, robots.txt/sitemap live; ENTWURF-Kaesten bleiben
  python livegang.py --rechtstexte-freigegeben   -> zusaetzlich ENTWURF-Kaesten entfernen
Aendert nur Dateien in diesem Ordner. Danach deploy.ps1 (commit und push in das Website-Repo)."""
import glob
import os
import re
import shutil
import sys

here = os.path.dirname(os.path.abspath(__file__))
frei = "--rechtstexte-freigegeben" in sys.argv
NOINDEX = re.compile(r'<meta name="robots" content="noindex">(?:<!--.*?-->)?[ \t]*\r?\n?', re.S)
BOX = re.compile(r'<div class="entwurf-box" data-entwurf>.*?</div>[ \t]*\r?\n?', re.S)
for path in glob.glob(os.path.join(here, "*.html")):
    with open(path, encoding="utf-8", newline="") as handle:
        text = handle.read()
    text = NOINDEX.sub("", text)
    if frei:
        text = BOX.sub("", text)
    with open(path, "w", encoding="utf-8", newline="") as handle:
        handle.write(text)
shutil.copyfile(os.path.join(here, "robots_live.txt"), os.path.join(here, "robots.txt"))
print("live gestellt; Kaesten entfernt:", frei)
