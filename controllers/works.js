module.exports.works = function (req, res) {
  res.render('pages/works', {
    title: 'Мои работы',
    // msg: req.query.msg
  });
}

