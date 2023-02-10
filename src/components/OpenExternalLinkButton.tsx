import { useCallback } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

export interface OpenExternalLinkButtonOwnProps {
  link: string;
  className?: string;
  children?: React.ReactNode;
}
export const OpenExternalLinkButton: React.FC<OpenExternalLinkButtonOwnProps> = ({
  link,
  className,
  children,
}) => {
  const { trackOpenExternalLinkEvent } = useAnalytics();
  const linkClassNames = `${className}`;

  const handleOnClick = useCallback(() => {
    trackOpenExternalLinkEvent(link);
  }, [link, trackOpenExternalLinkEvent]);

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
