import type { IAuthController } from '@app/auth/type'
import type { FastifyInstance } from 'fastify'
import { registerSchema } from './auth-config.schema'

const authRoutes = async (
  fastify: FastifyInstance,
  _: any,
  done: () => void
): Promise<void> => {
  const authController: IAuthController =
    fastify.diContainer.resolve('authController')

  fastify
    .post('/register', { schema: registerSchema }, async (request, reply) => {
      await authController.register(request, reply)
    })
    .post('/login', async (request, reply) => {
      await reply.send({
        message: 'Falta implementar',
      })
    })

  done()
}

export default authRoutes
