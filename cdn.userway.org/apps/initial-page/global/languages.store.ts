import { LANGUAGES } from 'constants/languages';

class LanguagesStore {
  public languages = LANGUAGES;
}

(window as any).languagesStore = new LanguagesStore();

export const languagesStore = (window as any).languagesStore as LanguagesStore;
