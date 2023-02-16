import { FC } from 'react';

export interface SemiTransparentTileOwnProps {
  className: string;
  children: React.ReactNode;
}

export const SemiTransparentTile: FC<SemiTransparentTileOwnProps> = ({ className, children }) => {
  return (
    <div
      className={className}
      style={{
        background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
      }}
    >
      {children}
    </div>
  );
};
