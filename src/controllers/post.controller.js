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

const putPost = async (req, res) => {
  const { status, response } = await postService.putPost(
    req.body, req.params.id, req.headers.authorization,
  );
  res.status(status).json(response);
};

const deletePost = async (req, res) => {
  const { status, response } = await postService.deletePost(
    req.params.id, req.headers.authorization,
  );
  res.status(status).json(response);
};

const getQueryPost = async (req, res) => {
  const { status, response } = await postService.getQueryPost(req.query);
  res.status(status).json(response);
};

module.exports = {
  postPost,
  getAllPost,
  getOnePost,
  putPost,
  deletePost,
  getQueryPost,
};