import { generateId } from './generate-id';

export interface SubjectOptions<R = any> {
  // will replay data events on subscription
  // can receive "boolean" which is equal "1" replay or any positive number (N)
  // which will replay N amounts of times
  replay?: boolean | number;

  initialState?: R;
}

export interface UnsubscribeFn {
  (): void;
}

export class Subject<T = any> {
  public subscribers: Record<string, (data?: T) => void> = {};

  public dataPull: T[] = null;

  public lastValue: T = null;

  constructor(public options?: SubjectOptions<T>) {
    if (options?.replay) {
      this.dataPull = [];
    }

    if (options?.initialState !== undefined) {
      this.lastValue = options.initialState;

      if (options.replay) this.checkReplyPull(this.lastValue);
    }
  }

  applyOptions(callback: (data?: T) => void) {
    if (this.options?.replay && this.dataPull.length) {
      this.dataPull.forEach((data) => callback(data));
    }
  }

  checkReplyPull(data?: T) {
    if (this.options?.replay) {
      const dataPullSize = Number(this.options?.replay);
      this.dataPull.push(data);
      const resultSize = this.dataPull.length;

      if (dataPullSize > resultSize) {
        return;
      }

      this.dataPull = this.dataPull.slice(resultSize - dataPullSize, resultSize);
    }
  }

  subscribe(callback: (data?: T) => void): UnsubscribeFn {
    const id = generateId();
    this.subscribers[id] = callback;

    this.applyOptions(callback);

    return () => {
      delete this.subscribers[id];
    };
  }

  next(data?: T) {
    Object.keys(this.subscribers).forEach((id) => this.subscribers[id](data));
    this.lastValue = data;
    this.checkReplyPull(data);
  }

  clear() {
    this.subscribers = {};

    if (this.dataPull.length) {
      this.dataPull = [];
    }
  }
}
