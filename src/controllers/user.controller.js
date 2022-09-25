const { registerUser } = require('../services/user.service');
const jwtSign = require('../middlewares/JwtSign');

const userController = async (req, res) => {
  const userId = await registerUser(req.body);

  if (!userId) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  const token = jwtSign(userId);

  return res.status(201).json({ token });
};

module.exports = {
  userController,
};
