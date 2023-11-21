import type { IUserController } from '@app/user/type'
import type { FastifyInstance } from 'fastify'
import {
  findByEmailUserSchema,
  findByIdUserSchema,
  findUsersSchema,
} from './user-config.schema'

const userRoutes = async (
  fastify: FastifyInstance,
  _: any,
  done: () => void
): Promise<void> => {
  const userController: IUserController =
    fastify.diContainer.resolve('userController')

  fastify
    .get('/', { schema: findUsersSchema }, async (request, reply) => {
      await userController.findAll(request, reply)
    })
    .get('/:id', { schema: findByIdUserSchema }, async (request, reply) => {
      await userController.findById(request, reply)
    })
    .get(
      '/:email/email',
      { schema: findByEmailUserSchema },
      async (request, reply) => {
        await userController.findByEmail(request, reply)
      }
    )

  done()
}

export default userRoutes
