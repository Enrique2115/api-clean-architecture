import type { User } from './domain'

export interface IFindByIdUserCase {
  execute: (id: string) => Promise<User | null>
}
