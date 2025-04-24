import { Language } from 'constants/languages';

export const sortLanguages = (languages: Language[]) =>
  languages.sort((a, b) => {
    if (a.value === 'en-US') return -1;
    if (b.value === 'en-US') return 1;
    return a.name.localeCompare(b.name);
  });
