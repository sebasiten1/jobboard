module.exports = function(app, con, logger) {
app.get('/adds', function (req,res) {   //route de base 
    con.connect(function(err) {
        var cache = 'SELECT * FROM `annonce`;'
        con.query(cache,function (err, array, fields) {
            res.send(JSON.stringify(array))
        })
    })
    logger.info(`GET_ALL_ADDS`); 
})
app.get('/adds/:id', function (req,res) {
    con.connect(function(err) {
    var cache = 'SELECT * FROM `annonce` WHERE `id_annonce`= '+req.params.id+';'
    con.query(cache,function (err, array, fields) {
        res.send(JSON.stringify(array))
    })
    })

})
}