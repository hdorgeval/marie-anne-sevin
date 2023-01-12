import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card } from 'react-bootstrap';
import { ActivityCard } from './ActivityCard';
import './App.css';
import photoMarieAnneSevin from './assets/marie-anne-sevin.webp';

function App() {
  return (
    <div className="App">
      <Card className="bg-dark text-white">
        <Card.Img src={photoMarieAnneSevin} alt="..." />
        <Card.ImgOverlay>
          <Card.Body className="h-100">
            <div className="d-flex flex-row mb-3 justify-content-center align-items-start h-100">
              <ActivityCard />
            </div>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <footer>
        <div className="d-flex flex-column align-items-center">
          <span>
            <i className="bi bi-c-circle"></i> Marie-Anne Sévin - 2023 - site beta
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
