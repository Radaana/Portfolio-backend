const config = require('../config/config.json');
const mongoose = require('mongoose');
const passport = require('passport');

module.exports.index = function (req, res) {
  const sendObj = {
    title: 'Главная страница',
    msg: req.query.msg
  };
  res.render('pages/index', Object.assign({}, sendObj));
}

module.exports.auth = function (req, res, next) {
  passport.authenticate('loginUsers', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('message', ' укажите правильный логин и пароль!');
      return res.redirect('/index');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/admin');
    });
  })(req, res, next);
}