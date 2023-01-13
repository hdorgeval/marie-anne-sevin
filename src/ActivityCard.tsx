import { Card } from 'react-bootstrap';
import photoMarieAnneSevin from './assets/marie-anne-sevin.webp';
import { CalendlyButton } from './CalendlyButton';
export const ActivityCard: React.FC = () => {
  return (
    <>
      <Card className="" border="primary" style={{ maxWidth: '21rem', minWidth: '17rem' }}>
        <Card.Img src={photoMarieAnneSevin} alt="..." />
        <Card.ImgOverlay
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
          }}
        >
          <Card.Header className="fs-5" style={{ backgroundColor: 'inherit' }}>
            Soirée tantra
          </Card.Header>
          <Card.Body>
            <Card.Text className="fs-7">
              Soirée tantra à la yourte des Mousseaux. Un lieu magique niché au coeur de la nature
              et rempli de vibrations
            </Card.Text>
          </Card.Body>
          <Card.Footer className="opacity-75" style={{ backgroundColor: 'inherit' }}>
            <CalendlyButton />
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

ActivityCard.displayName = 'ActivityCard';
