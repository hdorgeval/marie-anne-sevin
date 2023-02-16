import { FC } from 'react';

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

export interface DescriptionOwnProps {
  children: React.ReactNode;
}
export const Description: FC<DescriptionOwnProps> = ({ children }) => {
  if (typeof children !== 'string') {
    return <>{children}</>;
  }
  const text = children as string;
  const sentences = encodeThreeDots(text)
    .split('.')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

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
