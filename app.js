const express = require('express')
const bodyParser = require('body-parser')

// archivo de configuracion
const config = require('./app.config')

const HomeController = require('./controllers/home')

const app = express() //instancieted the app

// llamando el middleware BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cargando el pug view
app.set('views', './views')
app.set('view engine', 'pug')

//primera peticion al app
app.get('/', HomeController.index)

//donde se abrira la aplicacion
app.listen(config.appPort, function() {
    console.log('servidor en el puerto ' + config.appPort)
})