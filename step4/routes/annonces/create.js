module.exports = function(app, con, logger) {
app.post('/adds/create',function (req,res){

  var verif = annonceCreated(req.body.description, req.body.content, req.body.title, req.body.contrat_type, req.body.contrat_time_beg, req.body.contrat_time_end);


  if (verif.description == 'ok' && verif.content == 'ok' && verif.title == 'ok' && verif.contrat_type == 'ok' && verif.contrat_type == 'ok'){

    var form_annonce = {
        description: req.body.description,
        content: req.body.content,
        title: req.body.title,
        contrat_type: req.body.contrat_type,
        contrat_time_beg: req.body.contrat_time_beg,
        contrat_time_end: req.body.contrat_time_end
      }
      console.log(form_annonce)

      con.connect(function(err) {
        var cache = "INSERT INTO `annonce` (`id_annonce`, `id_entreprise`, `description`, `content`, `title`, `contrat_type`, `contrat_time_beg`, `contrat_time_end`, `picture`) VALUES (NULL, '1', '"+form_annonce.description+"', '"+form_annonce.content+"', '"+form_annonce.title+"', '"+form_annonce.contrat_type+"', '"+form_annonce.contrat_time_beg+"', '"+form_annonce.contrat_time_end+"', '0')"
        con.query(cache,function (err, result, fields) { 
          if (err) throw err;
          logger.info(form_annonce.title," Annonce crée")
      })
})
}else{
  logger.warning("ERROR_ADDS_CREATE_VERIFY_FAILED");
  console.log(verif);
  return verif;
}
})

function annonceCreated(DESCRIPTION, CONTENT, TITLE, CONTRAT_TYPE, CONTRAT_TIME_BEG, CONTRAT_TIME_END){


  var error = {       //(null) : champ non rempli | (error) : erreur lors de la vérification du string | (ok) : string valide 
    description : "ok",
    content : "ok",
    title : "ok",
    contrat_type : "ok",
    contrat_time_beg : "ok",
    contrat_time_end : "ok"
  };


  if(DESCRIPTION == null || DESCRIPTION == "")
  {
      error.description = "null";
  }

  if(CONTENT == null || CONTENT == "")
  {
      error.content = "null";
  }

  if(TITLE == null || TITLE == "")
  {
      error.title = "null";
  }

  if(CONTRAT_TYPE == null || CONTRAT_TYPE == "")
  {
      error.contrat_type = "null";
  }

  if(CONTRAT_TIME_BEG == null || CONTRAT_TIME_BEG == "")
  {
      error.contrat_time_beg = "null";
  }

  if(CONTRAT_TIME_END == null || CONTRAT_TIME_END == "")
  {
      error.contrat_time_end = "null";
  }

  return (error);
 }


}
