const express = require('express')
const HomeController = require('./../controllers/home')

const api = express.Router()

//primera peticion al app
api.get('/', HomeController.index)

module.exports = api