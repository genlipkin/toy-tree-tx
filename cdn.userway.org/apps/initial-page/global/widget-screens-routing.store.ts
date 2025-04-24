import { Subject } from 'helpers/store';

class WidgetScreensRoutingStore {
  public setPerSiteSettingsFlowThisSite$ = new Subject({ replay: true });

  public updateState$ = new Subject<{ path: string; value: string }>({ replay: true });
}

(window as any).widgetScreensRoutingStore = new WidgetScreensRoutingStore();

export const widgetScreensRoutingStore = (window as any)
  .widgetScreensRoutingStore as WidgetScreensRoutingStore;
