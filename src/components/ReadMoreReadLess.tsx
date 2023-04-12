import React from 'react';

export interface ReadMoreReadLessProps {
  height: string;
  readMoreText: string;
  readLessText: string;
  children?: React.ReactNode;
}
interface ReadMoreProps {
  height: string;
  readMoreText: string;
  handleToggle: () => void;
  children?: React.ReactNode;
}

interface ReadLessProps {
  height: string;
  readLessText: string;
  handleToggle: () => void;
  children?: React.ReactNode;
}
const ReadMore: React.FC<ReadMoreProps> = ({ children, height, handleToggle, readMoreText }) => {
  return (
    <div className="overflow-hidden position-relative" style={{ maxHeight: height }}>
      {children}

      <span
        aria-label={readMoreText}
        onClick={handleToggle}
        role="button"
        className="badge rounded-pill fs-6 border border-secondary start-50 translate-middle bg-dark position-absolute bottom-0 mb-0 pb-2"
        style={{
          background: 'linear-gradient(to bottom,rgba(0, 0, 0, 1), rgba(79, 79, 93, 0.3))',
        }}
      >
        <i className="bi bi-arrow-bar-down fs-5 me-2"></i>
        <span className="me-1">{readMoreText}</span>
      </span>
    </div>
  );
};

const ReadLess: React.FC<ReadLessProps> = ({ children, readLessText, handleToggle }) => {
  return (
    <>
      {children}
      <div className="mx-auto w-25 d-flex justify-content-center">
        <div
          onClick={handleToggle}
          role="button"
          className="badge rounded-pill fs-7 border border-secondary bg-dark mb-0 py-2"
        >
          <i className="bi bi-arrow-bar-up fs-7 me-1"></i>
          {readLessText}
        </div>
      </div>
    </>
  );
};

export const ReadMoreReadLess: React.FC<ReadMoreReadLessProps> = ({
  children,
  height,
  readMoreText,
  readLessText,
}) => {
  const [isReadMore, setIsReadMore] = React.useState(true);

  const handleToggle = React.useCallback(() => {
    setIsReadMore(!isReadMore);
  }, [isReadMore]);
  return isReadMore ? (
    <ReadMore readMoreText={readMoreText} handleToggle={handleToggle} height={height}>
      {children}
    </ReadMore>
  ) : (
    <ReadLess readLessText={readLessText} handleToggle={handleToggle} height={height}>
      {children}
    </ReadLess>
  );
};

ReadMoreReadLess.displayName = 'ReadMoreReadLess';
