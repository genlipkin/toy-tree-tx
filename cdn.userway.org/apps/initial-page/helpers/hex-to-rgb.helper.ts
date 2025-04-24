/**
 * Helper function to convert hex color to rgb values
 * Output format Array<number> eg: '[0-255, 0-255, 0-255]'
 * @param hex {string} input hex string eg: #000000, #fff
 */
export const hexToRgbValues = (hex: string) => {
  if (!hex) return null;

  return hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
};
