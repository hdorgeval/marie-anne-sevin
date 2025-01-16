import { FC, useMemo } from 'react';
import { CallablePhoneNumber } from '../components/CallablePhoneNumber';
import { Description } from '../components/Description';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { useMultipleDatesCalendar } from '../hooks/useMultipleDatesCalendar';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';
import { SemiTransparentTile } from './page-layout/SemiTransparentTile';
import { TransparentListGroupItem } from './page-layout/TransparentListGroupItem';

export interface Events {
  date: string;
  theme?: string;
  trailer?: string;
  location?: string[];
}

const events: Events[] = [
  {
    date: '2024/01/30',
    theme: 'Méditation des 4 amants',
    location: ['Ryse Yoga', 'Garancières (78)'],
  },
  {
    date: '2024/02/14',
    theme: 'Soirée spéciale couples / partenaires',
    location: ['Ryse Yoga', 'Garancières (78)'],
  },
  {
    date: '2024/03/19',
    theme: 'Toucher méditatif',
    location: ['Ryse Yoga', 'Garancières (78)'],
  },
  {
    date: '2024/04/23',
    theme: '',
    location: ['Ryse Yoga', 'Garancières (78)'],
  },
  {
    date: '2024/05/15',
    theme: '',
    location: ['Versailles (78)'],
  },
  {
    date: '2024/05/21',
    theme: '',
    location: ['Ryse Yoga', 'Garancières (78)'],
  },
  {
    date: '2024/06/18',
    theme: 'Voix Tantrique',
    trailer: "Un pont entre le corps et l'esprit",
    location: ['Ryse Yoga', 'Garancières (78)'],
  },
  {
    date: '2024/07/03',
    theme: 'Ombre et Lumière',
    trailer: 'Jeu de transformation',
    location: ['Versailles (78)'],
  },
  {
    date: '2024/08/06',
    theme: 'Relation consciente',
    trailer: 'Méditation et exploration',
    location: ['Trappes (78)'],
  },
  {
    date: '2024/09/17',
    theme: '',
    trailer: '',
    location: ['Versailles (78)'],
  },
  {
    date: '2024/10/07',
    theme: '',
    trailer: '',
    location: ['Versailles (78)'],
  },
  {
    date: '2024/11/19',
    theme: '',
    trailer: '',
    location: ['Versailles (78)'],
  },
  {
    date: '2024/12/17',
    theme: '',
    trailer: '',
    location: ['Versailles (78)'],
  },
  {
    date: '2025/01/21',
    theme: '',
    trailer: '',
    location: ['Versailles (78)'],
  },
  {
    date: '2025/02/04',
    theme: '',
    trailer: '',
    location: ['Versailles (78)'],
  },
  {
    date: '2025/03/11',
    theme: '',
    trailer: '',
    location: ['Versailles (78)'],
  },
];

function getEventThemeByDate(
  events: Events[],
  expectedDate: string | undefined,
): string | undefined {
  return events.findLast((e) => e.date === expectedDate)?.theme;
}

function getEventTrailerByDate(
  events: Events[],
  expectedDate: string | undefined,
): string | undefined {
  return events.findLast((e) => e.date === expectedDate)?.trailer;
}

function getEventLocationByDate(
  events: Events[],
  expectedDate: string | undefined,
): string[] | undefined {
  return events.findLast((e) => e.date === expectedDate)?.location;
}
function getEventLastDetailLocationByDate(
  events: Events[],
  expectedDate: string | undefined,
): string | undefined {
  const locationDetails = events.findLast((e) => e.date === expectedDate)?.location ?? [];
  const result = [...locationDetails].pop();
  return result;
}

export const SoireeTantra: FC = () => {
  const allDates = events.map((e) => e.date);
  const { allDatesArePassed, hasNextDates, dueDate, dueDateInIsoFormat, nextDates } =
    useMultipleDatesCalendar(allDates);

  const theme = useMemo(() => {
    return getEventThemeByDate(events, dueDateInIsoFormat);
  }, [dueDateInIsoFormat]);

  const trailer = useMemo(() => {
    return getEventTrailerByDate(events, dueDateInIsoFormat);
  }, [dueDateInIsoFormat]);

  const location = useMemo(() => {
    return getEventLocationByDate(events, dueDateInIsoFormat);
  }, [dueDateInIsoFormat]);

  const hasLocation = useMemo(() => {
    return Array.isArray(location) && location.length > 0;
  }, [location]);

  return (
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
          <PageSubTitle>{allDatesArePassed ? 'Dates à venir' : dueDate}</PageSubTitle>
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
                    {/* <span className="text-nowrap fs-7">Yourte des Mousseaux.</span>
                    <span className="text-nowrap fs-7"> Jouars Ponchartrain (78)</span> */}

                    {hasLocation ? (
                      location?.map((l) => (
                        <span className="text-nowrap fs-7" key={l}>
                          {l}
                        </span>
                      ))
                    ) : (
                      <span className="text-nowrap fs-7">
                        Le lieu sera communiqué ultérieurement (78)
                      </span>
                    )}
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
              {dueDate && (
                <TransparentListGroupItem className="pt-3">
                  <div className="d-flex flex-row card-subtitle align-items-center">
                    <i className="bi bi-signpost fs-3 me-4"></i>
                    <div className="d-flex flex-column justify-content-between ">
                      <span className="">Thème :</span>
                      {theme ? (
                        <>
                          <span className="text-uppercase text-light">{theme}</span>
                          {trailer && <span className="text-light fst-italic">{trailer}</span>}
                        </>
                      ) : (
                        <span className="text-light">Le thème sera communiqué ultérieurement</span>
                      )}

                      {/* <span className="text-light">...</span> */}
                    </div>
                  </div>
                </TransparentListGroupItem>
              )}

              <TransparentListGroupItem className="py-3">
                <div className="d-flex flex-row card-subtitle align-items-center">
                  <i className="bi bi-info-circle fs-1 me-3"></i>
                  <div className="d-flex flex-column justify-content-between ">
                    <span className="">Pour toute question ou renseignement :</span>
                    <span className="">
                      Marie-Anne Sévin <CallablePhoneNumber phoneNumber="06 83 47 97 74" />
                    </span>
                  </div>
                </div>
              </TransparentListGroupItem>
              {hasNextDates && (
                <TransparentListGroupItem className="pt-3 pb-2">
                  <div className="d-flex flex-row align-items-center card-subtitle">
                    <i className="bi bi-calendar-week fs-1 me-3"></i>
                    <div className="d-flex flex-column card-subtitle">
                      <span className="mb-1">Prochaines dates :</span>
                      {nextDates.map((d) => (
                        <div key={d.date} className="ps-1 text-light">
                          <span className="ps-1 text-light">{d.date}</span>

                          {getEventLastDetailLocationByDate(events, d.dateInIsoFormat) && (
                            <>
                              <span className="ps-2 text-light">(</span>
                              <span className="ps-1 text-light">
                                {getEventLastDetailLocationByDate(events, d.dateInIsoFormat)}
                              </span>
                              <span className="ps-1 text-light">)</span>
                            </>
                          )}

                          {getEventThemeByDate(events, d.dateInIsoFormat) && (
                            <>
                              <span className="ps-2">(</span>
                              <span className="ps-1">
                                {getEventThemeByDate(events, d.dateInIsoFormat)}
                              </span>
                              <span className="ps-1">)</span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TransparentListGroupItem>
              )}
            </ul>
            <div className="card-body pt-2 pb-1">
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
  );
};

SoireeTantra.displayName = 'SoireeTantra';
