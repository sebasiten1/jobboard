module.exports = function(app, con, jwt) {
    app.get('/entreprise', function (req,res) {  
        acces = jwt.decode(req.cookies.Aled)
       // if(acces.type == 'admin'){

        
        con.connect(function(err) {

            var cache = 'SELECT * FROM `entreprise`;'
            con.query(cache,function (err, result, fields) {
                console.log("tic",JSON.stringify(result))
                res.send(JSON.stringify(result))
            })
        })
      // }else{
          //  res.send("ERROR_ENTREPRISE_GET_ACCESS_DENID")
      //  }
    });

    }

