import type { IUserController } from '@app/user/type'
import type { FastifyInstance } from 'fastify'

const userRoutes = async (
  fastify: FastifyInstance,
  _: any,
  done: () => void
): Promise<void> => {
  const userController: IUserController =
    fastify.diContainer.resolve('userController')

  fastify
    .get('/', async (request, reply) => {
      await userController.findAll(request, reply)
    })
    .get('/:id', async (request, reply) => {
      await userController.findById(request, reply)
    })
    .get('/:email/email', async (request, reply) => {
      await userController.findByEmail(request, reply)
    })

  done()
}

export default userRoutes
