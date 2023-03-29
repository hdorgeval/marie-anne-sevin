import { useCallback, useMemo } from 'react';
import { MyAnalyticsEvent, useAnalytics } from '../hooks/useAnalytics';

export interface OpenExternalLinkOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  link: string;
  className?: string;
  children?: React.ReactNode;
  title: string;
  relationship: 'nofollow' | 'stylesheet' | 'prev' | 'next';
}
export const OpenExternalLink: React.FC<OpenExternalLinkOwnProps> = ({
  link,
  className,
  children,
  analyticsEvent,
  title,
  relationship,
  ...rest
}) => {
  const { trackOpenExternalLinkEvent, trackSimpleEvent } = useAnalytics();
  const linkClassNames = `${className}`;

  const ariaLabel = useMemo(() => {
    const props = rest as Record<string, string>;
    if (props && props['aria-label']) {
      return props['aria-label'];
    }
    return 'Ouvrir le lien dans un autre onglet';
  }, [rest]);

  const handleOnClick = useCallback(() => {
    trackOpenExternalLinkEvent(link);
    if (analyticsEvent) {
      trackSimpleEvent(analyticsEvent);
    }
  }, [analyticsEvent, link, trackOpenExternalLinkEvent, trackSimpleEvent]);

  return (
    <>
      <a
        className={linkClassNames}
        href={link}
        target="_blank"
        onClick={handleOnClick}
        title={`${title ?? 'Ouvrir dans un autre onglet'}`}
        aria-label={ariaLabel}
        rel={relationship}
      >
        {children}
      </a>
    </>
  );
};

OpenExternalLink.displayName = 'OpenExternalLink';
