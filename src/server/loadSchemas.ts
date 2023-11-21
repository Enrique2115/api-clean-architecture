import { registerUserSchemas } from '@app/auth/interfaces'
import type { FastifyInstance } from 'fastify'

export const LoadSchemas = (instance: FastifyInstance): void => {
  for (const schemas of [...registerUserSchemas]) {
    instance.addSchema(schemas)
  }
}
