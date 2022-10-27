const { userService } = require('../services');

const postUser = async (req, res) => {
  const { status, response } = await userService.postUser(req.body);
  res.status(status).json(response);
};

const getAllUser = async (req, res) => {
  const { status, response } = await userService.getAllUser(req.body);
  res.status(status).json(response);
};

const getOneUser = async (req, res) => {
  const { status, response } = await userService.getOneUser(req.params.id);
  res.status(status).json(response);
};

const deleteOneUser = async (req, res) => {
  const { status } = await userService.deleteOneUser(req.headers.authorization);
  res.status(status).send();
};

module.exports = {
  postUser,
  getAllUser,
  getOneUser,
  deleteOneUser,
};