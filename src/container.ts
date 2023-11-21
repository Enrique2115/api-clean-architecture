import { diContainer } from '@fastify/awilix'
import { asValue } from 'awilix'
import Config from '@config/index'

diContainer.register({
  config: asValue(Config),
})

const registrations = diContainer.registrations

Config.enviroment === 'development' &&
  console.log('Módulos registrados:', Object.keys(registrations))

export default diContainer
