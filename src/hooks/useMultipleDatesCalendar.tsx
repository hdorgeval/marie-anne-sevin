import { extractDateInfosFromIsoDate } from './useCalendar';

export const useMultipleDatesCalendar = (dates: string[]) => {
  const datesInfos = dates.map((d) => extractDateInfosFromIsoDate(d));
  const allDatesArePassed = datesInfos.every((d) => d.isPassed);
  const dueDatesInfos = datesInfos.filter((d) => !d.isPassed);

  const dueDateInfos = dueDatesInfos.shift();
  const hasNextDates = Array.isArray(dueDatesInfos) && dueDatesInfos.length > 0;

  const dueDate = dueDateInfos
    ? `${dueDateInfos.day} ${dueDateInfos.month} ${dueDateInfos.year}`
    : undefined;

  const dueDateInIsoFormat = dueDateInfos?.date;

  const nextDates = dueDatesInfos.map((d) => ({
    date: `${d.day} ${d.month} ${d.year}`,
    dateInIsoFormat: d.date,
  }));
  return { allDatesArePassed, hasNextDates, dueDate, dueDateInIsoFormat, nextDates };
};
