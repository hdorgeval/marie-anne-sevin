import { FC, useMemo } from 'react';
import { usePublicPage } from '../../contexts/userContext';
import { useGuidedTour } from '../../hooks/useGuidedTour';
import { useMetaDescription } from '../../hooks/useMetaDescription';
import { useTitle } from '../../hooks/useTitle';
import { Footer } from './Footer';
import { HambugerMenu } from './HamburgerMenu';
export interface PageLyoutOwnProps {
  backgroundImageUrl: string;
  backgroundOverlay?: string;
  backgroundPosition?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  backgroundSize?: 'inherit' | 'cover' | 'contain' | 'initial';
  children: React.ReactNode;
  htmlTitle: string;
}

export const PublicPageLayoutWithFixedBackgroundImage: FC<PageLyoutOwnProps> = ({
  backgroundImageUrl,
  backgroundOverlay,
  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  backgroundSize,
  children,
  htmlTitle,
}) => {
  usePublicPage();
  useGuidedTour();
  useTitle(htmlTitle);
  useMetaDescription(htmlTitle);

  const defaultBackgroundOverlay =
    'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))';

  const defaultBackgroundPosition = '29%';
  const computedBackgroundPositionX = useMemo(() => {
    if (!backgroundPositionX) {
      return backgroundPosition ?? defaultBackgroundPosition;
    }
    return backgroundPositionX;
  }, [backgroundPosition, backgroundPositionX]);
  const computedBackgroundPositionY = useMemo(() => {
    if (!backgroundPositionY) {
      return backgroundPosition ?? defaultBackgroundPosition;
    }
    return backgroundPositionY;
  }, [backgroundPosition, backgroundPositionY]);

  const computedBackgroundSize = useMemo(() => {
    return backgroundSize ?? 'cover';
  }, [backgroundSize]);

  return (
    <>
      <HambugerMenu />
      <div
        className=""
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`,
          height: '100vh',
          backgroundPositionX: computedBackgroundPositionX,
          backgroundPositionY: computedBackgroundPositionY,
          backgroundSize: computedBackgroundSize,
          position: 'relative',
          overflow: 'hidden',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            background: `${backgroundOverlay ?? defaultBackgroundOverlay}`,
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center overflow-y-scroll">
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

PublicPageLayoutWithFixedBackgroundImage.displayName = 'PublicPageLayoutWithFixedBackgroundImage';
