const sendAllGames = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.gamesArray))
}

const sendGameCreated = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.game))
}

const sendGameUpdated = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({message: 'игра обновлена'}))
}
module.exports = {sendAllGames,sendGameCreated,sendGameUpdated};