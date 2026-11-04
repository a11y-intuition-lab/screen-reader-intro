import type { ReactNode } from 'react';

export type Lang = 'en' | 'nb';
export type Platform = 'iphone' | 'android';

export interface Step {
  title: string;
  body: ReactNode;
}

export interface Part {
  /** Fast navn i URL-en, likt på alle språk. Gjør at delene kan bytte rekkefølge. */
  id: string;
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
