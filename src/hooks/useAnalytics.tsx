import { useCallback } from 'react';

export type MyAnalyticsEvent =
  | 'open-external-link'
  | 'open-formulaire-pre-inscription-tantra-et-constellations'
  | 'open-formulaire-pre-inscription-sons-mantras-tantra'
  | 'open-formulaire-pre-inscription-femme-sauvage';

export type CommandType = 'js' | 'config' | 'event';
declare global {
  interface Window {
    gtag: (command: CommandType, event: MyAnalyticsEvent, params?: Record<string, string>) => void;
  }
}

export const useAnalytics = () => {
  const trackSimpleEvent = useCallback((myEvent: MyAnalyticsEvent) => {
    try {
      window.gtag('event', myEvent);
    } catch (error) {
      // no op
    }
  }, []);

  const trackOpenExternalLinkEvent = useCallback((url: string) => {
    try {
      window.gtag('event', 'open-external-link', { url });
    } catch (error) {
      // no op
    }
  }, []);
  return { trackSimpleEvent, trackOpenExternalLinkEvent };
};
