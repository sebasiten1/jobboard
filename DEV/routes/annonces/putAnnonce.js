module.exports = function(app, con, bcrypt, salt, logger) {
    // ▂ ▃ ▄ ▅ ▆ ▇ █ PUT ANNONCE █ ▇ ▆ ▅ ▄ ▃ ▂
    app.put('/annonce/put/:id',function (req,res){
        logger.debug("work")

        logger.debug(req.params.id)

        var form_annonce = {
            description: req.body.description,
            content: req.body.content,
            title: req.body.title,
            contrat_type: req.body.contrat_type,
        }

        var cache = 'SELECT * FROM `annonce` WHERE `id_annonce` = '+req.params.id+';'
        con.connect(function(err) {

            con.query(cache,function (err, result, fields) {
                if (result === undefined){
                    logger.warning("ERROR_MODIFY_annonceID_MISSING :"+ req.params.id + " l'annonce n'existe pas sous cette ID")
                    return res.send("ERROR_MODIFY_annonceID_MISSING")
                }

                logger.info("MODIFY_ID_ANNONCE :"+ req.params.id);
                    if(form_annonce.description === result[0].description  && form_annonce.content === result[0].content && form_annonce.title === result[0].title && form_annonce.contrat_type === result[0].contrat_type ){
                        logger.warning("ERROR_MODIFY_annonceID_SAME")
                        return res.send("ERROR_MODIFY_annonceID_SAME")
                    } 

                // var cache = "UPDATE `entreprise` SET `name` = '"+form_entreprise.name+"', `email` = '"+form_entreprise.email+"', `password` = '"+form_entreprise.password+"' WHERE `entreprise`.`id_entreprise` = 3;"
                var cache = "UPDATE `annonce` SET `description` = ?, `content` = ?, `title` = ?, `contrat_type` = ? WHERE `annonce`.`id_annonce` = ?;"
                con.query(cache,function (err, result, fields) {
                    res.send("Done");

                })
            })
        })
    })
}