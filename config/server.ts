import yenv from 'yenv'

const env = yenv()

export const PORT: number = env.PORT
export const NODE_ENV: string = env.NODE_ENV
