var express = require('express'); 
var app = express(); 
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'shamika',
  password : 'shamika',
  database : 'airqualitymngsys'
});





//app.get('/:table', function(req,res){});
//app.get('/:table/:id', function(req,res){});
//app.post('/:table', function(req,res){});
//app.put('/:table/:id', function(req,res){});
//app.delete('/:table/:id', function(req,res){});

app.get('/:table', function(req,res){  
      connection.query('SELECT * FROM '+req.params.table+' ORDER BY nodeId DESC LIMIT 20', req.params.id, function(err, rows, fields) {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.send({
            result: 'error',
            err: err.code
          });
        }
        res.send({
          result: 'success',
          err: '',
          fields: fields,
          json: rows,
          length: rows.length
        });
        connection.end();
      });
    
  });


app.get('/:table/:id', function(req,res){
  
      connection.query('SELECT * FROM '+req.params.table+' WHERE nodeId = ?', req.params.id, function(err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                } else {
                    if (rows.length === 0){
                        res.statusCode = 204;
                    } else {
                        res.send({
                            result: 'success',
                            err:    '',
                            id:     req.params.id,
                            json:   rows[0],
                            length: 1
                        });
                    }
                    connection.end();
                }
            });
    
  });

app.post('/:table', function(req,res){

    //validation
    //req.assert('name','Name is required').notEmpty();
    //req.assert('email','A valid email is required').isEmail();
    //req.assert('password','Enter a password 6 - 20').len(6,20);

    /*var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }
    */
    console.log(req);
    //get data
    var data = {
        Name:req.body.name,
        Location:req.body.location,
        GPS:req.body.gps
     };

        var query = conn.query("INSERT INTO nodes set ? ",data, function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });


});





app.listen(3000); 
console.log('Rest Demo Listening on port 3000');




/*

app.get('/', function(req, res){ 
  connection.connect();

  connection.query('SELECT * FROM nodes', function(err, rows, fields) {
      if (err) throw err;
      res.send('The solution is: ', rows[0].GPS);
      console.log('The solution is: ', rows[0].GPS);
  });
  
  connection.end();

}); 

*/