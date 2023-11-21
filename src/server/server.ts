import { envToLogger } from '@server/utils'
import { fastifyAwilixPlugin } from '@fastify/awilix'
import { handleError } from '@server/errors'
import { NODE_ENV } from '@config/server'
import cors from '@fastify/cors'
import Fastify from 'fastify'
import fp from 'fastify-plugin'
import pkg from '../../package.json'
import type { AwilixContainer } from 'awilix'
import type { FastifyInstance } from 'fastify'

/**
 * Creates a Fastify server instance with the given container.
 *
 * @param {AwilixContainer} container - The container to be used for dependency injection.
 * @return {Promise<FastifyInstance>} A promise that resolves to the created Fastify server instance.
 */
async function createServer(
  container: AwilixContainer
): Promise<FastifyInstance> {
  const server: FastifyInstance = Fastify({
    logger: envToLogger[NODE_ENV] ?? true,
  })

  await server.register(cors, {})
  server.setErrorHandler(handleError)

  await server.register(fastifyAwilixPlugin, {
    disposeOnClose: true,
    disposeOnResponse: true,
  })

  await server.register(
    fp((instance, opts, done) => {
      instance.decorate('container', container)
      done()
    })
  )

  server.get('/', async (request, reply) => {
    return {
      name: pkg.name,
      author: pkg.author,
      description: pkg.description,
      version: pkg.version,
    }
  })

  return server
}

export default createServer
