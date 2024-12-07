import playerController from "../player/playerController.js";

/**
 * Obtiene todos los jugadores de la base de datos y los devuelve en una respuesta JSON.
 * 
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta que devuelve los jugadores en formato JSON.
 * 
 * @throws {Error} - Si ocurre un error al obtener los jugadores, se devuelve un error 500.
 * 
 * @returns {Promise<Response>} - La respuesta a la petición, que contiene los jugadores en formato JSON.
 */
async function getAllPlayers(req, res) {
    try{
        const players = await playerController.getAllPlayers();
        res.json(players);
    } catch (error) {
        console.error(error);
        res.estatus(500).json({ error: 'Error al obtener los jugadores' });
    }
}


/**
 * Obtiene un jugador por su ID y lo devuelve en una respuesta JSON.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el ID del jugador en los parámetros.
 * @param {Object} res - El objeto de respuesta utilizado para enviar el jugador en formato JSON.
 * 
 * @throws {Error} - Si ocurre un error al obtener el jugador, se devuelve un error 500.
 * @throws {Error} - Si el jugador no se encuentra, se devuelve un error 404.
 * 
 * @returns {Promise<Response>} - La respuesta a la petición que contiene el jugador en formato JSON.
 */
async function getPlayerById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const player = await playerController.getPlayerById(id);
        if (!user) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }
        res.json(player);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el jugador' });
    }
}

/**
 * Obtiene un jugador por su correo electrónico y lo devuelve en una respuesta JSON.
 * 
 * @param {Object} req - El objeto de solicitud que contiene el email del jugador en el cuerpo.
 * @param {Object} res - El objeto de respuesta utilizado para enviar el jugador en formato JSON.
 * 
 * @throws {Error} - Si el email no es proporcionado, devuelve un error 400.
 * @throws {Error} - Si el jugador no se encuentra, devuelve un error 404.
 * @throws {Error} - Si ocurre un error al obtener el jugador, devuelve un error 500.
 * 
 * @returns {Promise<Response>} - La respuesta a la petición que contiene el jugador en formato JSON.
 */
async function getPlayerByEmail(req, res) 
{
    try {
        const email = req.body.email;
        
        if (!email) {
            return res.status(400).json({ error: 'El email es obligatorio' });
        }

        const player = await playerController.getPlayerByEmail(email);
        
        if (!player) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }
        res.json(player);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el jugador' });
    }
} 

export const functions = { 
    getAllPlayers, 
    getPlayerById,
    getPlayerByEmail
}

export default functions;