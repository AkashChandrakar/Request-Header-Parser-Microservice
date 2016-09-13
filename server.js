var express = require("express");
var app = express();

app.get('/',function(req,res){
  res.setHeader('Content-Type', 'application/json');
  var ipAddress=req.headers['x-forwarded-for']||null;
  var lang = req.acceptedLanguages[0]||null;
  var user = req.headers['user-agent'];
  var os = user.substring(user.search("\\(")+1,user.search("\\)"))||null;
  res.send({ipaddress:ipAddress,language:lang,operating_system:os});
});
app.listen(process.env.PORT||8080, function () {
  console.log('Example app listening on port 8080!');
});