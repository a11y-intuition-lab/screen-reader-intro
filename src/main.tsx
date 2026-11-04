import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { applyTheme, getLang, getTheme } from './settings';
import './style.css';

// Før første visning: riktig tema, og lagret språk når adressen ikke sier noe.
applyTheme(getTheme());
if (getLang() === 'nb' && window.location.hash.replace(/^#\/?/, '') === '') {
  window.location.replace('#/nb');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Service worker: appen virker uten nett når den er åpnet én gang.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`);
}
