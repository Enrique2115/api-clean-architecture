import type { IAuthRepository } from '@app/auth/domain'
import type { RegisterUserInput } from '@app/auth/interfaces/schemas/register.schema'
import type { IUserRepository } from '@app/user/domain'
import { HttpStatusCode } from '@server/enums'
import { ApiError } from '@server/errors'

export default class RegisterUserUseCase {
  private readonly authRepositoryImpl: IAuthRepository
  private readonly userRepositoryImpl: IUserRepository

  constructor(
    authRepository: IAuthRepository,
    userRepository: IUserRepository
  ) {
    this.authRepositoryImpl = authRepository
    this.userRepositoryImpl = userRepository
  }

  async execute(registerUserInput: RegisterUserInput) {
    const { username, email, password, roles } = registerUserInput

    const existingUser = await this.userRepositoryImpl.findByUsernameOrEmail(
      username,
      email
    )

    if (existingUser !== null) {
      throw ApiError(HttpStatusCode.Conflict, 'Usuario o email ya existen')
    }

    const passwordHash = await this.authRepositoryImpl.hashPassword(password)

    const userEntity = this.userRepositoryImpl.createUserEntity(
      username,
      email,
      passwordHash
    )

    await this.userRepositoryImpl.assignRoles(userEntity, roles)

    const newUser = await this.authRepositoryImpl.register(userEntity)
    return newUser
  }
}
