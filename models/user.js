const sequelize = require('./../app.db')

const User = sequelize.define('user', {
    username: sequelize.Sequelize.STRING(10),
    password: sequelize.Sequelize.STRING(12),
    name: sequelize.Sequelize.STRING(),
    last_name: sequelize.Sequelize.STRING()
})

module.exports = User