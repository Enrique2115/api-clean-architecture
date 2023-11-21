import type { User } from './domain'

export interface IFindByIdUserCase {
  execute: (id: string) => Promise<User | null>
}

export interface IFindByEmailUserCase {
  execute: (email: string) => Promise<User | null>
}

export interface IUserController {
  findAll: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
  findByEmail: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
  findById: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
}
