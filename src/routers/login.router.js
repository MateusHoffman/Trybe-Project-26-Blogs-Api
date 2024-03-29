const express = require('express');
const loginController = require('../controllers/login.controller');
const { validatePostLogin } = require('../middlewares/validations/inputValidations');

const router = express.Router();

router.post('/', validatePostLogin, loginController.postLogin);

module.exports = router;