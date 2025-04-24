import { Subject } from 'helpers/store';
import { configStore } from 'global/config.store';
import { sendPostMessage } from 'helpers/post-message.helper';

class ReaderInteractionStore {
  public readerProgressValue: { dictionary?: boolean } = {};

  public internalReaderStopped$ = new Subject<void>();

  constructor() {
    this.internalReaderStopped$.subscribe(() => {
      Object.keys(this.readerProgressValue).forEach((key) => {
        this.readerProgressValue[key] = false;
      });
    });
  }

  forceReaderToRead(
    content,
    options: {
      caller?: string;
      menuLanguage?: string;
      isAlert?: boolean;
      action?: string;
      readingSpeedRate?: number;
    } = {},
  ) {
    const mergedOptions = {
      ...options,
      action: 'on_demand_reader',
      contentToRead: content,
      isAlert: false,
    };
    if (mergedOptions.caller) {
      this.readerProgressValue[mergedOptions.caller] = true;
    }

    const { paidAi } = configStore.config$.lastValue;
    const { languageInfo, lstOptions } = configStore.lstConfig$.lastValue;

    if (!mergedOptions.menuLanguage && lstOptions.is_enabled && languageInfo) {
      mergedOptions.menuLanguage = languageInfo.value;
    }

    paidAi && sendPostMessage(mergedOptions);
  }

  forceReaderToStop() {
    sendPostMessage({
      action: 'on_demand_reader_stop',
    });
  }
}

(window as any).readerInteractionStore = new ReaderInteractionStore();

export const readerInteractionStore = (window as any)
  .readerInteractionStore as ReaderInteractionStore;
