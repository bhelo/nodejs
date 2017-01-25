var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '广州市瑞极信息科技有限公司' });
});

/* GET about/contact page. */
router.get('/about', function(req, res) {
  res.render('about', { title: '广州市瑞极信息科技有限公司' });
});


router.get('/contact', function(req, res) {
  res.render('contact', { title: '广州市瑞极信息科技有限公司' });
});

/* GET products page. */
router.get('/3Dprinter', function(req, res) {
  res.render('products/3Dprinter', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/printservice', function(req, res) {
  res.render('products/printservice', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/webd', function(req, res) {
  res.render('products/webd', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/appd', function(req, res) {
  res.render('products/appd', { title: '广州市瑞极信息科技有限公司' });
});

/* GET products/systemi page. */
router.get('/shipin', function(req, res) {
  res.render('products/systemi/shipin', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/xinxi', function(req, res) {
  res.render('products/systemi/xinxi', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/wangba', function(req, res) {
  res.render('products/systemi/wangba', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/liansuo', function(req, res) {
  res.render('products/systemi/liansuo', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/wuye', function(req, res) {
  res.render('products/systemi/wuye', { title: '广州市瑞极信息科技有限公司' });
});

router.get('/iot', function(req, res) {
  res.render('products/systemi/iot', { title: '广州市瑞极信息科技有限公司' });
});

module.exports = router;
