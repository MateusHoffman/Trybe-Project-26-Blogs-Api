const { userService } = require('../services');

const postUser = async (req, res) => {
  const { status, response } = await userService.postUser(req.body);
  res.status(status).json(response);
};

module.exports = {
  postUser,
};