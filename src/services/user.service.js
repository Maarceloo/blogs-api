const { User } = require('../models');

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

module.exports = {
    getlogin,
};
