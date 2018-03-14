const app = require('./app')
const Sequelize = require('sequelize')

// archivo de configuracion
const config = require('./app.config')

const sequelize = new Sequelize(config.dbname, config.dbusername, config.dbpassword, {
    host: config.dbhost,
    dialect: config.db
})

//verificamos que alla conecion a la base de datos
sequelize.authenticate()
    .then(() => app.listen(config.port, () => console.log('servidor en el puerto ' + config.port)))
    .catch(err => console.log(`Hubo un error en la base de datos ${err}`))
