import { FC } from 'react';
import { usePublicPage } from '../contexts/userContext';
import { useTitle } from '../hooks/useTitle';
import { Footer } from './Footer';
import { HambugerMenu } from './HamburgerMenu';
import { OpenExternalLinkButton } from './OpenExternalLinkButton';
import { PageSubTitle } from './PageSubTitle';
import { PageTitle } from './PageTitle';

export const SonsMantrasTantra: FC = () => {
  usePublicPage();
  useTitle('Sons Mantras Tantra | Marie-Anne Sévin');
  return (
    <>
      <HambugerMenu />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url("/images/background-sons-mantras-tantra.jpg")`,
          height: '100vh',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.50))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center overflow-y-scroll">
            <div className="mt-4 pt-4">
              <PageTitle>Sons Mantras Tantra</PageTitle>
            </div>
            <div>
              <PageSubTitle>Du 10 au 12 mars 2023</PageSubTitle>
            </div>
            <div className="d-flex px-0 pt-4 flex-column justify-content-between">
              <div
                className="card text-start text-light font-playfair"
                style={{
                  background:
                    'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title pt-1">En chemin sur la voix tantrique</h5>
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
                <div className="card-body">
                  <p>
                    Lors de ce stage, nous utiliserons les mantras afin d'harmoniser l'axe
                    énergétique allant du périnée au sommet du crâne en prenant particulièrement
                    soin du chakra de la gorge, Vishuddha.
                  </p>
                  <p>
                    Les méditations actives, l'utilisation des instruments thérapeutiques comme les
                    bols tibétains, les carillons, les tambours ainsi que le travail corporel
                    aideront à libérer la parole, la voix et à découvrir le pouvoir du son sur le
                    corps et l'esprit.
                  </p>
                  <p>Vous pouvez venir avec un instrument si le cœur vous en dit.</p>
                  <p>
                    Nous viendrons également avec les bols tibétains et tambours de coffret
                    d'alumine que nous vous mettrons à disposition en prêt ou à la vente.
                  </p>
                </div>
              </div>

              <div
                className="card text-start text-light font-playfair mt-4"
                style={{
                  background:
                    'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Détails</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
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
                    className="list-group-item"
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
                    className="list-group-item"
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
                    className="list-group-item"
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
                    className="list-group-item"
                    style={{
                      background: 'transparent',
                    }}
                  >
                    <div className="d-flex flex-row card-subtitle align-items-center">
                      <i className="bi bi-info-circle fs-1 me-4"></i>
                      <div className="d-flex flex-column justify-content-between ">
                        <span className="">Pour toute question ou renseignement :</span>
                        <span className="">
                          Marie-Anne Sévin{' '}
                          <a
                            className="text-light text-decoration-none"
                            href="tel:0683479774"
                            rel="nofollow"
                            target="_blank"
                          >
                            <span>06</span>
                            <span className="ps-1">83</span>
                            <span className="ps-1">47</span>
                            <span className="ps-1">97</span>
                            <span className="ps-1">74</span>
                          </a>
                        </span>
                        <span className="">
                          Floriane Fagot{' '}
                          <a
                            className="text-light text-decoration-none"
                            href="tel:0683479774"
                            rel="nofollow"
                            target="_blank"
                          >
                            <span>07</span>
                            <span className="ps-1">71</span>
                            <span className="ps-1">57</span>
                            <span className="ps-1">87</span>
                            <span className="ps-1">00</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-body">
                  <p>Un acompte de 70€ est demandé à l'inscription.</p>
                </div>
              </div>

              <div
                className="card text-start text-light font-playfair mt-4"
                style={{
                  background:
                    'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
                }}
              >
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
              </div>

              <div
                className="card text-start text-light font-playfair mt-4"
                style={{
                  background:
                    'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
                }}
              >
                <div className="card-body">
                  <figure className="pt-3 rounded">
                    <blockquote className="blockquote pb-0">
                      <p>
                        <sup className="pe-1">
                          <i className="bi bi-quote fs-5"></i>
                        </sup>
                        <span className="fs-5 fst-italic">Sois une voix, pas un</span>
                        <span className="text-nowrap">
                          {' '}
                          écho
                          <sup className="ps-1">
                            <i className="bi bi-quote fs-5 bi-rotate-180"></i>
                          </sup>
                        </span>
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer mb-0 mt-2 font-italic text-muted">
                      Albert Einstein
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

SonsMantrasTantra.displayName = 'SonsMantrasTantra';
