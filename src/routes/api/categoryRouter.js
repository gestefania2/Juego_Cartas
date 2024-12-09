import { Router } from "express";
import categoryApiController  from "../../controllers/category/categoryApiController.js";
import isAuthenticated from "../../middlewares/api/authMiddleware.js";
const router = Router();

router.get("/list",categoryApiController.getAllCategories);

router.get("/:id",categoryApiController.getCategoryById);


export default router;
