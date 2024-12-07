import jwt from "../../config/jwt.js";


/**
 * Verifica si el token de autenticación proporcionado es válido.
 * Si el token es válido, asigna el ID del jugador a la solicitud y llama a next().
 * Si el token no existe o es inválido, devuelve un error de autenticación
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @param {Function} next - La función que se llamará si el token es válido.
 */
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
  req.player_id = verified.player_id;
  next();
}

export default isAuthenticated;