import type { Config } from '@config/index'
import { AppDataSource } from './data-source'
import type { DataSource } from 'typeorm'

let initialized = false

const TypeOrmConnection = async (instance: Config): Promise<DataSource> => {
  if (!initialized) {
    await AppDataSource(instance).initialize()
    initialized = true

    console.log('Connected to the database')
  }

  return AppDataSource(instance)
}

export default TypeOrmConnection
