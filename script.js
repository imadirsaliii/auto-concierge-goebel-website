// Rückruf-Formular, gleiche Mechanik wie die PS-Seite: POST (JSON) an einen eigenen Endpunkt,
// Rückfall auf ein vorbereitetes E-Mail-Programm. Kein externer Formulardienst.
// FORM_ENDPOINT leer = nur E-Mail-Weg. Eigener Endpunkt: siehe Hinweise.md.
const FORM_ENDPOINT = '';
const form = document.getElementById('rueckrufForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const v = (id) => (form.querySelector(id) ? form.querySelector(id).value.trim() : '');
    const data = { name: v('#f-name'), telefon: v('#f-tel'), wunschzeit: v('#f-zeit'), anliegen: v('#f-thema'), website: v('#f-hp') };
    const btn = form.querySelector('button[type="submit"]');
    const hint = document.getElementById('formHint');
    if (data.website) { return; } // Honeypot
    btn.disabled = true;
    if (FORM_ENDPOINT) {
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 6000);
        const r = await fetch(FORM_ENDPOINT, { method: 'POST', signal: ctrl.signal, headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) });
        clearTimeout(t);
        const j = await r.json().catch(() => null);
        if (!r.ok || !j || j.status !== 'ok') throw new Error('send failed');
        window.location.href = 'danke.html';
        return;
      } catch (err) { /* Rückfall auf E-Mail */ }
    }
    const NL = '\n';
    const body = 'Name: ' + data.name + NL + 'Telefon: ' + data.telefon + NL + 'Wunschzeit: ' + data.wunschzeit + (data.anliegen ? NL + NL + 'Anliegen:' + NL + data.anliegen : '');
    window.location.href = 'mailto:info@auto-concierge-goebel.de?subject=' + encodeURIComponent('Rückruf-Anfrage') + '&body=' + encodeURIComponent(body);
    btn.disabled = false;
    if (hint) hint.textContent = 'Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Anfrage. Bitte senden Sie sie ab. Oder rufen Sie uns an: 0151 67311676.';
  });
}
// Nur eine Frage gleichzeitig offen
document.querySelectorAll('details.f').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('details.f').forEach((o) => { if (o !== item) o.open = false; });
  });
});
// Mobiles Menü nach Antippen eines Links schließen
const mobil = document.querySelector('details.mobil');
if (mobil) mobil.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { mobil.open = false; }));
