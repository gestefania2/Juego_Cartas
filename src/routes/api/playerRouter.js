import { Router } from "express";
import playerApiController  from "../../controllers/player/playerApiController.js";

const router = Router();

router.get("/",playerApiController.getAllPlayers);
router.get("/:id",playerApiController.getPlayerById);


export default router;