import { FC } from 'react';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { extractDateInfosFromIsoDate } from '../hooks/useCalendar';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';

type LocationType = 'Stage en résidentiel' | 'Stage en ligne';
interface LinkDetails {
  url: string;
  title: string;
}
export interface UpcomingEvent {
  startDate: string;
  endDate: string;
  startTime?: string;
  endTime?: string;
  title: string;
  theme?: string;
  trailer?: string;
  locationInfos?: string[];
  locationType?: LocationType;
  preSubscribtionLink?: LinkDetails;
  detailsLink?: LinkDetails;
}

const upcomingEvents: UpcomingEvent[] = [
  {
    startDate: '2025/02/28',
    endDate: '2025/03/02',
    title: 'Tantra Homme',
    theme: 'Les 4 éléments',
    locationInfos: ['Bournéville (27)'],
    locationType: 'Stage en résidentiel',
    preSubscribtionLink: {
      url: 'https://forms.gle/JikSKyQaBHo45dCF8',
      title: 'Se pré-inscrire au stage',
    },
  },
  {
    startDate: '2024/11/19',
    startTime: '19h30',
    endDate: '2024/11/19',
    title: 'Soirée tantra',
    theme: 'méditation mandala',
    locationInfos: ['Versailles (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
    },
  },
  {
    startDate: '2024/12/17',
    startTime: '19h30',
    endDate: '2024/12/17',
    title: 'Soirée tantra',
    theme: '',
    locationInfos: ['Versailles (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
    },
  },
  {
    startDate: '2024/11/30',
    startTime: '8h',
    endDate: '2024/12/01',
    endTime: '17h',
    title: 'Stage Massage Tantrique en Martinique',
    theme: 'Découvrir les bases du Rituel Tantrique',
    locationInfos: ['CIS de Martinique', '97200 FORT-DE-FRANCE'],
    locationType: 'Stage en résidentiel',
    preSubscribtionLink: {
      url: 'https://forms.gle/ePFieLBnHRGJqRqt6',
      title: 'Se pré-inscrire au stage',
    },
    detailsLink: {
      url: 'https://www.canva.com/design/DAGS-eODaIY/wmNBbCTFV45ttDoucvFKSQ/view?utm_content=DAGS-eODaIY&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      title: 'Voir les détails du stage',
    },
  },
  {
    startDate: '2024/11/09',
    startTime: '11h30',
    endDate: '2024/11/11',
    endTime: '14h30',
    title: 'Toucher Présent - Toucher Conscient',
    theme: '2 jours de stage pour expérimenter les nuances de votre toucher',
    locationInfos: ['Bournéville (27)'],
    locationType: 'Stage en résidentiel',
    preSubscribtionLink: {
      url: 'https://forms.gle/Z4Q1nwyqzYjJEswo9',
      title: 'Se pré-inscrire au stage',
    },
    detailsLink: {
      url: 'https://marie-anne-sevin.com/stage/toucher-present-toucher-conscient',
      title: 'Voir les détails du stage',
    },
  },
  {
    startDate: '2025/01/17',
    endDate: '2025/01/19',
    title: 'Voix Tantrique',
    theme: 'En chemin sur la voix tantrique',
    locationInfos: ['Bournéville (27)'],
    locationType: 'Stage en résidentiel',
    preSubscribtionLink: {
      url: 'https://forms.gle/eQ3PCEfxYBCmWjXv7',
      title: 'Se pré-inscrire au stage',
    },
  },
  {
    startDate: '2025/01/21',
    startTime: '19h30',
    endDate: '2025/01/21',
    title: 'Soirée tantra',
    theme: '',
    locationInfos: ['Versailles (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
    },
  },
  {
    startDate: '2025/03/21',
    endDate: '2025/03/23',
    title: 'Tantra Femme niveau 2',
    theme: "L'intime au coeur du sacré",
    locationInfos: ['Bournéville (27)'],
    locationType: 'Stage en résidentiel',
    preSubscribtionLink: {
      url: 'https://forms.gle/2z5655UUdW5J7DAN9',
      title: 'Se pré-inscrire au stage',
    },
  },
  {
    startDate: '2025/04/11',
    endDate: '2025/04/13',
    title: 'Tantra et Constellations',
    theme: '',
    locationInfos: ['Bournéville (27)'],
    locationType: 'Stage en résidentiel',
    preSubscribtionLink: {
      url: 'https://forms.gle/AuDRHGGGtGJQ6ekq5',
      title: 'Se pré-inscrire au stage',
    },
  },
];

