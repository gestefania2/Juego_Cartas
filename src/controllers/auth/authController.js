import playerController from "../player/playerController.js";
import { verifyPassword } from "../../config/bcrypt.js";
//import errors from "../../helpers/errors.js";

async function register(player_name,email,password)