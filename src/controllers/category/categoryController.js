import categoryModel from "../../models/categoryModel.js";

/**
 * Obtiene todas las categorías de la base de datos, filtradas por el ID del jugador si se proporciona.
 * 
 * @param {number|null} [player_id=null] - El ID del jugador para filtrar las categorías. Si no se proporciona, se considerarán todas las categorías.
 * 
 * @returns {Promise<Array>} - Una promesa que se resuelve con un array de categorías.
 */
async function getAllCategories(player_id=null) {
    const categories = await categoryModel.findAll({
        where: {
            player_id
        }
    });
    return categories;
}

/**
 * Obtiene una categoría por su ID.
 * 
 * @param {number} id - El ID de la categoría que se desea obtener.
 * 
 * @returns {Promise<categoryModel|null>} - Una promesa que se resuelve con la categoría encontrada, o null si no se encuentra.
 */
async function getCategoryById(id) {
    const category = await categoryModel.findByPk(id);
    return category;
}


/**
 * Crea una nueva categoría en la base de datos con los datos proporcionados.
 * 
 * @param {string} category_name - El nombre de la categoría a crear.
 * @param {string} category_description - La descripción de la categoría.
 * @param {number} categoryId - El ID de la categoría. 
 * @param {number|null} player_id - El ID del jugador asociado a la categoría, si corresponde.
 * 
 * @returns {Promise<categoryModel>} - Una promesa que se resuelve con la categoría creada.
 */
async function createCategory(category_name, category_description, categoryId, player_id) {
    const newCategory = await categoryModel.create({
        category_name, 
        category_description,
        category_id: categoryId,
        player_id

    });
    return newCategory;
}


/**
 * Actualiza una categoría por su ID.
 * 
 * @param {number} categoryId - El ID de la categoría que se desea actualizar.
 * @param {string} [category_name] - El nuevo nombre de la categoría. Si no se proporciona, se mantiene el nombre actual.
 * @param {string} [category_description] - La nueva descripción de la categoría. Si no se proporciona, se mantiene la descripción actual.
 * 
 * @returns {Promise<categoryModel>} - Una promesa que se resuelve con la categoría actualizada.
 */
async function updateCategory(categoryId, category_name , category_description) {
    const updateCategoryById = await categoryModel.findByPk(categoryId);
    updateCategoryById.category_name = category_name || updateCategoryById.category_name;
    updateCategoryById.category_description = category_description || updateCategoryById.category_description;
    await updateCategoryById.save();
    return updateCategoryById;
}

/**
 * Elimina una categoría por su ID.
 * 
 * @param {number} category_id - El ID de la categoría que se desea eliminar.
 * 
 * @returns {Promise<{message: string}>} - Una promesa que se resuelve con un objeto que contiene un mensaje de confirmación de eliminación.
 */
async function removeCategory(category_id) {
    const removeCategory = await categoryModel.findByPk(category_id);
    await removeCategory.destroy();
    return { message: 'Categoría eliminada correctamente' };
}

async function getLastCategory() {
    return await categoryModel.findOne({
        order: [['category_id', 'DESC']]
    });
}

export const functions = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    removeCategory,
    getLastCategory
}

export default functions;