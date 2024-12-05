import categoryModel from "../../models/categoryModel.js";

async function getAllCategories() {
    const categories = await categoryModel.findAll();
    return categories;
}

async function getCategoryById(id) {
    const category = await categoryModel.findByPk(id);
    return category;
}

async function createCategory(categoryId, categoryName, categoryDescription, playerId) {
    const newCategory = await categoryModel.create({
        category_id: categoryId,
        category_name: categoryName,
        category_description: categoryDescription,
        player_id: playerId
    });
    return newCategory;
}

async function updateCategory(categoryId, categoryName, categoryDescription, playerId) {
    const updateCategory = await categoryModel.findByPk(id);
    updateCategory.category_name = categoryName || updateCategory.category_name;
    updateCategory.category_description = categoryDescription || updateCategory.category_description;
    updateCategory.player_id = playerId || updateCategory.player_id;
    await updateCategory.save();
    return updateCategory;
    
}

async function removeCategory(id) {
    const removeCategory = await categoryModel.findByPk(id);
    await removeCategory.destroy();
    return { message: 'Categoría eliminada correctamente' };
}

export const functions = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    removeCategory
}

export default functions;