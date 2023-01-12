import { Card } from 'react-bootstrap';
import { CalendlyButton } from './CalendlyButton';

export const ActivityCard: React.FC = () => {
  return (
    <>
      <Card border="secondary" className="opacity-75" style={{ maxWidth: '90vw' }}>
        <Card.Header className="fs-5">Soirée tantra</Card.Header>
        <Card.Body>
          <Card.Text className="fs-7">Soirée tantra à la yourte des Mousseaux</Card.Text>
          <Card.Text className="fs-7">
            Un lieu magique niché au coeur de la nature et rempli de vibrations
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <CalendlyButton />
        </Card.Footer>
      </Card>
    </>
  );
};

ActivityCard.displayName = 'ActivityCard';
