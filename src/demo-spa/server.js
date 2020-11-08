const express = require("express");
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
  COBROWSE_KEY: process.env.COBROWSE_KEY
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

// send test/prod config to client
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
