import { FC } from 'react';
import portrait2 from '../assets/portrait-cs-1.webp';
import portrait1 from '../assets/portrait-mas-1.png';
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
export const TantraFemme: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2023/06/16',
    endDate: '2023/06/18',
  });

  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-sons-mantras-tantra.jpg"
        backgroundPosition="33%"
        htmlTitle="Tantra femme | Stage | Marie-Anne Sévin"
      >
        <div>
          <div className="mt-4 pt-4">
            <PageTitle>L'intime au cœur du sacré</PageTitle>
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
                <h5 className="card-title mb-0 fw-bolder">Tantra Femme Corps-Coeur-Conscience</h5>
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
                      <span className="text-nowrap fs-7">Yourte des Mousseaux.</span>
                      <span className="text-nowrap fs-7"> Jouars Ponchartrain (78)</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <Description>
                  Ce module avancé* tantra femme est une invitation à vous relier à l'espace sacré
                  en vous. Rituels, méditations, chants et danses vous amèneront petit à petit à
                  laisser la divine s'exprimer et ainsi libérer votre potentiel. En accueillant
                  l'expression de votre sexe, vous pourrez la relier au cœur ainsi qu'à la
                  conscience et rayonner à partir de cet axe puissant, en confiance. La synergie
                  créée par la rencontre de ces femmes uniques permet de se soutenir mutuellement
                  dans cette initiation, pour oser l'intimité et l'authenticité. *entretien
                  téléphonique préalable
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
                    <i className="bi bi-calendar-event fs-1 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="">Début du stage : le vendredi à 19h</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="pb-0">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-x fs-1 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="">Fin du stage : le dimanche à 17h</span>
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
                      <span className="">Animation : 220€</span>
                      <span className="">Hébergement : 35€ par nuitée</span>
                      <span className="">
                        Repas : repas partagés (possibilité de commander des repas)
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
                        Charlotte Seban <CallablePhoneNumber phoneNumber="06 14 22 01 81" />
                      </span>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pb-0">
                <p>Un acompte de 70€ est demandé à l'inscription.</p>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <OpenExternalLinkButton
                  className="btn btn-outline-light fw-bolder w-100 mt-0"
                  link="https://forms.gle/1PHJw7ToYDd4VS9a9"
                  analyticsEvent="pre-inscription-tantra-femme"
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
                  Animé par Marie-Anne Sévin assistée de Charlotte Seban
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
                    <AnimatedBy.FigCaption>
                      Charlotte, ostéopathe et animatrice de cercles de femmes et de stages de
                      tantra.
                    </AnimatedBy.FigCaption>
                  </AnimatedBy>
                </TransparentListGroupItem>
              </ul>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <OpenExternalLinkButton
                  className="btn btn-outline-light fw-bolder w-100 mt-0"
                  link="https://forms.gle/1PHJw7ToYDd4VS9a9"
                  analyticsEvent="pre-inscription-tantra-femme"
                  title="Se pré-inscrire au stage"
                >
                  Se pré-inscrire au stage
                </OpenExternalLinkButton>
              </div>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

TantraFemme.displayName = 'TantraFemme';
