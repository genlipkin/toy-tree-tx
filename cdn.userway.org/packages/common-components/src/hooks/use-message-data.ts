import { useEffect, useState } from 'preact/hooks';

export const useMessageData = <DataType = any>({
  allowedActionsList,
  type,
  action,
}: {
  allowedActionsList: string[];
  type?: string;
  action?: string;
}) => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const message = event.data;

      if (!message) {
        return;
      }

      const { isUserWay, action: messageAction } = message;
      const isSupportedAction = allowedActionsList.includes(messageAction);

      if (!isUserWay || !isSupportedAction) {
        return;
      }

      if (type && message.type === type) {
        setData(message.data || {});
      }

      if (action && message.action === action) {
        setData(message.data || {});
      }

      if (!type && !action) {
        setData(message.data || {});
      }
    });
  }, [type]);

  return data;
};
