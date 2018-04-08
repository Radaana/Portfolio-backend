const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlAbout = require('../controllers/about');
const ctrlAdmin = require('../controllers/admin');

var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };
  
// Роутер статики 

router.get('/', ctrlHome.index);
router.get('/index', ctrlHome.index);
router.post('/index', ctrlHome.auth);

router.get('/about', ctrlAbout.about);

// router.get('/admin', ctrlAdmin.admin);
router.get('/admin', isAuthenticated, ctrlAdmin.admin);
// router.post('/admin', isAuthenticated, ctrlAdmin.upload);
router.post('/admin', ctrlAdmin.upload);

router.get('/blog', ctrlBlog.blog);

router.get('/works', ctrlWorks.works);
// router.post('/mail', ctrlWorks.sendEmail);


module.exports = router;