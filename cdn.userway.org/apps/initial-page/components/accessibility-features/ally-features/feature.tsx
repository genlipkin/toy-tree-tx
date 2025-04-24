import { h, FunctionalComponent } from 'preact';
import { useMemo } from 'preact/hooks';
import { EnabledFeatureIcon } from '@uw/icons';
import { includes } from 'helpers';
import { useUwBranding } from 'hooks/use-uw-branding';
import { useTranslation } from 'hooks/use-translation';
import { AllyFeatureData } from '../use-ally-features';
import './feature.scss';
import { useDynamicSize } from '../../oversized-widget/use-dynamic-size';

interface FeatureProps {
  isLoading?: boolean;
  onClick: (event?: MouseEvent) => void;
}

const createArray = (n: number) => Array.apply(null, Array(n - 1));

const INACTIVE = 0;
const TOGGLE_ONLY = 2;

export const Feature: FunctionalComponent<FeatureProps & AllyFeatureData> = (props) => {
  const {
    name,
    disabledSlot,
    actionState = 0,
    disabledSteps = [],
    actionStatesMeta,
    onClick,
    temporaryDisabled = false,
    children,
  } = props;

  /** It's confirmed to hide such features for now,
   * but we keep logic of disabling and explanation of reason in this
   * component below (until final decision)
   * */
  if (temporaryDisabled) {
    return null;
  }

  const { translate } = useTranslation();
  const size = useDynamicSize();

  const { isWhiteLabeled } = useUwBranding();

  const actionStepsCount = useMemo(
    () => Object.keys(actionStatesMeta).length - disabledSteps.length,
    [disabledSteps, actionStatesMeta],
  );

  const isFeatureDisabledClass = useMemo(
    () => (temporaryDisabled ? 'ally-action-item__disabled' : ''),
    [temporaryDisabled],
  );

  const currentStep = useMemo(() => {
    if (!actionState) return 0;

    if (!disabledSteps.length) return actionState;

    // we should found available step in case of disabled ones.
    const enabledStepKeys = Object.keys(actionStatesMeta)
      .map((key) => parseInt(key))
      .filter((stepKey) => !includes(disabledSteps, stepKey));

    const step = enabledStepKeys.indexOf(actionState);

    return step;
  }, [actionState, disabledSteps]);

  const isDisabled = useMemo(() => (disabledSlot ? 'disabled' : ''), [disabledSlot]);

  const currentActionStatesMeta = useMemo(
    () => actionStatesMeta[`${actionState}`],
    [actionStatesMeta, actionState],
  );

  const getInnerReaderContent = useMemo(() => {
    if (temporaryDisabled && typeof temporaryDisabled === 'object') {
      return temporaryDisabled.reason;
    }

    if (name === 's9') {
      return translate(
        isWhiteLabeled ? currentActionStatesMeta.aria_wl : currentActionStatesMeta.aria,
      );
    }

    return translate(currentActionStatesMeta.aria || currentActionStatesMeta.label);
  }, [currentActionStatesMeta, isWhiteLabeled, translate, temporaryDisabled]);

  return (
    <div
      className={`uwaw-features__item ${isDisabled} ${isFeatureDisabledClass} ${
        currentStep !== INACTIVE ? 'uwaw-features__item_active' : ''
      }`
        .replace(/\s+/, ' ')
        .trim()}
    >
      <button
        id={`btn-${name}`}
        className="uwaw-features__item__i"
        onClick={(event) => !temporaryDisabled && onClick(event)}
        data-uw-reader-content={getInnerReaderContent}
        aria-label={getInnerReaderContent}
        aria-pressed={!!actionState}
        aria-live="assertive"
      >
        <span
          className={`uwaw-features__item__icon ${
            currentActionStatesMeta.iconWrapClass ? currentActionStatesMeta.iconWrapClass : ''
          }`}
        >
          <span className={`icon icon-${currentActionStatesMeta.iconClass}`} />
          {/* <SmartContrastIcon/> */}
        </span>
        <span className="uwaw-features__item__name">
          {translate(currentActionStatesMeta.label)}
        </span>

        {/* place for info content */}
        {children}

        {currentStep !== INACTIVE && (
          <span className="uwaw-features__item__enabled">
            <EnabledFeatureIcon width={size(9, 11)} height={size(6, 8)} />
          </span>
        )}

        <span
          className={`uwaw-features__item__steps ${
            currentStep !== INACTIVE && actionStepsCount > TOGGLE_ONLY
              ? 'uwaw-features__item__steps_visible'
              : ''
          }`}
        >
          {createArray(actionStepsCount).map((_, index) => (
            <span
              key={index}
              className={`uwaw-features__step ${
                index + 1 <= currentStep ? 'uwaw-features__step_active' : ''
              }`}
            >
              <span className="uwaw-features__step__i" />
            </span>
          ))}
        </span>
      </button>
    </div>
  );
};
