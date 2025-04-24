import { createContext, FunctionComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { generateId } from '../../utils';

import { ToastType, ToastNotification } from './types';

const TOAST_SHOW_TIMEOUT = 3000;

const useToastService = () => {
  const [toastsQueue, setToastsQueue] = useState<ToastNotification[]>([]);
  const [activeToast, setActiveToast] = useState<ToastNotification | null>(null);

  const showToast = (type: ToastType, text: string) => {
    setToastsQueue((queue) => queue.concat({ type, text, id: generateId() }));
  };

  useEffect(() => {
    if (toastsQueue.length === 0) {
      return;
    }

    const [next] = toastsQueue;

    if (next.id === activeToast?.id) {
      // in case of pushing new items to queue while showing current toast still in progress
      return;
    }

    setActiveToast(next);

    setTimeout(() => {
      // last toast in queue
      if (toastsQueue.length === 1) {
        setActiveToast(null);
      }

      setToastsQueue((queue) => queue.slice(1, queue.length));
    }, TOAST_SHOW_TIMEOUT);
  }, [toastsQueue, activeToast]);

  return {
    showToast,
    activeToast,
  };
};

export const ToastServiceContext = createContext<ReturnType<typeof useToastService>>(
  {} as ReturnType<typeof useToastService>,
);

export const ToastServiceProvider: FunctionComponent = ({ children }) => (
  <ToastServiceContext.Provider value={useToastService()}>{children}</ToastServiceContext.Provider>
);
