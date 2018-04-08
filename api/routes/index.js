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

router.get('/blog', ctrlBlog.getArticles); // READ
router.post('/blog', ctrlBlog.createArticle); // CREATE
router.put('/blog/:id', ctrlBlog.editArticle); // EDIT
router.delete('/blog/:id', ctrlBlog.deleteArticle); // DELETE

router.get('/skills', ctrlSkills.getSkills); // READ
router.post('/skills', ctrlSkills.createSkills); // CREATE
router.put('/skills/:id', ctrlSkills.editSkills); // EDIT
router.delete('/skills/:id', ctrlSkills.deleteSkills); // DELETE

// router.get('/avatar', ctrlAvatar.getAvatar);
router.post('/works', ctrlWorks.createWork);

router.get('*', (req, res) => {
  res.status(404).json({msg: 'Not found', err: 404});
})

module.exports = router;