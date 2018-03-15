const sequelize = require('./../app.db')
const user = require('./user')

const Diary = sequelize.define('diaries', {
    name: sequelize.Sequelize.STRING(10),
    description: sequelize.Sequelize.TEXT(),

}, {
    underscored: true,
    freezeTableName: true,
})

Diary.belongsTo(user)

module.exports = Diary
