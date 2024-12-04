import playerModel from "../../models/playerModel.js";
//import errors from "../../helpers/errors.js";

async function getAllPlayers() {
    const players = await playerModel.findAll();
    return players;
}

async function getPlayerById(id) {
    const player = await playerModel.findByPk(id);
    return player;
}

async function getPlayerbyemail(email) {
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
    getPlayerbyemail
}
export default functions;