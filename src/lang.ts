import { createContext, useContext } from 'react';
import type { Lang } from './content/types';

export const LangContext = createContext<Lang>('en');
export const useLang = () => useContext(LangContext);
