const app = require('./app')
const config = require('./app.config')
const sequelize = require('./app.db')
const dbcontext = require('./models/dbcontext')

// syncing te dbcontext
dbcontext.user.sync()
dbcontext.diary.sync()

//verificamos que alla conecion a la base de datos
sequelize.authenticate()
    .then(() => app.listen(config.port, () => console.log('servidor en el puerto ' + config.port)))
    .catch(err => console.log(`Hubo un error en la base de datos ${err}`))
