
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const { checkAuth } = require('../middlewars/auth');
const {findAllCategories, createCategory,  updateCategory, checkEmptyName, deleteCategory, checkIsCategoryExists} = require('../middlewars/categories');

const categoriesRouter = require('express').Router()

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);


categoriesRouter.post(
'/categories', 
 findAllCategories,
checkIsCategoryExists,
checkEmptyName,
checkAuth,
createCategory,
sendCategoryCreated)


categoriesRouter.put('/categories/:id', checkEmptyName, checkAuth,  updateCategory, sendCategoryUpdated)


categoriesRouter.delete('/categories/:id', checkAuth, deleteCategory, sendCategoryDeleted)


module.exports =  categoriesRouter;