module.exports = function(app, con, bcrypt, salt, logger, jwt, secret) {
  // ▂ ▃ ▄ ▅ ▆ ▇ █ POST CLIENT/CONNEXION █ ▇ ▆ ▅ ▄ ▃ ▂
  app.post('/login',function (req,res){

      var verif = clientInscription(req.body.email,req.body.password);          //vérification des champ du formulaire
  
      if ( verif.email == 'ok' && verif.password == 'ok'){                     //vérification du json de defaut
  
      con.connect(function(err) {                                             //connexion a la base de donnée
        
        var form_user = {                                                      //récupération des données des champs du formulaire
          email: req.body.email.toLowerCase(),
          password: req.body.password, salt
        }
    
         var cache = 'SELECT * FROM `client` WHERE `email` = "'+form_user.email+'";'     //variable pour l'appel SQL
        con.query(cache,function (err, result, fields) {                                //requette SQL
          if (result[0] !== undefined){                                                  //vérification d'erreur
            if (result[0].email === form_user.email ){                                  //match ? second test (a modifier)

              if(bcrypt.compareSync(form_user.password,result[0].password)){            //match ? mot de passe
                var token = jwt.sign({                                                  //token pour le client
                  type: 'client'
                }, secret);
  
                if(result.admin === 1){                                                 //token pour l'admin
                  var token = jwt.sign({
                    type: 'admin'
                  }, secret);
                  logger.error("NEW ADMIN CONNECTED")
                  res.send(token)
                  return "admin done";
                  
                }
  
                logger.info("New client connected: " +form_user.email )                   
                res.send(token)
              return "client done";
              
            }else{
              res.send("ERROR_CLIENT_PASSWORD")
              logger.warning("ERROR_CLIENT_PASSWORD tentative de connexion au compte: "+ result[0].email)
                  return "ERROR_CLIENT_PASSWORD";
            }
              }
            }
              
          var cache = 'SELECT * FROM `entreprise` WHERE `email` = "'+form_user.email+'";'         //variable pour l'appel SQL
            con.query(cache,function (err, result2, fields) {                                     //requet SQL
              
              if (result2[0] !== undefined && result2 !== []){                                    //vérification d'erreur et présence client
                if (result2[0].email === form_user.email && bcrypt.compareSync(form_user.password,result2[0].password)){    //vérification mail + mot de passe

                  var token = jwt.sign({                                                          //token pour l'entreprise
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    type: 'entreprise'
                  }, secret);
                  res.send(token)

                return  "entreprise done";  
                }{
                  res.send("ERROR_ENTREPRISE_PASSWORD" + form_user.email)
                  return "ERROR_ENTREPRISE_PASSWORD";
                }
              }else{
                res.send("ERROR_USER_UNKNOWN")
                logger.warning("ERROR_USER_UNKNOWN"+form_user.email +" ?")
                return "ERROR_USER_UNKNOWN";
              }
              
            })
        })
      })
    }else{
  
      logger.warning("ERROR_LOGIN_VERIFY_FAILED")
       res.send(verif);
    }
    {
      
    }
  })
  
  
  //////////////////INSCRIPTION/VERIF CLIENT////////////////
  //////////////////INSCRIPTION/VERIF CLIENT////////////////
  //////////////////INSCRIPTION/VERIF CLIENT////////////////

  function clientInscription(EMAIL, PASSWORD){                                                          //fonction de vérification des champ si il ne sont pas vide
  
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //le paterne de l'email.
  
    var error = {       //(null) : champ non rempli | (error) : erreur lors de la vérification du string | (ok) : string valide 
      email : "ok",
      password : "ok"
    };
  
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
  