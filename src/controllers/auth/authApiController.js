import authController from "./authController.js";
import jwt from "../../config/jwt.js";

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