const postService = require('../services/post.service');

const newPostController = async (req, res) => {
    const userId = req.user;
    const { title, content, categoryIds } = req.body;

    const newPost = await postService.addNewBlogPostDB({ title, content, userId, categoryIds });
    
    return res.status(201).json(newPost);
};

module.exports = {
    newPostController,
};
