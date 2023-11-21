import type { Roles, User } from '@app/user/domain'

export interface IUserRepository {
  assignRoles: (user: User, roles: Roles[]) => Promise<void>
  createUserEntity: (username: string, email: string, password: string) => User
  findAll: () => Promise<User[]>
  findByEmail: (email: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
  findByUsernameOrEmail: (
    username: string,
    email: string
  ) => Promise<User | null>
}
