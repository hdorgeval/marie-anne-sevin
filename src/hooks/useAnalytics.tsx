import { useCallback } from 'react';

export type MyAnalyticsEvent =
  | 'open-external-link'
  | 'pre-inscription-tantra-et-constellations'
  | 'pre-inscription-sons-mantras-tantra'
  | 'pre-inscription-femme-sauvage'
  | 'rdv-entretien-prealable'
  | 'rdv-rituel-tantrique'
  | 'rdv-constellation'
  | 'rdv-ou-contact'
  | 'open-amazon-on-my-book'
  | 'open-google-maps'
  | 'open-waze'
  | 'open-my-instagram'
  | 'open-my-whatsapp'
  | 'open-my-youtube'
  | 'open-my-facebook'
  | 'appel-telephone'
  | 'envoie-mail'
  | 'has-completed-guided-tour';

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
