const { findAllGames, createGame } = require('../middlewars/games');
 const {sendAllGames, sendGameCreated} = require('../controllers/games')
const gamesRouter = require('express').Router()

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated)
module.exports = gamesRouter;