function index (req, res) {
    res.render('home/index', { msg: 'Prueba' })
}

module.exports = {
    index
}