import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensesPlate(license_plate: string): Promise<Car>;
  findAllAvailable(): Promise<Car[]>;
}

export { ICarsRepository };
