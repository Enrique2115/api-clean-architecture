import yenv from 'yenv'
const env = yenv()

const {
  MONGODB: { uri },
} = env

const {
  SQL: { host, port, user, password, database, dialect, synchronize, logging },
} = env

export const DB_MONGO = {
  uri,
}

export const DB_SQL = {
  host,
  port,
  user,
  password,
  database,
  dialect,
  synchronize,
  logging,
}
