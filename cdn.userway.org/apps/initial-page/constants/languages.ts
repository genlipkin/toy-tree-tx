export type Language = {
  value: string;
  name: string;
  iso: string;
  extraCode?: string;
  noLiveTranslation?: boolean;
};

export const EN_LANGUAGES = ['en-US', 'en-AU', 'en-GB', 'en'];

export const LANGUAGES: Language[] = [
  { value: 'en-US', name: 'English (USA)', iso: 'US' },
  { value: 'az', name: 'Azerbaijani (Azeri)', iso: 'AZ' },
  { value: 'ar', name: 'عربى (Arabic)', iso: 'AR' },
  { value: 'bn', name: 'বাঙালি (Bengali)', iso: 'BN' },
  { value: 'bg', name: 'Български (Bulgarian)', iso: 'BG' },
  { value: 'zh', name: '中文 (Chinese)', iso: 'ZH' },
  {
    value: 'zh-Hant',
    name: '漢語 (Chinese Traditional)',
    iso: 'TW',
    extraCode: 'zh-TW',
  },
  { value: 'hr', name: 'Hrvatski (Croatian)', iso: 'HR' },
  { value: 'cs', name: 'Čeština (Czech)', iso: 'CS' },
  { value: 'nl', name: 'Nederlands (Dutch)', iso: 'NL' },
  { value: 'en-AU', name: 'English (Australian)', iso: 'AU' },
  { value: 'en', name: 'English (USA)', iso: 'US' },
  { value: 'en-GB', name: 'English (United Kingdom)', iso: 'GB' },
  { value: 'et', name: 'Eesti keel (Estonian)', iso: 'ET' },
  { value: 'fi', name: 'Suomi (Finnish)', iso: 'FI' },
  {
    value: 'fo',
    name: 'Føroyskt (Faroese)',
    iso: 'FO',
    noLiveTranslation: true,
  },
  { value: 'fr', name: 'Français (French)', iso: 'FR' },
  { value: 'ka', name: 'ქართული (Georgian)', iso: 'KA' },
  { value: 'de', name: 'Deutsch (German)', iso: 'DE' },
  { value: 'el', name: 'Ελληνικά (Greek)', iso: 'EL' },
  { value: 'haw', name: 'ʻŌlelo Hawaiʻi (Hawaiian)', iso: 'HA' },
  { value: 'he', name: 'עברית (Hebrew)', iso: 'HE' },
  { value: 'hi', name: 'हिंदी (Hindi)', iso: 'HI' },
  { value: 'hu', name: 'Magyar (Hungarian)', iso: 'HU' },
  { value: 'it', name: 'Italiano (Italian)', iso: 'IT' },
  { value: 'id', name: 'Bahasa Indonesia (Indonesian)', iso: 'ID' },
  { value: 'ja', name: '日本語 (Japanese)', iso: 'JA' },
  { value: 'ko', name: '한국어 (Korean)', iso: 'KO' },
  { value: 'lt', name: 'Lietuvių (Lithuanian)', iso: 'LT' },
  { value: 'lv', name: 'Latviešu (Latvian)', iso: 'LV' },
  {
    value: 'mgo',
    name: 'Crnogorski (Montenegrin)',
    iso: 'ME',
    noLiveTranslation: true,
  },
  { value: 'no', name: 'Norsk (Norwegian)', iso: 'NO' },
  { value: 'fa', name: 'فارسی (Persian)', iso: 'FA' },
  { value: 'pl', name: 'Polski (Polish)', iso: 'PL' },
  { value: 'pt-BR', name: 'Português (Brazil)', iso: 'BR' },
  { value: 'pt', name: 'Português (Portugal)', iso: 'PT' },
  { value: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', iso: 'PA' },
  { value: 'ro', name: 'Română (Romanian)', iso: 'RO' },
  { value: 'ru', name: 'Русский (Russian)', iso: 'RU' },
  { value: 'sk', name: 'Slovenský (Slovak)', iso: 'SK' },
  { value: 'sl', name: 'Slovenščina (Slovenian)', iso: 'SI' },
  { value: 'sr', name: 'Српски (Serbian)', iso: 'SR' },
  {
    value: 'sr-Latn',
    name: 'Serbian (Latin)',
    iso: 'SR',
    noLiveTranslation: true,
  },
  { value: 'es', name: 'Español (Spanish)', iso: 'ES' },
  { value: 'es-MX', name: 'Español (Mexico)', iso: 'MX' },
  { value: 'sv', name: 'Svenska (Swedish)', iso: 'SV' },
  { value: 'tr', name: 'Türkçe (Turkish)', iso: 'TR' },
  { value: 'th', name: 'ภาษาไทย (Thai)', iso: 'TH' },
  { value: 'tl', name: 'Tagalog (Filipino)', iso: 'TL' },
  { value: 'uk', name: 'Українська (Ukrainian)', iso: 'UK' },
  { value: 'cy', name: 'Cymraeg (Welsh)', iso: 'CY' },
  { value: 'ceb', name: 'Cebuano (Filipino)', iso: 'CE' },
  { value: 'sm', name: 'Gagana faʻa Sāmoa (Samoan)', iso: 'SM' },
  { value: 'vi', name: 'Việt Nam (Vietnamese)', iso: 'VI' },
  { value: 'da', name: 'Dansk (Danish)', iso: 'DA' },
  { value: 'ca', name: 'Catalan (Català)', iso: 'CA' },
  { value: 'ht', name: 'Creole (Haitian)', iso: 'HT' },
  { value: 'ilo', name: 'Ilocano (Filipino)', iso: 'ILO' },
  { value: 'ps', name: 'پښتو (Pashto)', iso: 'PS' },
  { value: 'prs', name: 'دری (Dari)', iso: 'PRS' },
  { value: 'eu', name: 'Basque (Basque)', iso: 'EU' },
  { value: 'hmn', name: 'Hmong (Hmong)', iso: 'HMN' },
  { value: 'hy', name: 'հայոց լեզու (Armenian)', iso: 'HY' },
];

export enum LstButtonType {
  OneButton = '1',
  TwoButtons = '2',
}

export enum LstButtonIcon {
  Flag = 'flag',
  Earth = 'earth',
  Characters = 'characters',
}

export interface LstTuningsOptions {
  is_enabled: boolean;
  is_renewable: boolean;
  remainingChars: number;
  translationAllowed: boolean;
  autoTranslation: boolean;
}
