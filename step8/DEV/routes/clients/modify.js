module.exports = function(app, con, bcrypt, salt, logger) {
    // ▂ ▃ ▄ ▅ ▆ ▇ █ PUT CLIENT/inscription █ ▇ ▆ ▅ ▄ ▃ ▂
    app.put('/user/modify/:id',function (req,res){
        logger.debug("work")
        

        var form_client = {
            name: req.body.name,
            email: req.body.email.toLowerCase(),
            password: bcrypt.hashSync(req.body.password, salt)
        }

        var cache = 'SELECT * FROM `client` WHERE `id_client` = '+req.params.id+';'
        con.connect(function(err) {

            con.query(cache,function (err, result, fields) {
                if (result === undefined){
                    logger.warning("ERROR_MODIFY_clientID_MISSING :"+ req.params.id + " l'utilisateur n'existe pas sous cette ID")
                    return res.send("ERROR_MODIFY_clientID_MISSING")
                }

                logger.info("MODIFY_ID_USER :"+ req.params.id);
                    if(form_client.name === result[0].name && form_client.password === result[0].password && form_client.email === result[0].email){
                        logger.warning("ERROR_MODIFY_clientID_SAME")
                        return res.send("ERROR_MODIFY_clientID_SAME")
                    } 

                // var cache = "UPDATE `client` SET `name` = '"+form_client.name+"', `email` = '"+form_client.email+"', `password` = '"+form_client.password+"' WHERE `client`.`id_client` = 3;"
                var cache = "UPDATE `client` SET `name` = ?, `email` = ?, `password` = ? WHERE `client`.`id_client` = ?;"
                con.query(cache,function (err, result, fields) {
                    logger.info(form_client.email +" a modifier sont profile client")
                    res.send("Done");

                })
            })
        })
    })
}