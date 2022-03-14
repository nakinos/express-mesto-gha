const router = require('express').Router();
const {
  getUser,
  getUsers,
  updateUser,
  updateUserAvatar,
  getCurrentUser,
} = require('../controllers/users');
const {
  getUserValidation,
  updateUserValidation,
  updateUserAvatarValidation,
} = require('../valdation/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', getUserValidation, getUser);
router.patch('/me', updateUserValidation, updateUser);
router.patch('/me/avatar', updateUserAvatarValidation, updateUserAvatar);

module.exports = router;
