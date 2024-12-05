import cardModel from "../../models/cardModel.js";
import categoryModel from "../../models/categoryModel.js";
import { Sequelize } from "sequelize";

async function getAllCards(player_id=null) {
    const cards = await cardModel.findAll({
        where: {
            player_id
        }
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
            category_id: categoryId,
            player_id: null
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

async function getRandomQuestionCardByCategory(categoryId, player_id=null) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'question',
            player_id 

        },
        include: [{
            model: categoryModel,  // Asegúrate de tener el modelo Category definido
            required: true  // Asegura que las cartas devueltas siempre tienen una categoría asociada
        }],
        order: [
            [Sequelize.fn('RAND')]  // Orden aleatorio usando RAND()
        ],
        limit: 1  // Limitar a solo 1 carta
    });

    return cards[0];
}


async function getRandomAnswerCardsByCategory(categoryId, total_cards=5, player_id=null) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'answer',
            player_id 
        },
        include: [{
            model: categoryModel,  // Asegúrate de tener el modelo Category definido
            required: true  // Asegura que las cartas devueltas siempre tienen una categoría asociada
        }],
        order: [
            [Sequelize.fn('RAND')]  // Orden aleatorio usando RAND()
        ],
        limit: total_cards  // Limitar a solo 5 cartas
    });

    return cards;
}

async function getQuestionAndAnswersCardsByCategory(categoryId,total_players,player_id=null) {
    const total_cards = parseInt(total_players) + 4;
    const question = await getRandomQuestionCardByCategory(categoryId);
    const answers = await getRandomAnswerCardsByCategory(categoryId, total_cards, player_id);
    return { question, answers };
}
async function createCard(text, type, categoryId, player_id) {
    const newCard = await cardModel.create({
        text,
        type,
        category_id: categoryId,
        player_id

    });
    return newCard;
}



async function updateCardById(cardId, text, type, categoryId) {
    const updateCardById = await cardModel.findByPk(cardId);
    updateCardById.text = text || updateCardById.text;
    updateCardById.type = type || updateCardById.type;
    updateCardById.category_id = categoryId || updateCardById.category_id;
    await updateCardById.save();
    return updateCardById;
}

async function removeCard(card_id) {
    const removeCard = await cardModel.findByPk(card_id);
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
    getQuestionAndAnswersCardsByCategory,
    createCard,
    updateCardById,
    removeCard
    
}

export default functions;