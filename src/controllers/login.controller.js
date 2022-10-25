const { loginService } = require('../services');

const postLogin = async (req, res) => {
    const { status, response } = await loginService.postLogin(req.body);
    res.status(status).json(response);
};

module.exports = {
  postLogin,
};