import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/usecases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/usecases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes };
