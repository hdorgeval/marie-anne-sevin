import { FC } from 'react';
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
export const FemmeSauvage: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2024/03/15',
    endDate: '2024/03/17',
  });

  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-femme-sauvage.webp"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.0))"
        backgroundPosition="42%"
        htmlTitle="À la rencontre de la femme sauvage | Stage | Marie-Anne Sévin"
      >
        <div>
          <div className="mt-4 pt-4">
            <PageTitle>À la rencontre de la femme sauvage</PageTitle>
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
                <h5 className="card-title mb-0 fw-bolder">Un weekend pour explorer votre nature</h5>
              </div>

              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-1 pb-0">
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
                  Ce module tantra femme est une invitation à vous relier au côté animal et
                  archaïque de la femme. Rituels en pleine nature, méditations, chants et danses
                  vous amèneront petit à petit à laisser cette part sauvage s'exprimer et ainsi
                  libérer désir, créativité et sexualité. En accueillant l'expression de votre
                  ventre, vous pourrez la relier au cœur ainsi qu'à la conscience et rayonner à
                  partir de cet axe puissant, en confiance. La synergie créée par la rencontre de
                  ces femmes uniques permet de se soutenir mutuellement dans cette initiation, cette
                  rencontre avec la nature, avec votre nature.
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

                <TransparentListGroupItem className="py-3">
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
                      <span className="mt-2">
                        Pour toute question ou renseignement pour l'hébergement:
                      </span>
                      <span className="">
                        Christine Lorand <CallablePhoneNumber phoneNumber="06 13 05 01 76" />
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
                  link="https://forms.gle/fcZ58rbSjWJXmo9F7"
                  analyticsEvent="pre-inscription-femme-sauvage"
                  title="Se pré-inscrire au stage"
                >
                  Se pré-inscrire au stage
                </OpenExternalLinkButton>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
              <div className="card-body">
                <Quote sentence="Sauvage est la proximité du sacré" author="Friedrich Hölderlin" />
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Animé par Marie-Anne Sévin</h5>
              </div>
              <ul className="list-group list-group-flush">
                <TransparentListGroupItem className="">
                  <AnimatedBy>
                    <AnimatedBy.Img src={portrait1} />
                    <AnimatedBy.FigCaption>
                      Marie-Anne, musicienne, masseuse et thérapeute.
                    </AnimatedBy.FigCaption>
                    <AnimatedBy.Description>
                      Mon accompagnement se nourrit des nombreuses approches que j'ai rencontrées
                      dans ma vie. Sur le chemin du tantra depuis plus de 10 ans, je propose stages,
                      retraites et soirées tantra ainsi que des soins individuels ou couple.
                    </AnimatedBy.Description>
                  </AnimatedBy>
                </TransparentListGroupItem>
              </ul>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

FemmeSauvage.displayName = 'FemmeSauvage';
