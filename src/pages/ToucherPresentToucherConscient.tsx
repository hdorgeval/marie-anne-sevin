import type { FC } from 'react';
import portrait2 from '../assets/portrait-julien.jpg';
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
export const ToucherPresentToucherConscient: FC = () => {
  const { fromStartDateToEndDateText, startDateInfos } = useCalendar({
    startDate: '2024/11/09',
    endDate: '2024/11/11',
  });
  const isCanceled = false;
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-toucher-present.webp"
      backgroundOverlay="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
      backgroundPositionX="07%"
      backgroundPositionY="33%"
      htmlTitle="Toucher Présent - Toucher Conscient | Stage | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Toucher Présent</PageTitle>
          <PageTitle>Toucher Conscient</PageTitle>
        </div>
        <div>
          {startDateInfos.isPassed || isCanceled ? (
            <PageSubTitle>Dates à venir</PageSubTitle>
          ) : (
            <PageSubTitle>{fromStartDateToEndDateText}</PageSubTitle>
          )}
        </div>
        <div className="d-flex px-0 pt-4 flex-column justify-content-between">
          <SemiTransparentTile
            className="card text-start text-light font-monserrat"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(123, 94, 79, 0.1))"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">
                2 jours de stage pour expérimenter les nuances de votre toucher
              </h5>
            </div>
            <ul className="list-group list-group-flush mt-0 pt-0">
              <TransparentListGroupItem className="mt-0 pt-1 pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-house-heart fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">Stage en résidentiel</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="mt-0 pt-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-geo-alt fs-3 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="text-nowrap fs-7">Vivandi</span>
                    <span className="text-nowrap fs-7"> Bournéville (27)</span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pt-2 pb-0">
              <Description>
                Ce stage s'adresse aussi bien aux professionnels (masseurs et thérapeutes) qu'aux
                personnes débutantes dans l'art du toucher. Nous partagerons des structures
                méditatives et des ateliers pratiques amenant à plus de présence et de conscience
                dans le contact et la connaissance de l'anatomie (masseur et massé). Au delà du
                corps, nous mettrons l'accent sur l'accueil des émotions ou des projections qui nous
                traversent afin de revenir à l'essentiel du toucher. Julien est Ostéopathe et
                Marie-Anne est masseuse tantrique : La rencontre des 2 univers fut joyeuse et
                évidente :)
              </Description>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-monserrat mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(123, 94, 79, 0.1))"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">Détails</h5>
            </div>
            <ul className="list-group list-group-flush">
              <TransparentListGroupItem className="pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-event fs-1 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="">Début du stage : le samedi à 11h30</span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pb-0">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-calendar-x fs-1 me-4"></i>
                  <div className="d-flex flex-column card-subtitle">
                    <span className="mt-2">Fin du stage : le lundi à 14h30</span>
                    <span className="py-2">
                      Vous avez la possibilité d'arriver la veille et de repartir le lendemain sans
                      surcoût.
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row align-items-center card-subtitle">
                  <i className="bi bi-exclamation-diamond fs-1 me-4"></i>
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
                  <i className="bi bi-currency-euro fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Animation : 200€</span>
                    <span className="">Hébergement : 40€</span>
                    <span className="">
                      Repas : repas partagés et constitués des bonnes choses que vous amènerez
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>

              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-4"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Pour toute question ou renseignement :</span>
                    <span className="mt-2">
                      Marie-Anne Sévin <CallablePhoneNumber phoneNumber="06 83 47 97 74" />
                    </span>
                    <span className="">
                      Julien Bazin <CallablePhoneNumber phoneNumber="06 62 51 39 73" />
                    </span>
                    <span className="mt-2">
                      Informations et renseignement Vivandie auprès de Jean-Claude{' '}
                      <CallablePhoneNumber phoneNumber="02 32 56 57 76" />
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
            </ul>
            <div className="card-body pb-0">
              <p>Un acompte de 70€ est demandé à l'inscription.</p>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-monserrat mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(123, 94, 79, 0.1))"
          >
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-0"
                link="https://forms.gle/Z4Q1nwyqzYjJEswo9"
                analyticsEvent="pre-inscription-toucher-conscient"
                title="Se pré-inscrire au stage"
              >
                Se pré-inscrire au stage
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-playfair mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(123, 94, 79, 0.1))"
          >
            <div className="card-body pb-0">
              <Quote
                sentence="On lit avec les mains autant qu'avec les yeux"
                author="Christian Bobin"
              />
            </div>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-monserrat mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(123, 94, 79, 0.1))"
          >
            <div className="card-body">
              <h5 className="card-title mb-0 fw-bolder">
                Animé par Marie-Anne Sévin et Julien Bazin de Bezons
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
                    ma vie et qui m'ont amenée à créer l'Accompagnement Relationnel Thérapeutique et
                    Systémique. Masseuse tantrique depuis plus de 5 ans, je propose une approche
                    méditative du toucher portée par le rituel.
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
              <TransparentListGroupItem className="pb-0">
                <AnimatedBy>
                  <AnimatedBy.Img src={portrait2} className="pt-4" />
                  <AnimatedBy.FigCaption>Julien, ostéopathe D.O</AnimatedBy.FigCaption>
                  <AnimatedBy.Description>
                    Passionné par le fonctionnement du corps humain, j'aime accompagner dans une
                    dynamique pluridimensionnelle en passant tant par l'activité physique que
                    méditative. Mon objectif est d'ouvrir à la conscience de votre anatomie et à la
                    richesse de vos tissus pour une harmonisation vibratoire.
                  </AnimatedBy.Description>
                </AnimatedBy>
              </TransparentListGroupItem>
            </ul>
          </SemiTransparentTile>
          <SemiTransparentTile
            className="card text-start text-light font-monserrat mt-4"
            background="linear-gradient(rgba(0, 0, 0, 0.8), rgba(123, 94, 79, 0.1))"
          >
            <div className="card-body">
              <OpenExternalLinkButton
                className="btn btn-outline-light fw-bolder w-100 mt-0"
                link="https://forms.gle/Z4Q1nwyqzYjJEswo9"
                analyticsEvent="pre-inscription-toucher-conscient"
                title="Se pré-inscrire au stage"
              >
                Se pré-inscrire au stage
              </OpenExternalLinkButton>
            </div>
          </SemiTransparentTile>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

ToucherPresentToucherConscient.displayName = 'ToucherPresentToucherConscient';
