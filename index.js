const app = require('./app')

// archivo de configuracion
const config = require('./app.config')

//donde se abrira la aplicacion
app.listen(config.port, function() {
    console.log('servidor en el puerto ' + config.port)
})