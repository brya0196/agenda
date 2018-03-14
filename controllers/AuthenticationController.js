const user = require('./../models/user')

function login (req, res) {

    res.render('authentication/login' , { })

    // user.findAll()
    //     .then(users => {
    //         res.render('authentication/login',{ users: users })
    //     })
    //     .catch(err => {
    //         res.send({ users: 'No users found' })
    //     })


}

module.exports = {
    login
}