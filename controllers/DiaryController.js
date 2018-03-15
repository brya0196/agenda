function index (req, res) {
    let session = req.session
    
    res.send({ res: session.name })
}

module.exports = {
    index
}