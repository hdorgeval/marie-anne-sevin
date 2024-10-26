import { useMemo } from 'react';

export interface CalendarOptions {
  /**
   * Start date in iso format : yyyy/mm/dd
   *
   * @type {string}
   * @memberof CalendarOptions
   */
  startDate: string;
  /**
   * End date in iso format : yyyy/mm/dd
   *
   * @type {string}
   * @memberof CalendarOptions
   */
  endDate: string;
}

type Language = 'fr';

export interface DateInfos {
  date: string;
  day: string;
  weekday: string;
  month: string;
  year: string;
  isPassed: boolean;
  lang: Language;
  localizedDateFull: string;
}

export function extractDateInfosFromIsoDate(isoDate: string, lang: Language): DateInfos {
  const year = new Intl.DateTimeFormat(lang, { year: 'numeric' }).format(new Date(isoDate));
  const day = new Intl.DateTimeFormat(lang, { day: 'numeric' }).format(new Date(isoDate));
  const weekday = new Intl.DateTimeFormat(lang, { weekday: 'long' }).format(new Date(isoDate));
  const month = new Intl.DateTimeFormat(lang, { month: 'long' }).format(new Date(isoDate));
  const localizedDateFull = new Intl.DateTimeFormat(lang, { dateStyle: 'full' }).format(
    new Date(isoDate),
  );
  const isPassed = new Date() >= new Date(isoDate);

  return {
    day,
    weekday,
    month,
    year,
    date: isoDate,
    isPassed,
    lang,
    localizedDateFull,
  };
}

export function buildDateRangeLabel(startDate: string, endDate: string): string {
  const startDateInfos = extractDateInfosFromIsoDate(startDate, 'fr');
  const endDateInfos = extractDateInfosFromIsoDate(endDate, 'fr');

  if (startDate === endDate) {
    return `${startDateInfos.day} ${startDateInfos.month} ${startDateInfos.year}`;
  }

  if (startDateInfos.year === endDateInfos.year && startDateInfos.month === endDateInfos.month) {
    return `Du ${startDateInfos.day} au ${endDateInfos.day} ${startDateInfos.month} ${startDateInfos.year}`;
  }

  if (startDateInfos.year === endDateInfos.year && startDateInfos.month !== endDateInfos.month) {
    return `Du ${startDateInfos.day} ${startDateInfos.month} au ${endDateInfos.day} ${endDateInfos.month} ${startDateInfos.year}`;
  }
  return `Du ${startDateInfos.day} ${startDateInfos.month} ${startDateInfos.year} au ${endDateInfos.day} ${endDateInfos.month} ${endDateInfos.year}`;
}

export const useCalendar = (options: CalendarOptions) => {
  const startDateInfos = extractDateInfosFromIsoDate(options.startDate, 'fr');
  const endDateInfos = extractDateInfosFromIsoDate(options.endDate, 'fr');

  const fromStartDateToEndDateText = useMemo(() => {
    if (startDateInfos.year === endDateInfos.year && startDateInfos.month === endDateInfos.month) {
      return `Du ${startDateInfos.day} au ${endDateInfos.day} ${startDateInfos.month} ${startDateInfos.year}`;
    }

    if (startDateInfos.year === endDateInfos.year && startDateInfos.month !== endDateInfos.month) {
      return `Du ${startDateInfos.day} ${startDateInfos.month} au ${endDateInfos.day} ${endDateInfos.month} ${startDateInfos.year}`;
    }
    return `Du ${startDateInfos.day} ${startDateInfos.month} ${startDateInfos.year} au ${endDateInfos.day} ${endDateInfos.month} ${endDateInfos.year}`;
  }, [
    endDateInfos.day,
    endDateInfos.month,
    endDateInfos.year,
    startDateInfos.day,
    startDateInfos.month,
    startDateInfos.year,
  ]);
  return { startDateInfos, endDateInfos, fromStartDateToEndDateText };
};