function filterAndSortUpcomingEvents(upcomingEvents: UpcomingEvent[]): UpcomingEvent[] {
  return upcomingEvents
    .filter((event) => new Date() < new Date(event.startDate))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

function buildKeyFromEvent(event: UpcomingEvent): string {
  return `${event.startDate}${event.endDate}${event.title}`;
}

function buildFullEventDate(event: UpcomingEvent): string {
  const startDateInfos = extractDateInfosFromIsoDate(event.startDate, 'fr');
  const endDateInfos = extractDateInfosFromIsoDate(event.endDate, 'fr');

  if (event.startDate === event.endDate && event.startTime && event.endTime) {
    return `${startDateInfos.localizedDateFull} de ${event.startTime} à ${event.endTime}`;
  }

  if (event.startDate === event.endDate && event.startTime && !event.endTime) {
    return `${startDateInfos.localizedDateFull} à ${event.startTime}`;
  }

  if (event.startDate === event.endDate && !event.startTime && !event.endTime) {
    return `${startDateInfos.localizedDateFull}`;
  }

  if (
    event.startDate !== event.endDate &&
    startDateInfos.year === endDateInfos.year &&
    startDateInfos.month === endDateInfos.month
  ) {
    return `du ${startDateInfos.localizedDateFull
      .replace(startDateInfos.year, '')
      .replace(startDateInfos.month, '')
      .trim()} au ${endDateInfos.localizedDateFull}`;
  }

  if (
    event.startDate !== event.endDate &&
    startDateInfos.year === endDateInfos.year &&
    startDateInfos.month !== endDateInfos.month
  ) {
    return `du ${startDateInfos.localizedDateFull.replace(startDateInfos.year, '').trim()} au ${
      endDateInfos.localizedDateFull
    }`;
  }

  return `du ${startDateInfos.localizedDateFull} au ${endDateInfos.localizedDateFull}`;
}

const sortedUpcomingEvents = filterAndSortUpcomingEvents(upcomingEvents);

export const Calendrier: FC = () => {
  const hasEvents = sortedUpcomingEvents.length > 0;
  const hasNoEvent = sortedUpcomingEvents.length === 0;
  const hasManyEvents = sortedUpcomingEvents.length > 3;
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-temoignages.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
      backgroundPosition="33%"
      htmlTitle="Calendrier 2025 | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Calendrier 2025</PageTitle>
          {hasNoEvent && (
            <div>
              <PageSubTitle>Dates à venir</PageSubTitle>
            </div>
          )}
        </div>
        <div className="container w-100">
          <div
            className={`row row-cols ${
              hasManyEvents ? ' row-cols-lg-2 row-cols-xl-3 row-cols-xxl-5' : ''
            } g-4`}
          >
            {hasEvents &&
              sortedUpcomingEvents.map((event) => (
                <div className="col" key={buildKeyFromEvent(event)}>
                  <div className="card h-100 bg-color-dark-semi-transparent text-start text-light font-monserrat">
                    <div className="card-header fs-5">
                      <div className="card-title mb-1">{event.title}</div>
                      {event.theme && (
                        <div className="card-subtitle fs-6 text-body-secondary mb-2">
                          {event.theme}
                        </div>
                      )}
                      <div className="card-subtitle card-date fs-6 text-body-primary">
                        {buildFullEventDate(event)}
                      </div>
                    </div>
                    <div className="card-body">
                      {event.locationInfos && (
                        <div className="d-flex flex-row align-items-center">
                          <i className="bi bi-geo-alt fs-3 me-4"></i>
                          <div className="d-flex flex-column card-subtitle">
                            {event.locationInfos.map((location) => (
                              <span className="text-nowrap" key={location}>
                                {location}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {event.locationType && (
                        <div className="d-flex flex-row align-items-center">
                          <i className="bi bi-house-heart fs-3 me-4"></i>
                          <div className="d-flex flex-column card-subtitle">
                            <span className="text-nowrap">{event.locationType}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="card-footer">
                      {event.preSubscribtionLink && (
                        <OpenExternalLinkButton
                          className="btn btn-outline-light fw-bolder w-100 mt-0"
                          link={event.preSubscribtionLink.url}
                          analyticsEvent="pre-inscription"
                          title={event.preSubscribtionLink.title}
                        >
                          {event.preSubscribtionLink.title}
                        </OpenExternalLinkButton>
                      )}
                      {event.detailsLink && (
                        <OpenExternalLinkButton
                          className="btn btn-outline-light fw-bolder w-100 mt-2"
                          link={event.detailsLink.url}
                          analyticsEvent="voir-details-du-stage"
                          title={event.detailsLink.title}
                        >
                          {event.detailsLink.title}
                        </OpenExternalLinkButton>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PublicPageLayoutWithFixedBackgroundImage>
  );
};

Calendrier.displayName = 'Calendrier';
