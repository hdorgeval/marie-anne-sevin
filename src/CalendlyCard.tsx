import { Card } from 'react-bootstrap';
import { CalendlyButton } from './CalendlyButton';

export interface ActivityCardOwnProps {
  backgroundImage: string;
  title: string;
  shortDescription: string;
  calendlyLinkTitle: string;
  calendlyLink: string;
}

export const CalendlyCard: React.FC<ActivityCardOwnProps> = ({
  backgroundImage,
  title,
  shortDescription,
  calendlyLink,
  calendlyLinkTitle,
}) => {
  const dimensionsUnit = 'rem';
  const cardHeight = 17;
  const cardWidth = 23;
  const backgroundImageHeight = cardHeight * 0.991;
  return (
    <>
      <Card
        className="m-3 ratio ratio-4x3"
        border="primary"
        style={{
          maxWidth: `${cardWidth}${dimensionsUnit}`,
          minHeight: `${cardHeight}${dimensionsUnit}`,
          maxHeight: `${cardHeight}${dimensionsUnit}`,
        }}
      >
        <Card.Img
          style={{ height: `${backgroundImageHeight}${dimensionsUnit}`, objectFit: 'cover' }}
          src={backgroundImage}
          alt="..."
        />
        <Card.ImgOverlay
          className="d-flex flex-column justify-content-between align-items-center"
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
          }}
        >
          <Card.Header className="fs-5 fw-bolder w-100" style={{ backgroundColor: 'inherit' }}>
            {title}
          </Card.Header>
          <Card.Body className="w-100">
            <Card.Text className="fs-7">{shortDescription}</Card.Text>
          </Card.Body>
          <Card.Footer className="opacity-75 w-100" style={{ backgroundColor: 'inherit' }}>
            <CalendlyButton link={calendlyLink} title={calendlyLinkTitle} />
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

CalendlyCard.displayName = 'CalendlyCard';
