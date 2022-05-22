const express = require("express");
const bodyParser=require ("body-parser");
const request=require ("request");
const https=require("https");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen( 3000,function(){
  console.log("server started on port 3000");
});
app.post("/",function(req,res){
  var p = parseInt(req.body.p);
    var t = parseInt(req.body.t);
    var i,mi;
    res.setHeader("Content-Type", "text/html");
    for(i=1;i<=t;i++){
      mi=0.1*p;
      p=p+0.05*p;
      mi=parseInt(mi);
      p=parseInt(p);
      res.write("<h3>Installment number "+ String(i) +" is " + String(mi)+" and the principal amount to be payed now is "+ String(p) + "</h3><br>");
    }
res.send();
});
app.use(express.static("static"));
app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
});
