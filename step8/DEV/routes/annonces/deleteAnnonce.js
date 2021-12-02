module.exports = function(app, con, logger) {
    // app.delete('/user/delete', function (req, res) {
    //     logger.debug("Je suis un debug pauve tache !")
    //     res.send('Got a DELETE request at /user');});

app.delete('/annonce/delete/', function (req,res) {   //route de base 
    id = req.params.id
logger.debug("req.params.id", req.params.id);
    con.connect(function(err) {

        var cache = 'DELETE FROM `annonce` WHERE `annonce`.`id_annonce` = '+req.params.id+';'
        con.query(cache, function (err, result, fields) {
            res.send(result)
        })
    })
    
    logger.info(`DELETE_ANNONCE_IN_BDD`); 
});
}