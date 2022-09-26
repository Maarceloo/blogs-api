const { BlogPost, PostCategory } = require('../models');

const addNewBlogPostDB = async (body) => {
  const { categoryIds } = body;

  const obj = {
    ...body,
    published: new Date(),
    updated: new Date(),
  };

  const newCategory = await BlogPost.create(obj);
  const { id } = newCategory.dataValues;

  await Promise.all(categoryIds.map((number) => 
    PostCategory.create({ postId: id, categoryId: number })));
  return newCategory;
};

module.exports = {
  addNewBlogPostDB,
};
