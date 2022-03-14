module.exports = (err, req, res, next) => {
  const code = err.statusCode || 500;
  const message = err.message || 'На сервере произошла ошибка';

  res.status(code).send({ message });
  next();
};
