import { useCallback, useEffect } from 'preact/hooks';
import { useTranslation } from 'hooks/use-translation';
import {
  AllyFeatureData,
  AllyFeaturesAction,
  AllyFeaturesActions,
} from 'components/accessibility-features/use-ally-features';
import { useNavigationReader } from 'hooks/use-navigation-reader';
import { useUwBranding } from 'hooks/use-uw-branding';

type useAllyFeaturesWindowEventsProps = {
  onResetAll: () => void;
  allyFeatureDispatch: (action: AllyFeaturesAction) => void;
  allyFeaturesState: Record<string, AllyFeatureData>;
};

export const useAllyFeaturesWindowEvents = ({
  onResetAll,
  allyFeaturesState,
  allyFeatureDispatch,
}: useAllyFeaturesWindowEventsProps) => {
  const { translate } = useTranslation();
  const { isWhiteLabeled } = useUwBranding();
  const { sendNavigationReaderRequest } = useNavigationReader();

  const makeScreenReaderAvailable = useCallback(() => {
    allyFeatureDispatch(AllyFeaturesActions.update({ name: 's9', temporaryDisabled: false }));
  }, [allyFeatureDispatch]);

  const makeScreenReaderNotAvailable = useCallback(() => {
    const reasonContent = translate(
      isWhiteLabeled
        ? 'widget.responsive_voice.language_is_not_supported_wl'
        : 'widget.responsive_voice.language_is_not_supported',
    );
    const temporaryDisabled = {
      reason: reasonContent,
    };

    // FIXME Remove this code or fix it - screen reader does not pronounce it
    // const content = translate('widget.responsive_voice.disabledScreenReader');
    // sendNavigationReaderRequest(content, false);

    allyFeatureDispatch(
      AllyFeaturesActions.update({
        name: 's9',
        actionState: 0,
        temporaryDisabled,
      }),
    );
  }, [allyFeatureDispatch, sendNavigationReaderRequest, isWhiteLabeled, translate]);

  const enableScreenReader = useCallback(() => {
    const readerSpeed = window.localStorage.getItem('readerSpeed') || '1';
    const state = parseInt(readerSpeed, 10);

    allyFeatureDispatch(
      AllyFeaturesActions.update({ name: 's9', actionState: state, temporaryDisabled: false }),
    );

    const content = translate(
      isWhiteLabeled ? 'widget.responsive_voice.enabled_wl' : 'widget.responsive_voice.enabled',
    );
    sendNavigationReaderRequest(content, { isReader: true });
  }, [allyFeatureDispatch, sendNavigationReaderRequest, isWhiteLabeled, translate]);

  const disableScreenReader = useCallback(() => {
    allyFeatureDispatch(
      AllyFeaturesActions.update({
        name: 's9',
        actionState: 0,
        temporaryDisabled: false,
      }),
    );

    const content = translate(
      isWhiteLabeled
        ? 'widget.responsive_voice.disabledScreenReader_wl'
        : 'widget.responsive_voice.disabledScreenReader',
    );
    sendNavigationReaderRequest(content, { isReader: true });
  }, [allyFeatureDispatch, sendNavigationReaderRequest, isWhiteLabeled, translate]);

  const toggleScreenReader = useCallback(() => {
    const readerFeature = allyFeaturesState.s9;

    // ScreenReader is not available
    if (!readerFeature) {
      return;
    }

    if (readerFeature.temporaryDisabled) {
      const content = translate(
        isWhiteLabeled
          ? 'widget.responsive_voice.language_is_not_supported_wl'
          : 'widget.responsive_voice.language_is_not_supported',
      );
      sendNavigationReaderRequest(content, { isReader: true });
      return;
    }

    if (readerFeature.actionState) {
      disableScreenReader();
    } else {
      enableScreenReader();
    }
  }, [
    allyFeaturesState,
    enableScreenReader,
    disableScreenReader,
    sendNavigationReaderRequest,
    isWhiteLabeled,
    translate,
  ]);

  const enableVoiceNavigation = useCallback(() => {
    allyFeatureDispatch(AllyFeaturesActions.update({ name: 's24', actionState: 1 }));
  }, [allyFeatureDispatch]);

  const disableVoiceNavigation = useCallback(() => {
    allyFeatureDispatch(AllyFeaturesActions.update({ name: 's24', actionState: 0 }));
  }, [allyFeatureDispatch]);

  const toggleVoiceNavigation = useCallback(() => {
    const voiceNavigationFeature = allyFeaturesState.s24;

    if (!voiceNavigationFeature) {
      return;
    }

    if (voiceNavigationFeature.actionState) {
      disableVoiceNavigation();
    } else {
      enableVoiceNavigation();
    }
  }, [allyFeaturesState, enableVoiceNavigation, disableVoiceNavigation]);

  const handleKeyboardShortcuts = useCallback(
    (event) => {
      if ((event.code === 'Period' || event.key === '.') && event.ctrlKey) {
        toggleScreenReader();
      }
      if ((event.code === 'Space' || event.which === 32) && event.ctrlKey) {
        // Ctrl + Space
        onResetAll();
      }
      if ((event.code === 'Comma' || event.key === ',') && event.ctrlKey) {
        toggleVoiceNavigation();
      }
    },
    [toggleScreenReader, onResetAll],
  );

  const handleMessageActions = useCallback(
    (event) => {
      const data = event.data || {};
      if (data.action === 'feature_use') {
        const featureName = data.name.split('-')[1];
        const feature = allyFeaturesState[featureName];
        const value = data.value || 0;

        if (feature) {
          allyFeatureDispatch(
            AllyFeaturesActions.update({ name: featureName, actionState: value }),
          );
        }
      } else if (data.action === 'close_ps_popup') {
        const pageStructure = allyFeaturesState.s11;

        if (pageStructure) {
          allyFeatureDispatch(AllyFeaturesActions.update({ name: 's11', actionState: 0 }));
        }
        if (data.force_focus) {
          const ps = document.querySelector(
            '.button.ally-action.page-structure-small.ally-action-item__ready',
          ) as HTMLElement;
          if (ps) {
            ps.focus();
          }
        }
      }

      const isScreenReaderAvailable = !!allyFeaturesState.s9;

      if (data.action === 'toggleReader' && isScreenReaderAvailable) {
        toggleScreenReader();
      } else if (data.action === 'screen_reader_available' && isScreenReaderAvailable) {
        makeScreenReaderAvailable();
      } else if (data.action === 'screen_reader_not_available' && isScreenReaderAvailable) {
        makeScreenReaderNotAvailable();
      } else if (data.action === 'closeVoiceNavigation') {
        disableVoiceNavigation();
      } else if (data.action === 'openVoiceNavigation') {
        enableVoiceNavigation();
      }
    },
    [
      toggleScreenReader,
      makeScreenReaderAvailable,
      makeScreenReaderNotAvailable,
      allyFeaturesState,
      allyFeatureDispatch,
    ],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardShortcuts);

    window.addEventListener('message', handleMessageActions);

    return () => {
      window.removeEventListener('keydown', handleKeyboardShortcuts);
      window.removeEventListener('message', handleMessageActions);
    };
  }, [toggleScreenReader, handleKeyboardShortcuts]);
};
