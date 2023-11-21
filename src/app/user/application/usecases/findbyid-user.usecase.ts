import type { IUserRepository } from '@app/user/domain'
import type { IFindByIdUserCase } from '@app/user/type'

export default class FindByIdUserUseCase implements IFindByIdUserCase {
  private readonly userRepositoryImpl: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepositoryImpl = userRepository
  }

  async execute(id: string) {
    const user = await this.userRepositoryImpl.findById(id)
    return user
  }
}
