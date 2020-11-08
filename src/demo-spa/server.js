const express = require("express");
// const axios = require('axios');
require('dotenv').config();
/*=============================================================================
MCAP Single Page Demo App
This server serves the demo index.html and provides an /api/env endpoint for
the client to fetch the urls & tokens for webchat and cobrowse
=============================================================================*/
const app = express();

// Read the required items from environment. OS env overrides .env file
const SERVICE_PORT = process.env.SERVICE_PORT || 8080;
const SPA_ENV_URL = process.env.SPA_ENV_URL;
const SPA_ENV_AUTH = process.env.SPA_ENV_AUTH;

let envConfig = {
  COBROWSE_URL: process.env.COBROWSE_URL,
  WEBCHAT_URL: process.env.WEBCHAT_URL,
  COBROWSE_TOKEN: process.env.COBROWSE_TOKEN
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
// const names = '{"SPA_ENV_MCAP_COBROWSE_URL": "","SPA_ENV_MCAP_CHAT_SERVICES_URL": "" }';
// const headers = { 'Authorization': SPA_ENV_AUTH, 'SPA_ENV_NAME': names };
// let config = {
//   headers
// };
// console.log("Fetch from ENV_SERVER:", SPA_ENV_URL);
// axios.post(SPA_ENV_URL, null, config)
//   .then(res => {
//     console.log("status:", res.status);
//     spaConfig.SPA_ENV_MCAP_COBROWSE_URL = spaConfig.SPA_ENV_MCAP_COBROWSE_URL && process.env.COBROWSE_URL;
//     spaConfig.SPA_ENV_MCAP_CHAT_SERVICES_URL = spaConfig.SPA_ENV_MCAP_CHAT_SERVICES_URL && process.env.CHAT_SERVICES_URL;

//     console.log(spaConfig);
//   })
//   .catch(e => console.log(e.response.status, e.response.statusText, SPA_ENV_URL, config));


// send test/prod specific config to client
app.get('/api/env', function (req, res) {
  res.type('json');
  res.end(JSON.stringify(envConfig));
});

// send web page to client
app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.listen(SERVICE_PORT);
console.log("Running on Port %s", SERVICE_PORT);
