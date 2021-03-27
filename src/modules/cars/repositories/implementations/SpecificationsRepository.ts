import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specifications";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repositpory: Repository<Specification>;

  constructor() {
    this.repositpory = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repositpory.create({
      description,
      name,
    });

    await this.repositpory.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repositpory.findOne({
      name,
    });

    return specification;
  }
}

export { SpecificationsRepository };
