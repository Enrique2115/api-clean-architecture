import type { IUserRepository } from '@app/user/domain'
import type { IFindByIdUserCase } from '@app/user/type'

export default class CreateUserUseCase implements IFindByIdUserCase {
  private readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(id: string) {
    const user = await this.userRepository.findById(id)
    return user
  }
}
