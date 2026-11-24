import type { ReactNode } from 'react';
import type { Flag } from '../flags';

export type Lang = 'en' | 'nb';
export type Platform = 'iphone' | 'android';

export interface Step {
  /** Vises bare når flagget er slått på i flags.ts. */
  flag?: Flag;
  title: string;
  body: ReactNode;
}

export interface Part {
  /** Fast navn i URL-en, likt på alle språk. Gjør at delene kan bytte rekkefølge. */
  id: string;
  /** Vises bare når flagget er slått på i flags.ts. */
  flag?: Flag;
  title: string;
  intro: string;
  steps: Step[];
  done: ReactNode;
}

export interface PlatformContent {
  name: string;
  source: { url: string; title: string };
  parts: Part[];
}

export type Content = Record<Platform, PlatformContent>;
