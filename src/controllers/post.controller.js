const { postService } = require('../services');

const postPost = async (req, res) => {
  const { status, response } = await postService.postPost(req.body, req.headers);
  res.status(status).json(response);
};

const getAllPost = async (req, res) => {
  const { status, response } = await postService.getAllPost();
  res.status(status).json(response);
};

// const getOneUser = async (req, res) => {
//   const { status, response } = await userService.getOneUser(req.params.id);
//   res.status(status).json(response);
// };

module.exports = {
  postPost,
  getAllPost,
  // getOneUser,
};