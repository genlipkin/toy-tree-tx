import { h } from 'preact';
import { useState } from 'preact/hooks';
import { PlaySmallIcon } from '@uw/icons';
import { useTranslation } from 'hooks/use-translation';
import { useViolationsReport } from 'components/violations/use-violations-report';
import { stateStore } from 'global/state.store';
import { widgetScreensRoutingStore } from 'global/widget-screens-routing.store';
import { useConnect } from 'helpers/use-connect-to-global-store';
import { remediationStore, Violations as ViolationsType } from 'global/remediation.store';
import './about.scss';

export const About = () => {
  const { translate } = useTranslation();
  const { downloadPdfReport } = useViolationsReport();
  const [violations] = useConnect<ViolationsType>(remediationStore.violations$, null);
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlay = () => {
    setIsPlaying(true);
  };

  const goToUpdate = () => {
    widgetScreensRoutingStore.setPerSiteSettingsFlowThisSite$.next();
    widgetScreensRoutingStore.updateState$.next({
      path: 'siteRemediationUpgradeView',
      value: 'main.logged.dashboard',
    });
    stateStore.state.next('main.logged.site_remediation_upgrade');
  };

  return (
    <div className="uwaw-about">
      <h2
        className="uwaw-about__title"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: translate('widget.about.title') }}
      />
      {isPlaying ? (
        <div className="uwaw-video">
          <iframe
            className="uwaw-video__poster"
            width="100%"
            height="305"
            src="https://www.youtube.com/embed/5n6_PtaYo0s?autoplay=1&mute=1"
            title={translate('widget.about.video.iframe_title')}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="uwaw-video">
          <button className="uwaw-video__poster" type="button" tabIndex={0} onClick={onPlay}>
            <img
              src="./frontend/images/widget-v4.jpg"
              srcSet={`./frontend/images/widget-v4.jpg 1x, ./frontend/images/widget-v4@2x.jpg 2x`}
              alt={translate('widget.about.video.img_alt')}
            />
            <span className="uwaw-video__btn">
              <PlaySmallIcon />
            </span>
          </button>
        </div>
      )}

      <div className="uwaw-about__cta">
        <button onClick={goToUpdate} type="button" className="uwaw-btn uwaw-btn_blue">
          {translate('widget.about.upgrade_button.label')}
        </button>
        <a href="https://userway.org/demo/" target="_blank" className="uwaw-btn uwaw-btn_border">
          {translate('widget.about.upgrade_button.link')}
        </a>
      </div>

      <p className="uwaw-about__description">
        <a href="" onClick={downloadPdfReport}>
          {translate('widget.about.description.link')}
        </a>{' '}
        <strong>ADA</strong> report showing{' '}
        {!!violations.totalCount && (
          <span className="uwaw-about__violations">{violations.totalCount}</span>
        )}
        {translate('widget.about.description.text')}
      </p>
    </div>
  );
};
