import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
    specifications,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
      specifications,
      id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensesPlate(license_plate: string): Promise<Car> {
    const car = this.repository.findOne({ license_plate });

    return car;
  }

  async findAllAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const casrQuery = await this.repository
      .createQueryBuilder("c")
      .where("available= :available", { available: true });

    if (brand) {
      casrQuery.andWhere("brand = :brand", { brand });
    }
    if (name) {
      casrQuery.andWhere("name = :name", { name });
    }
    if (category_id) {
      casrQuery.andWhere("category_id = :category_id", { category_id });
    }

    const cars = await casrQuery.getMany();

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne(id);
    return car;
  }
}

export { CarsRepository };
