const { userService } = require('../services');

const postUser = async (req, res) => {
  const { status, response } = await userService.postUser(req.body);
  res.status(status).json(response);
};

const getAllUser = async (req, res) => {
  const { status, response } = await userService.getAllUser(req.body);
  res.status(status).json(response);
};

module.exports = {
  postUser,
  getAllUser,
};