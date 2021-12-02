module.exports = function(app, con, logger) {
    app.delete('/user/delete', function (req, res) {
        logger.debug("Je suis un debug pauve tache !")
        res.send('Got a DELETE request at /user');});
/*app.delete('/user/delete/', function (req,res) {   //route de base 
logger.debug("req.parqms.id", req.params.id);
    con.connect(function(err) {

        var cache = 'DELETE FROM `client` WHERE `client`.`id_client` = 2;'
        con.query(cache, function (err, result, fields) {
            res.send(result)
        })
    })
    logger.info(`DELETE_USERS_IN_BDD`); 
});*/
}