const { categoriesService } = require('../services');

const postCategories = async (req, res) => {
  const { status, response } = await categoriesService.postCategories(req.body);
  res.status(status).json(response);
};

// const getAllUser = async (req, res) => {
//   const { status, response } = await userService.getAllUser(req.body);
//   res.status(status).json(response);
// };

// const getOneUser = async (req, res) => {
//   const { status, response } = await userService.getOneUser(req.params.id);
//   res.status(status).json(response);
// };

module.exports = {
  postCategories,
  // getAllUser,
  // getOneUser,
};