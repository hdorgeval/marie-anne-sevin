import { FC } from 'react';
import chalet1 from '../assets/la-vallee-rose/chalet1.jpg';
import exterieur1 from '../assets/la-vallee-rose/exterieur1.jpg';
import exterieur2 from '../assets/la-vallee-rose/exterieur2.jpg';
import repas1 from '../assets/la-vallee-rose/repas1.jpg';
import salle1 from '../assets/la-vallee-rose/salle1.jpg';
import portrait1 from '../assets/portrait-mas-1.png';
import portrait2 from '../assets/portrait-severine.jpeg';
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
export const TantraEtConstellationsLaValleeRose: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2024/04/12',
    endDate: '2024/04/14',
  });
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-tantra-et-constellations.png"
      backgroundPosition="24%"
      htmlTitle="Tantra et Constellations | Stage | Marie-Anne Sévin"
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
              <h5 className="card-title mb-0 fw-bolder">Œdipe, Narcisse et les miroirs</h5>
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
                    <span className="text-nowrap fs-7">La Vallée Rose</span>
                    <span className="text-nowrap fs-7"> À proximité de Houdan (78)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pt-2">
              <Description>
                Lors de ce stage, nous alternerons des structures de tantra (méditation actives,
                toucher méditatif, pratiques de groupe , vagues…) ainsi que des temps de
                constellations familiales ou systémiques. Notre souhait pour ce stage: explorer
                Œdipe, Narcisse et les miroirs. Quelques projections sont à prévoir et leur
                transformation à traverser :) La chakra danse pourra s'inviter ainsi que le “Je”
                sous toutes ses formes.
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
                    <span className="">Animation : 180€</span>
                    <span className="">Hébergement : 80€</span>
                    <span className="">
                      Repas : repas partagés avec possibilité de faire une commande groupée livrée
                      sur place
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
                      venon vous chercher à la gare de Houdan qui se situe à 5 minutes de la vallée
                      rose.
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
                          'intrument',
                        ]}
                        emphasizedWordsCssClassNames={['text-info-emphasis']}
                      >
                        Concernant l'hébergement, prévoir une parure de lit 1 personne, votre
                        nécessaire de toilette avec votre serviette et des bouchons d'oreilles si
                        toutefois les bruits des grenouilles ou autre créature humaine vous
                        dérangeaient. Apportez votre zafu ou coussin de méditation, votre nécessaire
                        de massage (grand drap, serviette épaisse, huile neutre), des changes de
                        plusieurs T-shirts ainsi qu'une tenue festive et des sous-vêtements ne
                        craignant pas d'être tachés ou huilés. Vous pouvez apporter votre tambour ou
                        autre intrument d'harmonisation si le coeur vous en dit.
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
                link="https://forms.gle/4nEGKJPyvopUYb1Y6"
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
                sentence="Il est pensable que ce que vous appelez l'ordre de l'âme en vienne mettre sens dessus dessous les conventions sociales"
                author="Bert Hellinger"
              />
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">
                Animé par Marie-Anne Sévin et Séverine Lecacheur
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <TransparentListGroupItem className="">
                <AnimatedBy>
                  <AnimatedBy.Img src={portrait1} />
                  <AnimatedBy.FigCaption>
                    Marie-Anne, musicienne, masseuse et thérapeute.
                  </AnimatedBy.FigCaption>
                  <AnimatedBy.Description>
                    Mon accompagnement se nourrit des nombreuses approches que j'ai rencontrées dans
                    ma vie: bien-être par la voix, massage tantrique, méditation, sonothérapie,
                    constellations systémiques, et bien d'autres possibles. Le tantra et les
                    constellations sont pour moi deux outils puissants visant à créer plus
                    d'harmonie dans la profondeur et dans l'expérience sans oublier le plaisir et le
                    jeu.
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="">
                <AnimatedBy>
                  <AnimatedBy.Img src={portrait2} />
                  <AnimatedBy.FigCaption>
                    Séverine : Energéticienne et facilitatrice d'Harmonie.
                  </AnimatedBy.FigCaption>
                  <AnimatedBy.Description>
                    j'ai à cœur d'accompagner les personnes à se révéler à elles-mêmes, à se libérer
                    de schémas enfermant, à s'ouvrir à plus d'Abondance, d'Aventure et d'Amour
                    (AAA!).
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">La Vallée Rose ...</h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="mt-0 pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">Une oasis de vie à proximité de Paris</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="mt-0 pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-sign-turn-right fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-0"
                      link="https://goo.gl/maps/jsFxkfk2EMvRNQsF6"
                      analyticsEvent="open-google-maps"
                      title="Itinéraire via G. Maps"
                    >
                      Itinéraire via G. Maps
                    </OpenExternalLinkButton>
                    <OpenExternalLinkButton
                      className="btn btn-outline-light fw-bolder w-100 mt-2"
                      link="https://ul.waze.com/ul?place=ChIJYYIhXYml5kcR0L9615bDcBw&ll=48.79570880%2C1.56493040&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                      analyticsEvent="open-waze"
                      title="Itinéraire via Waze"
                    >
                      Itinéraire via Waze
                    </OpenExternalLinkButton>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3">
                <div className="card bg-color-dark-semi-transparent">
                  <img src={salle1} className="card-img-top" alt="salle 1"></img>
                  <div className="card-body">
                    <Description>
                      La vallée rose est un merveilleux lieu de stage pouvant accueillir jusqu'à 28
                      stagiaires.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="card bg-color-dark-semi-transparent">
                  <img src={exterieur1} className="card-img-top" alt="exterieur"></img>
                  <div className="card-body">
                    <Description>
                      Les couchages se font en chambres, chalets, caravanes aménagées pour 2 à 4
                      personnes. De nombreux sanitaires sont à disposition et les espaces permettent
                      de partager avec le groupe ou de prendre des moments d'intimité ou
                      d'introspection.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="card bg-color-dark-semi-transparent">
                  <img src={exterieur2} className="card-img-top" alt="exterieur"></img>
                  <div className="card-body">
                    <Description>
                      La nature est généreuse et nous offres sa beauté végétale, minérale et animale
                      invitant à la méditation. Alexandre, notre hôte, est un véritable artiste et
                      les œuvres d'arts sont partout apportant leurs énergies.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="card bg-color-dark-semi-transparent">
                  <img src={repas1} className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <Description>
                      Nous organiserons des tours de préparation des repas qui feront partie
                      intégrante du stage qui comprendront :
                    </Description>
                    <Description>rangement vaisselle et dressage de table</Description>
                    <Description>
                      préparation du repas (choix des plats, épluchage, coupage, réchauffage ou
                      cuisson)
                    </Description>
                    <Description>débarrassage, rangement et nettoyage cuisine</Description>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="card bg-color-dark-semi-transparent">
                  <img src={chalet1} className="card-img-top" alt="chalet"></img>
                  <div className="card-body">
                    <Description>
                      Afin de préserver l'harmonie, nous prendrons soin de ce magnifique lieu en
                      remettant en ordre notre espace de travail. Merci à tous pour votre
                      participation, essentielle à la réussite de ce stage.
                    </Description>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-0"
                link="https://forms.gle/4nEGKJPyvopUYb1Y6"
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
  );
};

TantraEtConstellationsLaValleeRose.displayName = 'TantraEtConstellationsLaValleeRose';
