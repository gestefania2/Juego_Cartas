import { Router } from "express";
import playerApiController  from "../../controllers/player/playerApiController.js";
import cardApiController from "../../controllers/card/cardApiController.js";
import isAuthenticated from "../../middlewares/api/authMiddleware.js";
import playerIdMiddleware from "../../middlewares/api/playerIdMiddleware.js";

const router = Router();

router.get("/card/list", [isAuthenticated, playerIdMiddleware], cardApiController.getAllCards)

router.post ("/card/new",isAuthenticated,cardApiController.createCard);

router.put ("/update/card/:id",isAuthenticated,cardApiController.updateCardById);

router.delete ("/delete/card/:id",isAuthenticated,cardApiController.removeCard);

export default router;
