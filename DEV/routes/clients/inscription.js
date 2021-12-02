module.exports = function(app, con, bcrypt, salt, logger) {
// ▂ ▃ ▄ ▅ ▆ ▇ █ POST CLIENT/inscription █ ▇ ▆ ▅ ▄ ▃ ▂
app.post('/user/inscription',function (req,res){

    var same = 0;
    var email_client_inscription = req.body.email.toLowerCase();
    var verif = clientInscription(req.body.name,req.body.email,req.body.password);

    if (verif.name == 'ok' && verif.email == 'ok' && verif.password == 'ok'){

    con.connect(function(err) {
  
      var form_client = {
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        password: bcrypt.hashSync(req.body.password, salt)
      }
       
        var check = 0;
  
       var cache = 'SELECT `email` FROM `client` WHERE `email` = "'+form_client.email+'";'
      con.query(cache,function (err, result, fields) {
 
        if (result[0] !== undefined){
          if (result[0].email === form_client.email){
            
            res.send("error_client_match")
            same = 1
            return 0;
          }
        }
        
  
        var cache = 'SELECT `email` FROM `entreprise` WHERE `email` = "'+form_client.email+'";'
          con.query(cache,function (err, result2, fields) {
            
            if (result[0] !== undefined){
              if (result2[0].email === form_client.email){
                check = 2;
                res.send("error_entreprise_match")
              same = 2
              return 0;
              }
            }
            

              if(same === 0 ){
                var cache = "INSERT INTO `client` (`id_client`, `name`, `email`, `password`, `admin`) VALUES (NULL, '"+form_client.name +" ', '"+form_client.email+"', '"+form_client.password+"', '0'); "
                  con.query(cache,function (err, result2, fields) {
                  logger.info(form_client.email,"c'est inscrit en temps que client" )
                 })
              }
          })
      })
    })
  }else{

    logger.warning("ERROR_CLIENT_INSCRIPTION_VERIFY_FAILED")
     res.send(verif);
  }
  {
    
  }
})


//////////////////INSCRIPTION/VERIF CLIENT////////////////
//////////////////INSCRIPTION/VERIF CLIENT////////////////
//////////////////INSCRIPTION/VERIF CLIENT////////////////

function clientInscription(NAME, EMAIL, PASSWORD){

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //le paterne de l'email.

  var error = {       //(null) : champ non rempli | (error) : erreur lors de la vérification du string | (ok) : string valide 
    name : "ok",
    email : "ok",
    password : "ok"
  };


  if(NAME == null || NAME == "")
  {
      error.name = "null";
  }

  if(EMAIL == null || EMAIL == "")
  {
      error.email = "null";
  }
  else if(!EMAIL.match(pattern))
  {
     text = "Adress Invalid";
  }
  // if(entrepriseInscription(req.body.email) == clientInscription(req.body.email))
  // {

  //   text = "Email déjà utilisé"

  // }

  if(PASSWORD == null || PASSWORD == "")
  {
      error.password = "null";
  }

  return (error);
 }

// req.body.email(
//   `SELECT * FROM 'client' WHERE 'email'= ${req.body.email} AND SELECT * FROM 'entreprise' WHERE 'email' = ${req.body.email}`,

//   if(email = 'null')
//   {
    
    
//   }
// )

}
