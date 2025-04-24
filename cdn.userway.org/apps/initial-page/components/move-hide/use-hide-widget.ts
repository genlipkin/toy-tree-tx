import { useState } from 'preact/hooks';
import { useStatistics } from 'contexts/use-statistics';
import { sendPostMessage } from '../../helpers/post-message.helper';
import {
  HOURS_IN_DAY,
  MILISECONDS_IN_SECOND,
  MINUTES_IN_HOUR,
  MONTH_DAYS_COUNT,
  ONE_DAY_COUNT,
  SECONDS_IN_MINUTE,
  TIME_OPTIONS_LIST,
  WEEK_DAYS_COUNT,
} from './constants';
import { HideTime, HideTimeDuration } from './types';

const daysToMilliseconds = (days: number) =>
  days * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILISECONDS_IN_SECOND;

const getExpirationTime = (type: HideTimeDuration) => {
  switch (type) {
    case HideTimeDuration.Month:
      return daysToMilliseconds(MONTH_DAYS_COUNT);
    case HideTimeDuration.Week:
      return daysToMilliseconds(WEEK_DAYS_COUNT);
    case HideTimeDuration.Day:
    default:
      return daysToMilliseconds(ONE_DAY_COUNT);
  }
};

export const useHideWidget = () => {
  const { sendStatistics } = useStatistics();
  const [selectedTime, setSelectedTime] = useState<HideTime>(TIME_OPTIONS_LIST[0]);

  const hideWidget = () => {
    const { type } = selectedTime;

    sendPostMessage({
      action: 'setTimeHideWidget',
      value: { type, expirationTime: getExpirationTime(type) },
    });

    sendStatistics('hides');
  };

  return {
    hideWidget,
    setSelectedTime,
    selectedTime,
  };
};
