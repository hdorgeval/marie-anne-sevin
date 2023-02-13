import { FC, useMemo } from 'react';

export interface CallablePhoneNumberOwnProps {
  phoneNumber: string;
}
export const CallablePhoneNumber: FC<CallablePhoneNumberOwnProps> = ({ phoneNumber }) => {
  const sanitizedPhoneNumber = useMemo(() => {
    return phoneNumber.replaceAll(' ', '');
  }, [phoneNumber]);
  const href = useMemo(() => {
    return `tel:${sanitizedPhoneNumber}`;
  }, [sanitizedPhoneNumber]);

  const part1 = useMemo(() => {
    return sanitizedPhoneNumber.substring(0, 2);
  }, [sanitizedPhoneNumber]);

  const part2 = useMemo(() => {
    return sanitizedPhoneNumber.substring(2, 4);
  }, [sanitizedPhoneNumber]);

  const part3 = useMemo(() => {
    return sanitizedPhoneNumber.substring(4, 6);
  }, [sanitizedPhoneNumber]);

  const part4 = useMemo(() => {
    return sanitizedPhoneNumber.substring(6, 8);
  }, [sanitizedPhoneNumber]);

  const part5 = useMemo(() => {
    return sanitizedPhoneNumber.substring(8, 10);
  }, [sanitizedPhoneNumber]);

  return (
    <a className="text-light text-decoration-none" href={href} rel="nofollow" target="_blank">
      <span>{part1}</span>
      <span className="ps-1">{part2}</span>
      <span className="ps-1">{part3}</span>
      <span className="ps-1">{part4}</span>
      <span className="ps-1">{part5}</span>
    </a>
  );
};

CallablePhoneNumber.displayName = 'CallablePhoneNumber';
