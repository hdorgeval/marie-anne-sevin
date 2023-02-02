import { FC } from 'react';
import { usePublicPage } from '../contexts/userContext';
import { Footer } from './Footer';
import { HambugerMenu } from './HamburgerMenu';

export const QuiSuisJe: FC = () => {
  usePublicPage();
  return (
    <>
      <HambugerMenu />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url("/images/marie-anne-sevin.webp")`,
          height: '100vh',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.70))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center overflow-y-scroll">
            <div className="mt-4">
              <span className="text-uppercase fs-1 fw-bolder font-raleway">Marie-Anne Sévin</span>
            </div>
            <div>
              <span className="fs-2 fw-bolder font-monserrat">Qui suis-je ?</span>
            </div>

            <div className="fs-5 fw-bolder font-playfair mt-4 mx-4 text-start">
              <p className="">
                Musicienne, masseuse, thérapeute, formatrice et auteure, je conçois et j'anime des
                ateliers pédagogiques et thérapeutiques.
              </p>
              <p>
                Riche de plusieurs approches artistiques, j'accompagne aussi bien des clients
                institutionnels que des particuliers, de la périnatalité jusqu'à la fin de vie.
              </p>
              <p>
                Très impliquée dans le bien-être par la voix et la musique, le massage tantrique, la
                méditation, la sonothératpie et les constellations familiales et systémiques, je
                crée en 2021 A.R.T.S - Accompagnement Relationnel Thérapeutique et Systémique.
              </p>
            </div>

            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

QuiSuisJe.displayName = 'QuiSuisJe';
