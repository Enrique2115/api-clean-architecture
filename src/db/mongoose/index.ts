import { connect } from 'mongoose'
import type { Config } from '@config/index'

const dbConnection = async (_config: Config) => {
  try {
    const { mongodb } = _config.database

    const db = await connect(mongodb.uri)
    console.log('Connected to the database:', db.connection.name)

    const connection = db.connection

    connection.once('open', () => {
      console.log('Mongoose is connected')
    })

    connection.once('close', () => {
      console.log('Mongoose is disconnected')
    })

    connection.once('error', err => {
      console.log(err)
    })

    return connection
  } catch (error) {
    console.error('Failed to connect to the database:', error)
  }
}

export default dbConnection
