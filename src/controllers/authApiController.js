import authMiddleware from "../middlewares/api/authMiddleware.js";
import jwt from "../config/jwt.js";
async function register (req, res){
 try {
    const { player_name, email, password } = req.body;
    const result =
    
}