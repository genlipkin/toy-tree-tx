import { h, FunctionComponent } from 'preact';
import { useTranslation } from 'hooks/use-translation';

export const CriticalAlert: FunctionComponent = () => {
  const { translate } = useTranslation();

  return (
    <div class="critical-alert">
      <div class="widget-form">
        <div
          class="critical-alert-panel"
          style="background-color: #faf7df; padding: 25px 20px; text-align: left"
        >
          <img src="./frontend/images/exclamation_sign.svg" style="width: 15px" />

          <div
            class="critical-alert-desc"
            style=" font-family: 'Metropolis', sans-serif; font-size: 12px; line-height: 1.5; color: #697480;"
          >
            <p>This widget has been modified in a way that violates UserWay’s terms of use.</p>

            <p>
              To restore functionality, <b>please remove or revert any code changes</b> that may
              affect the widget’s display or functions.
            </p>
          </div>
        </div>
      </div>

      <div class="widget-footer">
        <div class="left">
          <a target="_blank" href="https://userway.org/contact">
            {translate('widget.footer.report.label')}
          </a>

          {/* <a ui-sref="main.login">{{ translate('widget.footer.manage.label')}</a> */}
        </div>

        <div class="right">
          <div>
            <div class="logo">
              <a class="logo-img" target="_blank" href="https://userway.org">
                <img src="./frontend/images/logo.svg" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
