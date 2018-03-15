const url = require('url')
const user = require('./../models/user')

let id = null

function login (req, res) {
        res.render('authentication/login' , { error: false, msg: '' })
}

function verifyUser (req, res) {

    if(!req.body.username &&  !req.body.password) {
        res.render('authentication/login', { error: true, msg: 'Los campos Usuario y Contraseña esta vacio' })
        return
    }
    else if(!req.body.username) {
        res.render('authentication/login', { error: true, msg: 'El campo usuario es obligatorio' })
        return
    }
    else if(!req.body.password) {
        res.render('authentication/login', { error: true, msg: 'El campo contraseña esta vacio' })
        return
    }

    user.findOne({ where: { username: req.body.username }, password: req.body.password })
        .then(users => {
            // console.log(users)
            // if(users) res.redirect({ user: users}, '/agenda')
            if(users) res.redirect(url.format({ pathname: '/agenda', params: users.dataValues}))
            if(!users) res.render('authentication/login',{ error: true, msg: 'Usuario o Contraseña incorrectos' })
            return
        })
        .catch(err => {
            res.send({ error: true, msg: 'Usuario o Contraseña incorrectos' })
            return
        })
}


module.exports = {
    login,
    verifyUser
}