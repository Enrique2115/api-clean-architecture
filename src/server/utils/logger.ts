import type { PinoLoggerOptions } from 'fastify/types/logger'

export const envToLogger: Record<string, PinoLoggerOptions> = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:h:MM:ss TT',
        ignore: 'pid,hostname',
      },
    },
  },
  // production: true,
  // test: false,
}
