const express = require('express')
const session = require('express-session')
const authenticationController = require('./../controllers/AuthenticationController')

const api = express.Router()

api.use(session({
    secret: 'keyboardcat',
}))

//primera peticion al app
api.get('/', authenticationController.login)
api.post('/verify', authenticationController.verifyUser)
api.get('/logout', authenticationController.logout)

module.exports = api