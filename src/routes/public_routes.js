var express = require('express');
var routes = express.Router();
var playerController = require('../controller/player-controller');

/* Authentication endpoints */
routes.post('/login', playerController.loginPlayer);
routes.post('/register', playerController.createPlayer);

module.exports = routes;