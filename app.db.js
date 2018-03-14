const Sequelize = require('sequelize')

// archivo de configuracion
const config = require('./app.config')

const sequelize = new Sequelize(config.dbname, config.dbusername, config.dbpassword, {
    host: config.dbhost,
    dialect: config.db
})

module.exports = sequelize