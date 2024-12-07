import playerController from "../player/playerController.js";
import { verifyPassword } from "../../config/bcrypt.js";
import errors from "../../helpers/playerError.js";


/**
 * Registra un nuevo jugador en la base de datos.
 * 
 * @param {string} player_name - Nombre del jugador
 * @param {string} email - Email del jugador.
 * @param {string} password - Contraseña del jugador.
 * @param {string} password_confirmation - Confirmación de la contraseña del jugador.
 * @throws {errors.INCORRECT_PASSWORD} - Si la contraseña y la contraseña de confirmación no coinciden, muestra el error.
 * @throws {errors.PLAYER_ALREADY_EXISTS} - Si ya existe un jugador con el mismo correo electrónico, muestra el error.
 * @returns {Promise<Object>} - Devuelve el jugador registrado.
 */
async function register(player_name, email, password, password_confirmation) {
    
    if (password !== password_confirmation) {
        throw new errors.INCORRECT_PASSWORD();
    }
    
    const oldPlayer = await playerController.getPlayerByEmail(email);
    if (oldPlayer) {
        throw new errors.PLAYER_ALREADY_EXISTS();
    }
    
    const newPlayer = await playerController.createPlayer(player_name, email, password);
    return newPlayer;
}

/**
 * Realiza el login de un jugador en el sistema.
 * 
 * @param {string} email - Email del jugador.
 * @param {string} password - Contraseña del jugador.
 * @throws {errors.PLAYER_NOT_FOUND} - Si no existe un jugador con el email dado, muestra el error.
 * @throws {errors.INVALID_CREDENTIALS} - Si la contraseña no coincide con la del jugador, muestra el error.
 * @returns {Promise<Object>} - Devuelve el jugador logueado.
 */
async function login (email,password) {
    const player = await playerController.getPlayerByEmail(email);
    if (!player) {
      throw new errors.PLAYER_NOT_FOUND();
    }
    const verified = await verifyPassword(password, player.password);
    if (!verified) {
      throw new errors.INVALID_CREDENTIALS();
    }
    return player;
}
export default {
    register,
    login
}