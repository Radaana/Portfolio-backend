const mongoose = require('mongoose');

module.exports.getSkills = function (req, res) {
  const skills = mongoose.model('skills');

  skills
    .find()
    .then(items => {
      if (!items.length) {
        res
          .status(200)
          .json({skills: []});
      } else {
        res
          .status(200)
          .json({skills: items});
      }
    });
};

module.exports.createSkills = function (req, res) {
  // создаем новую запись блога и передаем в нее поля из формы
  const Model = mongoose.model('skills');
  let item = new Model({
    id: req.body.id,
    name: req.body.name,
    percents: req.body.percents,
    type: req.body.type,
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
  // return res
  //       .status(200)
  //       .json({status: req.body});
};

module.exports.editSkills = function (req, res) {
  const thisId = req.params.id;
  const newPercent = req.body.percents;
  console.log(`Я принял ${newPercent}`);
  // let data = {
  //   id: req.body.id,
  //   name: req.body.name,
  //   percents: req.body.percents,
  //   type: req.body.type,
  // };

  const Model = mongoose.model('skills');

  Model
    .findOneAndUpdate({id : thisId }, {percents: newPercent})
    .then((item) => {
      if (item) {
        res
          .status(200)
          .json({status: 'Запись успешно обновлена'});
      } else {
        res
          .status(404)
          .json({status: 'Запись в БД не обнаружена'});
      }
    })
    .catch((err) => {
      res
        .status(404)
        .json({
          status: 'При обновлении записи произошла ошибка: ' + err
        });
    });
};

module.exports.deleteSkills = function (req, res) {
  const thisId = req.params.id;
  const Model = mongoose.model('skills');
  console.log(thisId);

  Model
    // .findByIdAndRemove(id)
    .findOneAndRemove({id : thisId })
    .then((item) => {
      if (item) {
        res.status(200).json({status: 'Запись успешно удалена'});
      } else {
        res.status(404).json({status: 'Запись в БД не обнаружена'});
      }
    }, (err) => {
      res.status(404).json({
        status: 'При удалении записи произошла ошибка: ' + err
      });
    });
}
