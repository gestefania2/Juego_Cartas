import cardController from "./cardController.js";
async function getAllCards(req, res) {
    const cards = await cardController.getAllCards();
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


async function createCard(req, res) {
    const { text, type, category_id } = req.body;
    const newCard = await cardController.createCard(text, type, category_id);
    res.json({card:newCard});
}

async function updateCard(req, res) {
    const {text, type, category_id} = req.body;
    const id = parseInt(req.params.id);
    const updateCard = await cardController.updateCard(id, text, type, category_id);
    res.json({card:updateCard});
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
    createCard,
    updateCard,
    removeCard
}

export default functions;