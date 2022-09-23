const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { getlogin } = require('../services/user.service');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await getlogin({ email, password });

  if (!user) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  const token = jwt.sign({ email }, JWT_SECRET, {});

  return res.status(200).json({ token });
};

module.exports = {
  loginController,
};
