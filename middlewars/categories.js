const categories = require("../models/category")

const findAllCategories = async (req, res, next) =>{
    req.categoriesArray = await categories.find({});
    next();
}


const findCategoryById = async (req, res, next) =>{
    try{
        req.category = await categories.findById(req.params.id);
        next()
    }catch{
        res.status(404).send({message: 'Category not found'})
    }
}

const createCategory = async(req, res, next) =>{
  
    try{
      req.category = await categories.create(req.body);
      next()
    } catch (err) {
      res.status(400).send({message: 'error creating category'})
    }
  }

  const updateCategory = async(req, res, next) =>{
  
    try{
      req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
      next()
    } catch (err) {
      res.status(400).send({message: 'error updating category'})
    }
  }

  const checkEmptyName = async (req,res,next)=>{
    if(!req.body.name){
        res.status(400).send({message: 'Ведите название категории'})
    }else{
        next()
    }
  }

module.exports = {findAllCategories, findCategoryById, createCategory, updateCategory, checkEmptyName};