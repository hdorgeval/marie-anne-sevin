import 'bootstrap-icons/font/bootstrap-icons.css';
import { ActivityCard } from './ActivityCard';
import './App.css';
import photoMarieAnneSevin from './assets/marie-anne-sevin.webp';
function App() {
  return (
    <div className="App">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <ActivityCard
          backgroundImage={photoMarieAnneSevin}
          title="Soirée tantra"
          shortDescription="Soirée tantra à la yourte des Mousseaux (78). Un lieu magique niché au coeur de la nature
              et rempli de vibrations."
          calendlyLink="https://calendly.com/marie-anne-sevin/soiree-tantra-yourte?hide_gdpr_banner=1"
          calendlyLinkTitle="S'inscrire"
        />
      </div>
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
