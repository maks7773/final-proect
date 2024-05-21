const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkIsGameExists, checkEmptyFields } = require('../middlewars/games');
 
 const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const { checkIfCategoriesAvaliable } = require('../middlewars/categories.js');
const { checkIfUsersAreSafe } = require('../middlewars/users.js');
const { checkAuth } = require('../middlewars/auth.js');
const gamesRouter = require('express').Router()

gamesRouter.get('/games', findAllGames, sendAllGames);


gamesRouter.post(
    '/games',  
 findAllGames,
checkIsGameExists,
checkIfCategoriesAvaliable,
checkEmptyFields,
checkAuth,
createGame,
sendGameCreated
)


gamesRouter.put(
'/games/:id', 
findGameById,
checkIfUsersAreSafe,
checkIfCategoriesAvaliable,
checkEmptyFields,
checkAuth,
updateGame,
sendGameUpdated)

gamesRouter.delete('/games/:id', checkAuth,  deleteGame, sendGameDeleted)
module.exports = gamesRouter;