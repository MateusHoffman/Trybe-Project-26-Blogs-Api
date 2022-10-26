const { postService } = require('../services');

const postPost = async (req, res) => {
  const { status, response } = await postService.postPost(req.body, req.headers);
  res.status(status).json(response);
};

const getAllPost = async (req, res) => {
  const { status, response } = await postService.getAllPost();
  res.status(status).json(response);
};

const getOnePost = async (req, res) => {
  const { status, response } = await postService.getOnePost(req.params.id);
  res.status(status).json(response);
};

module.exports = {
  postPost,
  getAllPost,
  getOnePost,
};