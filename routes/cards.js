const router = require('express').Router();
const {
  getCards,
  getCard,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard,
} = require('../controllers/cards');
const {
  getCardValidation,
  deleteCardValidation,
  createCardValidation,
  likeCardValidation,
  dislikeCardValidation,
} = require('../valdation/cards');

router.get('/', getCards);
router.get('/:cardId', getCardValidation, getCard);
router.delete('/:cardId', deleteCardValidation, deleteCard);
router.post('/', createCardValidation, createCard);
router.put('/:cardId/likes', likeCardValidation, likeCard);
router.delete('/:cardId/likes', dislikeCardValidation, dislikeCard);

module.exports = router;
