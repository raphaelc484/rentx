import { getRepository, Repository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";

import { Specification } from "../entities/Specifications";

class SpecificationsRepository implements ISpecificationsRepository {
  private repositpory: Repository<Specification>;

  constructor() {
    this.repositpory = getRepository(Specification);
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repositpory.create({
      description,
      name,
    });

    await this.repositpory.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repositpory.findOne({
      name,
    });

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repositpory.findByIds(ids);

    return specifications;
  }
}

export { SpecificationsRepository };
