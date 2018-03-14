const express = require('express')
const authenticationController = require('./../controllers/AuthenticationController')

const api = express.Router()

//primera peticion al app
api.get('/', authenticationController.login)
api.post('/verify', authenticationController.verifyUser)

module.exports = api