import { FC, useMemo } from 'react';

export interface QuoteOwnProps {
  sentence: string;
  author: string;
}
function sentenceWithoutLastWord(words: string[]): string {
  const allWordsButLast = words.slice(0, words.length - 1);
  return allWordsButLast.join(' ');
}

function lastWord(words: string[]): string {
  const onlyLastWord = words.slice(-1);
  return onlyLastWord.pop() ?? '';
}

export const Quote: FC<QuoteOwnProps> = ({ sentence, author }) => {
  const words = useMemo(() => {
    return sentence
      .trim()
      .split(' ')
      .filter((w) => w.length > 0);
  }, [sentence]);

  return (
    <figure className="pt-3 rounded">
      <blockquote className="blockquote pb-0">
        <p>
          <sup className="pe-1">
            <i className="bi bi-quote fs-5"></i>
          </sup>
          <span className="fs-5 fst-italic">{sentenceWithoutLastWord(words)}</span>
          <span className="text-nowrap fs-5 fst-italic">
            {' '}
            {lastWord(words)}
            <sup className="ps-1">
              <i className="bi bi-quote fs-5 bi-rotate-180"></i>
            </sup>
          </span>
        </p>
      </blockquote>
      <figcaption className="blockquote-footer mb-0 mt-2 font-italic text-muted">
        {author}
      </figcaption>
    </figure>
  );
};

Quote.displayName = 'Quote';
