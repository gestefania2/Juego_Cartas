import categoryModel from "../../models/categoryModel.js";

async function getAllCategories(player_id=null) {
    const categories = await categoryModel.findAll({
        where: {
            player_id
        }
    });
    return categories;
}

async function getCategoryById(id) {
    const category = await categoryModel.findByPk(id);
    return category;
}

async function createCategory(category_name, category_description, categoryId, player_id) {
    const newCategory = await categoryModel.create({
        category_name, 
        category_description,
        category_id: categoryId,
        player_id

    });
    return newCategory;
}


async function updateCategory(categoryId, category_name , category_description) {
    const updateCategoryById = await categoryModel.findByPk(categoryId);
    updateCategoryById.category_name = category_name || updateCategoryById.category_name;
    updateCategoryById.category_description = category_description || updateCategoryById.category_description;
    await updateCategoryById.save();
    return updateCategoryById;
}

async function removeCategory(category_id) {
    const removeCategory = await categoryModel.findByPk(category_id);
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