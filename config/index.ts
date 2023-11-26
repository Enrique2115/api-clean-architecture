import { DB_MONGO, DB_SQL } from './database'
import { HOST, NODE_ENV, PORT } from './server'
import yenv from 'yenv'

const env = yenv()

export interface Config {
  enviroment: string
  auth: {
    jwt: {
      secret: string
    }
  }
  api: {
    port: number
    host: string
  }
  database: {
    sql: typeof DB_SQL
    mongodb: typeof DB_MONGO
  }
}

export default {
  enviroment: NODE_ENV,
  auth: {
    jwt: { secret: env.JWT.secret },
  },
  api: { port: PORT, host: HOST },
  database: {
    sql: DB_SQL,
    mongodb: DB_MONGO,
  },
}
