module.exports = function(app, con, logger,jwt) {
    
app.get('/user', function (req,res) {   //route GET 

    acces = jwt.decode(req.cookies.Aled)

    // if(acces.type === 'admin'){


    con.connect(function(err) {


        var cache = 'SELECT * FROM `client`;'           //variable de requette
        con.query(cache,function (err, result, fields) {//requet SQL
            res.send(JSON.stringify(result))            //envoi tous les clients au front
        })
    })
//.JSON()
    logger.info(`GET_ALL_USER`);               
// }else{
// res.send("ERROR_CLIENT_GET_ACCES_DENI")
// }       
});


}
