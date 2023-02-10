import { FC } from 'react';

export interface PageTitleProps {
  className?: string;
  children: React.ReactNode;
}
export const PageTitle: FC<PageTitleProps> = ({ className, children }) => {
  return (
    <span className={`text-uppercase text-light fs-1 fw-bolder font-raleway ${className}`}>
      {children}
    </span>
  );
};

PageTitle.displayName = 'PageTitle';
