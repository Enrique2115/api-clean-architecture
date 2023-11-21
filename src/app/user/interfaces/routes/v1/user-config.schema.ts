import { $ref } from '@app/auth/interfaces'

export const findUsersSchema = {
  response: {
    200: $ref('usersResponseSchema'),
    404: $ref('errorResponseSchema'),
  },
  tags: ['Users'],
}

export const findByIdUserSchema = {
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
  response: {
    200: $ref('userResponseSchema'),
    404: $ref('errorResponseSchema'),
  },
  tags: ['Users'],
}

export const findByEmailUserSchema = {
  params: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
    },
  },
  response: {
    200: $ref('userResponseSchema'),
    404: $ref('errorResponseSchema'),
  },
  tags: ['Users'],
}
