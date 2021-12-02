module.exports = function(app, con, logger, jwt, secret) {
     app.get('/kill',function (req,res){
      logger.info(`User connected /kill`);
       logger.warning("serveur tuer par un hote distant par le web")
       logger.warning("je ne sais pas quoi faire !");
      process.exit(1)
     })

     app.get('/', function (req, res) {   //route de base 
      res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/main.html');
      logger.info(`User connected HOME`);
      
       
       logger.info("token créer")
       
     })

     app.get('/creationAnnonce',function (req,res) {
      res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/creationAnnonce.html');
      logger.info(`ROUTER :User connected /creationAnnonce`); 


      
      //  var decoded = jwt.verify(token, secret);
      //  console.log(decoded.type) // admin (expected)
      
     })

       app.get('/Connexion',function (req,res) {
        res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/Connexion.html');
        logger.info(`ROUTER :User connected /Connexion`); 
        // var decoded = jwt.verify(token, 'shhhhh');
        // console.log(decoded.type) // admin (expected)
        
       })
       
       app.get('/inscriptionEntreprise',function (req,res) {
        res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/inscriptionEntreprise.html');
        logger.info(`ROUTER :User connected /inscriptionEntreprise`); 
       })
  
       app.get('/inscription',function (req,res) {
        res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/inscription.html');
        logger.info(`ROUTER :User connected /inscription`); 
       })
       app.get('/ModifyClient',function (req,res) {
         res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/ModifyClient.html');
         logger.info(`ROUTER :User Mofify/client`); 
        })
        app.get('/deleteClient',function (req,res) {
          res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/deleteClient.html');
          logger.info(`ROUTER :User delete/client`); 
         })

         app.get('/mail',function (req,res) {
          res.sendFile('C:/Users/Nicol/GITHUB/T-WEB-501-MLH-5-1-jobboard-nicolas.kiffer/DEV/HTML/mail.html');
          logger.info(`ROUTER :User Mail`); 
         })
    }