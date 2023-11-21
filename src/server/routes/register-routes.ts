import fs from 'fs/promises'
import path from 'path'
import type { FastifyInstance } from 'fastify'

const removeExtension = (fileName: string) => fileName.split('.').shift()

const registerRoutes = async (fastify: FastifyInstance) => {
  const dirname = path.join(__dirname, '../../app')

  try {
    const folderNames = await fs.readdir(dirname)

    await Promise.all(
      folderNames.map(async folderName => {
        const module = `${folderName}/interfaces/routes/v1`
        const route = path.join(dirname, module)

        const fileNames = await fs.readdir(route)

        await Promise.all(
          fileNames.map(async fileName => {
            const file = removeExtension(fileName)
            if (file === 'index') return
            try {
              const item = await import(path.join(route, fileName))
              await fastify.register(item, { prefix: `/api/v1/${file}` })
            } catch (error) {
              fastify.log.error(error)
            }
          })
        )
      })
    )
  } catch (error) {
    fastify.log.error(error)
  }
}

export default registerRoutes
