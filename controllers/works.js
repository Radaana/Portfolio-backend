module.exports.works = function (req, res) {
  res.render('pages/works', {
    title: 'Мои работы',
    // msg: req.query.msg
  });
}

// module.exports.sendEmail = function(req, res) {
//   // требуем наличия имени, обратной почты и текста
//   if (!req.body.name || !req.body.email || !req.body.text) {
//     //если что-либо не указано - сообщаем об этом
//     req.flash('message', 'Все поля нужно заполнить!')
//     return res.redirect('/');
//   }
//   // инициализируем модуль для отправки писем и указываем данные из конфига
//   const transporter = nodemailer.createTransport(config.mail.smtp);
//   const mailOptions = {
//     from: `"${req.body.name}" <${req.body.email}>`,
//     to: config.mail.smtp.auth.user,
//     subject: config.mail.subject,
//     text: req
//       .body
//       .text
//       .trim()
//       .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
//   };
//   // отправляем почту
//   transporter.sendMail(mailOptions, function (error, info) {
//     //если есть ошибки при отправке - сообщаем об этом
//     if (error) {
//       req.flash('message', 'При отправке письма произошла ошибка: ' + error)
//       return res.redirect('/');
//     }
//     req.flash('message', 'Письмо успешно отправлено')
//     res.redirect('/');
//   });
// }