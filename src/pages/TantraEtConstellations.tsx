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
export const TantraEtConstellations: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2024/02/16',
    endDate: '2024/02/18',
  });
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-tantra-et-constellations-2.png"
        backgroundPosition="24%"
        htmlTitle="Tantra et Constellations | Stage | Marie-Anne Sévin"
        backgroundOverlay="linear-gradient(rgba(90, 0, 0, 0.7), rgba(90, 90, 0, 0.5))"
      >
        <div>
          <div className="mt-4 pt-4">
            <PageTitle>Tantra et Constellations</PageTitle>
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
                <h5 className="card-title mb-0 fw-bolder">
                  Liberté, Polarité, Unité : le thème sera défini par une constellation lors de vos
                  inscriptions
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
                      {/* <span className="text-nowrap fs-7">Yourte des Mousseaux</span>
                      <span className="text-nowrap fs-7"> Jouars Ponchartrain (78)</span> */}
                      <span className="text-nowrap fs-7"> Bourneville (27)</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <Description>
                  Lors de ce stage, nous alternerons des structures de tantra (méditation actives,
                  toucher méditatif, pratiques de groupe , vagues…) ainsi que des temps de
                  constellations familiales ou systémiques. Un thème plus précis sera déterminé en
                  amont, permettant d'explorer un sujet d'approfondissement : Polarités, Œdipe,
                  sexualité, ouverture du cœur, consentement, chakras, ombres et lumières,
                  corps-mental-Ego, les relations...
                </Description>
                <Description>
                  Les possibilités sont nombreuses et toutes passionnantes. Le choix sera déterminé
                  par une constellation lors de vos inscriptions.
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
                      <span className="">Fin du stage : le dimanche à 16h30</span>
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
                      <span className="">Animation : 160€</span>
                      <span className="">Hébergement : 40€</span>
                      <span className="mt-2">
                        Repas : repas partagés avec possibilité de faire une commande groupée livrée
                        sur place par Lexio (traiteur Antillais).
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
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="py-3">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-car-front-fill fs-1 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">
                        Nous organiserons un <span className="text-light">co-voiturage</span>, ou
                        venons vous chercher à la gare qui se situe à 7 minutes du lieu de stage.
                      </span>
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="py-3">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-handbag fs-1 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">
                        <Description
                          emphasizedWords={[
                            'zafu',
                            'nécessaire de massage',
                            'une parure',
                            'serviette',
                            'T-shirts',
                            'tenue festive',
                            'sous-vêtements',
                            'instrument',
                            'masculins et féminins',
                          ]}
                          emphasizedWordsCssClassNames={['text-info-emphasis']}
                        >
                          Concernant l'hébergement, prévoir une parure de lit 1 personne, votre
                          nécessaire de toilette avec votre serviette et des bouchons d'oreilles si
                          toutefois les bruits des grenouilles ou autre créature humaine vous
                          dérangeaient. Apportez votre zafu ou coussin de méditation, votre
                          nécessaire de massage (grand drap, serviette épaisse, huile neutre), des
                          changes de plusieurs T-shirts ainsi qu'une tenue festive et des
                          sous-vêtements ne craignant pas d'être tachés ou huilés. Apportez aussi
                          des accessoires ou tenues dits masculins et féminins. Vous pouvez apporter
                          votre tambour ou autre instrument d'harmonisation si le coeur vous en dit.
                        </Description>
                      </span>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pb-0">
                <p>Un acompte de 70€ est demandé à l'inscription.</p>
                <p>L'hébergement est à régler séparément sur place.</p>
              </div>
            </SemiTransparentTile>

            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <OpenExternalLinkButton
                  className="btn btn-outline-light fw-bolder w-100 mt-0"
                  link="https://forms.gle/jfrTH7JvBtdv1bhv8"
                  analyticsEvent="pre-inscription-tantra-et-constellations"
                  title="Se pré-inscrire au stage"
                >
                  Se pré-inscrire au stage
                </OpenExternalLinkButton>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
              <div className="card-body">
                <Quote
                  sentence="Que vos choix soient le reflet de vos espoirs et non de vos peurs."
                  author="Nelson Mandela"
                />
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
                      dans ma vie: bien-être par la voix, massage tantrique, méditation,
                      sonothérapie, constellations systémiques, et bien d'autres possibles. Le
                      tantra et les constellations sont pour moi deux outils puissants visant à
                      créer plus d'harmonie dans la profondeur et dans l'expérience sans oublier le
                      plaisir et le jeu.
                    </AnimatedBy.Description>
                  </AnimatedBy>
                </TransparentListGroupItem>
              </ul>
            </SemiTransparentTile>

            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <OpenExternalLinkButton
                  className="btn btn-outline-light fw-bolder w-100 mt-0"
                  link="https://forms.gle/jfrTH7JvBtdv1bhv8"
                  analyticsEvent="pre-inscription-tantra-et-constellations"
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

TantraEtConstellations.displayName = 'TantraEtConstellations';
