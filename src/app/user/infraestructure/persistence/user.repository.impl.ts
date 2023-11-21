import type { User, IUserRepository, Roles } from '@app/user/domain'
import type { DataSource, Repository } from 'typeorm'
import { User as UserEntity } from '@db/typeorm/entity'

export default class UserRepository implements IUserRepository {
  private readonly userRepository: Repository<UserEntity>
  private readonly datasource

  constructor(private readonly entityManager: DataSource) {
    this.datasource = this.entityManager.initialize()
    this.userRepository = this.entityManager.getRepository(UserEntity)
  }

  async assignRoles(user: User, roles: Roles[]): Promise<void> {}

  createUserEntity(
    username: string,
    email: string,
    password: string
  ): UserEntity {
    return this.userRepository.create({
      username,
      email,
      password,
    })
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find({
      relations: {
        roles: true,
      },
    })

    return users
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    })
    return user ?? null
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { oid_user: id },
      relations: {
        roles: true,
      },
    })

    return user ?? null
  }

  async findByUsernameOrEmail(
    username: string,
    email: string
  ): Promise<User | null> {
    return null
  }
}
