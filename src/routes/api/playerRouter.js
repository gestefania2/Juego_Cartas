import { Router } from "express";
import cardApiController from "../../controllers/card/cardApiController.js";
import categoryApiController from "../../controllers/category/categoryApiController.js";
import isAuthenticated from "../../middlewares/api/authMiddleware.js";
import playerIdMiddleware from "../../middlewares/api/playerIdMiddleware.js";

const router = Router();

router.get("/card/list", [isAuthenticated, playerIdMiddleware], cardApiController.getAllCards)



router.post ("/card/new",isAuthenticated,cardApiController.createCard);

router.post ("/category/new",isAuthenticated,categoryApiController.createCategory);

router.put ("/update/card/:id",isAuthenticated,cardApiController.updateCardById);

router.put ("/update/category/:id",isAuthenticated,categoryApiController.updateCategory);

router.delete ("/delete/card/:id",isAuthenticated,cardApiController.removeCard);

router.delete ("/delete/category/:id",isAuthenticated,categoryApiController.removeCategory);

export default router;
