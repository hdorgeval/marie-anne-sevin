import type { FC } from 'react';
import portrait1 from '../assets/portrait-mas-1.png';
import portrait2 from '../assets/portrait-oliveros.webp';
import { CallablePhoneNumber } from '../components/CallablePhoneNumber';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { Quote } from '../components/Quote';
import { useCalendar } from '../hooks/useCalendar';
import { AnimatedBy } from './page-layout/AnimatedBy';
import { ENTRETIEN_PREALABLE_CALENDAR_LINK } from './page-layout/CalendarLinks';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const TantraHomme: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2025/02/28',
    endDate: '2025/03/02',
  });

  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-tantra-homme.webp"
      backgroundPosition="33%"
      htmlTitle="Tantra homme | Stage | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Tantra Homme</PageTitle>
        </div>
        <div>
          {startDateInfos.isPassed ? (
            <PageSubTitle>Dates à venir</PageSubTitle>
          ) : (
            <PageSubTitle>{fromStartDateToEndDateText}</PageSubTitle>
          )}
        </div>
        <div className="d-flex px-0 pt-4 flex-column justify-content-between">
          <SemiTransparentTile className="card text-start text-light font-monserrat">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Les 4 éléments</h5>
              <h6 className="card-title mb-0 fw-bolder">Tantra homme animé par une femme</h6>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="mt-0 pt-1 pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-house-heart fs-3 me-4" />
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">Stage en résidentiel</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="mt-0 pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4" />
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7"> Bournéville (27)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pt-2">
              <Description>
                Ce stage est né d'un élan fort dans la résonnances des accompagnements que je
                propose depuis 15 ans notamment auprès des hommes. Le thème des 4 éléments est une
                bonne entrée en "matière" pour explorer l'unité et la liberté d'être de chacun et
                prendre conscience des différents conditionnements et héritages pour mieux s'en
                détacher. méditation, structures et constellations seront au programme de ce stage.
              </Description>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Détails</h5>
            </div>
            <ul className="list-group list-group-flush">
              <TransparentListGroupItem className="pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-1 me-4" />
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Début du stage : le vendredi à 19h</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-x fs-1 me-4" />
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Fin du stage : le dimanche à 16h30</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-exclamation-diamond fs-1 me-4" />
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">
                      Inscription validée uniquement après entretien téléphonique
                    </span>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-1"
                      link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                      analyticsEvent="rdv-entretien-prealable"
                      title="Prendre rendez-vous pour l'entretien préalable"
                    >
                      Prendre rendez-vous pour l'entretien préalable
                    </OpenExternalLinkButton>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-currency-euro fs-1 me-4" />
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Animation : 220€</span>
                    <span className="">
                      Hébergement : 50€ pour la durée du stage, avec possibilité d'arriver la veille
                      et de repartir le lendemain
                    </span>
                    <span className="">Repas : repas partagés</span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4" />
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Pour toute question ou renseignement :</span>
                    <span className="">
                      Marie-Anne Sévin <CallablePhoneNumber phoneNumber="06 83 47 97 74" />
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pb-0">
              <p>Un acompte de 100€ est demandé à l'inscription.</p>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-0"
                link="https://forms.gle/JikSKyQaBHo45dCF8"
                analyticsEvent="pre-inscription-tantra-homme"
                title="Se pré-inscrire au stage"
              >
                Se pré-inscrire au stage
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Quote
                sentence="On ne vit une intimité complète que dans le cercle restreint d'un lieu aimé."
                author="François Hertel"
              />
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">
                Animé par Marie-Anne Sévin assistée de Oliv'Eros
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <TransparentListGroupItem className="">
                <AnimatedBy>
                  <AnimatedBy.Img src={portrait1} />
                  <AnimatedBy.FigCaption>
                    Marie-Anne, musicienne, masseuse et thérapeute.
                  </AnimatedBy.FigCaption>
                </AnimatedBy>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="">
                <AnimatedBy>
                  <AnimatedBy.Img className="img-thumbnail" src={portrait2} />
                  <AnimatedBy.FigCaption>Oliv'Eros</AnimatedBy.FigCaption>
                </AnimatedBy>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-0"
                link="https://forms.gle/JikSKyQaBHo45dCF8"
                analyticsEvent="pre-inscription-tantra-homme"
                title="Se pré-inscrire au stage"
              >
                Se pré-inscrire au stage
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

TantraHomme.displayName = 'TantraHomme';
