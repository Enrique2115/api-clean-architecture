import type { FastifyInstance } from 'fastify'
import Swagger from '@fastify/swagger'
import SwaggerUi from '@fastify/swagger-ui'

const configSwagger = {
  swagger: {
    info: {
      title: 'Clean Architecture API',
      description: 'API for Clean Architecture',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey' as 'apiKey',
        name: 'Authorization',
        in: 'header',
        description:
          'JWT Authorization header using the Bearer scheme. Example: "Authorization: Bearer {token}"',
      },
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'Auth',
        description: 'Auth related end-points',
      },
      {
        name: 'Users',
        description: 'User related end-points',
      },
    ],
  },
}

const configSwaggerUi = {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list' as 'list' | 'full' | 'none',
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request: any, reply: any, next: any) {
      next()
    },
    preHandler: function (request: any, reply: any, next: any) {
      next()
    },
  },
  staticCSP: true,
  transformStaticCSP: (header: any) => header,
}

export default async function LoadSwagger(instance: FastifyInstance) {
  await instance.register(Swagger, configSwagger)

  await instance.register(SwaggerUi, configSwaggerUi)
}
