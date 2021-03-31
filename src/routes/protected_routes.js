var express = require('express');
var routes = express.Router();
var playerController = require('../controller/player-controller');
var clubController = require('../controller/club-controller');
var matchController = require('../controller/match-controller');
var participationController = require('../controller/participation-controller');

var passport = require('passport')

routes.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.send('Hello, this is the API');
});

/* Authentication endpoints */
routes.put('/players/:id', playerController.updatePlayer);
// routes.delete('/player/:id', playerController.deletePlayer);

// /* Club endpoints */
// routes.get('/clubs/:id' ,clubController.getClub);
// routes.post('/clubs', clubController.createClub);
// routes.put('/clubs/:id', clubController.updateClub);
// routes.delete('/clubs/:id', clubController.deleteClub);

// /* Match endpoints */
// routes.get('/matches', matchController.getMatches);
// routes.post('/matches', matchController.createMatch);
// routes.put('/matches/:id', matchController.updateMatch);
// routes.delete('/matches/:id', matchController.deleteMatch);

// /* Participation endpoints */
// routes.get('/matches/:matchId/participations', participationController.getParticipation);
// routes.post('/matches/:matchId/participations', participationController.createParticipation);
// routes.put('/matches/:matchId/participations/:id', participationController.createParticipation);

// Following route might not required anymore if we do not join collections as initially intended
//routes.post('/participations', participationController.getParticipationsByPlayerId); 

routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `Hey ${req.user.email}! You did it, you entered the place behind authorization! Congratulations!` });
});

module.exports = routes;