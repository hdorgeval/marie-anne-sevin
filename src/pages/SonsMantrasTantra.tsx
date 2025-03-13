import type { FC } from 'react';
import portrait2 from '../assets/portrait-ff-1.png';
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
export const SonsMantrasTantra: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2025/05/09',
    endDate: '2025/05/11',
  });

  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-sons-mantras-tantra.jpg"
      backgroundPosition="33%"
      htmlTitle="Sons Mantras Tantra | Stage | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Stage sons Mantras Tantra</PageTitle>
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
              <h5 className="card-title mb-0 fw-bolder">En chemin sur la voix tantrique</h5>
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
                    <span className="text-nowrap fs-7"> Yvelines (78)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pt-2">
              <Description>
                Lors de ce stage, nous utiliserons les mantras afin d'harmoniser l'axe énergétique
                allant du périnée au sommet du crâne en prenant particulièrement soin du chakra de
                la gorge, Vishuddha. Les méditations actives, l'utilisation des instruments
                thérapeutiques comme les bols tibétains, les carillons, les tambours ainsi que le
                travail corporel aideront à libérer la parole, la voix et à découvrir le pouvoir du
                son sur le corps et l'esprit. Avec le tambour unité* de Floriane, nous
                transformerons ce qui a besoin de l'être par sa puissance vibratoire. Vous pouvez
                venir avec un instrument si le cœur vous en dit. Nous viendrons également avec les
                bols tibétains et tambours de coffret d'alumine que nous vous mettrons à disposition
                en prêt ou à la vente.
              </Description>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h6 className="card-title mb-0 fw-bolder">
                * Le tambour unité mesure 1m80 ce qui lui confère une puissance vibratoire
                exceptionnelle
              </h6>
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
                    <span className="">Hébergement : 50€ pour la durée du stage</span>
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
                    <span className="">
                      Floriane Fagot <CallablePhoneNumber phoneNumber="07 71 57 87 00" />
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
                link="https://forms.gle/4U937a7KkQ5hGDZD9"
                analyticsEvent="pre-inscription-sons-mantras-tantra"
                title="Se pré-inscrire au stage"
              >
                Se pré-inscrire au stage
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
            <div className="card-body">
              <Quote sentence="La voix est la musique de l'âme" author="Barbara" />
            </div>
          </SemiTransparentTile>

          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
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
                  <AnimatedBy.Description>
                    Mon accompagnement se nourrit des nombreuses approches que j'ai rencontrées dans
                    ma vie. Animatrice de tantra et de stages psycho-corporels, j'accompagne depuis
                    25 ans en bien-être par la voix les publics de la périnatalité à la fin de vie.
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="">
                <AnimatedBy>
                  <AnimatedBy.Img src={portrait2} />
                  <AnimatedBy.FigCaption>
                    Floriane, artiste et porteuse du tambour unité*, fondatrice de Coffret d'Alumine
                    dédié au bien-être.
                  </AnimatedBy.FigCaption>
                  <AnimatedBy.Description>
                    Je vous accompagne sur ce stage pour la 3eme année à la découverte des
                    instruments vibratoires. Avec mon tambour unité*, nous vous connecterons à la
                    force de vie et à votre nature profonde en vous reliant directement à la terre
                    et au ciel.
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
          <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
            <div className="card-body">
              <h6 className="card-title mb-0 fw-bolder">
                * Le tambour unité mesure 1m80 ce qui lui confère une puissance vibratoire
                exceptionnelle
              </h6>
            </div>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

SonsMantrasTantra.displayName = 'SonsMantrasTantra';
