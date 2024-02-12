import { FC } from 'react';
import portrait2 from '../assets/portrait-ff-1.png';
import portrait1 from '../assets/portrait-mas-1.png';
import { CallablePhoneNumber } from '../components/CallablePhoneNumber';
import { Description } from '../components/Description';
import { MultiLinesQuote } from '../components/MultiLinesQuote';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { useCalendar } from '../hooks/useCalendar';
import { AnimatedBy } from './page-layout/AnimatedBy';
import { ENTRETIEN_PREALABLE_CALENDAR_LINK } from './page-layout/CalendarLinks';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const VoixEtBolsTibetains: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2023/05/06',
    endDate: '2023/05/08',
  });
  const isCanceled = true;
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-voix-et-bols-tibetains.webp"
      backgroundOverlay="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
      backgroundPosition="33%"
      htmlTitle="Bien être par la voix et bols tibétains | Stage | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Bien être par la voix et bols tibétains</PageTitle>
        </div>
        <div>
          {startDateInfos.isPassed || isCanceled ? (
            <PageSubTitle>Dates à venir</PageSubTitle>
          ) : (
            <PageSubTitle>{fromStartDateToEndDateText}</PageSubTitle>
          )}
        </div>
        <div className="d-flex px-0 pt-4 flex-column justify-content-between">
          <SemiTransparentTile
            className="card text-start text-light font-monserrat"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 79, 93, 0.8))"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">
                2 jours d'exploration vocale corporelle et méditative
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="mt-0 pt-1 pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-house-heart fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">Stage en résidentiel</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="mt-0 pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">Vivandi</span>
                    <span className="text-nowrap fs-7"> Bournéville (27)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pt-2">
              <Description>
                Temps d'exploration corporelle, vocale et créative tout en liberté, vous serez amené
                à accorder et harmoniser votre corps et votre voix. La musique se vivra par le
                corps, le mouvement, la vibration, l'improvisation et l'exploration… Accompagnés des
                bols tibétains, nous découvrirons le pouvoir du son sur le corps et l'esprit .
                Massages sonores, bains de sons, vibrations profondes, mantras, bols tibétains,
                méditations nous permettront de créer l'harmonie pour soi, pour le groupe et au
                delà. Vous pouvez venir avec vos instruments si le coeur vous en dit. Nous viendrons
                également avec les bols tibétains de coffret d'alumine que nous vous mettrons à
                disposition.
              </Description>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-monserrat mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 79, 93, 0.8))"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Détails</h5>
            </div>
            <ul className="list-group list-group-flush">
              <TransparentListGroupItem className="pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-1 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Début du stage : le samedi à 12h</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-x fs-1 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="mt-2">Fin du stage : le lundi à 13h</span>
                    <span className="py-2">
                      Vous avez la possibilité d'arriver la veille et de repartir le lendemain sans
                      surcoût.
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-exclamation-diamond fs-1 me-4"></i>
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
                  <i className="bi bi-currency-euro fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Animation : 180€</span>
                    <span className="">Hébergement : 40€ par nuitée</span>
                    <span className="">
                      Repas : repas partagés et constitués des bonnes choses que vous amènerez
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Pour toute question ou renseignement :</span>
                    <span className="">
                      Marie-Anne Sévin <CallablePhoneNumber phoneNumber="06 83 47 97 74" />
                    </span>
                    <span className="">
                      Floriane Fagot <CallablePhoneNumber phoneNumber="07 71 57 87 00" />
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pb-0">
              <p>Un acompte de 70€ est demandé à l'inscription.</p>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-monserrat mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 79, 93, 0.8))"
          >
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-0"
                link="https://forms.gle/Vy2ASS6EZv4A4AAD7"
                analyticsEvent="pre-inscription-sons-mantras-tantra"
                title="Se pré-inscrire au stage"
              >
                Se pré-inscrire au stage
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-playfair mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 79, 93, 0.8))"
          >
            <div className="card-body">
              <MultiLinesQuote
                sentences={[
                  'Chanter',
                  `Il faut s'y jeter à tue-tête`,
                  `A bras le cœur à fendre l'âme`,
                  'Avec un seul point au programme',
                  `Celui de n'être sûr de rien`,
                ]}
                author="Jean Ferrat"
              />
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-monserrat mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 79, 93, 0.8))"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">
                Animé par Marie-Anne Sévin assistée de Floriane Fagot
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
                  <AnimatedBy.Img src={portrait2} />
                  <AnimatedBy.FigCaption>
                    Floriane, artiste peintre et graveuse, fondatrice de Coffret d'Alumine, boutique
                    Bien-être & Ésotérisme.
                  </AnimatedBy.FigCaption>
                  <AnimatedBy.Description>
                    Ma sensibilité à l'harmonie des formes, des matières, des couleurs, m'a amenée à
                    m'intéresser à la résonance des sons et créer le pôle sonothérapie de la
                    boutique. Soucieuse de l'harmonie sonore, je cherche et propose des instruments
                    artisanaux de qualité : bols, carillons koshi, ...
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

VoixEtBolsTibetains.displayName = 'VoixEtBolsTibetains';
