import { Subject } from 'helpers/store';
import { useApplicationSetup } from 'contexts/use-application-setup';
import { useLSTService } from '../contexts/lst/lst-provider';
import { LstOperateAPI } from '../contexts/lst/types';

class ConfigStore {
  public config$ = new Subject<ReturnType<typeof useApplicationSetup>>({ replay: true });

  public lstConfig$ = new Subject<ReturnType<typeof useLSTService>>({ replay: true });

  public lstOperate$ = new Subject<LstOperateAPI>({ replay: true });

  public siteCount$ = new Subject<number>({ replay: true });
}

(window as any).configStore = new ConfigStore();

export const configStore = (window as any).configStore as ConfigStore;
