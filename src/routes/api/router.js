import { Router } from "express";
import playerRouter from "./playerRouter.js";
import cardRouter from "./cardsRouter.js";
import categoryRouter from "./categoryRouter.js";
import authApiController from "../../controllers/auth/authApiController.js";

const router = Router();

router.use("/card", cardRouter);
router.use("/category", categoryRouter);
router.use("/player", playerRouter);

router.post("/login", authApiController.login);
router.post("/register", authApiController.register);

export default router;