/*
This is where the express server starts. There's nothing fancy here, but I am drawing in functions and handlers from my "server" directory.

server/auth.js contains the basic password gate
server/functions.js contains all of my game functions. I decided it was easier to keep all of the functions together since, while each game function is different, they rely on many of the same helper functions.

*/


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const functions = require('./server/functions.js');
const simGame = functions.simGame;
const simGames = functions.simGames;
const simTourney = functions.simTourney;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app
	.use('/auth', require('./server/auth.js'))
	.use('/sim-game', (req, res, next) => res.send(simGame(req.body)))
	.use('/sim-games', (req, res, next) => res.send(simGames(req.body)))
	.use('/tourney', (req, res, next) => res.send(simTourney(req.body)))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);