import { capitalizeFirstLetter } from './capitalize'
import { separeModuleName } from './separe-modulename'

/**
 * Formats a route based on the given path.
 *
 * @param {string} path - The path to be formatted.
 * @return {string} The formatted route.
 */
export const formatRoute = (path: string): string => {
  const [moduleName, nameSpace] = path.split('.')

  const [firstPart, secondPart] = separeModuleName(moduleName)
  const formattedModuleName = `${firstPart}${capitalizeFirstLetter(
    secondPart ?? ''
  )}`

  const formattedNameSpace = capitalizeFirstLetter(nameSpace)

  const route = formattedModuleName + formattedNameSpace

  return route
}
