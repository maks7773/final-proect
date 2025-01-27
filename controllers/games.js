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

const sendGameDeleted = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.game))
}

module.exports = {sendAllGames,sendGameCreated,sendGameUpdated,sendGameDeleted};