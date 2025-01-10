import cardController from "../../controllers/card/cardController.js";
import categoryController from "../../controllers/category/categoryController.js";

/**
 * Obtiene todas las cartas.
 * Si el jugador no está autentificado, devuelve todas las cartas sin el campo "player_id".
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - La respuesta de la solicitud.
 */

async function getAllCards(req, res) {
    const player_id = req.player_id;
    const cards = await cardController.getAllCards(player_id);
    res.json(cards);
}

/**
 * Obtiene una carta por su ID.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID de la carta.
 * @param {Object} res - El objeto de respuesta utilizado para enviar la carta en formato JSON.
 */
async function getCardById(req, res) {
    const id = parseInt(req.params.id);
    const card = await cardController.getCardById(id);
    console.log("card", card);
    res.json(card);

}

/** 
 * Obtiene todas las cartas de una categoría dada.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID de la categoría en los parámetros de la URL.
 * @param {Object} res - La respuesta de la solicitud devuelve las cartas de la categoría en formato JSON.
 * 
 * @returns {Promise<Response>} - Una respuesta JSON que contiene las cartas de la categoría,
 * o un mensaje de error en caso de que no se encuentren cartas en la categoría.
 * 
 * @throws {Error} - Returns a 404 error if no cards are found in the category, or a 500 error
 * if there is an issue retrieving the cards.
 */
async function getAllCardsByCategory(req, res) {
    const categoryId = req.params.categoryId; 

    try {
        const cards = await cardController.findAll({
            where: { category_id: categoryId }
        });

        if (cards.length === 0) {
            return res.status(404).json({ message: 'No se encontraron cartas en esta categoría' });
        }

        return res.json(cards);  // Devuelve las cartas como respuesta JSON
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener las cartas de la categoría' });
    }
}
/**
 * Obtiene todas las cartas de tipo "question" de una categoría dada.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID de la categoría en los parámetros de la URL.
 * @param {Object} res - La respuesta de la solicitud devuelve las cartas de tipo "question" en formato JSON.
 * 
 * @returns {Promise<Response>} - Una respuesta JSON que contiene las cartas de tipo "question" de la categoría,
 * o un mensaje de error en caso de que no se encuentren cartas de tipo "question" en la categoría.
 * 
 * @throws {Error} - Si no se encuentran las cartas de tipo "question" en la categoría devuelve un error 404, o un error 500 si hay un problema al obtener las cartas.
 */
async function getQuestionCardByCategory(req, res) {
    const categoryId = req.params.categoryId;

    try {
        const cards = await cardController.findAll({
            where: {
                category_id: categoryId,
                type: 'question'
            }
        });

        if (cards.length === 0) {
            return res.status(404).json({ message: 'No se encontraron cartas de tipo "question" en esta categoría' });
        }

        return res.json(cards);  
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener las cartas de tipo "question"' });
    }
}


/**
 * Obtiene una carta de tipo "question" y varias cartas de tipo "answer" para una categoría dada.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID de la categoría, el número total de jugadores y el ID del jugador autenticado.
 * @param {Object} res - El objeto de respuesta utilizado para enviar la carta "question" y las cartas "answers" en formato JSON.
 * 
 * @returns {Promise<Response>} - Una respuesta JSON que contiene una carta de tipo "question" y varias cartas de tipo "answer",
 * o un mensaje de error en caso de que ocurra un problema al obtener las cartas.
 * 
 * @throws {Error} - Devuelve un error 500 si hay un problema al obtener las cartas.
 */
async function getQuestionAndAnswersCardsByCategory(req, res) {
    const categoryId = req.params.categoryId;
    const total_players = req.params.total_players;
    const player_id = req.player_id;
    console.log ("player id", player_id);
    try {
        const { question, answers } = await cardController.getQuestionAndAnswersCardsByCategory(categoryId, total_players, player_id);
        return res.json({ question, answers });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener las cartas de la categoría' });
    }
}

/**
 * Crea una nueva carta en la base de datos.
 * 
 * @param {Object} req - El objeto de solicitud que contiene los datos de la nueva carta en el cuerpo de la solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar la carta creada en formato JSON.
 * 
 * @returns {Promise<Response>} - Una respuesta JSON que contiene la carta creada.
 */
async function createCard(req, res) {
    const { text, type, category_name } = req.body;
    const player_id = req.player_id;

    try {
        // Obtener el último ID de categoría y crear uno nuevo
        const lastCategory = await categoryController.getLastCategory();
        const newCategoryId = (lastCategory ? lastCategory.category_id + 1 : 6);

        // Crear la nueva categoría (usando tu estructura)
        const category_description = "Nueva categoría"; // Puedes ajustar esto según necesites
        const newCategory = await categoryController.createCategory(
            category_name,
            category_description,
            newCategoryId,
            player_id
        );

        // Crear la carta
        const newCard = await cardController.createCard(
            text,
            type,
            newCategoryId,
            player_id
        );

        res.json({
            card: newCard,
            category: newCategory
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error al crear la carta y categoría" });
    }
}
/**
 * Actualiza una carta por su ID.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID de la carta en los parámetros
 * y los datos de la carta a actualizar en el cuerpo de la solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar la carta actualizada en formato JSON.
 * 
 * @returns {Promise<Response>} - Una respuesta JSON que contiene la carta actualizada.
 */
async function updateCardById(req, res) {
    const {text, type, category_id} = req.body;
    const id = parseInt(req.params.id);
    const updateCardById = await cardController.updateCardById(id, text, type, category_id);
    res.json({card:updateCardById});
}

/**
 * Elimina una carta por su ID.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID de la carta en los parámetros.
 * @param {Object} res - El objeto de respuesta utilizado para enviar la carta eliminada en formato JSON.
 * 
 * @returns {Promise<Response>} - Una respuesta JSON que contiene la carta eliminada.
 * 
 * @throws {Error} - Si el ID de la carta es inválido devuelve un error 400, si no se encuentra la carta devuelve un error 404, o un error 500 si hay un problema al eliminar la carta.
 */
async function removeCard(req, res) {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "Id de carta inválido" });
        }
        
        const removeCard = await cardController.removeCard(id);
        if (!removeCard) {
            return res.status(404).json({ error: "No se encontró la carta" });
        }

        res.json({ card: removeCard });
    } catch (error) {
        console.error("Ha ocurrido un error:", error); 
        res.status(500).json({ error: "Ha ocurrido un error al eliminar la carta" });
    }
}
export const functions = {
    getAllCards,
    getCardById,
    getAllCardsByCategory,
    getQuestionCardByCategory,
    getQuestionAndAnswersCardsByCategory,
    createCard,
    updateCardById,
    removeCard
}

export default functions;