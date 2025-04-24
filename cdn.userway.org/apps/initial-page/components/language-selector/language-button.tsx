import { FunctionalComponent, h } from 'preact';
import { TickIcon } from '@uw/icons';
import { Trigger } from 'types/trigger';
import { layoutStore } from 'global/layout.store';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Language } from '../../constants/languages';
import { useDynamicSize } from '../oversized-widget/use-dynamic-size';

interface LanguageButtonProps {
  focusedItem: number;
  language: Language;
  activeLanguage: Language;
  trigger: string;
  focusedItemByKeyboard: number;
  index: number;
  isLstTypeFlag: boolean;
  selectLanguage: (lang: Language) => void;
}

export const LanguageButton: FunctionalComponent<LanguageButtonProps> = (props) => {
  const {
    focusedItem,
    language,
    activeLanguage,
    selectLanguage,
    index,
    trigger,
    focusedItemByKeyboard,
    isLstTypeFlag = false,
  } = props;
  const size = useDynamicSize();

  const isActive = language.value === activeLanguage?.value;
  const button = useRef<HTMLButtonElement>(null);
  const isFocusedItem = index === focusedItem;

  const [flagUrl, setFlagUrl] = useState('');
  const cdn = '__CDN__';

  useEffect(() => {
    setFlagUrl(`url(${cdn}frontend/images/flags/${language?.iso.toLowerCase()}.svg)`);
  }, [language]);

  if (isFocusedItem && trigger === Trigger.Main) {
    button.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }

  useEffect(() => {
    if (index === focusedItemByKeyboard && trigger === Trigger.Lst) {
      layoutStore.makeSureElementVisible(button.current as HTMLElement);
    }
  }, [focusedItemByKeyboard, trigger, index]);

  return (
    <button
      ref={button}
      role="option"
      type="button"
      aria-selected={isActive}
      tabIndex={-1}
      className={`uwaw-lang-list__btn 
              ${isActive ? 'active' : ''} 
              ${isFocusedItem ? 'highlighted' : ''}
              ${trigger === Trigger.Lst ? 'lst' : ''}`}
      onClick={() => {
        selectLanguage(language);
      }}
    >
      <span className="uwaw-lang-list__code">
        {!isLstTypeFlag && <span className="uwaw-lang-list__circle">{language.iso}</span>}
        {isLstTypeFlag && (
          <span style={{ backgroundImage: flagUrl }} className="uwaw-lang-list__flag" />
        )}
      </span>
      <span className="uwaw-lang-list__value">
        <span className="uwaw-lang-list__name">{language.name}</span>
      </span>
      <span className="uwaw-lang-list__active-icon">
        <TickIcon width={size(12, 16)} height={size(12, 16)} />
      </span>
    </button>
  );
};
