var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var con=require('./conn');
var app = express();

//con.connect(function(err) {    
app.get("/",(req,res)=>{    
        con.query("SELECT * FROM users", function (err, result, fields) {
            if (err) throw err;
            res.json(result);            
        });
    });

app.get("/:id",(req,res)=>{    
        con.query("SELECT * FROM users where id="+req.params.id, function (err, result, fields) {
            console.log(req.params);
            if (err) throw err;
            res.json(result);            
        });
});

    
app.delete("/:id",(req,res)=>{
        var sql = "DELETE  FROM users where id="+req.params.id;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
          res.json(result);
        });

});
 
//});
app.post("/",(req,res)=>{  
    let body=req.body;
    username=body.username;
    password=body.password;  
    var sql = 'INSERT INTO users (username, password) VALUES ("'+username+'", "'+password+'")';
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
            console.log("1 record inserted");
        res.json(result);    
    });
});

app.put("/",(req,res)=>{  
    let body=req.body;
    id=body.id;
    username=body.username;
    password=body.password;  
    var sql = 'UPDATE users set username="'+username+'", password="'+password+'" where id='+id;
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
            console.log("1 record inserted");
        res.json(result);    
    });
});
module.exports = app ;
