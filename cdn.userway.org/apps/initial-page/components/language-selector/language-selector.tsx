import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { CustomScroll } from '@uw/common-components';
import { generateRandomId } from '@uw/utils';
import { Trigger } from 'types/trigger';
import { ApplicationContext } from 'contexts/use-application-setup';
import { LanguagesList } from './languages-list';
import { LanguageSearch } from './language-search';
import { ExpandPanel } from '../expand-panel/expand-panel';
import { useLanguageSelector } from './hooks/use-language-selector';
import { LSTServiceContext } from '../../contexts/lst/lst-provider';
import { LstButtonIcon } from '../../constants/languages';
import { useTranslation } from '../../hooks/use-translation';
import { RevertLanguageButton } from '../revert-language-button';
import './language-selector.scss';

const comboboxId = generateRandomId();

export const LanguageSelector: FunctionalComponent = () => {
  const {
    partner,
    panel,
    inputRef,
    languagesRef,
    langSelectButton,
    showLanguageMenu,
    filter,
    filteredLanguages,
    focusedItem,
    focusedItemByKeyboard,
    selectLanguage,
    toggleMenu,
    inputHandler,
    keyHandler,
    isLanguageSelectorVisible,
  } = useLanguageSelector();

  const { trigger } = useContext(ApplicationContext);
  const { lstButtonIcon, languageInfo } = useContext(LSTServiceContext);
  const { translate } = useTranslation();

  if (!isLanguageSelectorVisible()) return null;

  const cdn = '__CDN__';
  const readerText = `${translate('widget.language.label')} ${languageInfo?.name}`;
  const flagUrl = `url(${cdn}frontend/images/flags/${languageInfo?.iso.toLowerCase()}.svg)`;

  const isLstTypeFlag = lstButtonIcon === LstButtonIcon.Flag;
  const isLstMenu = trigger === Trigger.Lst;

  return (
    <div className={`uwaw-lang-component ${isLstMenu ? 'lst-menu' : ''}`} ref={panel}>
      <ExpandPanel
        title={languageInfo?.name}
        readerLang={languageInfo?.value}
        isDisabled={isLstMenu}
        readerText={readerText}
        isCircledIcon={isLstTypeFlag}
        hideArrowIcon={isLstMenu}
        icon={
          isLstTypeFlag && isLstMenu ? (
            <span
              style={{ backgroundImage: flagUrl }}
              className="uwaw-lang-list__flag"
              data-uw-ignore-translate="true"
            />
          ) : (
            <span className="uwaw-lang-list__circle" data-uw-ignore-translate="true">
              <span>{languageInfo?.iso}</span>
            </span>
          )
        }
        isOpen={isLstMenu ? true : showLanguageMenu}
        onToggle={toggleMenu}
        innerRef={langSelectButton}
        renderRight={() => <RevertLanguageButton selectLanguage={selectLanguage} />}
      >
        <div
          className={`uwaw-lang-list-wrap ${trigger === Trigger.Lst ? 'lst-lang-view' : ''}`}
          data-uw-ignore-translate="true"
        >
          <CustomScroll heightRelativeToParent="100%" allowOuterScroll={true}>
            {partner !== atob('cmFrYmFuaw==') && (
              <LanguageSearch
                comboboxId={comboboxId}
                value={filter}
                reference={inputRef}
                onKeyDown={keyHandler}
                onInput={inputHandler}
                isLst={trigger === Trigger.Lst}
                focusedItem={focusedItem}
              />
            )}
            <LanguagesList
              comboboxId={comboboxId}
              languages={filteredLanguages}
              active={languageInfo}
              languagesRef={languagesRef}
              selectLanguage={selectLanguage}
              focusedItem={focusedItem}
              focusedItemByKeyboard={focusedItemByKeyboard}
              trigger={trigger}
              isLstTypeFlag={isLstTypeFlag && isLstMenu}
            />
          </CustomScroll>
        </div>
      </ExpandPanel>
    </div>
  );
};
