import jwt from "../../config/jwt.js";

/**
 * Middleware para asignar el ID del jugador a la solicitud si el token de autorización es válido.
 *
 * Si no se proporciona un token o el token es inválido, la solicitud continúa sin un ID de jugador asignado.
 * 
 * @param {Object} req - El objeto de solicitud de Express, que puede contener un token de autorización en los encabezados.
 * @param {Object} res - El objeto de respuesta de Express.
 * @param {Function} next - La función de devolución de llamada para pasar el control al siguiente middleware.
 */
async function playerIdMiddleware(req,res,next){
  const authorization = req.headers.authorization;
  req.player_id = null;
  if(!authorization){
      return next ();
  }
  const token = authorization.replace("Bearer ","");
  const verified = jwt.verify(token);
  if(verified.error){
      return next();
  }
  req.player_id = verified.player_id;
  next();
}

export default playerIdMiddleware;