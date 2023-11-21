export function ApiError(
  statusCode: number,
  message: string,
  stack: string = ''
): Error {
  const error: Error = new Error(message)
  ;(error as any).statusCode = statusCode

  if (stack !== '') {
    error.stack = stack
  } else {
    Error.captureStackTrace(error, ApiError)
  }

  return error
}
