import authController from "./authController.js";
import jwt from "../../config/jwt.js";

/**
 * Registra un nuevo jugador en la base de datos.
 * 
 * @param {Request} req - El objeto Request de Express.
 * @param {Response} res - El objeto Response de Express.
 * 
 * @throws {errors.INCORRECT_PASSWORD} - Si la contraseña y la contraseña de confirmación no coinciden, muestra el error.
 * @throws {errors.PLAYER_ALREADY_EXISTS} - Si ya existe un jugador con el mismo correo electrónico, muestra el error.
 * @throws {Error} - Si ocurre un error interno, muestra error del servidor.
 * 
 * @returns {Promise<Response>} - La respuesta a la petición, que contiene el jugador registrado.
 */
async function register(req, res) {
    try {
        const {player_name, email, password, password_confirmation} = req.body;
        const result = await authController.register(player_name,email,password, password_confirmation);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status (500);
        }
        res.json({ error: error.message });
    }
}

/**
 * Realiza el login de un jugador en la base de datos.
 * 
 * @param {Request} req - El objeto Request de Express.
 * @param {Response} res - El objeto Response de Express.
 * 
 * @throws {errors.PLAYER_NOT_FOUND} - Si no existe un jugador con el email dado, muestra el error.
 * @throws {errors.INVALID_CREDENTIALS} - Si la contraseña no coincide con la del jugador, muestra el error.
 * @throws {Error} - Si ocurre un error interno, muestra error del servidor.
 * 
 * @returns {Promise<Response>} - La respuesta a la petición, que contiene el token de autenticación.
 */
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const player = await authController.login(email, password);
        const token = jwt.sign({ player_id:player.player_id});
        res.json({ token });
    } catch (error) {
        console.error(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }

}

export default {
    register,
    login
}