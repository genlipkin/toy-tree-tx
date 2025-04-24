import { h } from 'preact';
import { usePartnerLogo } from '../use-partner-logo';

export const ADAGUARDIAN = 'adaguardian';

export const AdaguardianLogo = () => {
  const { isPartnerLogoVisible } = usePartnerLogo(ADAGUARDIAN);

  if (!isPartnerLogoVisible) {
    return null;
  }

  return (
    <div className="brand-footer-huge">
      <a href="https://adaguardian.com/#uaw" target="_blank">
        <img
          height={126}
          src="/frontend/images/adag-powered-by-uw.png"
          alt="Adaguardian Accessibility Logo - Opens in a new tab"
        />
      </a>
    </div>
  );
};
