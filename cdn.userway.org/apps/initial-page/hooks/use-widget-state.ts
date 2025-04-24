import { useCallback, useEffect, useState } from 'preact/hooks';
import { sendPostMessage } from '../helpers/post-message.helper';
import { stateStore } from '../global/state.store';
import { Trigger } from '../types/trigger';

export const useWidgetState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosedByUser, setIsClosedByUser] = useState(false);
  const [trigger, setTrigger] = useState<Trigger>(null);

  useEffect(() => {
    const handleShowState = (
      { data }: { data: { action?: string; state?: string; trigger?: Trigger } } = { data: {} },
    ) => {
      if (data.action === 'toggled') {
        if (data.state === 'show') {
          setTimeout(() => {
            setIsOpen(true);
          });
          setIsClosedByUser(false);
          setTrigger(() => data.trigger || Trigger.Main);
          stateStore.onOpen$.next();

          // required for communication callback logic with postMessageWithNotification
          sendPostMessage({
            action: 'widgetOpened',
          });
        }

        if (data.state === 'hide') {
          setIsClosedByUser(true);
          setIsOpen(false);

          // required for communication callback logic with postMessageWithNotification
          sendPostMessage({
            action: 'widgetClosed',
          });
        }
      }
    };

    window.addEventListener('message', handleShowState);

    sendPostMessage({
      action: 'isWidgetOpened',
    });

    return () => window.removeEventListener('message', handleShowState);
  }, []);

  const close = useCallback(() => {
    sendPostMessage({
      action: 'on_demand_reader_stop',
    });

    sendPostMessage({
      action: 'close',
    });

    setIsOpen(false);
    trigger === Trigger.Main && setIsClosedByUser(true);
    stateStore.onClose$.next();
  }, [isOpen, isClosedByUser]);

  return { close, isOpen, trigger, isClosedByUser };
};
