import { extractDateInfosFromIsoDate } from './useCalendar';

export const useMultipleDatesCalendar = (dates: string[]) => {
  const datesInfos = dates.map((d) => extractDateInfosFromIsoDate(d));
  const allDatesArePassed = datesInfos.every((d) => d.isPassed);
  const dueDatesInfos = datesInfos.filter((d) => !d.isPassed);

  const dueDateInfos = dueDatesInfos.shift();
  const hasNextDates = dueDatesInfos?.length > 0 ?? false;

  const dueDate = dueDateInfos
    ? `${dueDateInfos.day} ${dueDateInfos.month} ${dueDateInfos.year}`
    : undefined;

  const nextDates = dueDatesInfos.map((d) => `${d.day} ${d.month} ${d.year}`);

  return { allDatesArePassed, hasNextDates, dueDate, nextDates };
};
