import type { IUserRepository } from '@app/user/domain'
import type { IFindByEmailUserCase } from '@app/user/type'

export default class FindByEmailUserUseCase implements IFindByEmailUserCase {
  private readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(email: string) {
    const user = await this.userRepository.findByEmail(email)
    return user
  }
}
