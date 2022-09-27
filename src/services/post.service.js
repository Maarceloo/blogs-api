const { BlogPost, PostCategory, User, Category } = require('../models');

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

const getPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        trough: { attributes: [] },
      },
    ],
  });

  return posts;
};

const getPostId = async (id) => {
  const posts = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        trough: { attributes: [] },
      },
    ],
  });

  return posts;
};

const updatePost = async (id, title, content) => {
    await BlogPost.update({ title, content }, { where: { id } });
    const newPost = await getPostId(id);
    return newPost;
};

const deletePost = async (id) => {
  await PostCategory.destroy({ where: { postId: id } });
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  addNewBlogPostDB,
  getPost,
  getPostId,
  updatePost,
  deletePost,
};
