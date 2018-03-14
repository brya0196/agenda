const user = require('./../models/user')

function login (req, res) {
    res.render('authentication/login' , { error: false, msg: '' })
}

function verifyUser (req, res) {
    console.log({user: req.body.username, pass: !req.body.password })
    if(!req.body.username &&  !req.body.password) res.render('authentication/login',{ error: true, msg: 'Usuario o Contraseña incorrectos' })
    user.findOne({ where: { username: req.body.username }, password: req.body.password })
        .then(users => {
            if(users) res.redirect('/agenda', { user: users})
            if(!users) res.render('authentication/login',{ error: true, msg: 'Usuario o Contraseña incorrectos' })
        })
        .catch(err => {
            res.send({ error: true, msg: 'Usuario o Contraseña incorrectos' })
        })
}

module.exports = {
    login,
    verifyUser
}