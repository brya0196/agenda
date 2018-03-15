const url = require('url')
const session = require('express-session')

const user = require('./../models/user')

function login (req, res) {
    let session = req.session

    if(session.session_id) {
        res.redirect('/agenda')
        return
    }
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
            let session = req.session
            
            if(users) {
                session.session_id = users.dataValues.id
                session.name = users.dataValues.name + " " + users.dataValues.last_name
                res.redirect('/agenda')
            }
            if(!users) res.render('authentication/login',{ error: true, msg: 'Usuario o Contraseña incorrectos' })
            return
        })
        .catch(err => {
            console.log(err)
            return
        })
}

function logout (req, res) {
    req.session.destroy(function(err) {
        if(err) console.log(err)
        if(!err) res.redirect('/')
    })
}


module.exports = {
    login,
    verifyUser,
    logout
}