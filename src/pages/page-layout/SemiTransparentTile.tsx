import { FC, useMemo } from 'react';

export interface SemiTransparentTileOwnProps {
  className: string;
  children: React.ReactNode;
  background?: string;
}

// linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 79, 93, 0.8))

export const SemiTransparentTile: FC<SemiTransparentTileOwnProps> = ({
  className,
  background,
  children,
}) => {
  const defaultBackground = 'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))';
  const computedBackground = useMemo(() => {
    if (background === undefined) {
      return defaultBackground;
    }
    return background;
  }, [background]);

  return (
    <div
      className={className}
      style={{
        background: `${computedBackground}`,
      }}
    >
      {children}
    </div>
  );
};
