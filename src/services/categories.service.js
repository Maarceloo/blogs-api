const { Category } = require('../models');

const addNewCategoryDB = async (name) => {
  const newCategory = await Category.create(name);

  return newCategory.dataValues;
};

const getAllCategoriesDB = async () => Category.findAll();

module.exports = {
  addNewCategoryDB,
  getAllCategoriesDB,
};
