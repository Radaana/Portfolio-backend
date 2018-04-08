const http = require('request');

const config = require('../config/config.json');
const apiServer = config.server.path;

module.exports.blog = function (req, res) {
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: apiServer + pathAPI,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    title: 'My Blog'
  };

  http(requestOptions, function (error, response, body) {
    if (error) {
      console.log(error);
    }
    res.render('pages/blog', Object.assign({}, sendObj, body));
  });
}