import { FC } from 'react';
import { Link } from 'react-router-dom';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { usePublicPage } from '../contexts/userContext';
import { useGuidedTour } from '../hooks/useGuidedTour';
import { useMetaDescription } from '../hooks/useMetaDescription';
import { useTitle } from '../hooks/useTitle';
import { Footer } from './page-layout/Footer';
import { HambugerMenu } from './page-layout/HamburgerMenu';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
export const LandingProPage: FC = () => {
  usePublicPage();
  useGuidedTour();
  useTitle('Accueil | Professionnels | Marie-Anne Sévin');
  useMetaDescription('Accueil | Professionnels | Marie-Anne Sévin');
  return (
    <>
      <HambugerMenu />

      <div
        className="bg-image"
        style={{
          backgroundImage: `url("/images/marie-anne-sevin-pro.webp")`,
          height: '100vh',
          maxHeight: '100vh',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center overflow-y-scroll">
            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <div className="mt-4">
              <PageTitle>Marie-Anne Sévin</PageTitle>
            </div>
            <div>
              <PageSubTitle className="fs-7">
                Accompagnement Relationnel, Thérapeutique et Systémique
              </PageSubTitle>
              <PageSubTitle className="fs-7">
                Au service des entreprises et des institutions (écoles, crèches, ephad ...)
              </PageSubTitle>
              <PageSubTitle className="fs-7 mt-4">
                Supervision / coaching systémique (pro et perso)
              </PageSubTitle>
              <PageSubTitle className="fs-7">
                Bien-être du dirigeant (un accompagnement global corps et conscience)
              </PageSubTitle>
              <PageSubTitle className="fs-7">
                Musique relationnelle (crèches, écoles, Hôpitaux, Ehpad…)
              </PageSubTitle>
              <PageSubTitle className="fs-7">Constellations Systémiques en entreprise</PageSubTitle>
              <PageSubTitle className="fs-7">
                Cohésion d’équipe (mandala vocal, sensibilisation au handicap, théâtre…)
              </PageSubTitle>
              <PageSubTitle className="fs-7">
                Manager musicien Evénementiel (de la chanson française à la soul)
              </PageSubTitle>
              <PageSubTitle className="fs-7">Spectacles (crèches et écoles)</PageSubTitle>
            </div>

            <Link
              to="/professionnels/calendrier"
              className="text-decoration-none btn btn-outline-light fw-bolder w-75 mt-4"
              title="Calendrier 2025"
              aria-label="Calendrier 2025"
            >
              <div className="d-flex flex-column align-items-center">
                <span>Inscriptions ateliers et stages</span>
              </div>
            </Link>

            <OpenExternalLinkButton
              className="btn btn-outline-light fw-bolder w-75 mt-4"
              link="https://calendar.google.com/calendar/u/0/appointments/AcZssZ1eB8RwFR4X3gqAJRGBFG18VLTl87iCRz94200="
              title="Me contacter ou prendre un rendez-vous"
              analyticsEvent="rdv-ou-contact"
            >
              <div className="d-flex flex-column align-items-center">
                <span>Me contacter</span>
                <span>ou</span>
                <span>Prendre un rendez-vous</span>
              </div>
            </OpenExternalLinkButton>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

LandingProPage.displayName = 'LandingProPage';
