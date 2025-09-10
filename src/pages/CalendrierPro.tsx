import type { FC } from 'react';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { extractDateInfosFromIsoDate } from '../hooks/useCalendar';
import { UpcomingEvent } from './Calendrier';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';

const upcomingEvents: UpcomingEvent[] = [
  {
    startDate: '2025/06/03',
    endDate: '2025/06/03',
    startTime: '09h00',
    endTime: '12h00',
    title: 'Matinée business',
    theme: 'Santé du dirigeant et constellations systémiques',
    locationInfos: ['Elancourt (78)'],
    preSubscribtionLink: {
      url: 'https://www.billetweb.fr/sante-du-dirigeant-et-constellations1',
      title: "S'inscrire à la matinée",
    },
    detailsLink: {
      url: 'https://www.canva.com/design/DAGhB-qnLfY/SLYEo_w2i_Nb7hoqv_W6sw/view?utm_content=DAGhB-qnLfY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8d3b5c3860',
      title: 'Détails de la matinée',
    },
  },
  {
    startDate: '2025/09/22',
    endDate: '2025/09/22',
    startTime: '09h00',
    endTime: '12h00',
    title: 'Matinée business',
    theme: 'Santé du dirigeant et constellations systémiques',
    locationInfos: ['Elancourt (78)'],
    preSubscribtionLink: {
      url: 'https://www.billetweb.fr/sante-du-dirigeant-et-constellations2',
      title: "S'inscrire à la matinée",
    },
    detailsLink: {
      url: 'https://www.canva.com/design/DAGhB-qnLfY/SLYEo_w2i_Nb7hoqv_W6sw/watch?utm_content=DAGhB-qnLfY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8d3b5c3860',
      title: 'Détails de la matinée',
    },
  },
];

function filterAndSortUpcomingEvents(upcomingEvents: UpcomingEvent[]): UpcomingEvent[] {
  return upcomingEvents
    .filter((event) => !event.isCancelled)
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

export const CalendrierPro: FC = () => {
  const hasEvents = sortedUpcomingEvents.length > 0;
  const hasNoEvent = sortedUpcomingEvents.length === 0;
  return (
    <PublicPageLayoutWithFixedBackgroundImage
      backgroundImageUrl="/images/background-temoignages.webp"
      backgroundOverlay="linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(79, 79, 93, 0.1), rgba(79, 79, 93, 0.7) 90% 100%)"
      backgroundPosition="33%"
      htmlTitle="Calendrier pour les Professionnels et Institutions | Marie-Anne Sévin"
    >
      <div>
        <div className="mt-4 pt-4">
          <PageTitle>Calendrier 2025 pour les Professionnels et Institutions</PageTitle>
          {hasNoEvent && (
            <div>
              <PageSubTitle>Dates à venir</PageSubTitle>
            </div>
          )}
        </div>
        <div className="container w-100">
          <div className={`row row-cols g-4`}>
            {hasEvents &&
              sortedUpcomingEvents.map((event) => (
                <div className="col-12 col-md-6 col-lg-4" key={buildKeyFromEvent(event)}>
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
                          <i className="bi bi-geo-alt fs-3 me-4" />
                          <div className="d-flex flex-column card-subtitle">
                            {event.locationInfos.map((location) => (
                              <span className="text-wrap" key={location}>
                                {location}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {event.locationType && (
                        <div className="d-flex flex-row align-items-center">
                          <i className="bi bi-house-heart fs-3 me-4" />
                          <div className="d-flex flex-column card-subtitle">
                            <span className="text-wrap">{event.locationType}</span>
                          </div>
                        </div>
                      )}
                      {event.price && (
                        <div className="d-flex flex-row align-items-center">
                          <i className="bi bi-currency-euro fs-5 me-4" />
                          <div className="d-flex flex-column card-subtitle">
                            <span className="text-wrap mt-1 ms-1">{event.price}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    {event.description && (
                      <div className="card-body border-0 border-top border-light border-opacity-10">
                        <div className="d-flex flex-row align-items-center ">
                          <i className="bi bi-info-circle fs-5 me-4" />
                          <div className="d-flex flex-column card-subtitle">
                            <span className="text-wrap mt-1 ms-1">{event.description}</span>
                          </div>
                        </div>
                      </div>
                    )}
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

CalendrierPro.displayName = 'CalendrierPro';
