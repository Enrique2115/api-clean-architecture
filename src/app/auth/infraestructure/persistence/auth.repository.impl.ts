import { handleBcrypt } from '@app/auth/interfaces'
import type { IAuthRepository } from '@app/auth/domain'
import type { User } from '@app/user/domain'
import type { Repository, DataSource } from 'typeorm'
import { User as UserEntity } from '@db/typeorm/entity'

export default class AuthRepositoryImpl implements IAuthRepository {
  private readonly userRepository: Repository<UserEntity>

  constructor(private readonly entityManager: DataSource) {
    this.userRepository = this.entityManager.getRepository(UserEntity)
  }

  async hashPassword(password: string): Promise<string> {
    return await handleBcrypt().hashPassword(password)
  }

  async login(email: string, password: string): Promise<UserEntity | null> {
    return null
  }

  async register(user: User): Promise<User> {
    const newUser = await this.userRepository.save(user)

    return newUser
  }
}
