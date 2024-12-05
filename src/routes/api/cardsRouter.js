import { Router } from "express";
import cardApiController  from "../../controllers/card/cardApiController.js";
import playerIdMiddleware from "../../middlewares/api/playerIdMiddleware.js";

const router = Router();

router.get("/list",cardApiController.getAllCards);

router.get("/:id",cardApiController.getCardById); // te da cualquier carta por id (pregunta o respuesta)

//router.get("list/:categoryId",cardApiController.getAllCardsByCategory); //Obtener todas las cartas de una categoría.

//router.get("/question/:categoryId",cardApiController.getQuestionCardByCategory); //Obtener todas las cartas de tipo question de una categoría.

//router.get("/answer/:categoryId",cardApiController.getAnswerCardByCategory); //Obtener todas las cartas de tipo answer de una categoría. 

router.get ("/qa/:categoryId/:total_players", cardApiController.getQuestionAndAnswersCardsByCategory); //Obtener 1 carta pregunta y 5 respuestas por categoría.


export default router;