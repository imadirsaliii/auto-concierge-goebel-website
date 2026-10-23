// Rückruf-Formular: POST (JSON) an unseren eigenen Endpunkt (Mail ans Geschäftspostfach), danach danke.html.
// Rückfall auf ein vorbereitetes E-Mail-Programm, wenn der Endpunkt nicht antwortet. Kein externer Formulardienst.
const FORM_ENDPOINT = 'https://api.ac-goebel.de/formular/anfrage';
const TEL_ANRUF = '0151 67311676';
const form = document.getElementById('rueckrufForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const v = (id) => (form.querySelector(id) ? form.querySelector(id).value.trim() : '');
    const data = { name: v('#f-name'), telefon: v('#f-tel'), wunschzeit: v('#f-zeit'), anliegen: v('#f-thema'), website: v('#f-hp') };
    const btn = form.querySelector('button[type="submit"]');
    const hint = document.getElementById('formHint');
    const say = (text, isError) => { if (hint) { hint.textContent = text; hint.classList.toggle('fehler', !!isError); } };
    if (data.website) { return; } // Honeypot
    const digits = (data.telefon.match(/[0-9]/g) || []).length;
    if (!/^\+?[0-9 ()\/.\-]+$/.test(data.telefon) || digits < 6 || digits > 20) {
      say('Bitte geben Sie Ihre Telefonnummer mit Vorwahl an, zum Beispiel 0151 1234567. Oder rufen Sie uns an: ' + TEL_ANRUF + '.', true);
      const tel = form.querySelector('#f-tel'); if (tel) tel.focus();
      return;
    }
    btn.disabled = true;
    say('Wird gesendet …', false);
    if (FORM_ENDPOINT) {
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 8000);
        const r = await fetch(FORM_ENDPOINT, { method: 'POST', signal: ctrl.signal, headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) });
        clearTimeout(t);
        if (r.status === 422) { btn.disabled = false; say('Bitte prüfen Sie Name, Telefonnummer und Wunschzeit. Oder rufen Sie uns an: ' + TEL_ANRUF + '.', true); return; }
        if (r.status === 429) { btn.disabled = false; say('Zu viele Anfragen in kurzer Zeit. Bitte rufen Sie uns an: ' + TEL_ANRUF + '.', true); return; }
        const j = await r.json().catch(() => null);
        if (!r.ok || !j || j.status !== 'ok') throw new Error('send failed');
        window.location.href = 'danke.html';
        return;
      } catch (err) { /* Rückfall auf E-Mail */ }
    }
    const NL = '\n';
    const body = 'Name: ' + data.name + NL + 'Telefon: ' + data.telefon + NL + 'Wunschzeit: ' + data.wunschzeit + (data.anliegen ? NL + NL + 'Anliegen:' + NL + data.anliegen : '');
    window.location.href = 'mailto:info@ac-goebel.de?subject=' + encodeURIComponent('Rückruf: ' + data.name) + '&body=' + encodeURIComponent(body);
    btn.disabled = false;
    say('Das Senden hat nicht geklappt. Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Anfrage, bitte senden Sie sie ab. Oder rufen Sie uns an: ' + TEL_ANRUF + '.', true);
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
