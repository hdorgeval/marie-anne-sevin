import { type FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { buildDateRangeLabel } from '../hooks/useCalendar';
import { type NextToComeEvent, useMultipleEventsCalendar } from '../hooks/useMultipleEvents';

export const events: NextToComeEvent[] = [
  {
    startDate: '2024/03/19',
    endDate: '2024/03/19',
    name: 'Soirée tantra - Toucher méditatif',
    url: '/soiree-tantra',
  },
  {
    startDate: '2024/04/27',
    endDate: '2024/04/28',
    name: 'Toucher Présent - Toucher Conscient',
    url: '/stage/toucher-present-toucher-conscient',
  },
];

export const NextToCome: FC = () => {
  const { nextToComeEvents } = useMultipleEventsCalendar(events);
  const hasNextToComeMultipleEvents = useMemo(() => {
    return Array.isArray(nextToComeEvents) && nextToComeEvents.length > 1;
  }, [nextToComeEvents]);

  const hasNoNextToComeEvent = useMemo(() => {
    return Array.isArray(nextToComeEvents) && nextToComeEvents.length === 0;
  }, [nextToComeEvents]);

  if (hasNoNextToComeEvent) {
    return null;
  }

  return (
    <div id="next-to-come-carousel" data-bs-ride="carousel" className="carousel slide w-100">
      <div className="carousel-inner">
        {nextToComeEvents.map((event, index) => (
          <div
            key={event.name}
            data-bs-interval="2000"
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Link to={event.url}>
              <div className="badge rounded-pill@ fs-6 border border-secondary py-2 px-4 text-bg-next-to-come-badge">
                <div className="d-flex flex-column align-items-center text-wrap">
                  <span>{buildDateRangeLabel(event.startDate, event.endDate)}</span>
                  <span className="mt-2 text-nowrap"> {event.name}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {hasNextToComeMultipleEvents && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#next-to-come-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#next-to-come-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </>
      )}
    </div>
  );
};

NextToCome.displayName = 'NextToCome';
