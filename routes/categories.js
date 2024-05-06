const categoriesRouter = require('express').Router()


const {sendAllCategories, sendCategoryCreated} = require('../controllers/categories');
const {findAllCategories, createCategory} = require('../middlewars/categories');


categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated)
module.exports = categoriesRouter;