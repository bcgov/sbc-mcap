var express = require("express");
var app = express();
const fs = require('fs')
/*=============================================
=      Environment Variable Configuration     =
=============================================*/
const SERVICE_PORT = process.env.SERVICE_PORT || 8080;

app.use(express.static(__dirname + '/src/'));
app.use("/js", express.static(__dirname + '/src/js'));
app.use("/css", express.static(__dirname + '/src/css'));
app.use("/fonts", express.static(__dirname + '/src/fonts'));
app.use("/icons", express.static(__dirname + '/src/icons'));
app.use("/images", express.static(__dirname + '/src/images'));
app.use(express.static(__dirname + '/config'))

//
// read environment urls and write them to a static js file during start up..
// used for externalising the urls and supplying them to client
//
var configObj = {
    AssistJSUrl: process.env.ASSISTJS_URL,
    videoAssistUrl: process.env.VIDEO_ASSIST_URL
};

fs.writeFileSync(
    `${__dirname}/config/serverconfig.js`, 'var serverConfig = ' + JSON.stringify(configObj), 'utf-8'
)
app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.listen(SERVICE_PORT);

console.log("Running at Port %s", SERVICE_PORT);