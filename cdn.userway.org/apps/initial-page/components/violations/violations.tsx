import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { ChevronRightIcon, CloseIcon, DownloadIcon, LoaderIcon } from '@uw/icons';

import './violations.scss';
import { useTranslation } from 'hooks/use-translation';
import { widgetScreensRoutingStore } from 'global/widget-screens-routing.store';
import { stateStore } from 'global/state.store';
import { useConnect } from 'helpers/use-connect-to-global-store';
import { sessionStore } from 'global/session.store';
import { remediationStore, Violations as ViolationsType } from '../../global/remediation.store';
import { useViolationsReport } from './use-violations-report';

const issuesTypes: ['A', 'AA', 'AAA'] = ['A', 'AA', 'AAA'];

const formatK = (n: number): number | string => {
  if (n < 1e3) return n;
  if (n >= 1e3) return `${+(n / 1e3).toFixed(1)}K`;
};

const valueWithCommas = (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const Violations = () => {
  const { translate } = useTranslation();
  const [violations] = useConnect<ViolationsType>(remediationStore.violations$, null);
  const [hideViolations, setHideViolations] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const user = sessionStore.getUser();
  const { downloadPdfReport, isReportLoading } = useViolationsReport();

  const goToRemediation = () => {
    widgetScreensRoutingStore.setPerSiteSettingsFlowThisSite$.next();
    widgetScreensRoutingStore.updateState$.next({
      path: 'siteRemediationUpgradeView',
      value: 'main.logged.dashboard',
    });
    stateStore.state.next('main.logged.site_remediation_upgrade');
  };

  const getChartBars = useCallback(
    (...colors: string[]) => {
      const total = violations.totalCount;
      const getPercent = (value) => +((value * 100) / total).toFixed(2);

      if (!total) {
        return '';
      }

      const computedStyles = [violations.A.count, violations.AA.count, violations.AAA.count]
        .map(getPercent)
        .reduce((result, percentage, index, issuesCount) => {
          const previousPercentage = +issuesCount.slice(0, index).reduce((a, b) => a + b, 0);
          const currentPercentage = previousPercentage + percentage;

          // first element
          if (index === 0) {
            return `${colors[index]} ${previousPercentage}% ${currentPercentage}%`;
          }

          return `${result}, ${colors[index]} ${previousPercentage}% ${currentPercentage}%`;
        }, '');

      return `conic-gradient(${computedStyles})`;
    },
    [violations],
  );

  return (
    <div
      className={`uwaw-violations uwaw-violations_initial ${
        hideViolations ? 'uwaw-violations_hide' : ''
      }`}
    >
      <div className="uwaw-violations__i">
        <p className="uwaw-violations__title">
          <strong>{user.first_name}</strong>, {translate('widget.violations.initial_question')}
        </p>
        <p className="uwaw-violations__title">{translate('widget.violations.visible_info')}</p>

        <button
          type="button"
          className="uwaw-violations__close"
          onClick={() => setHideViolations(true)}
        >
          <CloseIcon />
        </button>

        <button
          type="button"
          className="uwaw-violations__info"
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          <div
            className="uwaw-violations__chart"
            style={{ background: getChartBars('#D60F0F', '#A40C0C', '#5B0808') }}
          >
            <div className="uwaw-violations__chart__i">{formatK(violations.totalCount)}</div>
          </div>
          <div
            className="uwaw-violations__chart__title"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: translate('widget.violations.chart_title') }}
          />

          <span
            className={`uwaw-violations__drop-icon ${
              showDetails ? 'uwaw-violations__drop-icon_active' : ''
            }`}
          >
            <ChevronRightIcon />
          </span>
        </button>

        {showDetails && (
          <div className="uwaw-violations__main">
            <div className="uwaw-violations__data">
              {issuesTypes.map((type) => (
                <div className="uwaw-violations__item" key={type}>
                  <div className="uwaw-violations__item__issue-type">
                    <div
                      className={`uwaw-violations__item__lvl uwaw-violations__item__lvl_${type.toLowerCase()}`}
                    >
                      {type}
                    </div>
                    <div class="uwaw-violations__item__value">
                      {formatK(violations[type].count)}
                    </div>
                  </div>
                  <div className="uwaw-shortcut-tooltip">
                    <div className="uwaw-shortcut-tooltip__i">
                      <p className="uwaw-shortcut-tooltip__title-value">
                        {valueWithCommas(violations[type].count)}
                      </p>
                      <p class="uwaw-shortcut-tooltip__title">
                        {' '}
                        {translate('widget.remediation.violations.tooltip_title')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="uwaw-violations__btns">
              <button
                onClick={downloadPdfReport}
                type="button"
                className="uwaw-btn uwaw-btn_border"
              >
                {isReportLoading ? <LoaderIcon /> : <DownloadIcon />}
                {translate('widget.violations.report_button.label')}
              </button>
              <button onClick={goToRemediation} type="button" className="uwaw-btn uwaw-btn_blue">
                {translate('widget.violations.fix_button.label')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
