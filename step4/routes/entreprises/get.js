module.exports = function(app, con, bcrypt, salt, logger) {
var path = require("path");

module.exports = function(app, con, logger) {
    app.get('/entreprise', function (req,res) {   //route de base ; 
        con.connect(function(err) {
    
            var cache = 'SELECT * FROM `entreprise`;'
            con.query(cache,function (err, result, fields) {
                res.send(result)
            })
        })
        logger.info(`GET_ALL_ENTREPRISE`); 
    });

}
}