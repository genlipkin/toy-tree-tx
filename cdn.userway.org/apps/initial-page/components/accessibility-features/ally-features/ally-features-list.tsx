import { h, Fragment, FunctionalComponent } from 'preact';
import { useCallback, useContext, useMemo } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { onKeyboardSelection } from 'helpers/operators';
import { InfoIcon, ReloadIcon } from '@uw/icons';
import { ToastType, ToastServiceContext } from '@uw/common-components';
import { useUwBranding } from 'hooks/use-uw-branding';
import { useTranslation } from 'hooks/use-translation';
import { AllyFeatureData } from '../use-ally-features';
import { Feature } from './feature';
import { ShortcutTooltip } from '../../tooltip/shortcut-tooltip';
import { useDynamicSize } from '../../oversized-widget/use-dynamic-size';
import { AccessibilityFeaturesContext } from '../use-accessibility-fetures';
import './feature.scss';

export const AllyFeaturesList: FunctionalComponent = () => {
  const { translate } = useTranslation();
  const size = useDynamicSize();
  const { allyFeaturesList, onFeatureMouseClick, onResetAll } = useContext(
    AccessibilityFeaturesContext,
  );
  const { areResourcesLoaded, tunings } = useContext(ApplicationContext);
  const { isWhiteLabeled } = useUwBranding();
  const { showToast } = useContext(ToastServiceContext);

  const renderInfo = useCallback(
    ({ name, temporaryDisabled }: Partial<AllyFeatureData>) => {
      if (name === 's7' && !isWhiteLabeled && !tunings.widget_no_logo) {
        return (
          <a
            href="https://userway.org/udf"
            target="_blank"
            aria-label={translate('widget.menu.info_icons.s7.aria_label')}
            className="uwaw-features__info-icon-wrap"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.keyCode === 32 || e.code === 'Space') {
                e.preventDefault();
              }
            }}
          >
            <span className="uwaw-features__info-icon">
              <InfoIcon width={size(2, 2)} height={size(8, 10)} />
            </span>
          </a>
        );
      }
      if (name === 's9' && !temporaryDisabled) {
        return (
          <ShortcutTooltip
            ariaLabel={translate('widget.menu.info_icons.s9.aria_label')}
            title={translate('widget.menu.shortcut.label')}
            primaryKey="CTRL"
            secondaryKey="."
          />
        );
      }

      if (name === 's21') {
        return (
          <ShortcutTooltip
            ariaLabel={translate('widget.menu.info_icons.s21.aria_label')}
            title={translate('widget.menu.shortcut.label')}
            primaryKey="CTRL"
            secondaryKey="M"
          />
        );
      }

      if (name === 's24') {
        return (
          <ShortcutTooltip
            ariaLabel={translate('widget.menu.info_icons.s24.aria_label')}
            title={translate('widget.menu.shortcut.label')}
            primaryKey="CTRL"
            secondaryKey=","
          />
        );
      }

      return null;
    },
    [translate, size],
  );

  const featuresList = useMemo(
    () => allyFeaturesList.filter((profile) => !profile.isProfile),
    [allyFeaturesList],
  );

  const handleResetClick = () => {
    onResetAll();
    showToast(ToastType.Success, translate('widget.menu.reset.notification'));
  };

  const handleResetOnKeyDown = onKeyboardSelection(() => {
    onResetAll();
    showToast(ToastType.Success, translate('widget.menu.reset.notification'));
  });

  return (
    <Fragment>
      <div className="uwaw-features">
        {!!featuresList.length &&
          featuresList.map((props) => (
            <Feature
              key={props.name}
              {...props}
              isLoading={!areResourcesLoaded}
              onClick={(event) => onFeatureMouseClick({ event, name: props.name })}
            >
              {renderInfo(props)}
            </Feature>
          ))}
      </div>

      {!!featuresList.length && (
        <button
          id="btn-s8"
          className="uwaw-btn uwaw-btn_blue uwaw-btn_reset-widget"
          data-uw-reader-content={translate('widget.menu.reset.aria')}
          onKeyDown={handleResetOnKeyDown}
          onClick={handleResetClick}
        >
          <ReloadIcon />
          {translate('widget.menu.reset.labelV2')}
        </button>
      )}
    </Fragment>
  );
};
