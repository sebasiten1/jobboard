module.exports = function(app, con, logger) {
    // app.delete('/user/delete', function (req, res) {
    //     logger.debug("Je suis un debug pauve tache !")
    //     res.send('Got a DELETE request at /user');});

app.delete('/entreprise/delete/', function (req,res) {   //route de base 
    id = req.params.id
logger.debug("req.params.id", req.params.id);
    con.connect(function(err) {

        var cache = 'DELETE FROM `entreprise` WHERE `entreprise`.`id_entreprise` = '+req.params.id+';'
        con.query(cache, function (err, result, fields) {
            res.send(result)
        })
    })
    
    logger.info(`DELETE_ENTREPRISE_IN_BDD`); 
});
}