const { getlogin } = require('../services/user.service');
const jwt = require('../middlewares/Jwt');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const userId = await getlogin({ email, password });

  if (!userId) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  const token = jwt.jwtSign(userId);

  return res.status(200).json({ token });
};

module.exports = {
  loginController,
};
