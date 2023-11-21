import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const userInput = {
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  roles: z.array(
    z.object({
      name: z.string(),
    })
  ),
}

const userGenerated = {
  oid_user: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
}

const registerUserSchema = z.object({
  ...userInput,
})

const userResponseSchema = z.object({
  ...userInput,
  ...userGenerated,
})

const errorResponseSchema = z.object({
  message: z.string(),
  statusCode: z.number(),
  stack: z.string(),
})

const arrUserResponseSchema = z.object({
  ...userInput,
  ...userGenerated,
  status: z.boolean(),
})

const usersResponseSchema = z.array(arrUserResponseSchema)

export type RegisterUserInput = z.infer<typeof registerUserSchema>

export const { schemas: registerUserSchemas, $ref } = buildJsonSchemas({
  registerUserSchema,
  userResponseSchema,
  usersResponseSchema,
  errorResponseSchema,
})
