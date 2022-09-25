const { getlogin } = require('../services/user.service');
const jwtSign = require('../middlewares/JwtSign');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await getlogin({ email, password });

  if (!user) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  const token = jwtSign(user);

  return res.status(200).json({ token });
};

module.exports = {
  loginController,
};
