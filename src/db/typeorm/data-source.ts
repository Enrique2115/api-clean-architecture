import 'reflect-metadata'
import { DataSource } from 'typeorm'
import path from 'path'
import type { Config } from '@config/index'

export const AppDataSource = (_config: Config) => {
  const { sql } = _config.database

  return new DataSource({
    type: sql.dialect,
    host: sql.host,
    port: sql.port,
    username: sql.user,
    password: sql.password,
    database: sql.database,
    synchronize: sql.synchronize,
    logging: sql.logging,
    entities: [path.join(__dirname, '/entity/*.entity.{js,ts}')],
    subscribers: [],
    migrations: [],
  })
}
