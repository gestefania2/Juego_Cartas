import cardModel from "../../models/cardModel.js";
import categoryModel from "../../models/categoryModel.js";
import { Sequelize } from "sequelize";

/**
 * Obtiene todas las cartas de la base de datos, las de un jugador en particular, o las de una categoría en particular.
 * @param {number} [player_id] - El ID del jugador para obtener sus cartas. Si no se proporciona, se obtienen todas las cartas.
 * @returns {Promise<cardModel[]>} - Una promesa que resuelve con un array de cartas.
 */
async function getAllCards(player_id=null) {
    const cards = await cardModel.findAll({
        where: {
            player_id
        }
    });
    return cards;
}


/**
 * Obtiene una carta por su ID.
 * @param {number} id - El ID de la carta.
 * @returns {Promise<cardModel | null>} - Una promesa que resuelve con la carta encontrada, o null si no se encontró.
 */
async function getCardById(id) {
    const card = await cardModel.findByPk(id);
    return card;
}


/**
 * Obtiene todas las cartas de una categoría en particular.
 * @param {number} categoryId - El ID de la categoría.
 * @returns {Promise<cardModel[]>} - Una promesa que resuelve con un array de cartas de la categoría especificada.
 */
async function getAllCardsByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            player_id: null
        }
    });
    return cards;
}

/**
 * Obtiene todas las cartas de tipo "question" de una categoría en particular.
 * @param {number} categoryId - El ID de la categoría.
 * @returns {Promise<cardModel[]>} - Una promesa que resuelve con un array de cartas de tipo "question" de la categoría especificada.
 */
async function getQuestionCardByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'question'
        }
    });
    return cards;
}

/**
 * Obtiene todas las cartas de tipo "answer" de una categoría dada.
 * 
 * @param {number} categoryId - El ID de la categoría.
 * @returns {Promise<cardModel[]>} - Una promesa que resuelve con un array de cartas de tipo "answer" de la categoría especificada.
 */
async function getAnswerCardByCategory(categoryId) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'answer'
        }
    });
    return cards;
}

/**
 * Obtiene una carta aleatoria de tipo "question" de una categoría dada.
 * 
 * @param {number} categoryId - El ID de la categoría de la que se desea obtener la carta.
 * @param {number|null} [player_id=null] - El ID del jugador para filtrar las cartas. Si no se proporciona, se considerarán todas las cartas.
 * 
 * @returns {Promise<cardModel|null>} - Una promesa que resuelve con una carta de tipo "question" aleatoria de la categoría especificada,
 * o null si no se encuentran cartas.
 */
async function getRandomQuestionCardByCategory(categoryId, player_id=null) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'question',
            player_id 

        },
        include: [{
            model: categoryModel, 
            required: true 
        }],
        order: [
            [Sequelize.fn('RAND')]  // Orden aleatorio usando RAND()
        ],
        limit: 1  // Limitar a solo 1 carta
    });

    return cards[0];
}


/**
 * Obtiene un array de cartas de tipo "answer" aleatorias de una categoría dada.
 * 
 * @param {number} categoryId - El ID de la categoría de la que se desea obtener las cartas.
 * @param {number} [total_cards=5] - El número total de cartas que se desean obtener. Por defecto se obtienen 5 cartas.
 * @param {number|null} [player_id=null] - El ID del jugador para filtrar las cartas. Si no se proporciona, se considerarán todas las cartas.
 * 
 * @returns {Promise<cardModel[]>} - Una promesa que resuelve con un array de cartas de tipo "answer" aleatorias de la categoría especificada.
 */
async function getRandomAnswerCardsByCategory(categoryId, total_cards=5, player_id=null) {
    const cards = await cardModel.findAll({
        where: {
            category_id: categoryId,
            type: 'answer',
            player_id 
        },
        include: [{
            model: categoryModel, 
            required: true  
        }],
        order: [
            [Sequelize.fn('RAND')]  // Orden aleatorio usando RAND()
        ],
        limit: total_cards  // Limitar a solo 5 cartas
    });

    return cards;
}

/**
 * Obtiene una carta de tipo "question" y varias cartas de tipo "answer" de una categoría dada.
 * 
 * @param {number} categoryId - El ID de la categoría de la que se desea obtener las cartas.
 * @param {number} total_players - El número total de jugadores, que se utiliza para calcular el total de cartas "answer" que se obtendrán.
 * @param {number|null} [player_id=null] - El ID del jugador para filtrar las cartas. Si no se proporciona, se considerarán todas las cartas.
 * 
 * @returns {Promise<{question: Card, answers: Card[]}>} - Una promesa que resuelve con un objeto que contiene una carta de tipo "question" y un array de cartas de tipo "answer"
 */
async function getQuestionAndAnswersCardsByCategory(categoryId,total_players,player_id=null) {
    const total_cards = parseInt(total_players) + 4;
    const question = await getRandomQuestionCardByCategory(categoryId);
    const answers = await getRandomAnswerCardsByCategory(categoryId, total_cards, player_id);
    return { question, answers };
}

/**
 * Crea una nueva carta en la base de datos.
 * 
 * @param {string} text - El texto de la carta.
 * @param {string} type - El tipo de la carta, ya sea "question" o "answer".
 * @param {number} categoryId - El ID de la categoría a la que se asignará la carta.
 * @param {number|null} [player_id=null] - El ID del jugador al que se asignará la carta. Si no se proporciona, se considerará que la carta no tiene dueño.
 * 
 * @returns {Promise<cardModel>} - Una promesa que resuelve con la carta creada.
 */
async function createCard(text, type, categoryId, player_id) {
    const newCard = await cardModel.create({
        text,
        type,
        category_id: categoryId,
        player_id

    });
    return newCard;
}


/**
 * Actualiza una carta por su ID.
 * 
 * @param {number} cardId - El ID de la carta que se desea actualizar.
 * @param {string} [text] - El nuevo texto de la carta. Si no se proporciona, se mantiene el texto actual.
 * @param {string} [type] - El nuevo tipo de la carta. Si no se proporciona, se mantiene el tipo actual.
 * @param {number} [categoryId] - El nuevo ID de la categoría de la carta. Si no se proporciona, se mantiene el ID actual.
 * 
 * @returns {Promise<Card>} - Una promesa que resuelve con la carta actualizada.
 */
async function updateCardById(cardId, text, type, categoryId) {
    const updateCardById = await cardModel.findByPk(cardId);
    updateCardById.text = text || updateCardById.text;
    updateCardById.type = type || updateCardById.type;
    updateCardById.category_id = categoryId || updateCardById.category_id;
    await updateCardById.save();
    return updateCardById;
}

/**
 * Elimina una carta por su ID.
 * 
 * @param {number} card_id - El ID de la carta que se desea eliminar.
 * 
 * @returns {Promise<{message: string}>} - Una promesa que resuelve con un objeto que contiene un mensaje con el resultado de la eliminación.
 */
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