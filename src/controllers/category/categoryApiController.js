import categoryController from "./categoryController.js";


/**
 * Obtiene todas las categorías de la base de datos y las devuelve en una respuesta JSON.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta devuelve los datos de las categorías en formato JSON.
 * 
 * @returns {Promise<void>} - Una promse que se resuelve cuando se obtienen y se envian las categorías.
 */
async function getAllCategories(req, res) {
    const player_id = req.player_id;
    const categories = await categoryController.getAllCategories(player_id);
    res.json(categories);
}

/**
 * Obtiene una categoría por su ID y la devuelve en una respuesta JSON.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID de la categoría.
 * @param {Object} res - El objeto de respuesta devuelve la categoría en formato JSON.
 * 
 * @returns {Promise<void>} - Una promesa que se resuelve cuando se obtiene y se envia la categoría.
 */
async function getCategoryById(req, res) {
    const id = parseInt(req.params.id);
    const category = await categoryController.getCategoryById(id);
    res.json(category);
}

async function createCategory(req, res) {
    const { category_name, category_description, categoryId } = req.body;
    const player_id = req.player_id;
    const newCategory = await categoryController.createCategory(category_name, category_description, categoryId, player_id);
    res.json({category:newCategory});
}


async function updateCategory(req, res) {
    const { category_name, category_description } = req.body;
    const id = parseInt(req.params.id);
    const updateCategoryById = await categoryController.updateCategory(id, category_name, category_description);
    res.json({category:updateCategoryById});
}

async function removeCategory(req, res) {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "Id de categoria inválido" });
        }
        
        const removeCategory = await categoryController.removeCategory(id);
        if (!removeCategory) {
            return res.status(404).json({ error: "No se encontró la categoría" });
        }

        res.json({ category: removeCategory });
    } catch (error) {
        console.error("Ha ocurrido un error:", error); 
        res.status(500).json({ error: "Ha ocurrido un error al eliminar la categoría" });
    }
}
export const functions = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,  
    removeCategory
}

export default functions;