import 'module-alias/register'
import 'reflect-metadata'
import { AppDataSource } from '@db/typeorm/data-source'
import { LoadSchemas } from '@server/loadSchemas'
import container from './container'
import createServer from '@server/server'
import registerRoutes from '@server/routes/register-routes'
import type { Config } from '@config/index'

const app = async () => {
  const fastify = await createServer(container)
  const config: Config = await container.resolve('config')

  try {
    LoadSchemas(fastify)

    await registerRoutes(fastify)

    await AppDataSource.initialize()

    await fastify.listen({ port: config.api.port, host: config.api.host })
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

void app()
