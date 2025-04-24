import { h, FunctionalComponent } from 'preact';
import { useContext } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { usePartnerLogo } from '../use-partner-logo';
import './styles/octec.scss';

interface Props {}

export const OCTEC = 'octec';

const rtlLanguages = ['he', 'ar', 'fa'];

export const OctecLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled } = useContext(ApplicationContext);

  const isRtlLanguage = rtlLanguages.some((lang) => config?.current?.language?.includes(lang));
  const itemClassName = isRtlLanguage ? 'brand-footer__item-rtl' : 'brand-footer__item';

  const { isPartnerLogoVisible } = usePartnerLogo(OCTEC);
  if (!isPartnerLogoVisible) return null;

  return (
    <div className="octec-footer">
      <div className={itemClassName}>
        <a
          href="https://userway.org#uaw"
          target="_blank"
          {...(isNoFollowEnabled ? { rel: 'nofollow' } : {})}
          aria-label="go to UserWay website - Opens in a new tab"
        >
          <img src="./frontend/images/logo.svg" alt="UserWay Logo" />
        </a>
      </div>
      <div className={itemClassName}>
        <a
          href="https://octec.org.au/#uaw"
          target="_blank"
          aria-label="go to Octec website - Opens in a new tab"
        >
          <img src="./frontend/images/custom-logo/octec.jpg" alt="Octec Accessibility Logo" />
        </a>
      </div>
    </div>
  );
};
