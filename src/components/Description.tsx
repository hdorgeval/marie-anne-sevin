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

function toEmphasized(
  sentence: string,
  words: string[] | undefined,
  wordsCssClassNames: string[] | undefined,
): string {
  if (!Array.isArray(words)) {
    return sentence;
  }
  if (words.length === 0) {
    return sentence;
  }

  if (!Array.isArray(wordsCssClassNames)) {
    return sentence;
  }
  if (wordsCssClassNames.length === 0) {
    return sentence;
  }

  let result = sentence;
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    if (result.includes(word)) {
      // eslint-disable-next-line no-console
      console.log('HDO > toEmphsized', { word });
      result = result.replaceAll(
        word,
        `<span class="${(wordsCssClassNames ?? []).join(' ')}">${word}</span>`,
      );
    }
  }

  return result;
}

export interface DescriptionOwnProps {
  children: React.ReactNode;
  emphasizedWords?: string[];
  emphasizedWordsCssClassNames?: string[];
}
export const Description: FC<DescriptionOwnProps> = ({
  children,
  emphasizedWords,
  emphasizedWordsCssClassNames,
}) => {
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
          <p
            key={0}
            className="pt-2"
            dangerouslySetInnerHTML={{
              __html: toEmphasized(
                toClosedSentence(sentence),
                emphasizedWords,
                emphasizedWordsCssClassNames,
              ),
            }}
          ></p>
        ) : (
          <p
            key={index}
            dangerouslySetInnerHTML={{
              __html: toEmphasized(
                toClosedSentence(sentence),
                emphasizedWords,
                emphasizedWordsCssClassNames,
              ),
            }}
          ></p>
        ),
      )}
    </>
  );
};

Description.displayName = 'Description';
