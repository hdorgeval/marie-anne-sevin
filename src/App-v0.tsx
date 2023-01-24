import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import photoConstellations from './assets/constellations.png';
import photoMarieAnneSevin from './assets/marie-anne-sevin.webp';
import photoVishuda from './assets/vishudda.jpg';
import { CalendlyCard } from './CalendlyCard';
export function AppV0() {
  return (
    <div className="App">
      <div className="mt-1 d-flex flex-row flex-wrap justify-content-center align-items-center">
        <CalendlyCard
          backgroundImage={photoMarieAnneSevin}
          title="Soirée tantra"
          shortDescription="Soirée tantra à la yourte des Mousseaux (78). Un lieu magique niché au coeur de la nature
              et rempli de vibrations."
          shortDescriptionColor="text-light"
          calendlyLink="https://calendly.com/marie-anne-sevin/soiree-tantra-yourte?hide_gdpr_banner=1"
          calendlyLinkTitle="S'inscrire"
        />

        <CalendlyCard
          backgroundImage={photoVishuda}
          title="Entretien préalable"
          shortDescription="L'entretien téléphonique est l'occasion d'échanger pour valider des deux côtés votre démarche pour toute nouvelle inscription."
          shortDescriptionColor="text-light"
          calendlyLink="https://calendly.com/marie-anne-sevin/entretien-telephonique?hide_gdpr_banner=1"
          calendlyLinkTitle="Prendre rendez-vous"
        />

        <CalendlyCard
          backgroundImage={photoConstellations}
          title="Tantra et Constellations"
          shortDescription="4 jours de stage en immersion. La rencontre du tantra et des constellations est un appel à une transformation profonde."
          shortDescriptionColor="text-light"
          calendlyLink="https://calendly.com/marie-anne-sevin/tantra-constellations?hide_gdpr_banner=1"
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
