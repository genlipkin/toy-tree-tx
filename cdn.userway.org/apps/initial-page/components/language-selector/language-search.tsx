import { FunctionalComponent, h } from 'preact';
import { SearchIcon } from '@uw/icons';
import { useTranslation } from 'hooks/use-translation';
import { JSXInternal } from 'preact/src/jsx';
import { MutableRef } from 'preact/hooks';
import HTMLAttributes = JSXInternal.HTMLAttributes;

interface LanguageSearchProps extends HTMLAttributes<HTMLInputElement> {
  comboboxId: string;
  reference: MutableRef<HTMLInputElement>;
  focusedItem: number;
  isLst: boolean;
  value: string;
}

export const LanguageSearch: FunctionalComponent<LanguageSearchProps> = (props) => {
  const { comboboxId, reference, isLst, ...otherProps } = props;
  const { translate } = useTranslation();

  return (
    <div className="uwaw-lang-list__search">
      <div className="uwaw-lang-list__search__i">
        <input
          ref={reference}
          className={`uwaw-form-control ${isLst ? 'lst' : ''}`}
          type="text"
          placeholder={translate('widget.language.search')}
          {...otherProps}
          /* semantic attributes */
          role="combobox"
          aria-controls={comboboxId}
          aria-label={translate('widget.language.search')}
          aria-activedescendant={`language-item-${props.focusedItem}`}
        />
        <span className="uwaw-lang-list__search-ico">
          <SearchIcon width={16} height={16} />
        </span>
      </div>
    </div>
  );
};
