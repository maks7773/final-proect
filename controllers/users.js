const sendAllUsers = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.usersArray))
}

const sendUserCreated = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.users))
}

const sendUserUpdated= (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({message: 'пользователь обновлен'}))
}


module.exports = {sendAllUsers, sendUserCreated, sendUserUpdated};