import categoryController from "./categoryController.js";

async function getAllCategories(req, res) {
    const categories = await categoryController.getAllCategories();
    res.json(categories);
}

async function getCategoryById(req, res) {
    const id = parseInt(req.params.id);
    const category = await categoryController.getCategoryById(id);
    res.json(category);
}



export const functions = {
    getAllCategories,
    getCategoryById     
}