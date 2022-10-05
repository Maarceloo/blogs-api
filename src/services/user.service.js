const { User } = require('../models');
// const PostService = require('./post.service');

const getlogin = async ({ email, password }) => {
  const [user] = await User.findAll({ where: { email } });
  if (!user) {
    return false;
  }

  if (user.password !== password) {
    return false;
  }

  return user.id;
};

const registerUser = async (body) => {
  const { email } = body;

  const [user] = await User.findAll({ where: { email } });
  if (user) {
    return false;
  }

  const newUserDB = await User.create(body);

  return newUserDB.dataValues.id;
};

const getByuserId = async (userId) => User.findByPk(userId);

const getAllUsers = async () => User.findAll({
  attributes: { exclude: ['password'] },
});

const deleteUser = async (_id) => {
  // await PostService.deletePost(id);
  // await User.destroy({ where: { id } });
};

module.exports = {
    getlogin,
    registerUser,
    getByuserId,
    getAllUsers,
    deleteUser,
};
