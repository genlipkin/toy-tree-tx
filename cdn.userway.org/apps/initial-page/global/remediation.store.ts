import { Subject } from 'helpers/store';
import { sendPostMessage } from 'helpers/post-message.helper';

export interface ViolationType {
  count: number;
  percentage: number;
  offset: number;
}

export interface Violations {
  fetched: boolean;
  site: string | null;
  totalCount: number;
  list: string;
  A: ViolationType;
  AA: ViolationType;
  AAA: ViolationType;
}

const violationsInitialValue: Violations = {
  fetched: false,
  site: null,
  totalCount: 0,
  list: null,
  A: {
    count: 0,
    percentage: 0,
    offset: 0,
  },
  AA: {
    count: 0,
    percentage: 0,
    offset: 0,
  },
  AAA: {
    count: 0,
    percentage: 0,
    offset: 0,
  },
};

class RemediationStore {
  public countByType$ = new Subject<Record<string, number>>({ replay: true });

  public totalFixed$ = new Subject<number>({ replay: true, initialState: 0 });

  public allRemediations$ = new Subject<number>({ replay: true });

  public violations$ = new Subject<Violations>({
    replay: true,
    initialState: violationsInitialValue,
  });

  constructor() {
    window.addEventListener('message', (event) => {
      const data = event.data || {};

      if (data.action !== 'remediation') {
        return;
      }

      if (data.type === 'remediation-count') {
        const remediationCounts = data.data;
        const totalFixed = Object.keys(remediationCounts)
          .map((key) => remediationCounts[key])
          .reduce((r, c) => r + c, 0);

        this.countByType$.next(remediationCounts);
        this.totalFixed$.next(totalFixed);
      }

      if (data.type === 'all-data') {
        this.allRemediations$.next(data.data);
      }
    });

    sendPostMessage({
      action: 'remediation',
      type: 'remediation-count',
    });
    sendPostMessage({
      action: 'remediation',
      type: 'all-data',
    });
  }

  setAllRemediations(data) {
    this.allRemediations$.next(data);
  }
}

(window as any).remediationStore = new RemediationStore();

export const remediationStore = (window as any).remediationStore as RemediationStore;
