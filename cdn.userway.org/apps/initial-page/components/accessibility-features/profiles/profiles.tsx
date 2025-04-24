import { h, FunctionalComponent } from 'preact';
import './profiles.scss';
import {
  AdhdIcon,
  BlindReaderIcon,
  CognitiveLearningIcon,
  ColorBlindIcon,
  DyslexiaIcon,
  MotorImparedIcon,
  ProfileIcon,
  SeizureIcon,
  TickIcon,
  VisuallyImpairedIcon,
} from '@uw/icons';
import { AllyFeatureData } from 'components/accessibility-features/use-ally-features';
import { useContext, useMemo } from 'preact/hooks';
import { onKeyboardSelection } from 'helpers';
import { ExpandPanel } from 'components/expand-panel/expand-panel';
import { useTranslation } from 'hooks/use-translation';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useUwBranding } from 'hooks/use-uw-branding';
import { PROFILE_CONFIG } from '../../../constants/profileConfig';
import { useConnect } from '../../../helpers/use-connect-to-global-store';
import { oversizedStore } from '../../oversized-widget/oversized.store';
import { useDynamicSize } from '../../oversized-widget/use-dynamic-size';
import { Tooltip } from '../../tooltip/tooltip';
import { AccessibilityFeaturesContext } from '../use-accessibility-fetures';

const getIconComponent = (name: string, isOversized: boolean) => {
  const OVERSIZE_COEFFICIENT = 9;
  const size = (value: number) => (isOversized ? value + OVERSIZE_COEFFICIENT : value);

  switch (name) {
    case 'MotorImparedIcon':
      return <MotorImparedIcon width={size(12)} height={size(15)} />;
    case 'BlindReaderIcon':
      return <BlindReaderIcon width={size(18)} height={size(12)} />;
    case 'ColorBlindIcon':
      return <ColorBlindIcon width={size(12)} height={size(16)} />;
    case 'DyslexiaIcon':
      return <DyslexiaIcon width={size(15)} height={size(12)} />;
    case 'VisuallyImpairedIcon':
      return <VisuallyImpairedIcon width={size(16)} height={size(16)} />;
    case 'CognitiveLearningIcon':
      return <CognitiveLearningIcon width={size(16)} height={size(16)} />;
    case 'SeizureIcon':
      return <SeizureIcon width={size(16)} height={size(16)} />;
    case 'AdhdIcon':
      return <AdhdIcon width={size(16)} height={size(16)} />;
    default:
      return null;
  }
};

const getProfilesAfterFeatureAvailabilityCheck = (
  allFeatures: AllyFeatureData[],
  featuresList: AllyFeatureData[],
) => {
  const profiles = allFeatures.filter((profile) => profile.isProfile);
  const featuresListNames = featuresList.map((feature) => feature.name);

  // We should remove profile feature if any of included in it "ally feature" is disabled by admin
  return profiles.filter((profile) => {
    const profileFeatures = PROFILE_CONFIG[profile.name].features;

    return Object.keys(profileFeatures).every(
      (feature) => featuresListNames.indexOf(feature) !== -1,
    );
  });
};

export const Profiles: FunctionalComponent = () => {
  const { allyFeaturesList, onFeatureMouseClick, triggerFeature } = useContext(
    AccessibilityFeaturesContext,
  );
  const { config, paidAi } = useContext(ApplicationContext);
  const [isOversized] = useConnect(oversizedStore.isOversized$);
  const size = useDynamicSize();
  const { translate } = useTranslation();
  const { isWhiteLabeled } = useUwBranding();
  const isWidgetNoLogo = config.current?.tunings?.widget_no_logo;
  const isProfilesDisabledByModifyMenu = config.current.services?.MODIFY_MENU?.profiles === false;
  const featuresList = useMemo(
    () => allyFeaturesList.filter((profile) => !profile.isProfile),
    [allyFeaturesList],
  );

  const listOfProfiles = useMemo(
    () => getProfilesAfterFeatureAvailabilityCheck(allyFeaturesList, featuresList),
    [allyFeaturesList, featuresList],
  );

  const activeProfile = useMemo(
    () => listOfProfiles.find((profile) => !!profile.actionState),
    [listOfProfiles],
  );

  const activeProfileStateLabel = useMemo(
    () => translate(activeProfile?.actionStatesMeta[activeProfile.actionState]?.label || ''),
    [activeProfile, translate],
  );
  const activeProfileStatus = translate('widget.profiles.profile_active');
  const profilesTitle = useMemo(
    () =>
      activeProfileStateLabel
        ? `${activeProfileStateLabel} ${activeProfileStatus}`
        : translate('widget.profiles.list_label'),
    [activeProfileStateLabel, translate],
  );

  return (
    paidAi &&
    !!listOfProfiles?.length &&
    !isProfilesDisabledByModifyMenu && (
      <div className="uwaw-profiles-component">
        <ExpandPanel
          title={profilesTitle}
          readerText={profilesTitle}
          icon={<ProfileIcon color="white" width={size(30, 32)} height={size(30, 32)} />}
          renderRight={() => (
            <Tooltip
              title={translate('widget.profiles.tooltipTitle')}
              ariaLabel={translate('widget.profiles.tooltipTitle')}
            >
              {!isWhiteLabeled && !isWidgetNoLogo && (
                <a
                  className="uwaw-main-tooltip__link"
                  target="_blank"
                  data-uw-reader-content={translate('widget.profiles.tooltipLink')}
                  href="https://help.userway.org/en/articles/6241171-what-are-userway-s-ai-powered-pro-widget-accessibility-profiles"
                >
                  {translate('widget.profiles.tooltipLink')}
                </a>
              )}
            </Tooltip>
          )}
        >
          <ul className="uwaw-profiles__list">
            {listOfProfiles.map((profile) => {
              const activeActionStateMeta = profile.actionStatesMeta[profile.actionState];
              const isActive = profile.name === activeProfile?.name;
              return (
                <li key={profile.name} className={`uwaw-profiles__item`}>
                  <button
                    type="button"
                    id={`btn-${profile.name}`}
                    className={`uwaw-profiles__btn  ${isActive ? 'active' : ''}`}
                    onKeyDown={onKeyboardSelection(() => triggerFeature({ name: profile.name }))}
                    onClick={(event) => onFeatureMouseClick({ event, name: profile.name })}
                    aria-pressed={isActive}
                    data-uw-reader-content={translate(activeActionStateMeta.label)}
                  >
                    <span className="uwaw-profiles__btn__ico">
                      {getIconComponent(profile.icon, isOversized)}
                    </span>
                    <span className="uwaw-profiles__btn__name">
                      {translate(activeActionStateMeta.label)}
                    </span>
                    <span className="uwaw-profiles__btn__active-icon">
                      <TickIcon width={size(11, 17)} height={size(7, 11)} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </ExpandPanel>
      </div>
    )
  );
};
