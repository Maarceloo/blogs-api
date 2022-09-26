const userService = require('../services/user.service');
const jwt = require('../middlewares/Jwt');

const userRegisterController = async (req, res) => {
  const userId = await userService.registerUser(req.body);

  if (!userId) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  const token = jwt.jwtSign(userId);

  return res.status(201).json({ token });
};

const userGetAllController = async (_req, res) => {
  const users = await userService.getAllUsers();
  const usersNotPassword = users.map((user) => ({
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  }));
  return res.status(200).json(usersNotPassword);
};

module.exports = {
  userRegisterController,
  userGetAllController,
};
