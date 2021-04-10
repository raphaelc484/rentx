import { ICreateUsersTokensDTO } from "../dtos/ICreateUsersTokensDTO";
import { UsersTokens } from "../infra/typeorm/entities/UsersTokens";

interface IUsersTokensRepository {
  create({
    expire_date,
    refresh_token,
    user_id,
  }: ICreateUsersTokensDTO): Promise<UsersTokens>;

  findByUserIdAndRefresh(
    user_id: string,
    refresh_token: string
  ): Promise<UsersTokens>;

  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
