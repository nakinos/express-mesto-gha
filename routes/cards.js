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
} = require('../valdation/cards');

router.get('/', getCards);
router.get('/:cardId', getCardValidation, getCard);
router.delete('/:cardId', getCardValidation, deleteCard);
router.post('/', getCardValidation, createCard);
router.put('/:cardId/likes', getCardValidation, likeCard);
router.delete('/:cardId/likes', getCardValidation, dislikeCard);

module.exports = router;
