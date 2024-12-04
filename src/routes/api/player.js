import {Router} from "express";
import playerApiController  from "../../controllers/player/playerApiController.js";
import { isAuthenticated,isAdmin, isAdminOrSelfUser} from "../../middlewares/api/authMiddleware.js";

const router = Router();

router.get("/",userApiController.getAll);

router.get("/:id",userApiController.getById);


router.post("/",userApiController.create);


router.put("/:id",userApiController.update);

router.delete("/:id",userApiController.remove);


export default router;