const express = require('express')
const bodyParser = require('body-parser')

const app = express() //instancieted the app
const authenticationRouter = require('./routes/AuthenticationRouter')
const diaryRouter = require('./routes/DiaryRouter')

// llamando el middleware BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routing
app.use('/', authenticationRouter)
app.use('/agenda', diaryRouter)

// cargando el pug view
app.set('views', './views')
app.set('view engine', 'pug')

//usando el middleware para la secciones

app.use(express.static('public')) //set a static folder for the public or frontend development

// exporting the app logic
module.exports = app
