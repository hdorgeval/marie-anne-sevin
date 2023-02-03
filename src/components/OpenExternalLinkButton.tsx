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
        {children}
        <i className="bi bi-box-arrow-up-right"></i>
      </a>
    </>
  );
};

OpenExternalLinkButton.displayName = 'OpenExternalLinkButton';
