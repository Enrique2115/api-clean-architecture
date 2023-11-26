import _config from '@config/index'
import { DataSource } from 'typeorm'
import path from 'path'
import type { Config } from '@config/index'

const config: Config = _config
const { sql } = config.database

export const AppDataSource = new DataSource({
  type: sql.dialect,
  host: sql.host,
  port: sql.port,
  username: sql.user,
  password: sql.password,
  database: sql.database,
  entities: [path.join(__dirname, './entity/*.entity.{ts,js}')],
  synchronize: true,
  logging: false,
})
