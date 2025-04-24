/**
 * Helper function to detect white color
 * @param color {string} input hex string eg: #fff, white, rgba(255, 255, 255, 1)
 */
export const detectWhiteColor = (color: string) => {
  if (!color) return null;
  return /^(?:white|#fff(?:fff)?|#fffff|rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(?:,\s*1\s*)?\))$/i.test(
    color,
  );
};
