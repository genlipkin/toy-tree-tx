import { EventTracking } from '@uw/event-tracker';

(window as any).eventTracking = new EventTracking({ url: '__API_BASE__' });

export const eventTracking = (window as any).eventTracking;
