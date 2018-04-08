const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const http = require('request');
const config = require('../config/config.json');
const apiServer = config.server.path;
const mongoose = require('mongoose');
const passport = require('passport');

module.exports.admin = function (req, res) {
  if (req.isAuthenticated()) {
    res.render('pages/admin', {
          title: 'Admin panel'
        });
  } else {
      res.render('pages/index', {
      title: 'Авторизация',
      msg: req.flash('message')
    });
  }
  
}


module.exports.upload = function (req, res) {
  console.log('Controller upload');
  let form = new formidable.IncomingForm();
  let upload = 'public/upload';
  let fileName;  
  if (!fs.existsSync(upload)) {
    fs.mkdirSync(upload);
  }
  form.uploadDir = path.join(process.cwd(), upload);
  form.parse(req, function (err, fields, files) {
    if (err) {
      return res.json({msg: 'Не удалось загрузить картинку', status: 'Error'});
    }
    if (!fields.name) {
      fs.unlink(files.photo.path);
      return res.json({msg: 'Не указано описание картинки!', status: 'Error'});
    }

    fileName = path.join(upload, files.photo.name);

    fs.rename(files.photo.path, fileName, function (err) {
      if (err) {
        console.log(err);
        fs.unlink(fileName);
        fs.rename(files.photo.path, fileName);
      }
      const pathApi = config.server.works;
      let dir = fileName.substr(fileName.indexOf('\\'));
      const requestOptions = {
        url: apiServer + pathApi,
        method: 'POST',
        json: {
          name: fields.name,
          tech: fields.tech,
          picture: dir
        },
        headers: {
          'secure': 'verySecret!'
        }
      };

      http(requestOptions, function (error, response, body) {
        if (error || body.error) {
          let msg = (error) ? 'Картинка не сохранилась в БД ' + error : body.msg + ' ' + body.error;
          return res.json({msg: msg, status: 'Error'});
        }
        res.json({msg: 'Картинка успешно загружена', status: 'Ok'});
      });
    });
    
  })
}