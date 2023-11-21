import { HttpStatusCode, Messages } from '@server/enums'
import { ApiError } from './api-error'
import type { FastifyReply, FastifyRequest } from 'fastify'

export function handleError(
  incomingError: any,
  request: FastifyRequest,
  reply: FastifyReply
) {
  let error: any = incomingError

  // eslint-disable-next-line
  if (!incomingError.statusCode) {
    error = ApiError(
      HttpStatusCode.InternalServerError,
      process.env.NODE_ENV === 'production'
        ? Messages.INTERNAL_ERROR
        : incomingError.message
    )
  }
  request.log.error(error.message)

  // eslint-disable-next-line
  reply.status(error.statusCode).send({
    message: error.message,
    statusCode: error.statusCode,
    stack: error.stack,
  })
}
