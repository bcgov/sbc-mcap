const express = require("express");
const fs = require('fs');
/*=============================================================================
All this node.js application does is save config items from the OS environment 
to ./config/serverconfig.js on startup so the demo web page can include that
file when opened.  Other than that, there is nothing magical about this node
application; it just serves static web pages.

You do not need to run this node application to serve the demo app or the 
/example files.  Any web server will work as long as the config file exists.
You don't even need that config file if you want to code in the config manually,
as done in the /example files. They do not use the config file.
=============================================================================*/
const app = express();
const SERVICE_PORT = process.env.SERVICE_PORT || 8080;

// This app just serves static file
app.use("/", express.static(__dirname + '/'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/icons", express.static(__dirname + '/icons'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/webchat", express.static(__dirname + '/../examples/webchat'));
app.use("/cobrowse", express.static(__dirname + '/../examples/cobrowse'));
app.use(express.static(__dirname + '/config'));

console.log(__dirname + '/../examples/webchat' );


// Read the required items from the OS environment
const configObj = {
  AssistJSUrl: process.env.ASSISTJS_URL,
  ChatServicesUrl: process.env.CHAT_SERVICES_URL,
  agentId: process.env.AGENT_ID,
  spaEnvServerURL: process.env.SPA_ENV_SERVER_URL,
  authorizationToken: 'spaenv ' + process.env.SPA_ENV_AUTH_TOKEN
};

// Write this object to a js file so it can be included by index.html. Note this is totally optional 
// when you write your own page.  You can get access to these items in various ways.  See 
// the simplified examples for more 
// fs.writeFileSync(
//   `${__dirname}/config/serverconfig.js`, 'var serverConfig = ' + JSON.stringify(configObj), 'utf-8'
// );

app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.listen(SERVICE_PORT);
console.log("Running on Port %s", SERVICE_PORT);
