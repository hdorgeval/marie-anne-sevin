import React, { FC, ReactElement } from 'react';

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
}
const Img: FC<ImgOwnProps> = ({ src }) => {
  return <img src={src} className="card-img" />;
};
Img.displayName = 'Img';
AnimatedBy.Img = Img;

interface DescriptionOwnProps {
  children: React.ReactNode;
}
const Description: FC<DescriptionOwnProps> = ({ children }) => {
  if (typeof children !== 'string') {
    return <>{children}</>;
  }
  const text = children as string;
  const sentences = encodeThreeDots(text)
    .split('.')
    .map((s) => s.trim());

  return (
    <>
      {sentences.map((sentence, index) =>
        index === 0 ? (
          <p key={0} className="pt-2">
            {toClosedSentence(sentence)}
          </p>
        ) : (
          <p key={index}>{toClosedSentence(sentence)}</p>
        ),
      )}
    </>
  );
};
Description.displayName = 'Description';
AnimatedBy.Description = Description;

function toClosedSentence(sentence: string): string {
  const result = hasThreeDotsAtTheEnd(sentence)
    ? decodeThreeDots(sentence)
    : `${decodeThreeDots(sentence)}.`;

  return result;
}

function encodeThreeDots(sentence: string): string {
  return sentence.replaceAll('...', '|||');
}

function decodeThreeDots(sentence: string): string {
  return sentence.replaceAll('|||', '...');
}

function hasThreeDotsAtTheEnd(sentence: string): boolean {
  return sentence.endsWith('|||');
}
