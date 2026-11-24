// Deler som er slått av for å gjøre innføringen kortere. Sett til true for å ta dem med igjen.
export const FLAGS = {
  /** Trinnet om landemerker i del 2. Landemerker ligger ikke i rotoren eller lesekontrollene som standard. */
  landmarks: false,
  /** Avsnittet om VoiceOver-gjenkjenning i trinnet om bilder (iPhone). */
  recognition: false,
  /** Del 5, oppgaven der du bestiller bord på restauranten. */
  bookATable: false,
} as const;

export type Flag = keyof typeof FLAGS;
