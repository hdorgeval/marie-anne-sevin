import { FC } from 'react';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { ReadMoreReadLess } from '../components/ReadMoreReadLess';
import { ENTRETIEN_PREALABLE_CALENDAR_LINK } from './page-layout/CalendarLinks';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const Constellations: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-constellations.jpg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.0))"
        backgroundPosition="33%"
        htmlTitle="Constellation familiale individuelle ou en groupe | Marie-Anne Sévin"
      >
        <div>
          <div className="mt-4 pt-4">
            <PageTitle>Constellations</PageTitle>
          </div>
          <div>
            <PageSubTitle>
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-75 mt-1"
                link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                analyticsEvent="rdv-constellation"
                title="Prendre rendez-vous"
              >
                Prendre rendez-vous
              </OpenExternalLinkButton>
            </PageSubTitle>
          </div>
          <div className="d-flex px-0 pt-4 flex-column justify-content-between">
            <SemiTransparentTile className="card text-start text-light font-monserrat">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Constellation individuelle en visio</h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-2 pb-1">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-clock-history fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle pt-1">
                      <span className="text-nowrap fs-7">90 mn</span>
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="mt-0 pt-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-geo-alt fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="text-nowrap fs-7">En Visio</span>
                      <span className="text-nowrap fs-7">
                        Le lien sera fourni après inscription
                      </span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="pt-1 pb-0">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">80€</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="py-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-event fs-2 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                        analyticsEvent="rdv-constellation"
                        title="Prendre rendez-vous"
                      >
                        Prendre rendez-vous
                      </OpenExternalLinkButton>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <ReadMoreReadLess height="100px" readMoreText="Lire plus" readLessText="Lire moins">
                  <Description>
                    Les constellations familiales et systémiques sont un outil de clarification et
                    d'accompagnement de vos problématiques. Que vous ayez des difficultés au niveau
                    relationnel, au niveau professionnel, des conditionnements ou schémas répétitifs
                    qui vous encombrent, nous cherchons ensemble à remettre de l'ordre dans votre
                    système et à faire circuler reconnaissance et amour. Comment cela se passe-t-il
                    ? Lors d'un entretien de clarification de la problématique, nous identifions
                    ensemble les personnes ou concepts à représenter dans votre système. Nous
                    modélisons ce dernier en plaçant les différents éléments dans le champ de
                    constellations (soit des représentants physiques, soit des objets ou encore des
                    papiers) et nous ressentons les tensions ou les facilités, ce qui ce joue dans
                    le système. Nous observons le système évoluer pas à pas, en orientant vers un
                    apaisement de votre représentant.
                  </Description>
                </ReadMoreReadLess>
              </div>
            </SemiTransparentTile>

            <SemiTransparentTile className="card text-start text-light font-monserrat">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">
                  Constellation individuelle en présentiel
                </h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-2 pb-1">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-clock-history fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle pt-1">
                      <span className="text-nowrap fs-7">90 mn</span>
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="mt-0 pt-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-geo-alt fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="text-nowrap fs-7">
                        17 rue Philippe de Dangeau, Versailles (78)
                      </span>
                      <span className="text-nowrap fs-7">5 rue Edmond Rostand, Plaisir (78)</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="pt-1 pb-0">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">120€</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="py-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-event fs-2 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                        analyticsEvent="rdv-constellation"
                        title="Prendre rendez-vous"
                      >
                        Prendre rendez-vous
                      </OpenExternalLinkButton>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
            </SemiTransparentTile>

            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Constellation de groupe en visio</h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-2 pb-1">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-clock-history fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle pt-1">
                      <span className="text-nowrap fs-7">2h</span>
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="mt-0 pt-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-geo-alt fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="text-nowrap fs-7">En Visio</span>
                      <span className="text-nowrap fs-7">
                        Le lien sera fourni après inscription
                      </span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="pt-2 pb-1">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">120€ pour vous et gratuit pour les représentants</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="py-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-event fs-2 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                        analyticsEvent="rdv-constellation"
                        title="Prendre rendez-vous"
                      >
                        Prendre rendez-vous
                      </OpenExternalLinkButton>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <Description>
                  Nous prenons le temps d'un entretien seul à seul et convenons d'une date pour la
                  constellation. Nous lançons un appel sur les différents réseaux pour trouver des
                  représentants qui se connecteront le jour J pour environs 2h de visio
                </Description>
              </div>
            </SemiTransparentTile>

            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Constellation de groupe en présentiel</h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-2 pb-1">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-clock-history fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle pt-1">
                      <span className="text-nowrap fs-7">2h</span>
                    </div>
                  </div>
                </TransparentListGroupItem>

                <TransparentListGroupItem className="mt-0 pt-2 pb-1">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-geo-alt fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="text-nowrap fs-7">
                        A définir en fonction de la taille du groupe
                      </span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="pt-2 pb-1">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">90€ pour vous et 15€ par représentant (minimum 5)</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="py-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-event fs-2 me-4"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <OpenExternalLinkButton
                        className="btn btn-outline-light fw-bolder w-100 mt-1"
                        link={ENTRETIEN_PREALABLE_CALENDAR_LINK}
                        analyticsEvent="rdv-constellation"
                        title="Prendre rendez-vous"
                      >
                        Prendre rendez-vous
                      </OpenExternalLinkButton>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <Description>
                  Nous prenons une date pour le mois d'après et je cherche un local dans lequel
                  pourra avoir lieu la constellation. Nous communiquons notre recherche de
                  représentants sur les réseaux qui s'engagent à vous accompagner le jour J pour 2h.
                  Ils profitent également des prises de conscience et ce travail agit sur l'ensemble
                  des participants de part les effets miroirs.
                </Description>
              </div>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

Constellations.displayName = 'Constellations';
