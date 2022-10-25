const express = require('express');
const userController = require('../controllers/user.controller');
const { validatePostUser } = require('../middlewares/validations/inputValidations');

const router = express.Router();

router.post('/', validatePostUser, userController.postUser);

module.exports = router;