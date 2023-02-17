import { FC } from 'react';
import chalet1 from '../assets/la-vallee-rose/chalet1.jpg';
import exterieur1 from '../assets/la-vallee-rose/exterieur1.jpg';
import exterieur2 from '../assets/la-vallee-rose/exterieur2.jpg';
import repas1 from '../assets/la-vallee-rose/repas1.jpg';
import salle1 from '../assets/la-vallee-rose/salle1.jpg';
import portrait1 from '../assets/portrait-mas-1.png';
import { CallablePhoneNumber } from '../components/CallablePhoneNumber';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { Quote } from '../components/Quote';
import { AnimatedBy } from './page-layout/AnimatedBy';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
export const TantraEtConstellations: FC = () => {
  return (
    <>
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
            <PageSubTitle>Du 21 au 23 avril 2023</PageSubTitle>
          </div>
          <div className="d-flex px-0 pt-4 flex-column justify-content-between">
            <SemiTransparentTile className="card text-start text-light font-monserrat">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Le désir, la sexualité, le sacré</h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <li
                  className="list-group-item mt-0 pt-1 pb-0"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-house-heart fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="text-nowrap fs-7">Stage en résidentiel</span>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item mt-0 pt-3"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-geo-alt fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="text-nowrap fs-7">La Vallée Rose</span>
                      <span className="text-nowrap fs-7"> À proximité de Houdan (78)</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="card-body pt-2">
                <Description>
                  Lors de ce stage, nous alternerons les structures de tantra (méditation actives,
                  toucher méditatif, mouvement et sensorialité, pratiques de groupe , vagues…) ainsi
                  que des temps de constellations familiales ou systémiques. La puissance et la
                  profondeur se mêleront à la légèreté et à la joie, le jeu faisant partie
                  intégrante de l'expérience.
                </Description>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Détails</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item pb-0"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-event fs-1 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="">Début du stage : le vendredi à 19h</span>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item pb-0"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-x fs-1 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="">Fin du stage : le dimanche à 16h30</span>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item py-3"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-exclamation-diamond fs-1 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="">
                        Inscription validée uniquement après entretien téléphonique
                      </span>
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2dAToavt_dxlH-49lREbDSPu5QvfXWkJt1Z4jsYVV0l1yIuYbwK1dLxVME5OKAWfNYjTRaEWxk"
                      >
                        <div className="d-flex flex-column align-items-center">
                          <span>Prendre rendez-vous pour l'entretien préalable</span>
                        </div>
                      </OpenExternalLinkButton>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item py-3"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-1 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">Animation : 140€</span>
                      <span className="">Hébergement : 60€</span>
                      <span className="">
                        Repas : repas partagés (possibilité de commander des repas)
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item py-3"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-info-circle fs-1 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">Pour toute question ou renseignement :</span>
                      <span className="">
                        Marie-Anne Sévin <CallablePhoneNumber phoneNumber="06 83 47 97 74" />
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item py-3"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-car-front-fill fs-1 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">
                        Nous organiserons un <span className="text-light">co-voiturage</span>, ou
                        venon vous chercher à la gare qui se situe à 5 minutes de la vallée rose.
                      </span>
                    </div>
                  </div>
                </li>

                <li
                  className="list-group-item py-3"
                  style={{
                    background: 'transparent',
                  }}
                >
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
                          dérangeaient. Apportez votre zafu ou coussin de méditation, votre
                          nécessaire de massage (grand drap, serviette épaisse, huile neutre), des
                          changes de plusieurs T-shirts ainsi qu'une tenue festive et des
                          sous-vêtements ne craignant pas d'être tachés ou huilés. Vous pouvez
                          apporter votre tambour ou autre intrument d'harmonisation si le coeur vous
                          en dit.
                        </Description>
                      </span>
                    </div>
                  </div>
                </li>
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
                  link="https://forms.gle/TFiyJeEoLSmG5QDCA"
                >
                  <div className="d-flex flex-column align-items-center">
                    <span>Se pré-inscrire au stage</span>
                  </div>
                </OpenExternalLinkButton>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
              <div className="card-body">
                <Quote
                  sentence="C'est sûr, l'amour est la réponse. Mais pendant que vous êtes en train d'attendre la réponse, le sexe pose des questions très pertinentes"
                  author="Woody Allen"
                />
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Animé par Marie-Anne Sévin</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item"
                  style={{
                    background: 'transparent',
                  }}
                >
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
                </li>
              </ul>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">La Vallée Rose ...</h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <li
                  className="list-group-item mt-0 pt-3"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-geo-alt fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="text-nowrap fs-7">
                        Une oasis de vie à proximité de Paris
                      </span>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="card bg-color-dark-semi-transparent">
                    <img src={salle1} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <Description>
                        La vallée rose est un merveilleux lieu de stage pouvant accueillir jusqu'à
                        28 stagiares.
                      </Description>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="card bg-color-dark-semi-transparent">
                    <img src={exterieur1} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <Description>
                        Les couchages se font en chambres, chalets, caravanes aménagées pour 2 à 4
                        personnes. De nombreux sanitaires sont à disposition et les espaces
                        permettent de partager avec le groupe ou de prendre des moments d'intimité
                        ou d'introspection.
                      </Description>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="card bg-color-dark-semi-transparent">
                    <img src={exterieur2} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <Description>
                        La nature est généreuse et nous offres sa beauté végétale, minérale et
                        animale invitant à la méditation. Alexandre, notre hôte, est un véritable
                        artiste et les œuvres d'arts sont partout apportant leurs énergies.
                      </Description>
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    background: 'transparent',
                  }}
                >
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
                </li>
                <li
                  className="list-group-item"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div className="card bg-color-dark-semi-transparent">
                    <img src={chalet1} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <Description>
                        Afin de préserver l'harmonie, nous prendrons soin de ce magnifique lieu en
                        remettant en ordre notre espace de travail. Merci à tous pour votre
                        participation, essentielle à la réussite de ce stage.
                      </Description>
                    </div>
                  </div>
                </li>
              </ul>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

TantraEtConstellations.displayName = 'TantraEtConstellations';
