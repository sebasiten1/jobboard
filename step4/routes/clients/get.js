         module.exports = function(app, con, logger) {
app.get('/user', function (req,res) {   //route GET 
    con.connect(function(err) {

        var cache = 'SELECT * FROM `client`;'           //variable de requette
        con.query(cache,function (err, result, fields) {//requet SQL
            res.send(result)                            //envoi tous les clients au front
        })
    })

    logger.info(`GET_ALL_USER`);                        
});
}