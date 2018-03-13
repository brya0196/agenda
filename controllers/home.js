function index (req, res) {
    res.render('index', { msg: 'Prueba' })
}

module.exports = {
    index
}