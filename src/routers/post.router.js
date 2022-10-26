const express = require('express');
const postController = require('../controllers/post.controller');
const {
  validatePostPost, validatePutPost,
} = require('../middlewares/validations/inputValidations');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', auth, validatePostPost, postController.postPost);
router.get('/', auth, postController.getAllPost);
router.get('/:id', auth, postController.getOnePost);
router.put('/:id', auth, validatePutPost, postController.putPost);

module.exports = router;