export enum ButtonVariant {
  DefaultPrimary = "defaultPrimary",
  DefaultSeconday = "defaultSecondary",
  DefaultDarkBackground = "defaultDarkBackground",
}

export enum ButtonSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

export enum ButtonColorScheme {
  Primary = "primary"
}

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

