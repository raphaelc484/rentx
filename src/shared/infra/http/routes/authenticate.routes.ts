import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/usecases/authenticateUser/AuthenticateUserControler";
import { RefreshTokenController } from "@modules/accounts/usecases/refreshToken/RefreshTokenController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh_token", refreshTokenController.handle);

export { authenticateRoutes };
