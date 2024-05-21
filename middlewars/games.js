const games = require("../models/game");
// middlewares/games.js

const findAllGames = async (req, res, next) => {
  // Поиск всех игр в проекте по заданной категории
  if(req.query["categories.name"]) { 
    req.gamesArray = await games.findGameByCategory(req.query["categories.name"]);
    next();
    return;
  }
  // Поиск всех игр в проекте
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({
      path: "users",
      select: "-password" // Исключим данные о паролях пользователей
    })
  next();
};

const findGameById = async (req, res, next)=>{
  try{
    req.game =await games.findById(req.params.id)
    .populate("categories")
    .populate({
      path: 'users',
      select: '-password'
    });
    next();
  }catch (err) {
    res.status(404).send({message: 'Game not found'})
  }
  
}

const createGame = async(req, res, next) =>{
  
  try{
    req.game = await games.create(req.body);
    next()
  } catch (err) {
    res.status(400).send({message: 'error creating game'})
  }
}


const updateGame = async(req,res, next)=>{
  try{
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  }catch (err){
    res.status(400).send({message: 'error updating game'})
  }
}
 
const deleteGame = async (req,res,next)=> {
  try{
    req.game = await games.findByIdAndDelete(req.params.id );
    next();
  }catch (err){
    res.status(400).send({message: 'error deleting game'})
  }
  }

  const checkEmptyFields = async (req, res, next) => {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.image ||
      !req.body.link ||
      !req.body.developer
    ) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Заполните все поля" }));
    } else {
      next();
    }
  };

  const checkIsGameExists = async (req, res, next) => {
    const isInArray = req.gamesArray.find((game) => {
      return req.body.title === game.title;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Игра с таким названием уже существует" }));
    } else {
      next();
    }
  };
module.exports = {findAllGames,createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIsGameExists};
