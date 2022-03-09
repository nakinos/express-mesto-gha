const router = require('express').Router();
const {
  getCards,
  getCard,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard
} = require('../controllers/cards');

router.get('/', getCards);
router.get('/:cardId', getCard);
router.delete('/:cardId', deleteCard);
router.post('/', createCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
