var express = require('express');
var router = express.Router();

// Admin
router.get('/admin', function(req, res, next){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Nodes
router.get('/admin/nodes', function(req, res, next){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Nodes -> Add
router.get('/admin/nodes/add', function(req, res, next){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Nodes -> Edit
router.get('/admin/nodes/edit/:id', function(req, res, next){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Pages
router.get('/admin/pages', function(req, res){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Pages -> Add
router.get('/admin/pages/add', function(req, res){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Users
router.get('/admin/users', function(req, res){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Users -> Add
router.get('/admin/users/add', function(req, res){
  res.render('admin/index', {title : 'admin'});
});

// Admin -> Users -> Edit
router.get('/admin/users/edit/:id', function(req, res){
  res.render('admin/index', {title : 'admin'});
});
