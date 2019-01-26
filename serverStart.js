const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const functions = require('./functions');
const simGame = functions.simGame;
const simGames = functions.simGames;
const simTourney = functions.simTourney;

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app
	.use('/auth', require('./auth'))
	.use('/sim-game', (req, res, next) => res.send(simGame(req.body)))
	.use('/sim-games', (req, res, next) => res.send(simGames(req.body)))
	.use('/tourney', (req, res, next) => res.send(simTourney(req.body)))
	
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);