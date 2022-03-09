module.exports.errorHandler = (err, req, res, next) => {
  let errorCode = 0;
  let errorMessage = '';

  switch (err.name) {
    case 'ValidationError':
    case 'CastError':
      errorCode = 400;
      errorMessage = 'Переданы некорректные данные.';
      break;

    case 'NotFoundError':
      errorCode = 404;
      errorMessage = 'Запись по указанному id не найдена.';
      break;

    default:
      errorCode = 500;
      errorMessage = 'Ошибка по умолчанию.';
      break;
  }

  res.status(errorCode).send({ message: errorMessage });
};

module.exports.NotFoundError = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
};
