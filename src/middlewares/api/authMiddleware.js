import jwt from "../../config/jwt.js";

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