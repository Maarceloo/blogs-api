require('dotenv');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'senha';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSign = (userId) => jwt.sign({ userId }, secret, jwtConfig);

const jwtValidate = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  jwtSign,
  jwtValidate,
};
