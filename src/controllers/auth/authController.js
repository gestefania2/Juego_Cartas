import playerController from "../player/playerController.js";
import { verifyPassword } from "../../config/bcrypt.js";
import errors from "../../helpers/playerError.js";

async function register(player_name,email,password, password_confirmation) {
    if (password !== password_confirmation) {
      throw new errors.INCORRECT_PASSWORD();
    }
    const oldPlayer = await playerController.getPlayerByEmail(email);
    if (oldPlayer) {
      throw new errors.PLAYER_ALREADY_EXISTS();
    }
    const newPlayer = await playerController.createPlayer(player_name,email,password);
    return newPlayer;
}

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