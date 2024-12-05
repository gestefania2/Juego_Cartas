import playerController from "../player/playerController.js";

async function getAllPlayers(req, res) {
    try{
        const players = await playerController.getAllPlayers();
        res.json(players);
    } catch (error) {
        console.error(error);
        res.estatus(500).json({ error: 'Error al obtener los jugadores' });
    }
}

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