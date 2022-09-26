const categorieService = require('../services/categories.service');

const postCategoriesController = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const newCategory = await categorieService.addNewCategoryDB({ name });

  return res.status(201).json(newCategory);
};

const getAllCategoriesController = async (req, res) => {
    const allCategories = await categorieService.getAllCategoriesDB();
    return res.status(200).json(allCategories);
};

module.exports = {
  postCategoriesController,
  getAllCategoriesController,
};
