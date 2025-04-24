/**
 * Right to Left language detector.
 * @param language {string} current language
 */
export function isRTL(language: string) {
  const RTL_LANGUAGES = [
    'ae' /* Avestan */,
    'ar' /* Arabic */,
    'arc' /* Aramaic */,
    'bcc' /* Southern Balochi */,
    'bqi' /* Bakthiari */,
    'ckb' /* Soranî */,
    'dv' /* Dhivehi */,
    'fa' /* Persian */,
    'glk' /* Gilaki */,
    'he' /* Hebrew */,
    'ku' /* Kurdî / Kurdish */,
    'mzn' /* Mazanderani */,
    'nqo' /* N'Ko */,
    'pnb' /* Western Punjabi */,
    'ps' /* Pashto */,
    'prs' /* Dari */,
    'sd' /* Sindhi */,
    'ug' /* Uyghurche, Uyghur */,
    'ur' /* Urdu */,
    'yi' /* Yiddish */,
  ];

  return RTL_LANGUAGES.includes(language);
}
