import { FC } from 'react';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { ENTRETIEN_PREALABLE_CALENDAR_LINK } from './page-layout/CalendarLinks';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const InitiationMassageMeditatif: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-initiation-massage-meditatif.png"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.0))"
      backgroundPosition="80%"
      htmlTitle="Massage méditatif | Initiation | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Initiation au massage méditatif</PageTitle>
        </div>
        <div>
          <PageSubTitle>
            <OpenExternalLinkButton
              className="btn btn-outline-light fw-bolder w-75 mt-1"
              link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
              analyticsEvent="rdv-initiation-massage-meditatif"
              title="Prendre rendez-vous"
            >
              Prendre rendez-vous
            </OpenExternalLinkButton>
          </PageSubTitle>
        </div>
        <div className="d-flex px-0 pt-4 flex-column justify-content-between">
          <SemiTransparentTile className="card text-start text-light font-monserrat">
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="pt-1 pb-0">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-person-lines-fill fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Pour vous et votre partenaire (initiation en duo)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-clock-history fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle pt-1">
                    <span className="text-nowrap fs-7">
                      3 séances de 3h, à répartir sur 2 à 6 mois
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="mt-0 pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">31 rue Rieussec, Viroflay (78)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pt-1 pb-0">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-3 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">250€ par séance</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-exclamation-diamond fs-2 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Rdv validé uniquement après entretien téléphonique</span>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                      analyticsEvent="rdv-rituel-tantrique"
                      title="Prendre rendez-vous pour l'entretien préalable"
                    >
                      Prendre rendez-vous pour l'entretien préalable
                    </OpenExternalLinkButton>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pt-2">
              <Description>
                Vous souhaitez apprendre et partager le toucher méditatif avec un ou une partenaire
                ? Je propose un cursus de 3 x 3h pour 2 personnes. Lors de ces 3 sessions, je vous
                transmets des clefs pour apprivoiser ce toucher spécifique à travers la méditation
                et des exercices pratiques. Chacun d'entre vous est invité à donner et recevoir afin
                d'affiner ses perceptions et de trouver le juste contact.
              </Description>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-1"
                link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                analyticsEvent="rdv-initiation-massage-meditatif"
                title="Prendre rendez-vous"
              >
                Prendre rendez-vous
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

InitiationMassageMeditatif.displayName = 'InitiationMassageMeditatif';
