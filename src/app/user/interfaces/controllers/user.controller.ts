import { HttpStatusCode } from '@server/enums'
import { ApiError } from '@server/errors'
import type { FastifyReply, FastifyRequest } from 'fastify' // FastifyRequest
import type { IUserController, IFindByIdUserCase } from '@app/user/type'
import type { IUserRepository } from '@app/user/domain'

export default class UserController implements IUserController {
  constructor(private readonly findbyidUserUsecase: IFindByIdUserCase) {}

  /**
   * Find all users.
   *
   * Retrieves all users from the user repository and sends the data as a response.
   *
   * @param {FastifyRequest} request - The request object.
   * @param {FastifyReply} reply - The reply object.
   * @returns {Promise<void>} A Promise that resolves when the function completes.
   */
  async findAll(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userRepository: IUserRepository =
      request.diScope.resolve('userRepository')

    const data = await userRepository.findAll()

    await reply.status(HttpStatusCode.OK).send(data)
  }

  /**
   * Find a user by email.
   *
   * Retrieves a user by their email address using the `findbyemailUserUsecase` and sends the data as a response.
   *
   * @param {any} request - The request object.
   * @param {FastifyReply} reply - The reply object.
   * @returns {Promise<void>} A Promise that resolves when the function completes.
   */
  async findByEmail(request: any, reply: FastifyReply): Promise<void> {
    try {
      const { email } = request.params

      const findbyemailUserUsecase = request.diScope.resolve(
        'findbyemailUserUsecase'
      )

      const data = await findbyemailUserUsecase.execute(email)

      await reply.status(HttpStatusCode.OK).send(data)
    } catch (error: any) {
      throw ApiError(error.statusCode, error.message)
    }
  }

  /**
   * Find a user by ID.
   *
   * Retrieves a user by their ID using the `findbyidUserUsecase` and sends the data as a response.
   *
   * @param {any} request - The request object.
   * @param {FastifyReply} reply - The reply object.
   * @returns {Promise<void>} A Promise that resolves when the function completes.
   */
  async findById(request: any, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params

      const data = await this.findbyidUserUsecase.execute(id)
      await reply.status(HttpStatusCode.OK).send(data)
    } catch (error: any) {
      throw ApiError(error.statusCode, error.message)
    }
  }
}
