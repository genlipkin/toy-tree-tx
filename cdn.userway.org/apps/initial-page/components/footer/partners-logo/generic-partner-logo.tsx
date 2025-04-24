import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';

interface Props {}

const partners = [
  { name: 'umichEdu', className: 'uw-partner_umich' },
  { name: 'federationcja', className: 'uw-partner_federationcja' },
];

export const PARTNERS = Object.values(partners).map((partner) => partner.name);

export const GenericPartnerLogo: FunctionalComponent<Props> = () => {
  const { config, customBrandingOptions } = useContext(ApplicationContext);

  useEffect(() => {
    if (!customBrandingOptions?.custom_logo_image_path) return;

    const partner = partners.find(({ name }) => name === config.current?.services?.partner);

    if (!partner) return;

    layoutStore.mainContainer.addClass('uw-partner');
    layoutStore.mainContainer.addClass(partner.className);
  }, []);

  if (
    !PARTNERS.includes(config.current?.services?.partner) ||
    !customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div className="generic-partner-brand-footer">
      <div className="generic-partner-brand-footer__item">
        <a href={customBrandingOptions.custom_logo_image_link} target="_blank">
          <img
            src={customBrandingOptions.custom_logo_image_path}
            alt="Accessibility Logo - Opens in a new tab"
          />
        </a>
      </div>
    </div>
  );
};
