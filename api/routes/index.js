const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlSkills = require('../controllers/skills');
// const ctrlAdmin = require('../controllers/admin');


// var isAuthenticated = function(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/');
// };
//Роутинг блога в АПИ
router.get('/blog', ctrlBlog.getArticles); // READ
router.post('/blog', ctrlBlog.createArticle); // CREATE
router.put('/blog/:id', ctrlBlog.editArticle); // EDIT
router.delete('/blog/:id', ctrlBlog.deleteArticle); // DELETE
//Роутинг скилов
router.get('/skills', ctrlSkills.getSkills); // READ
router.post('/skills', ctrlSkills.createSkills); // CREATE
router.put('/skills/:id', ctrlSkills.editSkills); // EDIT
router.delete('/skills/:id', ctrlSkills.deleteSkills); // DELETE
//Роутинг работ
router.post('/works', ctrlWorks.createWork);
//Не нашел ничего
router.get('*', (req, res) => {
  res.status(404).json({msg: 'Not found', err: 404});
})

module.exports = router;