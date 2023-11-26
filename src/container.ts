import { formatRoute } from '@server/utils'
import { diContainer } from '@fastify/awilix'
import { InjectionMode, Lifetime, asValue } from 'awilix'
import Config from '@config/index'
import { AppDataSource } from '@db/typeorm/data-source'

diContainer.register({
  config: asValue(Config),
  entityManager: asValue(AppDataSource),
})

diContainer.loadModules(
  [
    './app/**/application/usecases/**/*.usecase.(js|ts)',
    './app/**/infraestructure/auth/*.strategy.(js|ts)',
    './app/**/infraestructure/persistence/*.repository.impl.(js|ts)',
    './app/**/interfaces/controllers/*.controller.(js|ts)',
  ],
  {
    cwd: __dirname,
    formatName: (name: string) => formatRoute(name),
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
      injectionMode: InjectionMode.CLASSIC,
    },
  }
)

const registrations = diContainer.registrations

Config.enviroment === 'development' &&
  console.log('Módulos registrados:', Object.keys(registrations))

export default diContainer
