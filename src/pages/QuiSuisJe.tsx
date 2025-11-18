import type { FC } from 'react';
import logo from '../assets/arts-logo-medium.png';
import { usePublicPage } from '../contexts/userContext';
import { useMetaDescription } from '../hooks/useMetaDescription';
import { useTitle } from '../hooks/useTitle';
import { Footer } from './page-layout/Footer';
import { HambugerMenu } from './page-layout/HamburgerMenu';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';

export const QuiSuisJe: FC = () => {
  usePublicPage();
  useTitle('Qui-suis je? | Marie-Anne Sévin');
  useMetaDescription('Qui-suis je? | Marie-Anne Sévin');
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
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.1), rgba(79, 79, 93, 0.40))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center overflow-y-scroll">
            <div className="mt-2">
              <PageTitle>Marie-Anne Sévin</PageTitle>
            </div>
            <div>
              <PageSubTitle>Qui suis-je ?</PageSubTitle>
            </div>
            <div className="" style={{ minHeight: '15rem' }}></div>
            <div className="fs-6 fw-bolder font-monserrat mt-4 mx-4 text-start text-light">
              <p className="">
                Musicienne, masseuse, thérapeute, formatrice et auteure, je conçois et j'anime des
                ateliers pédagogiques et thérapeutiques.
              </p>
              <p>
                Riche de plusieurs approches artistiques, j'accompagne aussi bien des clients
                institutionnels que des particuliers, de la périnatalité jusqu'à la fin de vie.
              </p>
              <p className="mb-0 pb-0">
                Très impliquée dans le bien-être par la voix et la musique, le massage tantrique, la
                méditation, la sonothératpie et les constellations familiales et systémiques, je
                crée en 2021 A.R.T.S - Accompagnement Relationnel Thérapeutique et Systémique.
              </p>
              <p className="text-center mt-0 pt-0">
                <img
                  src={logo}
                  alt="logo A.R.T.S"
                  style={{ objectFit: 'none', width: '110px' }}
                  className="d-inline-block"
                />
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
