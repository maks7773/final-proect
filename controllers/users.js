const sendAllUsers = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.usersArray))
}

const sendUserCreated = (req, res)=>{
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.users))
}


module.exports = {sendAllUsers, sendUserCreated};