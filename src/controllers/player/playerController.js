import playerModel from "../../models/playerModel.js";
import errors from "../../helpers/playerError.js";
import { hashPassword } from "../../config/bcrypt.js";

/**
 * Obtiene todos los jugadores de la base de datos y los devuelve en una respuesta.
 * 
 * @returns {Promise<Player[]>} - Una promesa que resuelve con un array de jugadores.
 */
async function getAllPlayers() {
    const players = await playerModel.findAll();
    return players;
}

/**
 * Obtiene un jugador por su ID y lo devuelve en una promesa.
 * 
 * @param {number} id - El ID del jugador a obtener.
 * 
 * @returns {Promise<Player | null>} - Un objeto Promise que resuelve con el jugador encontrado o null si no se encuentra.
 */
async function getPlayerById(id) {
    const player = await playerModel.findByPk(id);
    return player;
}


/**
 * Crea un nuevo jugador en la base de datos.
 * 
 * @param {string} player_name - El nombre del jugador.
 * @param {string} email - El correo electrónico del jugador.
 * @param {string} password - La contraseña del jugador.
 * 
 * @throws {errors.PLAYER_ALREADY_EXISTS} - Si ya existe un jugador con el mismo correo electrónico.
 * 
 * @returns {Promise<Player>} - Un objeto Promise que resuelve con el jugador creado.
 */
async function createPlayer(player_name,email,password){
    const oldPlayer = await getPlayerByEmail(email);
    if(oldPlayer){
        throw new errors.PLAYER_ALREADY_EXISTS();
    }
    const hash = await hashPassword(password);
    const newPlayer = await playerModel.create({
      player_name,
      email,
      password:hash,

    });
   return newPlayer;
}


/**
 * Obtiene un jugador por su email y lo devuelve en una promesa.
 * 
 * @param {string} email - El correo electrónico del jugador a obtener.
 * 
 * @returns {Promise<Player | null>} - Un objeto Promise que resuelve con el jugador encontrado o null si no se encuentra.
 */
async function getPlayerByEmail(email) {
    const player = await playerModel.findOne({
        where: {
            email: email
        }
    });
    return player;
}


export const functions = {
    getAllPlayers,
    getPlayerById,
    getPlayerByEmail,
    createPlayer
}
export default functions;