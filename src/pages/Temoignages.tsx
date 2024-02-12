import { FC } from 'react';
import { Description } from '../components/Description';
import { FiveStarRating } from '../components/FiveStarRating';
import { OneLetterPill } from '../components/OneLetterPill';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
export const Temoignages: FC = () => {
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-temoignages.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
      backgroundPosition="33%"
      htmlTitle="Témoignages | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Témoignages</PageTitle>
        </div>

        <div className="d-flex px-0 pt-4 flex-column justify-content-between">
          <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>C</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">carole JACOB</div>
                <div>
                  <FiveStarRating />
                </div>
                <Description>
                  Marie-Anne m'a accompagné dans une constellation familiale en individuel. Je me
                  suis sentie écoutée et en sécurité tout le long. Merci pour ta douceur et ton
                  professionnalisme 🙏.
                </Description>
              </div>
            </div>
          </div>

          <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>V</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">VB</div>
                <div>
                  <FiveStarRating />
                </div>
                <Description>
                  Laissez-vous guider par Marie Anne comme je l'ai fait lors d'une séance de
                  constellation. Par sa vraie présence, son énergie joyeuse et son écoute à
                  l'unisson, elle sait poser un cadre sécurisant et professionnel et en même temps
                  simple, chaleureux et intime, pour permettre, en confiance et en conscience, de
                  cheminer en nous-mêmes et en nos vies, passées, présentes et futures. C'est un
                  cadeau précieux.
                </Description>
              </div>
            </div>
          </div>

          <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>D</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Delphine Lorelli</div>
                <div>
                  <FiveStarRating />
                </div>
                <Description>
                  Marie-Anne la lumineuse, qui vous permet tout en douceur de prendre conscience de
                  la vôtre, de lumière. Quels que soient ses outils, des petits pions en bois, une
                  guitare, sa voix ou ses mains, Marie-Anne est une révélatrice. Je suis venue en
                  toute confiance démêler des émotions complexes lors d'une séance de constellations
                  familiales... J'ai été accueillie avec bienveillance et respect, et je suis
                  repartie avec des ressources que j'ignorais posséder. Vraiment une belle rencontre
                  :)
                </Description>
              </div>
            </div>
          </div>

          <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>C</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Caroline Queriaud</div>
                <div>
                  <FiveStarRating />
                </div>
                <Description>
                  Marie-Anne est une femme d'une incroyable écoute, empathie et douceur. Elle
                  s'adapte à vous, vos besoins, qu'elle accueille avec beaucoup d'amour pour un
                  massage d'une profonde qualité. Ses capacités de don de soi et sa bienveillance en
                  font une praticienne hors pair, n'hésitez pas !
                </Description>
              </div>
            </div>
          </div>

          <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>J</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Jean Viltart</div>
                <div>
                  <FiveStarRating />
                </div>
                <Description>
                  Très belle découverte du massage tantrique, tout en douceur, respect et accueil.
                  Une expérience à vivre, qui m'a apaisé et éclairé. Je suis heureux d'avoir accordé
                  ma confiance à Marie-Anne, qui est très professionnelle et exerce tout en
                  conscience, ses soins gagnent à être connus et expérimentés!
                </Description>
              </div>
            </div>
          </div>

          <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>D</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Declan Kehoe</div>
                <div>
                  <FiveStarRating />
                </div>
                <Description>
                  Un grand et beau moment de détente et de reconnexion avec le corps. Une expérience
                  extraordinaire à vivre et à revivre. Un temps de présence bien à soi qui fait un
                  bien fou. À refaire
                </Description>
              </div>
            </div>
          </div>

          <div className="card bg-color-dark-semi-transparent text-start text-light font-monserrat mt-3">
            <div className="card-body d-flex flex-row align-items-start">
              <OneLetterPill>S</OneLetterPill>
              <div className="d-flex px-0 ms-3 flex-column justify-content-between ms">
                <div className="card-title fs-5">Steve LEBON</div>
                <div>
                  <FiveStarRating />
                </div>
                <Description>
                  Extraordinaire pour qui sais et veux recevoir ! Merci pour cette expérience
                  extraordinaire hors des limites de l'esprit lâché prise total. Merci Marie Anne.
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Temoignages.displayName = 'Temoignages';
