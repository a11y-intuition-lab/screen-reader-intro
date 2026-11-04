// Knapper med data-message skriver meldingen til en statusregion
// (role="status", finnes i DOM fra start), så skjermleseren leser den opp.
document.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-message]');
  if (!button) return;
  const status = document.getElementById(button.dataset.status);
  status.textContent = '';
  setTimeout(() => { status.textContent = button.dataset.message; }, 100);
});

// Service worker: siden virker uten nett når den er åpnet én gang.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('sw.js', document.currentScript.src));
}

// Av/på-knapper: aria-pressed byttes ved klikk, så skjermleseren sier om den er på.
document.addEventListener('click', (event) => {
  const toggle = event.target.closest('button[aria-pressed]');
  if (toggle) toggle.setAttribute('aria-pressed', String(toggle.getAttribute('aria-pressed') !== 'true'));
});

// Stille endring: teksten endres på skjermen, men skjermleseren får ikke beskjed.
document.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-silent]');
  if (!button) return;
  const time = new Date().toLocaleTimeString(document.documentElement.lang, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById(button.dataset.silent).textContent = `${button.dataset.message} ${time}`;
});

// Øvingsskjema: feilmeldingen kobles til feltet med aria-describedby, og fokus flyttes dit.
document.addEventListener('submit', (event) => {
  const form = event.target.closest('form[data-practice]');
  if (!form) return;
  event.preventDefault();
  let first = null;
  for (const field of form.querySelectorAll('[required]')) {
    const error = document.getElementById(`${field.id}-error`);
    const empty = field.value.trim() === '';
    field.setAttribute('aria-invalid', String(empty));
    error.textContent = empty ? error.dataset.message : '';
    if (empty && !first) first = field;
  }
  const status = document.getElementById(form.dataset.status);
  if (first) {
    status.textContent = '';
    first.focus();
  } else {
    status.textContent = form.dataset.message;
  }
});
