const bodyParser = require("body-parser");    //permet la récupération d'un body html (req.body...)
const http = require('http');                 //génére un server http
const Logger = require("@ptkdev/logger");     //console debug
const logger = new Logger();                  
const express = require("express");           //routage GET/POST/PUT/DELETE
const nodemailer = require("nodemailer");     //mailer
 //coukie de session (permet a l'utilisateur de rester connecter apret une déconnexion)
const app = express();                        //application d'éxpresse
const cors = require('cors');                 //extension d'expresse
const jwt = require('jsonwebtoken');          //token connexion/identification utilisateur et redirection
const mysql  = require('mysql');              //base de donnée 
var config = require('./config.json');        //fichier de configuration
const bcrypt = require('bcrypt'); 
const cookieParser = require('cookie-parser')
app.use(cors());

//document.domain = "./";

const server = http.createServer(app);    
const router = express.Router();
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const secret = config.secret;
const salt = bcrypt.genSaltSync(saltRounds);

 app.use(bodyParser.json());
 app.use(cookieParser());
 app.set('trust proxy', 1)  // trust first proxy
 app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
 })); 

var con = mysql.createConnection({

    host: config.mysql_con.host,
  
    user: config.mysql_con.user,
  
    password: config.mysql_con.password,
  
    database: config.mysql_con.database
});

//Routes client
require("./routes/clients/get.js")(app, con, logger, jwt, secret);
require("./routes/clients/inscription.js")(app, con, bcrypt, salt, logger, jwt, secret);
require("./routes/clients/modify.js")(app, con, bcrypt, salt, logger, jwt, secret);
require("./routes/clients/delete.js")(app, con, logger, jwt);
require("./routes/clients/connexion.js")(app, con, bcrypt, salt, logger, jwt, secret);

//Routes entreprise
require("./routes/entreprises/get.js")(app, con, jwt, secret);
require("./routes/entreprises/inscription.js")(app, con, bcrypt, salt, logger, jwt, secret);
require("./routes/entreprises/putEntreprise.js")(app, con, bcrypt, salt, logger, jwt, secret);
require("./routes/entreprises/deleteEntreprise.js")(app, con, logger);



//Routes annonces
require("./routes/annonces/get.js")(app, con, logger, jwt, secret);
require("./routes/annonces/create.js")(app, con, logger, jwt, secret);
require("./routes/annonces/putAnnonce.js")(app, con, bcrypt, salt, logger, jwt, secret);
require("./routes/annonces/deleteAnnonce.js")(app, con, logger);


//require('./routes/routes.js')(app, con, bcrypt, salt, logger);
//mailer
require("./routes/mailer/creation.js")(app ,nodemailer);

//DEBUG//
require("./routes/DEBUG.js")(app, con, logger, jwt, secret);   

//serveur start
logger.info("Serveur Start");

server.listen(config.port, function () {   //écoute au port 9000
    logger.info(`Votre app est disponible sur localhost:${config.port} !`); 
   })

