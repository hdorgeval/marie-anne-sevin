import { FC } from 'react';

function toClosedSentence(sentence: string): string {
  if (
    hasColonsAtTheEnd(sentence) ||
    hasSemiColonsAtTheEnd(sentence) ||
    hasExclamationPointAtTheEnd(sentence) ||
    hasSmileyAtTheEnd(sentence)
  ) {
    return decodeThreeDots(sentence);
  }
  if (hasThreeDotsAtTheEnd(sentence)) {
    return decodeThreeDots(sentence);
  }

  return `${decodeThreeDots(sentence)}.`;
}

function toSentenceWithNotes(sentence: string): string {
  if (hasNote(sentence)) {
    return encodeNote(sentence);
  }

  return sentence;
}

function encodeThreeDots(sentence: string): string {
  return sentence.replaceAll('...', '|||');
}

function encodeNote(sentence: string): string {
  return sentence.replaceAll('*', '<sup class="">*</sup>');
}

function decodeThreeDots(sentence: string): string {
  return sentence.replaceAll('|||', '...');
}

function hasThreeDotsAtTheEnd(sentence: string): boolean {
  return sentence.endsWith('|||');
}

function hasNote(sentence: string): boolean {
  return sentence.includes('*');
}
function hasColonsAtTheEnd(sentence: string): boolean {
  return sentence.endsWith(':');
}

function hasSemiColonsAtTheEnd(sentence: string): boolean {
  return sentence.endsWith(';');
}

function hasExclamationPointAtTheEnd(sentence: string): boolean {
  return sentence.endsWith('!');
}

function hasSmileyAtTheEnd(sentence: string): boolean {
  return sentence.endsWith(';)') || sentence.endsWith(':)');
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
                toSentenceWithNotes(toClosedSentence(sentence)),
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
                toSentenceWithNotes(toClosedSentence(sentence)),
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
