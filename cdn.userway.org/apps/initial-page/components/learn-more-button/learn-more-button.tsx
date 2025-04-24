import { h } from 'preact';
import { ChevronRightIcon } from '@uw/icons';
import { useTranslation } from 'hooks/use-translation';
import { useUwBranding } from 'hooks/use-uw-branding';
import './learn-more-button.scss';

export const LearnMoreButton = ({ onClick }) => {
  const { translate } = useTranslation();
  const { isWhiteLabeled } = useUwBranding();

  if (isWhiteLabeled) {
    return null;
  }

  return (
    <button onClick={onClick} className="uwaw-learn-more-btn">
      {/* eslint-disable-next-line react/no-danger */}
      <span dangerouslySetInnerHTML={{ __html: translate('widget.menu.learn_more_btn') }} />
      <ChevronRightIcon width={6} height={11} />
    </button>
  );
};
