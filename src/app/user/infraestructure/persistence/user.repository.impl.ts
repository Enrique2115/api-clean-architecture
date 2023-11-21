import { ApiError } from '@server/errors'
import { HttpStatusCode } from '@server/enums'
import { User as UserEntity, Role as RoleEntity } from '@db/typeorm/entity'
import type { DataSource, Repository } from 'typeorm'
import type { User, IUserRepository, Roles } from '@app/user/domain'

export default class UserRepository implements IUserRepository {
  private readonly userRepository: Repository<UserEntity>
  private readonly roleRepository: Repository<RoleEntity>
  private readonly datasource

  constructor(private readonly entityManager: DataSource) {
    this.datasource = this.entityManager.initialize()
    this.userRepository = this.entityManager.getRepository(UserEntity)
    this.roleRepository = this.entityManager.getRepository(RoleEntity)
  }

  async assignRoles(user: User, roles: Roles[]): Promise<void> {
    if (roles !== null) {
      for (const roleData of roles) {
        const role = await this.roleRepository.findOneBy({
          name: roleData.name,
        })

        if (role !== null) {
          user.roles = [role]
        } else {
          throw ApiError(HttpStatusCode.NotFound, 'Rol no encontrado')
        }
      }
    }
  }

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
