require('dotenv');
const jwt = require('jsonwebtoken');
const postService = require('../services/post.service');

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
    const decoded = jwt.verify(token, secret);
    req.user = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const authenticateToken = async (req, res, next) => {
    const { id } = req.params;
    const { user } = req;

    const post = await postService.getPostId(id);
    const { userId } = post.dataValues;

    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (userId !== user) return res.status(401).json({ message: 'Unauthorized user' });

    next();
};

module.exports = {
  jwtSign,
  jwtValidate,
  authenticateToken,
};
