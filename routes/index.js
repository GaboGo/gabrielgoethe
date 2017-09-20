var express = require('express');
var router = express.Router();
var path = require('path');
var pathJson = path.join(__dirname, '../views/data.json');
var fs = require('fs');
var dataJson = JSON.parse(fs.readFileSync(pathJson, 'utf8'));

// Home
router.get('/', function(req, res) {
	about = dataJson.about;
	interests = dataJson.interests;
	skills = dataJson.skills;
	projects = dataJson.projects;
	res.render('index', { 
		about : about,
		interests : interests,
		skills : skills,
		projects : projects
	});
});

// 404
router.use(function(req, res){
	res.status(400);
	res.render('index');
});

module.exports = router;
