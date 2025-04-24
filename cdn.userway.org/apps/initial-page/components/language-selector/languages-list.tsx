import { FunctionalComponent, h } from 'preact';
import { MutableRef } from 'preact/hooks';
import { Language } from '../../constants/languages';
import { LanguageButton } from './language-button';

interface LanguagesListProps {
  comboboxId: string;
  languages: Language[];
  active: Language;
  languagesRef: MutableRef<HTMLButtonElement[]>;
  focusedItem: number;
  focusedItemByKeyboard: number;
  trigger: string;
  isLstTypeFlag: boolean;
  selectLanguage: (lang: Language) => void;
}

export const LanguagesList: FunctionalComponent<LanguagesListProps> = (props) => {
  const {
    comboboxId,
    selectLanguage,
    focusedItem,
    languages,
    active,
    trigger,
    focusedItemByKeyboard,
    isLstTypeFlag = false,
  } = props;

  return (
    <ul role="listbox" id={comboboxId} className="uwaw-lang-list">
      {languages.map((languageEntry, index) => (
        <li
          role="option"
          key={languageEntry.value}
          className="uwaw-lang-list__item"
          id={`language-item-${index}`}
        >
          <LanguageButton
            focusedItem={focusedItem}
            focusedItemByKeyboard={focusedItemByKeyboard}
            trigger={trigger}
            activeLanguage={active}
            language={languageEntry}
            selectLanguage={selectLanguage}
            index={index}
            isLstTypeFlag={isLstTypeFlag}
          />
        </li>
      ))}
    </ul>
  );
};
