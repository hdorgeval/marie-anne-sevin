import React, { FC, ReactElement } from 'react';
import { Description, DescriptionOwnProps } from '../../components/Description';

export interface AnimatedByOwnProps {
  children: React.ReactNode;
}

export interface ExposedProperties {
  FigCaption: FC<FigCaptionOwnProps>;
  Img: FC<ImgOwnProps>;
  Description: FC<DescriptionOwnProps>;
}

export const AnimatedBy: FC<AnimatedByOwnProps> & ExposedProperties = ({ children }) => {
  const caption = React.Children.map(children, (child) => {
    const item = child as ReactElement<FC<FigCaptionOwnProps>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isFigCaption = (item.type as any).displayName === FigCaption.displayName;
    return isFigCaption ? child : null;
  });

  const img = React.Children.map(children, (child) => {
    const item = child as ReactElement<FC<ImgOwnProps>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isImage = (item.type as any).displayName === Img.displayName;
    return isImage ? child : null;
  });

  const description = React.Children.map(children, (child) => {
    const item = child as ReactElement<FC<DescriptionOwnProps>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isDescription = (item.type as any).displayName === Description.displayName;
    return isDescription ? child : null;
  });

  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="photo-crop-elipse-portrait">{img}</div>
        <div className="w-100">{caption}</div>
      </div>
      <div>
        <div>{description}</div>
      </div>
    </>
  );
};

interface FigCaptionOwnProps {
  children: React.ReactNode;
}
const FigCaption: FC<FigCaptionOwnProps> = ({ children }) => {
  return <p className="ps-3 mb-0">{children}</p>;
};
FigCaption.displayName = 'FigCaption';

AnimatedBy.displayName = 'AnimatedBy';
AnimatedBy.FigCaption = FigCaption;
interface ImgOwnProps {
  src: string;
  className?: string;
}

const Img: FC<ImgOwnProps> = ({ src, className }) => {
  return <img src={src} className={`card-img ${className}`} alt="photo animateur" />;
};
Img.displayName = 'Img';
AnimatedBy.Img = Img;
AnimatedBy.Description = Description;
