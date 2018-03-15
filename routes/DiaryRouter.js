const express = require('express')
const DiaryController = require('./../controllers/DiaryController')

const api = express.Router()

//primera peticion al app
api.get('/', DiaryController.index)

module.exports = api