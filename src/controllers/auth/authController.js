import playerController from "../player/playerController.js";
import { verifyPassword } from "../../config/bcrypt.js";
//import errors from "../../helpers/errors.js";

async function register(player_name,email,password, password_confirmation) {

    if (password !== password_confirmation) {
      throw new Error("Passwords do not match");
    }
    const player = await playerController.createPlayer(player_name,email,password);
    return player;
}

async function login (email,password) {
    const player = await playerController.getPlayerByEmail(email);
    if (!player) {
      throw new Error("Invalid email or password");
    }
    const verified = await verifyPassword(password, player.password);
    if (!verified) {
      throw new Error("Invalid email or password");
    }
    return player;
}
export default {
    register,
    login
}