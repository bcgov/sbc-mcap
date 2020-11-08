const express = require("express");
const axios = require('axios');
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

// Read the required items from environment. OS env overrides .env file
const SERVICE_PORT = process.env.SERVICE_PORT || 8080;
const SPA_ENV_URL = process.env.SPA_ENV_URL;
const SPA_ENV_AUTH = process.env.SPA_ENV_AUTH;

let spaConfig = {
  SPA_ENV_MCAP_COBROWSE_URL: process.env.COBROWSE_URL,
  SPA_ENV_MCAP_CHAT_SERVICES_URL: process.env.CHAT_SERVICES_URL,
  SPA_COBROWSE_TOKEN: process.env.SPA_COBROWSE_TOKEN
};

// These directories just serve static file
app.use("/", express.static(__dirname + '/'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/icons", express.static(__dirname + '/icons'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/webchat", express.static(__dirname + '/../examples/webchat'));
app.use("/cobrowse", express.static(__dirname + '/../examples/cobrowse'));

// Load environment from env server
const names = '{"SPA_ENV_MCAP_COBROWSE_URL": "","SPA_ENV_MCAP_CHAT_SERVICES_URL": "" }';
const headers = { 'Authorization': SPA_ENV_AUTH, 'SPA_ENV_NAME': names };
let config = {
  headers
};
console.log("Fetch from ENV_SERVER:", SPA_ENV_URL);
axios.post(SPA_ENV_URL, null, config)
  .then(res => {
    console.log("status:", res.status);
    spaConfig.SPA_ENV_MCAP_COBROWSE_URL = spaConfig.SPA_ENV_MCAP_COBROWSE_URL && process.env.COBROWSE_URL;
    spaConfig.SPA_ENV_MCAP_CHAT_SERVICES_URL = spaConfig.SPA_ENV_MCAP_CHAT_SERVICES_URL && process.env.CHAT_SERVICES_URL;

    console.log(spaConfig);
  })
  .catch(e => console.log(e.response.status, e.response.statusText, SPA_ENV_URL, config));


// used to send test/prod specific config to client
app.get('/api/env', function (req, res) {
  const result = { cobrowse_url: cobrowse_url };
  res.type('json');
  res.end(JSON.stringify(configObj));
});

// send web page to client
app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.listen(SERVICE_PORT);
console.log("Running on Port %s", SERVICE_PORT);
