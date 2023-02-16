import { FC } from 'react';
import portrait2 from '../assets/portrait-ff-1.png';
import portrait1 from '../assets/portrait-mas-1.png';
import { CallablePhoneNumber } from './CallablePhoneNumber';
import { Description } from './Description';
import { OpenExternalLinkButton } from './OpenExternalLinkButton';
import { AnimatedBy } from './page-layout/AnimatedBy';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { Quote } from './Quote';
export const SonsMantrasTantra: FC = () => {
  return (
    <>
      <PublicPageLayoutWithFixedBackgroundImage
        backgroundImageUrl="/images/background-sons-mantras-tantra.jpg"
        backgroundPosition="33%"
        htmlTitle="Sons Mantras Tantra | Stage | Marie-Anne Sévin"
      >
        <div>
          <div className="mt-4 pt-4">
            <PageTitle>Sons Mantras Tantra</PageTitle>
          </div>
          <div>
            <PageSubTitle>Du 10 au 12 mars 2023</PageSubTitle>
          </div>
          <div className="d-flex px-0 pt-4 flex-column justify-content-between">
            <SemiTransparentTile className="card text-start text-light font-monserrat">
              <div className="card-body">
                <h5 className="card-title mb-0">En chemin sur la voix tantrique</h5>
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
                      <span className="text-nowrap fs-7">Yourte des Mousseaux.</span>
                      <span className="text-nowrap fs-7"> Jouars Ponchartrain (78)</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="card-body pt-2">
                <Description>
                  Lors de ce stage, nous utiliserons les mantras afin d'harmoniser l'axe énergétique
                  allant du périnée au sommet du crâne en prenant particulièrement soin du chakra de
                  la gorge, Vishuddha. Les méditations actives, l'utilisation des instruments
                  thérapeutiques comme les bols tibétains, les carillons, les tambours ainsi que le
                  travail corporel aideront à libérer la parole, la voix et à découvrir le pouvoir
                  du son sur le corps et l'esprit. Vous pouvez venir avec un instrument si le cœur
                  vous en dit. Nous viendrons également avec les bols tibétains et tambours de
                  coffret d'alumine que nous vous mettrons à disposition en prêt ou à la vente.
                </Description>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0">Détails</h5>
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
                      <span className="">Fin du stage : le dimanche à 17h</span>
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
                      <span className="">Animation : 220€</span>
                      <span className="">Hébergement : 35€ par nuitée</span>
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
                      <span className="">
                        Floriane Fagot <CallablePhoneNumber phoneNumber="07 71 57 87 00" />
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="card-body pb-0">
                <p>Un acompte de 70€ est demandé à l'inscription.</p>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <OpenExternalLinkButton
                  className="btn btn-outline-light fw-bolder w-100 mt-0"
                  link="https://forms.gle/4U937a7KkQ5hGDZD9"
                >
                  <div className="d-flex flex-column align-items-center">
                    <span>Se pré-inscrire au stage</span>
                  </div>
                </OpenExternalLinkButton>
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-playfair mt-4">
              <div className="card-body">
                <Quote sentence="Sois une voix, pas un écho" author="Albert Einstein" />
              </div>
            </SemiTransparentTile>
            <SemiTransparentTile className="card text-start text-light font-monserrat mt-4">
              <div className="card-body">
                <h5 className="card-title mb-0">
                  Animé par Marie-Anne Sévin assistée de Floriane Fagot
                </h5>
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
                  </AnimatedBy>
                </li>
                <li
                  className="list-group-item"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <AnimatedBy>
                    <AnimatedBy.Img src={portrait2} />
                    <AnimatedBy.FigCaption>
                      Floriane, artiste peintre et graveuse, fondatrice de Coffret d'Alumine,
                      boutique Bien-être & Ésotérisme.
                    </AnimatedBy.FigCaption>
                    <AnimatedBy.Description>
                      Ma sensibilité à l'harmonie des formes, des matières, des couleurs, m'a amenée
                      à m'intéresser à la résonance des sons et créer le pôle sonothérapie de la
                      boutique. Soucieuse de l'harmonie sonore, je cherche et propose des
                      instruments artisanaux de qualité : bols, carillons koshi, ...
                    </AnimatedBy.Description>
                  </AnimatedBy>
                </li>
              </ul>
            </SemiTransparentTile>
          </div>
        </div>
      </PublicPageLayoutWithFixedBackgroundImage>
    </>
  );
};

SonsMantrasTantra.displayName = 'SonsMantrasTantra';
