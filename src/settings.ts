import type { Lang } from './content/types';

// Innstillinger lagres i localStorage på telefonen. Ingenting sendes noe sted.
export type Theme = 'light' | 'dark' | 'auto';

const THEME_KEY = 'sri-theme';
const LANG_KEY = 'sri-lang';

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null; // privat modus eller blokkert lagring
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Innstillingen gjelder da bare til siden lukkes.
  }
}

export function getTheme(): Theme {
  const t = read(THEME_KEY);
  return t === 'light' || t === 'dark' ? t : 'auto';
}

/** Automatisk fjerner attributtet, så CSS følger telefonens innstilling. */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'auto') delete root.dataset.theme;
  else root.dataset.theme = theme;
}

export function setTheme(theme: Theme) {
  write(THEME_KEY, theme);
  applyTheme(theme);
}

export function getLang(): Lang | null {
  const l = read(LANG_KEY);
  return l === 'en' || l === 'nb' ? l : null;
}

export function setLang(lang: Lang) {
  write(LANG_KEY, lang);
}
