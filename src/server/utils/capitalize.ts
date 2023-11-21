/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The string to capitalize.
 * @return {string} The capitalized string.
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
