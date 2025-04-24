import { useContext } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../global/layout.store';

export const usePartnerLogo = (partnerKey: string) => {
  const { partner, whiteLabelOptions, customBrandingOptions } = useContext(ApplicationContext);

  const isPartnerLogoVisible =
    partner === partnerKey &&
    !whiteLabelOptions?.wlHideLogo &&
    !customBrandingOptions?.custom_logo_image_path;

  if (isPartnerLogoVisible) {
    layoutStore.mainContainer.addClass('uw-partner');
  }

  return {
    isPartnerLogoVisible,
  };
};
