import { HideTime, HideTimeDuration } from './types';

export const ONE_DAY_COUNT = 1;
export const WEEK_DAYS_COUNT = 7;
export const MONTH_DAYS_COUNT = 30;

export const HOURS_IN_DAY = 24;
export const MINUTES_IN_HOUR = 60;
export const SECONDS_IN_MINUTE = 60;
export const MILISECONDS_IN_SECOND = 1000;

export const TIME_OPTIONS_LIST: HideTime[] = [
  { id: 1, text: 'widget.manageHideMove.hideTime.current', type: HideTimeDuration.CurrentSession },
  { id: 2, text: 'widget.manageHideMove.hideTime.day', type: HideTimeDuration.Day },
  { id: 3, text: 'widget.manageHideMove.hideTime.week', type: HideTimeDuration.Week },
  { id: 4, text: 'widget.manageHideMove.hideTime.month', type: HideTimeDuration.Month },
  {
    id: 5,
    text: 'widget.manageHideMove.hideTime.indefinitely',
    type: HideTimeDuration.Indefinitely,
  },
];
