import { Router } from "express";
import categoryApiController  from "../../controllers/category/categoryApiController.js";
import isAuthenticated from "../../middlewares/api/authMiddleware.js";
const router = Router();

router.get("/list",categoryApiController.getAllCategories);

router.get("/:id",categoryApiController.getCategoryById);

router.post ("/new",isAuthenticated,categoryApiController.createCategory);

router.put ("/:id/update",isAuthenticated,categoryApiController.updateCategory);

router.delete ("/:id",isAuthenticated,categoryApiController.removeCategory);


export default router;

//estan bién definidas las rutas?