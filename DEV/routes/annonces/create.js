module.exports = function(app, con, logger, jwt) {
app.post('/adds/create',function (req,res){

  // acces = jwt.decode(req.cookies.Aled)
  // if(acces.type === 'admin'){

    var form_annonce = {
      description: req.body.description,
      content: req.body.content,
      title: req.body.title,
      contrat_type: req.body.contrat_type,
      location: req.body.location,
      name_entreprise: req.body.name_entreprise,
      email: req.body.email
    }

  var verif = annonceCreated(form_annonce.email, form_annonce.location, form_annonce.description, form_annonce.content, form_annonce.title, form_annonce.contrat_type);


  if (verif.email == 'ok' && verif.location == 'ok' && verif.description == 'ok' && verif.content == 'ok' && verif.title == 'ok' && verif.contrat_type == 'ok' && verif.contrat_type == 'ok'){

    
      console.log(form_annonce)

      con.connect(function(err) {
        var cache = "INSERT INTO `annonce` (`id_annonce`, `name_entreprise`, `email`, `location`, `description`, `content`, `title`, `contrat_type`) VALUES (NULL, '"+form_annonce.name_entreprise+"', '"+form_annonce.email+"', '"+form_annonce.location+"', '"+form_annonce.description+"', '"+form_annonce.content+"', '"+form_annonce.title+"', '"+form_annonce.contrat_type+"');"
          if (err) throw err;
          logger.info(form_annonce.title," Annonce crée")
      })

}
else{
  logger.warning("ERROR_ADDS_CREATE_VERIFY_FAILED");
  console.log(verif);
  return verif;
}
  // }
})


function annonceCreated(EMAIL,LOCATION,DESCRIPTION, CONTENT, TITLE, CONTRAT_TYPE,){


  var error = {       //(null) : champ non rempli | (error) : erreur lors de la vérification du string | (ok) : string valide 
    email: "ok",
    location: "ok",
    description : "ok",
    content : "ok",
    title : "ok",
    contrat_type : "ok",
  };

  if(EMAIL == null || EMAIL == "")
  {
      error.email = "null";
  }
  
  if(LOCATION == null || LOCATION == "")
  {
      error.location = "null";
  }

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

  return (error);
 }


}
