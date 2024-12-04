import jwt from "../../config/jwt.js";
//import Player from "../../models/player.js";

async function isAuthenticated(req,res,next){
  const authorization = req.headers.authorization;
  if(!authorization){
      return res.status(401).json({error:"jwt token needed"});
  }
  const token = authorization.replace("Bearer ","");
  const verified = jwt.verify(token);
  if(verified.error){
      return res.status(401).json({error:"jwt token not correct"});
  }
  next();
}


/* modificar const jwt = require('jsonwebtoken');
const Player = require('../models/player');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const player = await Player.findByPk(decoded.id);

    if (!player) {
      throw new Error();
    }

    req.token = token;
    req.player = player;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = authMiddleware; */

// Middleware de autenticación
async function isAuthenticated(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token no proporcionado o formato incorrecto" });
  }

  const token = authorization.replace("Bearer ", "").trim(); // Elimina espacios en blanco si los hay
  const { decoded, error, status } = verify(token);

  if (error) {
      return res.status(status).json({ error });
  }

  req.user = decoded; // Asigna el usuario decodificado al objeto req para que otros middleware/controladores puedan usarlo
  next(); // Llama al siguiente middleware o controlador
}

// Exportar funciones
export default {
  sign,
  verify,
  isAuthenticated
};