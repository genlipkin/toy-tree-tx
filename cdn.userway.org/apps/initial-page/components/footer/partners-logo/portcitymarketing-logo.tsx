import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';

interface Props {}

export const PORT_CITY_MARKETING = 'portCityMarketing';

export const PortcitymarketingLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled } = useContext(ApplicationContext);

  useEffect(() => {
    if (config.current?.services?.partner !== PORT_CITY_MARKETING) return;

    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (config.current?.services?.partner !== PORT_CITY_MARKETING) {
    return null;
  }

  return (
    <div className="brand-footer">
      <div className="brand-footer__item">
        <a href="https://www.portcitymarketing.com/#uaw" target="_blank">
          <img
            height="34.78"
            src="/frontend/images/portcity-logo-1.png"
            alt="Port City Accessibility Logo - Opens in a new tab"
          />
        </a>
      </div>
      <div className="brand-footer__item">
        <a
          href="https://userway.org#uaw"
          target="_blank"
          {...(isNoFollowEnabled ? { rel: 'nofollow' } : {})}
        >
          <img
            height="33.32"
            src="/frontend/images/logo.svg"
            alt="UserWay Logo - Opens in a new tab"
          />
        </a>
      </div>
    </div>
  );
};
