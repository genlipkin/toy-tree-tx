import { useContext } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';

export const useUwBranding = () => {
  const { whiteLabelOptions, customBrandingOptions, tunings } = useContext(ApplicationContext);
  const isWhiteLabeled = Boolean(
    whiteLabelOptions?.wlHideLogo ||
      tunings?.widget_no_logo ||
      customBrandingOptions?.custom_logo_image_link ||
      customBrandingOptions?.custom_logo_image_path,
  );

  return {
    isWhiteLabeled,
  };
};
