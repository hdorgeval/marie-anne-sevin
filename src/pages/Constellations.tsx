import { FC } from 'react';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
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
                link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0uQRFb4GoXmrgYiPIJt_DnOIacVlLKdYMLMa0DW3M2r7kEi01gTYdSfffFn1Dbxh5YyTEkMGTO"
                analyticsEvent="rdv-rituel-tantrique"
                title="Prendre rendez-vous"
              >
                Prendre rendez-vous
              </OpenExternalLinkButton>
            </PageSubTitle>
          </div>
          <div className="d-flex px-0 pt-4 flex-column justify-content-between">
            <SemiTransparentTile className="card text-start text-light font-monserrat">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">
                  Constellation familiale individuelle en visio
                </h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-3">
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
                        link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0uQRFb4GoXmrgYiPIJt_DnOIacVlLKdYMLMa0DW3M2r7kEi01gTYdSfffFn1Dbxh5YyTEkMGTO"
                        analyticsEvent="rdv-rituel-tantrique"
                        title="Prendre rendez-vous"
                      >
                        Prendre rendez-vous
                      </OpenExternalLinkButton>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <Description>...</Description>
              </div>
            </SemiTransparentTile>

            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0 fw-bolder">Constellation familiale de groupe</h5>
              </div>
              <ul className="list-group list-group-flush mt-0 pt-0">
                <TransparentListGroupItem className="pt-3">
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
                      <span className=" fs-7">
                        En Visio ou en présentiel en fonction de votre demande
                      </span>
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
                        link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JLbTxkUTmtV-c_3odM0JgIL8UbnGHxFwVcGfD2vHafAG_MJwTXO07QK12-3o35a9NPO5SfLMm"
                        analyticsEvent="rdv-entretien-prealable"
                        title="Prendre rendez-vous pour l'entretien préalable"
                      >
                        Prendre rendez-vous pour l'entretien préalable
                      </OpenExternalLinkButton>
                    </div>
                  </div>
                </TransparentListGroupItem>
              </ul>
              <div className="card-body pt-2">
                <Description>...</Description>
              </div>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

Constellations.displayName = 'Constellations';
