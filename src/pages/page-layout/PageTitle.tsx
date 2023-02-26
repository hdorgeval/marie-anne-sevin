import { FC } from 'react';

export interface PageTitleProps {
  className?: string;
  children: React.ReactNode;
}
export const PageTitle: FC<PageTitleProps> = ({ className, children }) => {
  return (
    <h1 className={`text-uppercase text-light fs-1 fw-bolder font-raleway mt-1 ${className}`}>
      {children}
    </h1>
  );
};

PageTitle.displayName = 'PageTitle';
