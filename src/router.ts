import { useSyncExternalStore } from 'react';
import type { Lang, Platform } from './content/types';

// Hash-ruting: #/iphone/get-started/3, #/iphone/find-your-way/done, #/nb/android/find-your-way/1.
// Delene har faste navn, ikke nummer, så rekkefølgen kan endres uten at adressene endres.
// Engelsk er standard, norsk har /nb foran.
export interface Route {
  lang: Lang;
  platform?: Platform;
  part?: string; // id-en til delen
  step?: number | 'done'; // 1-basert, eller ferdig-siden
  settings?: boolean; // #/settings
}

export function parse(hash: string): Route {
  const segs: string[] = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  let i = 0;
  const lang: Lang = segs[i] === 'nb' ? 'nb' : 'en';
  if (lang === 'nb') i++;
  const route: Route = { lang };
  if (segs[i] === 'settings') return { lang, settings: true };
  const platform = segs[i++];
  if (platform !== 'iphone' && platform !== 'android') return route;
  route.platform = platform satisfies Platform;
  const part = segs[i];
  if (part && part !== 'done' && !/^\d+$/.test(part)) {
    route.part = part;
    i++;
  }
  const step = segs[i] ?? '';
  if (step === 'done') route.step = 'done';
  else if (/^\d+$/.test(step)) route.step = Number(step);
  return route;
}

export function href(route: Route): string {
  const segs: string[] = [];
  if (route.lang === 'nb') segs.push('nb');
  if (route.settings) segs.push('settings');
  else if (route.platform) {
    segs.push(route.platform);
    if (route.part) segs.push(route.part);
    if (route.step !== undefined) segs.push(String(route.step));
  }
  return `#/${segs.join('/')}`;
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

export function useRoute(): Route {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash);
  return parse(hash);
}
