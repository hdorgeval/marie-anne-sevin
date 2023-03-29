import { useCallback, useMemo } from 'react';
import { MyAnalyticsEvent, useAnalytics } from '../hooks/useAnalytics';

export interface OpenExternalLinkButtonOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  link: string;
  className?: string;
  children?: React.ReactNode;
  title: string;
}
export const OpenExternalLinkButton: React.FC<OpenExternalLinkButtonOwnProps> = ({
  link,
  className,
  children,
  analyticsEvent,
  title,
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
      >
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div>{children}</div>
          <i className="bi bi-box-arrow-up-right ms-3"></i>
        </div>
      </a>
    </>
  );
};

OpenExternalLinkButton.displayName = 'OpenExternalLinkButton';
