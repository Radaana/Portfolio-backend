const nodemailer = require('nodemailer');
const config = require('../config.json');

module.exports.index = function (req, res) {
  const sendObj = {
    title: 'Главная страница',
    msg: req.query.msg
  };
  res.render('pages/index', Object.assign({}, sendObj));
}



module.exports.auth = function (req, res) {
  // требуем наличия логина и пароля в теле запроса
  if (!req.body.login || !req.body.password) {
    // если не указан логин или пароль - сообщаем об этом
    return res.redirect('/login?msg=Все поля обязательны к заполнению!');
  }
  
  res.redirect('/admin');
}