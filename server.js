var express = require("express");
var app     = express();


app.use(express.static(__dirname + '/src/'));
app.use("/js", express.static(__dirname + '/src/js'));
app.use("/css", express.static(__dirname + '/src/css'));
app.use("/fonts", express.static(__dirname + '/src/fonts'));
app.use("/icons", express.static(__dirname + '/src/icons'));
app.use("/images", express.static(__dirname + '/src/images'));


app.get('/',function(req,res){
 res.sendFile('/index.html');
});

app.listen(3000);

console.log("Running at Port 3000");