import { $ref } from '@app/auth/interfaces/schemas/register.schema'

export const registerSchema = {
  body: $ref('registerUserSchema'),
  response: {
    201: $ref('userResponseSchema'),
    404: $ref('errorResponseSchema'),
    409: $ref('errorResponseSchema'),
  },
  tags: ['Auth'],
}
