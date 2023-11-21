/**
 * Splits a given string into two parts using the '-' delimiter.
 *
 * @param {string} path - The string to be split.
 * @return {string[]} An array containing the two parts of the string.
 */
export const separeModuleName = (path: string): string[] => {
  const [first, second] = path.split('-')
  return [first, second]
}
