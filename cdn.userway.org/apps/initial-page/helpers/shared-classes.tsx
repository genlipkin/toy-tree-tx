import { Subject } from './store';
import { includes } from './operators';

export class SharedClasses {
  public classes$ = new Subject<string[]>({ initialState: [] });

  constructor(initialClassName?: string) {
    if (initialClassName) {
      this.classes$.next([initialClassName]);
    }
  }

  public getValue() {
    return this.classes$.lastValue.join(' ');
  }

  public hasClass(className: string) {
    const values = this.classes$.lastValue;
    return includes(values, className);
  }

  public addClass(className: string) {
    const values = this.classes$.lastValue;

    if (this.hasClass(className)) {
      // do not add class that already on the list
      return;
    }

    const updatedValues = [...values, className];

    this.classes$.next(updatedValues);
  }

  public removeClass(className: string) {
    const values = this.classes$.lastValue;
    const updatedValues = values.filter((value) => value !== className);
    this.classes$.next(updatedValues);
  }

  public toggleClass(className: string) {
    this.hasClass(className) ? this.removeClass(className) : this.addClass(className);
  }
}
