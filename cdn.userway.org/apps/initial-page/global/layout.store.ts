import { SharedClasses, Subject } from 'helpers';

enum HiddenBySection {
  Top,
  Bottom,
}

class LayoutStore {
  // logic to trigger "checkOverflowClass" calculation to make sure that widget window has the right size
  public viewUpdate$ = new Subject();

  public scrollContainer$ = new Subject<HTMLDivElement>({ replay: true });

  // TODO replace logic with SharedClasses
  public contentClass$ = new Subject<string>({ initialState: '' });

  public mainContainer = new SharedClasses();

  public scrollTop(value: number, smooth: boolean = true) {
    const scrollContainer = this.scrollContainer$.lastValue;

    if (!scrollContainer) {
      return;
    }

    smooth && scrollContainer.scrollTo
      ? scrollContainer.scrollTo({
          top: value,
          behavior: 'smooth',
        })
      : (scrollContainer.scrollTop = value);
  }

  public makeSureElementVisible(element: HTMLElement) {
    const scrollContainer = this.scrollContainer$.lastValue;

    if (!scrollContainer) {
      return;
    }

    const isHidden = (
      containerScroll: HTMLDivElement,
      target: HTMLElement,
    ): HiddenBySection | null => {
      const targetBound = target.getBoundingClientRect();
      const scrollBound = containerScroll.getBoundingClientRect();
      const topDistance = targetBound.top - scrollBound.top;

      if (topDistance < 0) {
        return HiddenBySection.Top;
      }

      if (targetBound.bottom > scrollBound.bottom) {
        return HiddenBySection.Bottom;
      }

      return null;
    };

    const isHiddenBy = isHidden(scrollContainer, element);

    if (isHiddenBy === null) {
      return;
    }

    if (isHiddenBy === HiddenBySection.Top) {
      // scroll to element and add 10 px up
      element.scrollIntoView(true);
      return scrollContainer.scroll(0, scrollContainer.scrollTop - 10);
    }

    if (isHiddenBy === HiddenBySection.Bottom) {
      // scroll to the end of the element and add 10 px down
      const targetBound = element.getBoundingClientRect();
      const scrollBound = scrollContainer.getBoundingClientRect();
      const scrollDiff = targetBound.bottom - scrollBound.bottom;

      return scrollContainer.scroll(0, scrollContainer.scrollTop + scrollDiff + 10);
    }
  }
}

(window as any).layoutStore = new LayoutStore();

export const layoutStore = (window as any).layoutStore as LayoutStore;
