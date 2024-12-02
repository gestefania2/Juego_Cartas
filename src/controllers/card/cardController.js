import Card from "../../models/cardModel.js";

async function getAllCards() {
    const cards = await cardModel.findAll({
    });
    return cards;
}

async function getCardById(id) {
    const card = await cardModel.findByPk(id);
    return card;
}
async function getAllCardsByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId
        }
    });
    return cards;
}

async function getQuestionCardByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'question'
        }
    });
    return cards;
}

async function getAnswerCardByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'answer'
        }
    });
    return cards;
}

async function getRandomQuestionCardByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            categoryId: categoryId,
            type: 'question'
        },
        include: [{
            model: category,  // Asegúrate de tener el modelo Category definido
            required: true  // Asegura que las cartas devueltas siempre tienen una categoría asociada
        }],
        order: [
            [Sequelize.fn('RAND')]  // Orden aleatorio usando RAND()
        ],
        limit: 1  // Limitar a solo 5 cartas
    });

    return cards;
}


async function getRandomAnswerCardsByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            categoryId: categoryId,
            type: 'answer'
        },
        include: [{
            model: category,  // Asegúrate de tener el modelo Category definido
            required: true  // Asegura que las cartas devueltas siempre tienen una categoría asociada
        }],
        order: [
            [Sequelize.fn('RAND')]  // Orden aleatorio usando RAND()
        ],
        limit: 5  // Limitar a solo 5 cartas
    });

    return cards;
}

async function createCard(text, type, categoryId) {
    const newCard = await cardModel.create({
        text,
        type,
        category_id: categoryId
    });
    return newCard;
}

async function updateCard(categoryId, text, type, categoryId) {
    const updateCard = await Card.findByPk(id);
    updateCard.text = text || updateCard.text;
    updateCard.type = type || updateCard.type;
    updateCard.category_id = categoryId || updateCard.category_id;
    await updateCard.save();
    return updateCard;
}

async function removeCard(id) {
    const removeCard = await Card.findByPk(id);
    await removeCard.destroy();
    return { message: 'Carta eliminada correctamente' };
}



export const functions = {
    getAllCards,
    getCardById,
    getAllCardsByCategory,
    getQuestionCardByCategory,
    getAnswerCardByCategory,
    getRandomAnswerCardsByCategory,
    getRandomQuestionCardByCategory,
    createCard,
    updateCard,
    removeCard
    
}

export default functions;