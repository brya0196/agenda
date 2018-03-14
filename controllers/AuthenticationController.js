const user = require('./../models/user')

function login (req, res) {

    user.findAll()
        .then(users => {
            res.send({ users: users })
        })
        .catch(err => {
            res.send({ users: 'No users found' })
        })


}

module.exports = {
    login
}