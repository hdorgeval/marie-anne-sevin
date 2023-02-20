import { FC } from 'react';

export interface FiveStarRatingOwnProps {
  className?: string;
}
export const FiveStarRating: FC<FiveStarRatingOwnProps> = ({ className }) => {
  return (
    <span className={className}>
      <i className="bi bi-star-fill text-warning-emphasis"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
    </span>
  );
};

FiveStarRating.displayName = 'FiveStarRating';
