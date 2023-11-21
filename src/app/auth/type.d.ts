import type { FastifyReply, FastifyRequest } from 'fastify'
import type { RegisterUserInput } from './interfaces/schemas/register.schema'

export interface IAuthController {
  register: (request: any, reply: FastifyReply) => Promise<void>
  login: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
}

export interface IRegisterUserCase {
  execute: (registerUserDto: RegisterUserInput) => Promise<User>
}
