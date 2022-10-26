const express = require('express');
const postController = require('../controllers/post.controller');
const { validatePostPost } = require('../middlewares/validations/inputValidations');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', auth, validatePostPost, postController.postPost);
// router.get('/', auth, userController.getAllUser);

// router.get('/:id', auth, userController.getOneUser);

module.exports = router;