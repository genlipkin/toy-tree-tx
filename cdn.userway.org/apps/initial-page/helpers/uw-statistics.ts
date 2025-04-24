import { sendPostMessage } from './post-message.helper';

interface StatisticsData {
  data: string;
}

export const uwStatistics = {
  widgetOpened: ({ data }: StatisticsData) => {
    sendPostMessage({
      event: 'customEvent',
      eventCategory: 'userway',
      eventAction: 'widget open',
      eventLabel: data,
    });
  },
  profileTriggered: ({ data }: StatisticsData) => {
    sendPostMessage({
      event: 'customEvent',
      eventCategory: 'userway',
      eventAction: 'profile selection',
      eventLabel: data,
    });
  },
  featureTriggered: ({ data }: StatisticsData) => {
    sendPostMessage({
      event: 'customEvent',
      eventCategory: 'userway',
      eventAction: 'ability enablement',
      eventLabel: data,
    });
  },
};
