import { HttpStatusCode } from '@server/enums'
import { ApiError } from '@server/errors'
import type { FastifyReply, FastifyRequest } from 'fastify' // FastifyRequest
import type { IAuthController, IRegisterUserCase } from '@app/auth/type'
import type { RegisterUserInput } from '../schemas/register.schema'

export default class UserController implements IAuthController {
  constructor(private readonly registerUserUsecase: IRegisterUserCase) {}

  async register(
    request: FastifyRequest<{ Body: RegisterUserInput }>,
    reply: FastifyReply
  ): Promise<void> {
    try {
      const data = await this.registerUserUsecase.execute({
        ...request.body,
      })
      await reply.status(HttpStatusCode.Created).send(data)
    } catch (error: any) {
      throw ApiError(error.statusCode, error.message)
    }
  }

  async login(request: any, reply: FastifyReply): Promise<void> {}
}
