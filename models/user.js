const sequelize = require('./../app.db')

const User = sequelize.define('users', {
    username: sequelize.Sequelize.STRING(10),
    password: sequelize.Sequelize.STRING(12),
    name: sequelize.Sequelize.STRING(),
    last_name: sequelize.Sequelize.STRING()
}, {
    underscored: true,
    freezeTableName: true,
})

module.exports = User