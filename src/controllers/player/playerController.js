import playerModel from "../../models/playerModel.js";
import errors from "../../helpers/playerError.js";
import { hashPassword } from "../../config/bcrypt.js";

async function getAllPlayers() {
    const players = await playerModel.findAll();
    return players;
}

async function getPlayerById(id) {
    const player = await playerModel.findByPk(id);
    return player;
}


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