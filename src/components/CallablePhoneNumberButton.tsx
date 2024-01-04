import { useCallback, useMemo } from 'react';
import { MyAnalyticsEvent, useAnalytics } from '../hooks/useAnalytics';

export interface CallablePhoneNumberButtonOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  phoneNumber: string;
  className?: string;
  children?: React.ReactNode;
  title: string;
}
export const CallablePhoneNumberButton: React.FC<CallablePhoneNumberButtonOwnProps> = ({
  phoneNumber,
  className,
  children,
  analyticsEvent,
  title,
  ...rest
}) => {
  const { trackSimpleEvent } = useAnalytics();
  const linkClassNames = `${className}`;

  const ariaLabel = useMemo(() => {
    const props = rest as Record<string, string>;
    if (props && props['aria-label']) {
      return props['aria-label'];
    }
    return 'Appeler au téléphone';
  }, [rest]);
  const handleOnClick = useCallback(() => {
    if (analyticsEvent) {
      trackSimpleEvent(analyticsEvent);
    }
  }, [analyticsEvent, trackSimpleEvent]);

  const sanitizedPhoneNumber = useMemo(() => {
    return phoneNumber.replaceAll(' ', '');
  }, [phoneNumber]);
  const href = useMemo(() => {
    return `tel:${sanitizedPhoneNumber}`;
  }, [sanitizedPhoneNumber]);

  return (
    <>
      <a
        className={linkClassNames}
        href={href}
        target="_blank"
        rel="nofollow"
        onClick={handleOnClick}
        title={`${title ?? 'Appeler au téléphone'}`}
        aria-label={ariaLabel}
      >
        <div className="d-flex flex-row align-items-center justify-content-center">
          <div>{children}</div>
          <i className="bi bi-telephone-outbound ms-3"></i>
        </div>
      </a>
    </>
  );
};

CallablePhoneNumberButton.displayName = 'CallablePhoneNumberButton';
