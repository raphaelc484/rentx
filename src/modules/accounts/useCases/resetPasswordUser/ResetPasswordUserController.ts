import { Request, Response } from "express";
import { container } from "tsyringe";

import { ResetPasswordUserUsecase } from "./ResetPasswordUserUseCase";

class ResetPasswordUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;

    const resetPasswordUserUsecase = container.resolve(
      ResetPasswordUserUsecase
    );

    await resetPasswordUserUsecase.execute({
      token: String(token),
      password,
    });

    return response.send();
  }
}

export { ResetPasswordUserController };
