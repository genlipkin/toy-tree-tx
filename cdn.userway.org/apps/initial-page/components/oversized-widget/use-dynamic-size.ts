import { useCallback } from 'preact/hooks';
import { useConnect } from 'helpers/use-connect-to-global-store';
import { oversizedStore } from 'components/oversized-widget/oversized.store';

export const useDynamicSize = () => {
  const [isOversized] = useConnect(oversizedStore.isOversized$);

  return useCallback(
    (small: number, large: number) => (isOversized ? large : small),
    [isOversized],
  );
};
