// TODO:refactoring:features-config
// Important!!! Ensure this equals to SiteCustomMenu.getDefaultSettings.features_pattern
export const ACCESSIBILITY_MENU_PAID_FEATURES = [
  's9',
  's11',
  's18',
  's21',
  's24',
  's101',
  's102',
  's103',
  's104',
  's105',
  's106',
  's107',
  's108',
]; // Important: same list is also defined in main.js
export const ACCESSIBILITY_MENU_DEFAULT_PATTERN = 's3|s6|s4|s14|s13|s25|s7|s2|s12|s17|s19|s23'; // from left to right; from top to bottom
export const ACCESSIBILITY_MENU_PROFILES_PATTERN = 's101|s102|s103|s104|s105|s106|s107|s108';
export const ACCESSIBILITY_MENU_PAID_PATTERN = `s9|s24|s3|s18|s6|s4|s14|s13|s25|s7|s2|s12|s11|s17|s19|s21|s23|${ACCESSIBILITY_MENU_PROFILES_PATTERN}`; // from left to right; from top to bottom
