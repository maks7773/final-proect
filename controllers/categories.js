const sendAllCategories = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.categoriesArray))
}

const sendCategoryCreated = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.category))
}

const sendCategoryUpdated = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({message: 'категоря обновлена'}))
}

module.exports = {sendAllCategories,sendCategoryCreated, sendCategoryUpdated};