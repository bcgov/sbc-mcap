const express = require("express");
const fs = require('fs');
require('dotenv').config();
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

console.log(process.env.CHAT_SERVICES_URL);

// This app just serves static file
app.use("/", express.static(__dirname + '/'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/icons", express.static(__dirname + '/icons'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/webchat", express.static(__dirname + '/../examples/webchat'));
app.use("/cobrowse", express.static(__dirname + '/../examples/cobrowse'));

console.log(__dirname + '/../examples/webchat');

// Read the required items from environment. OS env overrides .env file
const configObj = {
  cobrowse_url: process.env.COBROWSE_URL,
  webchat_url: process.env.CHAT_SERVICES_URL,
  spaenv_url: process.env.SPA_ENV_SERVER_URL,
  agentId: process.env.AGENT_ID,
  spaenv_auth: 'spaenv ' + process.env.SPA_ENV
};

// used to send test/prod specific config to client
app.get('/api/env', function (req, res) {
  res.end(JSON.stringify(configObj));
});

// send web page to client
app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.listen(SERVICE_PORT);
console.log("Running on Port %s", SERVICE_PORT);
