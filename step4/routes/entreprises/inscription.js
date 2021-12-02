module.exports = function(app, con, bcrypt, salt, logger) {
// ▂ ▃ ▄ ▅ ▆ ▇ █ POST ENTREPRISE/inscription █ ▇ ▆ ▅ ▄ ▃ ▂
app.post('/entreprise/inscription',function (req,res){


  var email_entreprise_inscription = req.body.email.toLowerCase();
  var verif = entrepriseInscription(req.body.name,req.body.location,req.body.email,req.body.password);
  
  if (verif.name == 'ok' && verif.location == 'ok' && verif.email == 'ok' && verif.password == 'ok'){
  
  var same = false;
      con.connect(function(err) {
        con.query("SELECT * FROM `entreprise`;",function (err, result, fields) {
  
        if (result != undefined){
           for (var i = 0 ; i < result.length ;i++){
  
            
            if (result[i].email == email_entreprise_inscription){
              same = true;
            }
  
          }
            if (same == false)
            {
              con.query(`INSERT INTO entreprise (id_entreprise, name, location, email, password) VALUES (NULL, '${req.body.name}','${req.body.loaction}','${email_entreprise_inscription}', '${bcrypt.hashSync(req.body.password, salt)}');`, function (err, result, fields) {
              })
              logger.info(req.body.email.toLowerCase()," c'est inscrit !")
            }
            else
            {
              logger.warning(req.body.email.toLowerCase(),"ne c'est pas inscrit car sont compte entreprise éxiste deja dans la base de donnée")
            }
         }
         else
         {
          logger.error(req.body.email.toLowerCase(),"ne c'est pas inscrit car sont compte éxiste deja dans la base de donnée")
         }}
         )
      })
    }
    else 
    {
      logger.warning("ERROR_ENTREPRISE_INSCRIPTION_VERIFY_FAILED")
      res.send(verif);
    }
       })

//////////////////INSCRIPTION/VERIF ENTREPRISE////////////////
//////////////////INSCRIPTION/VERIF ENTREPRISE////////////////
//////////////////INSCRIPTION/VERIF ENTREPRISE////////////////

function entrepriseInscription(NAME, LOCATION, EMAIL, PASSWORD){

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //le paterne de l'email.

    var error = {       //(null) : champ non rempli | (error) : erreur lors de la vérification du string | (ok) : string valide 
      name : "ok",
      location : "ok",
      email : "ok",
      password : "ok"
    };


    if(NAME == null || NAME == "")
    {
        error.name = "null";
    }

    if(LOCATION == null || LOCATION == "")
    {
        error.location = "null";
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