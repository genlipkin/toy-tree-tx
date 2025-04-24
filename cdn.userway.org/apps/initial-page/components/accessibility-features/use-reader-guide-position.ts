import { useEffect } from 'preact/hooks';
import debounce from 'lodash/debounce.js';
import { AllyFeatureData } from 'components/accessibility-features/use-ally-features';
import { sendPostMessage } from '../../helpers/post-message.helper';
import { includes } from '../../helpers/operators';

/*
 * Send mouse position when the Reading Guide or the Reading Mask feature enabled
 * */
export const useReaderGuidePosition = (allyFeaturesState: Record<string, AllyFeatureData>) => {
  useEffect(() => {
    const mouseMoveHandler = function (e) {
      e = e || window.event;
      const cursorPosition = {
        yPos: e.pageY,
        xPos: e.pageX,
      };
      sendPostMessage({ action: 'setReaderGuidePosition', value: cursorPosition });
    };
    const WAIT_TIME_MILLISECONDS = 3;
    const debounced = debounce(mouseMoveHandler, WAIT_TIME_MILLISECONDS, {
      leading: true,
      trailing: false,
    });

    const feature = allyFeaturesState.s2;

    if (feature) {
      const isReaderMaskOrGuide = includes([2, 3], feature.actionState);

      if (isReaderMaskOrGuide) {
        document.addEventListener('mousemove', debounced);
      }
    }

    return () => document.removeEventListener('mousemove', debounced);
  }, [allyFeaturesState]);
};
