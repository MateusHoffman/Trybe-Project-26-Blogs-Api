const express = require('express');
const userController = require('../controllers/user.controller');
const { validatePostUser } = require('../middlewares/validations/inputValidations');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', validatePostUser, userController.postUser);
router.get('/', auth, userController.getAllUser);

router.get('/:id', auth, userController.getOneUser);
router.delete('/me', auth, userController.deleteOneUser);

module.exports = router;