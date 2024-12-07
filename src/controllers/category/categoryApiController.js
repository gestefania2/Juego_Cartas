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
    const categories = await categoryController.getAllCategories();
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
    const { categoryId, categoryName, categoryDescription, playerId } = req.body;
    const newCategory = await categoryController.createCategory(categoryId, categoryName, categoryDescription, playerId);
    res.json(newCategory);

}

async function updateCategory(req, res) {
    const { categoryName, categoryDescription, playerId } = req.body; // Extrae datos del cuerpo de la solicitud
    const categoryId = parseInt(req.params.id); //Convierte este parámetro a un número entero usando parseInt, ya que los parámetros de las rutas suelen llegar como cadenas de texto.
    const updateCategory = await categoryController.updateCategory(categoryId, categoryName, categoryDescription, playerId); // Llama a un controlador para actualizar la categoría en la base de datos
    res.json({category:updateCategory});
}

async function removeCategory(req, res) {
    const id = parseInt(req.params.id); 
    const removeCategory = await categoryController.removeCategory(id);
    res.json({category:removeCategory});
}

export const functions = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,  
    removeCategory
}

export default functions;