import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { userRoutes } from "./user.routes";

const router = Router();
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/user", userRoutes);

export { router };
