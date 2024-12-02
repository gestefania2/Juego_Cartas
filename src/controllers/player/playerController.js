import playerModel from "../../models/playerModel.js";
import {hasPassword} from "../../config/bcrypt.js";
//import errors from "../../helpers/errors.js";

async function getAllPlayers() {
    const players = await playerModel.findAll();
    return players;
}

async function getPlayerById(id) {
    const player = await playerModel.findByPk(id);
    return player;
}



export const functions = {
    getAllPlayers,
    getPlayerById,
}
export default functions;