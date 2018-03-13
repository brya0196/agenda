const express = require('express')
const bodyParser = require('body-parser')
const app = express() //instancieted the app
const homeRoutes = require('./routes/HomeRoute')

// llamando el middleware BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', homeRoutes)

// cargando el pug view
app.set('views', './views')
app.set('view engine', 'pug')


module.exports = app
