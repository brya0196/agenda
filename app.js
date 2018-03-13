const express = require('express')
const bodyParser = require('body-parser')

// archivo de configuracion
const config = require('./app.config')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(config.appPort, function() {
    console.log('servidor en el puerto ' + config.appPort)
})