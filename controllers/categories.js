const sendAllCategories = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.categoriesArray))
}

const sendCategoryCreated = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.category))
}


module.exports = {sendAllCategories,sendCategoryCreated};