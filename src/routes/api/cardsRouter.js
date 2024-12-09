import { Router } from "express";
import cardApiController  from "../../controllers/card/cardApiController.js";
import playerIdMiddleware from "../../middlewares/api/playerIdMiddleware.js";

const router = Router();

router.get("/list",cardApiController.getAllCards);

router.get("/:id",cardApiController.getCardById); // te da cualquier carta por id (pregunta o respuesta)

router.get ("/qa/:categoryId/:total_players", cardApiController.getQuestionAndAnswersCardsByCategory); //Obtener 1 carta pregunta y 5 respuestas por categoría.


export default router;