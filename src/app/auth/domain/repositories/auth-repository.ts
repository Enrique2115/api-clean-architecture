import type { User } from '@app/user/domain'

export interface IAuthRepository {
  hashPassword: (password: string) => Promise<string>
  login: (email: string, password: string) => Promise<User | null>
  register: (auth: User) => Promise<User>
}
