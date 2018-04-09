const nodemailer = require('nodemailer');
const config = require('../config/config.json');
const http = require('request');
const apiServer = config.server.path;

module.exports.works = function (req, res) {
  res.render('pages/works', {
    title: 'Мои работы',
    // msg: req.query.msg
  });
}

module.exports.email = function(req, res) {
  console.log('email');
  // требуем наличия имени, обратной почты и текста
  if (!req.body.name || !req.body.email || !req.body.comment) {
    //если что-либо не указано - сообщаем об этом
    req.flash('message', 'Все поля нужно заполнить!');
    console.log('Все поля нужно заполнить!');
    return res.redirect('/works');
  }
  // инициализируем модуль для отправки писем и указываем данные из конфига
  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: req
      .body
      .comment
      .trim()
      .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
  };
  // отправляем почту
  transporter.sendMail(mailOptions, function (error, info) {
    //если есть ошибки при отправке - сообщаем об этом
    if (error) {
      req.flash('message', 'При отправке письма произошла ошибка: ' + error);
      console.log(`При отправке письма произошла ошибка: ${error}`);
      return res.redirect('/works');
    }
    req.flash('message', 'Письмо успешно отправлено');
    console.log(`Письмо успешно отправлено`);
    res.redirect('/works');
  });
}

