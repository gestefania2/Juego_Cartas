import cardController from "../../controllers/card/cardController.js";
async function getAllCards(req, res) {
    const player_id = req.player_id;
    const cards = await cardController.getAllCards(player_id);
    res.json(cards);
}

async function getCardById(req, res) {
    const id = parseInt(req.params.id);
    const card = await cardController.getCardById(id);
    res.json(card);

}

// Obtener todas las cartas de una categoría específica
async function getAllCardsByCategory(req, res) {
    const categoryId = req.params.categoryId; // Obtén el categoryId de los parámetros de la URL

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

// Obtener todas las cartas de tipo 'question' para una categoría específica
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

        return res.json(cards);  // Devuelve las cartas de tipo "question" en formato JSON
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener las cartas de tipo "question"' });
    }
}



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

async function createCard(req, res) {
    const { text, type, category_id } = req.body;
    const player_id = req.player_id;
    const newCard = await cardController.createCard(text, type, category_id, player_id);
    res.json({card:newCard});
}



async function updateCardById(req, res) {
    const {text, type, category_id} = req.body;
    const id = parseInt(req.params.id);
    const updateCardById = await cardController.updateCardById(id, text, type, category_id);
    res.json({card:updateCardById});
}

async function removeCard(req, res) {
    const id = parseInt(req.params.id);
    const removeCard = await cardController.removeCard(id);
    res.json({card:removeCard});
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