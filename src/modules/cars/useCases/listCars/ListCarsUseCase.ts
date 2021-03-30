import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarRepository";

class ListCarsUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute(): Promise<Car[]> {
    const cars = await this.carsRepository.findAllAvailable();
    return cars;
  }
}

export { ListCarsUseCase };
