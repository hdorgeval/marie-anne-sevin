import { useCallback } from 'react';
import { MyAnalyticsEvent, useAnalytics } from '../hooks/useAnalytics';

export interface OpenExternalLinkButtonOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  link: string;
  className?: string;
  children?: React.ReactNode;
}
export const OpenExternalLinkButton: React.FC<OpenExternalLinkButtonOwnProps> = ({
  link,
  className,
  children,
  analyticsEvent,
}) => {
  const { trackOpenExternalLinkEvent, trackSimpleEvent } = useAnalytics();
  const linkClassNames = `${className}`;

  const handleOnClick = useCallback(() => {
    trackOpenExternalLinkEvent(link);
    if (analyticsEvent) {
      trackSimpleEvent(analyticsEvent);
    }
  }, [analyticsEvent, link, trackOpenExternalLinkEvent, trackSimpleEvent]);

  return (
    <>
      <a className={linkClassNames} href={link} target="_blank" onClick={handleOnClick}>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div>{children}</div>
          <i className="bi bi-box-arrow-up-right ms-3"></i>
        </div>
      </a>
    </>
  );
};

OpenExternalLinkButton.displayName = 'OpenExternalLinkButton';
