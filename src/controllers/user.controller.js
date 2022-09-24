const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { registerUser } = require('../services/user.service');

const userController = async (req, res) => {
  const user = await registerUser(req.body);

  if (!user) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  const token = jwt.sign({ user }, JWT_SECRET, {});

  return res.status(201).json({ token });
};

module.exports = {
  userController,
};
