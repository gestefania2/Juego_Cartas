import { Router } from "express";
import cardApiController  from "../../controllers/card/cardApiController.js";

const router = Router();

router.get("/",cardApiController.getAllCards);

router.get("/:id",cardApiController.getCardById);

router.get ("/qa/:categoryId/:total_players",cardApiController.getQuestionAndAnswersCardsByCategory); //getQuestionAndAnswersCardsByCategory

router.post ("/",cardApiController.createCard);

router.put ("/:id",cardApiController.updateCard);

router.delete ("/:id",cardApiController.removeCard);


export default router;