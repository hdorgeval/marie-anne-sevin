import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { OpenExternalLinkButton } from '../components/OpenExternalLinkButton';
import { extractDateInfosFromIsoDate } from '../hooks/useCalendar';
import { PageSubTitle } from './page-layout/PageSubTitle';
import { PageTitle } from './page-layout/PageTitle';
import { PublicPageLayoutWithFixedBackgroundImage } from './page-layout/PublicPageLayoutWithFixedBackgroundImage';

type LocationType = 'Stage en résidentiel' | 'Stage en ligne' | 'Hébergement et repas sur place';
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
  price?: string;
  description?: string;
  isCancelled?: boolean;
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
    detailsLink: {
      url: 'https://marie-anne-sevin.com/stage/tantra-homme',
      title: 'Voir les détails du stage',
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
    title: 'Stage sons, mantras, tantra',
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
    theme: 'Méditation de la caresse',
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
    detailsLink: {
      url: 'https://marie-anne-sevin.com/stage/tantra-femme',
      title: 'Voir les détails du stage',
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
    detailsLink: {
      url: 'https://marie-anne-sevin.com/stage/tantra-et-constellations',
      title: 'Voir les détails du stage',
    },
  },
  {
    startDate: '2025/02/04',
    startTime: '19h30',
    endDate: '2025/02/04',
    title: 'Soirée tantra',
    theme: 'La méditation des 4 amants',
    locationInfos: ['Versailles (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
    },
  },
  {
    startDate: '2025/03/11',
    startTime: '19h30',
    endDate: '2025/03/11',
    title: 'Soirée tantra',
    theme: "Les 5 langages de l'Amour",
    locationInfos: ['Versailles (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
    },
  },
  {
    startDate: '2025/06/27',
    endDate: '2025/06/29',
    title: 'Tantra Joy festival (5ème édition)',
    theme: 'Live Love Celebrate',
    locationInfos: ["Hameau de l'Etoile", '40 min de Montpellier'],
    locationType: 'Hébergement et repas sur place',
    preSubscribtionLink: {
      url: 'https://tantrajoyfestival.com/reservations/',
      title: "S'inscrire au festival",
    },
    detailsLink: {
      url: 'https://tantrajoyfestival.com/programme/',
      title: 'Voir les détails du festival',
    },
  },
  {
    startDate: '2025/04/08',
    startTime: '19h30',
    endDate: '2025/04/08',
    title: 'Soirée tantra',
    theme: 'Grande vague tantrique',
    price: '30 €',
    locationInfos: ['Vallée Rose (près de Houdan)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
    },
  },

  {
    startDate: '2025/06/13',
    endDate: '2025/06/15',
    title: "Stage lutte tantra et massage avec Oliv'eros",
    theme: "L'intensité du combat dans la douceur du massage",
    locationInfos: ['Normandie (27)'],
    locationType: 'Stage en résidentiel',
    preSubscribtionLink: {
      url: 'https://www.billetweb.fr/lutte-tantra-et-massage',
      title: "S'inscrire au stage",
    },
    detailsLink: {
      url: 'https://www.canva.com/design/DAGhCs_9tBI/lJVKpF9go_vE21wOVmfw7g/view?utm_content=DAGhCs_9tBI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc2ac15c02f',
      title: 'Détails du stage',
    },
  },
  {
    startDate: '2025/05/09',
    endDate: '2025/05/11',
    isCancelled: true,
    title: 'Stage sons, mantras, tantra',
    theme: 'En chemin sur la voix tantrique',
    locationInfos: ['Yvelines (78)'],
    locationType: 'Stage en résidentiel',
    detailsLink: {
      url: '',
      title: 'Détails à venir',
    },
    preSubscribtionLink: {
      url: 'https://www.billetweb.fr/sons-mantras-tantra',
      title: 'Se pré-inscrire au stage',
    },
  },

  {
    startDate: '2025/04/24',
    endDate: '2025/04/24',
    startTime: '09h00',
    endTime: '12h00',
    title: 'Matinée business',
    theme: 'Santé du dirigeant et constellations systémiques',
    locationInfos: ['Yvelines (78)'],
    preSubscribtionLink: {
      url: 'https://www.billetweb.fr/sante-du-dirigeant-et-constellations',
      title: "S'inscrire à la matinée",
    },
    detailsLink: {
      url: '',
      title: 'Détails à venir',
    },
  },
  {
    startDate: '2025/03/25',
    endDate: '2025/03/25',
    startTime: '18h30',
    endTime: '20h30',
    title: "Soirée constellation de l'oedipe",
    theme: '',
    price: '25 €',
    locationInfos: ['Trappes (78)'],

    detailsLink: {
      url: 'https://forms.gle/kPEf1FQpqcNmKqjs9',
      title: "S'inscrire à la soirée",
    },
  },

  {
    startDate: '2025/05/11',
    endDate: '2025/05/11',
    startTime: '09h00',
    endTime: '17h00',
    title: 'Journée "Vibrer sa voix"',
    theme: '',
    price: '90 €',
    locationInfos: ['Trappes (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/9EX5HfxXVwbXpkBQ8',
      title: "S'inscrire à la journée",
    },
    description:
      "Lors de cette journée, nous utiliserons les mantras, des exercices d'éveil corporel, et les instruments (bols tibétains, tambours, percussions, carillons…) pour libérer la voix et inviter le corps à vibrer la vie !",
  },
  {
    startDate: '2025/05/20',
    startTime: '19h30',
    endDate: '2025/05/20',
    title: 'Soirée tantra',
    theme: '',
    locationInfos: ['Trappes (78)'],
    price: '30 €',
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
    },
  },
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
    startDate: '2025/06/02',
    endDate: '2025/06/02',
    startTime: '19h30',
    endTime: '21h00',
    title: 'Soirée bien-être par la voix',
    theme: '',
    price: '25 € (ou 100 euros la carte de 5 séances)',
    locationInfos: ['Trappes village (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/ty9JF3x6Xp3kCwKb6',
      title: "S'inscrire à la soirée",
    },
    detailsLink: {
      url: 'https://www.canva.com/design/DADoRRRX86Y/xfng4FNTk0dvuYkv2_CFYQ/view?utm_content=DADoRRRX86Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h30558c1901',
      title: 'Détails de la soirée',
    },
  },
  {
    startDate: '2025/06/30',
    endDate: '2025/06/30',
    startTime: '19h30',
    endTime: '21h00',
    title: 'Soirée bien-être par la voix',
    theme: '',
    price: '25 € (ou 100 euros la carte de 5 séances)',
    locationInfos: ['Trappes village (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/ty9JF3x6Xp3kCwKb6',
      title: "S'inscrire à la soirée",
    },
    detailsLink: {
      url: 'https://www.canva.com/design/DADoRRRX86Y/xfng4FNTk0dvuYkv2_CFYQ/view?utm_content=DADoRRRX86Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h30558c1901',
      title: 'Détails de la soirée',
    },
  },
  {
    startDate: '2025/06/17',
    startTime: '19h30',
    endDate: '2025/06/17',
    title: 'Soirée tantra',
    theme: 'La relation consciente',
    locationInfos: ['Versailles (78)'],
    preSubscribtionLink: {
      url: 'https://forms.gle/4aY62NqVqtd6ghKH7',
      title: "S'inscrire à la soirée",
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

export const Calendrier: FC = () => {
  const hasEvents = sortedUpcomingEvents.length > 0;
  const hasNoEvent = sortedUpcomingEvents.length === 0;
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
          <Link
            to="/professionnels/calendrier"
            className="text-decoration-none text-light btn btn-outline-light fw-bolder w-75 mt-4 mb-4"
            title="Calendrier 2025"
            aria-label="Calendrier 2025"
          >
            <div className="d-flex flex-column align-items-center">
              <span>Calendrier 2025 pour les professionnels et institutions</span>
            </div>
          </Link>
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

Calendrier.displayName = 'Calendrier';
