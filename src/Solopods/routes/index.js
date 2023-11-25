var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Solopods' });
});

router.get('/products', (req, res) => {
  res.render('products', { title: 'Solopods' });
});

router.get('/services', (req, res) => {
  res.render('services', { title: 'Solopods' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Solopods' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Solopods' });
});

router.get('/collabs', (req, res) => {
  res.render('collabs', { title: 'Solopods' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Solopods' });
});

module.exports = router;
