import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/CreateRentalController";

import { ensureAuthenticate } from "../middleware/ensureAuthenticate";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticate, createRentalController.handle);

export { rentalRoutes };
