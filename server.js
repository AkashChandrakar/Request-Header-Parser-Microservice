var express = require("express");
var app = express();

app.get('/',function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.send({ipaddress:req.headers['x-forwarded-for'],language:req.acceptedLanguages[0],operating_system:req.headers['user-agent']});
});
app.listen(process.env.PORT||8080, function () {
  console.log('Example app listening on port 8080!');
});