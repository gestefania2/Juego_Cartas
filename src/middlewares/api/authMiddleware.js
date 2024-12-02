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