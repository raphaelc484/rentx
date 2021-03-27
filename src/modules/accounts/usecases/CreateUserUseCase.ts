import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      driver_license,
      email,
      name,
      password,
    });
  }
}

export { CreateUserUseCase };
