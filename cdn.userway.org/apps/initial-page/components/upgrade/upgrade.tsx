import { h } from 'preact';
import { useTranslation } from 'hooks/use-translation';

import './upgrade.scss';
import { widgetScreensRoutingStore } from 'global/widget-screens-routing.store';
import { stateStore } from 'global/state.store';

export const Upgrade = () => {
  const { translate } = useTranslation();

  const goToRemediationUpgrade = () => {
    widgetScreensRoutingStore.setPerSiteSettingsFlowThisSite$.next();
    widgetScreensRoutingStore.updateState$.next({
      path: 'siteRemediationUpgradeView',
      value: 'main.logged.dashboard',
    });
    stateStore.state.next('main.logged.site_remediation_upgrade');
  };

  return (
    <div className="uwaw-upgrade uwaw-upgrade_initial">
      <div className="uwaw-upgrade__i">
        <div className="uwaw-upgrade__l">
          <h2 className="uwaw-upgrade__title">{translate('widget.upgrade.title')}</h2>
          <p className="uwaw-upgrade__description">{translate('widget.upgrade.description')}</p>
          <button type="button" className="btn btn_white" onClick={goToRemediationUpgrade}>
            {translate('widget.upgrade.button')}
          </button>
        </div>
        <div className="uwaw-upgrade__r">
          <img src="./frontend/images/ai-chip.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
