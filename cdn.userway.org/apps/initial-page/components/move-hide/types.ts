export enum HideTimeDuration {
  CurrentSession = 'current',
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Indefinitely = 'indefinitely',
}

export interface HideTime {
  id: number;
  text: string;
  type: HideTimeDuration;
}
