const postService = require('../services/post.service');

const newPostController = async (req, res) => {
    const userId = req.user;
    const { title, content, categoryIds } = req.body;

    const newPost = await postService.addNewBlogPostDB({ title, content, userId, categoryIds });
    
    return res.status(201).json(newPost);
};

const getBlogUserCategory = async (_req, res) => {
    const post = await postService.getPost();

    return res.status(200).json(post);
};

const getBlogPostId = async (req, res) => {
    const { id } = req.params;
    const post = await postService.getPostId(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
};

module.exports = {
    newPostController,
    getBlogUserCategory,
    getBlogPostId,
};
