import { FC } from 'react';
import { CallablePhoneNumber } from '../components/CallablePhoneNumber';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';
export const SoireeTantra: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-soiree-tantra.jpeg"
        backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.0))"
        backgroundPosition="20%"
        htmlTitle="Soirée tantra | Marie-Anne Sévin"
      >
        <div>
          <div className="mt-4 pt-4">
            <PageTitle>Soirée Tantra</PageTitle>
          </div>
          <div>
            <PageSubTitle>Mardi 26 septembre 2023</PageSubTitle>
          </div>
          <div>
            <PageSubTitle>
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-0"
                link="https://forms.gle/4aY62NqVqtd6ghKH7"
                analyticsEvent="pre-inscription-soiree-tantra"
                title="S'inscrire à une soirée"
              >
                S'inscrire
              </OpenExternalLinkButton>
            </PageSubTitle>
          </div>
          <div className="d-flex px-0 pt-4 flex-column justify-content-between">
            <SemiTransparentTile className="card text-start text-light font-monserrat">
              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-3">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-clock-history fs-3 me-4"></i>
                    <div className="d-flex flex-column card-subtitle pt-1">
                      <span className="text-nowrap fs-7">3 heures, de 19h30 à 22h30</span>
                      <span className="text-nowrap fs-7">Merci d'arriver à 19h15</span>
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
                <TransparentListGroupItem className="pt-1 pb-0">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-currency-euro fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">30€</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="pt-3">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-people fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">Soirée animée par Marie-Anne Sévin</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
                <TransparentListGroupItem className="pt-3">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-signpost fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">Thème :</span>
                      <span className="text-uppercase text-light">respiration du feu</span>
                      {/* <span className="text-light">...</span> */}
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
                <TransparentListGroupItem className="pb-0">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-week fs-1 me-3"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="">Prochaines dates :</span>
                      <span className="ps-1 text-light">Mardi 24 octobre 2023</span>
                      <span className="ps-1 text-light">Mardi 28 novembre 2023</span>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <Description>
                  Atelier ouvert à toute personne souhaitant découvrir et partager l'univers du
                  tantra.
                </Description>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <OpenExternalLinkButton
                  className="btn btn-outline-light fw-bolder w-100 mt-0"
                  link="https://forms.gle/4aY62NqVqtd6ghKH7"
                  analyticsEvent="pre-inscription-soiree-tantra"
                  title="S'inscrire à une soirée"
                >
                  S'inscrire
                </OpenExternalLinkButton>
              </div>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

SoireeTantra.displayName = 'SoireeTantra';
