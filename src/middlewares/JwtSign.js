const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'senha';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

module.exports = (userId) => jwt.sign({ userId }, secret, jwtConfig);