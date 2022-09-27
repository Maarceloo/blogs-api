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
  return res.status(200).json(users);
};

const userIDGetController = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getByuserId(id);
  
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  
  delete user.dataValues.password;

  return res.status(200).json(user);
};

module.exports = {
  userRegisterController,
  userGetAllController,
  userIDGetController,
};
