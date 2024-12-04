import { Router } from "express";
import categoryApiController  from "../../controllers/category/categoryApiController.js";

const router = Router();

//router.get("/",categoryApiController.getAllcategories);
router.get("/:id",categoryApiController.getCategoryById);

router.post ("/",categoryApiController.createCategory);

//router.put ("/:id",categoryApiController.updateCategory);

//router.delete ("/:id",categoryApiController.removeCategory);


export default router;