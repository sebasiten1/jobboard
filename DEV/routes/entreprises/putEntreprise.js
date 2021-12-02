module.exports = function(app, con, bcrypt, salt, logger) {
    // ▂ ▃ ▄ ▅ ▆ ▇ █ PUT ENTREPRISE █ ▇ ▆ ▅ ▄ ▃ ▂
    app.put('/entreprise/put/:id',function (req,res){
        logger.debug("work")

        logger.debug(req.params.id)

        var form_entreprise = {
            name: req.body.name,
            location : req.body.location,
            email: req.body.email.toLowerCase(),
            password: bcrypt.hashSync(req.body.password, salt)
        }

        var cache = 'SELECT * FROM `entreprise` WHERE `id_entreprise` = '+req.params.id+';'
        con.connect(function(err) {

            con.query(cache,function (err, result, fields) {
                if (result === undefined){
                    logger.warning("ERROR_MODIFY_entrepriseID_MISSING :"+ req.params.id + " l'entreprise n'existe pas sous cette ID")
                    return res.send("ERROR_MODIFY_entrepriseID_MISSING")
                }

                logger.info("MODIFY_ID_ENTREPRISE :"+ req.params.id);
                    if(form_entreprise.name === result[0].name  && form_entreprise.location === result[0].location && form_entreprise.email === result[0].email && form_entreprise.password === result[0].password){
                        logger.warning("ERROR_MODIFY_entrepriseID_SAME")
                        return res.send("ERROR_MODIFY_entrepriseID_SAME")
                    } 

                // var cache = "UPDATE `entreprise` SET `name` = '"+form_entreprise.name+"', `email` = '"+form_entreprise.email+"', `password` = '"+form_entreprise.password+"' WHERE `entreprise`.`id_entreprise` = 3;"
                var cache = "UPDATE `entreprise` SET `name` = ?, `location` = ?, `email` = ?, `password` = ? WHERE `entreprise`.`id_entreprise` = ?;"
                con.query(cache,function (err, result, fields) {
                    logger.info(form_entreprise.email +" a modifier sont profile entreprise")
                    res.send("Done");

                })
            })
        })
    })
}