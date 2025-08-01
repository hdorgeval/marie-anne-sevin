import { useCallback } from 'react';

export type MyAnalyticsEvent =
  | 'appel-telephone'
  | 'billet-web-calendrier'
  | 'envoie-mail'
  | 'has-completed-guided-tour'
  | 'open-amazon-on-my-book'
  | 'open-external-link'
  | 'open-google-maps'
  | 'open-meditattion-france'
  | 'open-my-facebook'
  | 'open-my-instagram'
  | 'open-my-whatsapp'
  | 'open-my-youtube'
  | 'open-pont-d-ostara'
  | 'open-podcast-sexualité-sacrée'
  | 'open-waze'
  | 'pre-inscription'
  | 'pre-inscription-femme-sauvage'
  | 'pre-inscription-soiree-tantra'
  | 'pre-inscription-sons-mantras-tantra'
  | 'pre-inscription-tantra-et-constellations'
  | 'pre-inscription-tantra-femme'
  | 'pre-inscription-tantra-homme'
  | 'pre-inscription-la-voix-du-corps'
  | 'pre-inscription-toucher-conscient'
  | 'rdv-constellation'
  | 'rdv-entretien-prealable'
  | 'rdv-initiation-massage-meditatif'
  | 'rdv-massage-meditatif'
  | 'rdv-ou-contact'
  | 'rdv-rituel-tantrique'
  | 'start-video-xyz'
  | 'voir-details-du-stage';

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
