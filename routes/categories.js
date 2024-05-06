const categoriesRouter = require('express').Router()


const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated} = require('../controllers/categories');
const {findAllCategories, createCategory,  updateCategory, checkEmptyName} = require('../middlewars/categories');


categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories',checkEmptyName, findAllCategories, createCategory, sendCategoryCreated)
categoriesRouter.put('/categories/:id', checkEmptyName,  updateCategory, sendCategoryUpdated)
module.exports = categoriesRouter;