const { Category } = require('../models');

const addNewCategoryDB = async (name) => {
  const newCategory = await Category.create(name);

  return newCategory.dataValues;
};

module.exports = {
  addNewCategoryDB,
};
