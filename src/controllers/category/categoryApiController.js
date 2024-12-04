import { get } from "mongoose";
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

async function createCategory(req, res) {
    const { categoryId, categoryName, categoryDescription, playerId } = req.body;
    const newCategory = await categoryController.createCategory(categoryId, categoryName, categoryDescription, playerId);
    res.json(newCategory);

}


export const functions = {
    getAllCategories,
    getCategoryById,
    createCategory   
}

export default functions;