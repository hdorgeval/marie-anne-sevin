export interface NextToComeEvent {
  startDate: string;
  endDate: string;
  name: string;
  url: string;
  isPassed?: boolean;
}

export const useMultipleEventsCalendar = (events: NextToComeEvent[]) => {
  const nextToComeEvents = events
    .map((e) => {
      return {
        ...e,
        isPassed: new Date() >= new Date(e.startDate),
      };
    })
    .filter((e) => !e.isPassed)
    .sort((e1, e2) => (new Date(e1.startDate) >= new Date(e2.startDate) ? 1 : -1));

  return { nextToComeEvents };
};
