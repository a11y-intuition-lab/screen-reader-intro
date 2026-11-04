// Knapper med data-message skriver meldingen til en statusregion
// (role="status", finnes i DOM fra start), så skjermleseren leser den opp.
document.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-message]');
  if (!button) return;
  const status = document.getElementById(button.dataset.status);
  status.textContent = '';
  setTimeout(() => { status.textContent = button.dataset.message; }, 100);
});
