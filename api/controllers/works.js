const mongoose = require('mongoose');

module.exports.createWork = function (req, res) {
  // создаем новую запись блога и передаем в нее поля из формы
  const Model = mongoose.model('works');
  let item = new Model({
    name: req.body.name,
    tech: req.body.tech,
    picture: req.body.picture
  });
  // сохраняем запись в базе
  item
    .save()
    .then(item => {
      return res
        .status(201)
        .json({status: 'Запись успешно добавлена'});
    }, err => {
      // обрабатываем  и отправляем
      res
        .status(404)
        .json({
          status: 'При добавление записи произошла ошибка: ' + err
        });
    });  
};
