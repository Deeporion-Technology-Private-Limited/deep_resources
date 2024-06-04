export enum MonthsOfYear {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export interface CalendarProps {
  year: number;
  month: MonthsOfYear;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}