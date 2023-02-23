import { FC, useCallback, useMemo } from 'react';

export interface MultiLinesQuoteOwnProps {
  sentences: string[];
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

export const MultiLinesQuote: FC<MultiLinesQuoteOwnProps> = ({ sentences, author }) => {
  const words = useCallback((sentence: string) => {
    return sentence
      .trim()
      .split(' ')
      .filter((w) => w.length > 0);
  }, []);

  const lastIndex = useMemo(() => {
    return sentences.length - 1;
  }, [sentences.length]);

  return (
    <figure className="pt-3 rounded">
      <blockquote className="blockquote pb-0">
        {sentences.map((s, index) => (
          <p key={index}>
            <>
              {index === 0 && (
                <>
                  <sup className="pe-1">
                    <i className="bi bi-quote fs-5"></i>
                  </sup>
                  <span className="fs-5 fst-italic">{s}</span>
                </>
              )}
              {index > 0 && index < lastIndex && <span className="fs-5 fst-italic ps-4">{s}</span>}
              {index === lastIndex && (
                <>
                  <span className="fs-5 fst-italic ps-4">{sentenceWithoutLastWord(words(s))}</span>
                  <span className="text-nowrap fs-5 fst-italic ">
                    {' '}
                    {lastWord(words(s))}
                    <sup className="ps-1">
                      <i className="bi bi-quote fs-5 bi-rotate-180"></i>
                    </sup>
                  </span>
                </>
              )}
            </>
          </p>
        ))}
      </blockquote>
      <figcaption className="blockquote-footer mb-0 mt-2 font-italic text-muted">
        {author}
      </figcaption>
    </figure>
  );
};

MultiLinesQuote.displayName = 'MultiLinesQuote';
