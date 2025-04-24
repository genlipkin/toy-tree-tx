import { h } from 'preact';
import { PlaySmallIcon } from '@uw/icons';
import { useTranslation } from 'hooks/use-translation';

import './how-it-works.scss';

declare const applicationConfig: { base: { frontend: string } };

export const HowItWorksPage = () => {
  const { translate } = useTranslation();

  return (
    <div className="uwaw-how-it-works">
      <h1 className="uwaw-how-it-works__title">{translate('widget.howItWorks.page.title')}</h1>
      <div className="uwaw-video">
        <a
          href="https://youtu.be/5n6_PtaYo0s"
          target="_blank"
          type="button"
          className="uwaw-video__poster"
          aria-label={translate('widget.howItWorks.page.video_link.aria')}
        >
          <img
            src="./frontend/images/widget-v4.jpg"
            srcSet={`./frontend/images/widget-v4.jpg 1x, ./frontend/images/widget-v4@2x.jpg 2x`}
            alt={translate('widget.howItWorks.page.video_link.img_alt')}
          />
          <span className="uwaw-video__btn">
            <PlaySmallIcon />
          </span>
        </a>
      </div>

      <p className="uwaw-how-it-works__description">
        {translate('widget.howItWorks.page.description')}
      </p>

      <a href="https://userway.org/get" className="uwaw-btn uwaw-btn_blue">
        {translate('widget.howItWorks.page.getUW_btn')}
      </a>
    </div>
  );
};
