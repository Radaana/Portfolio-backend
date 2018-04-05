module.exports.about = function (req, res) {
    res.render('pages/about', {
      title: 'Обо мне'
    });
  };