import jwt from "../../config/jwt.js";

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