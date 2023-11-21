import container from './container'
import createServer from '@server/server'
import type { Config } from '@config/index'
import TypeOrmConnection from '@db/typeorm'
import registerRoutes from '@server/routes/register-routes'
import { LoadSchemas } from '@server/loadSchemas'

const app = async () => {
  const fastify = await createServer(container)
  const config: Config = await container.resolve('config')

  try {
    LoadSchemas(fastify)

    await registerRoutes(fastify)

    await TypeOrmConnection(config)

    await fastify.listen({ port: config.api.port })
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

void app()
