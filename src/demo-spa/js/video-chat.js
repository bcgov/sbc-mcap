var EXPAND_CLASS = 'expanded';
var MOBILE_MAX_WIDTH = 767; //px
console.log("serverConfig.AssistJSUrl:%s ", serverConfig.AssistJSUrl);

var assistjs_url = serverConfig.AssistJSUrl;
var chatServicesUrl = serverConfig.ChatServicesUrl;
let maintMode = "";

var envVars = {
  "SPA_ENV_MCAP_MAINTENANCE_FLAG": "", "SPA_ENV_MCAP_MAINTENANCE_MESSAGE": "",
  "SPA_ENV_MCAP_ASSISTJS_URL": "", "SPA_ENV_MCAP_VIDEO_ASSIST_URL": "",
  "SPA_ENV_MCAP_CHAT_SERVICES_URL": "", "SPA_ENV_MCAP_AGENT_ID": ""
};

window.agentIdVar = serverConfig.agentId;
window.videoAssistUrl = serverConfig.videoAssistUrl;

$(function () {
  $("div#maintenance").hide();

  console.log("Config Server: " + serverConfig.spaEnvServerURL);
  if (serverConfig.spaEnvServerURL)
    readEnvironment();

    AssistBoot.addAssistBehaviour();
  // initAll();
});

// This just loads the environment propoerties (url's, etc) from a settings server
function readEnvironment() {
  console.log('Loading Environment from ENV_SERVER');

  var request = $.ajax({
    type: "POST",
    beforeSend: function (request) {
      request.setRequestHeader("Authorization", serverConfig.authorizationToken);
      request.setRequestHeader("SPA_ENV_NAME", JSON.stringify(envVars));
    },
    url: serverConfig.spaEnvServerURL,
    processData: false
  });

  request.done(function (msg) {
    console.log(msg);
    assistjs_url = msg.SPA_ENV_MCAP_ASSISTJS_URL;
    maintMode = msg.SPA_ENV_MCAP_MAINTENANCE_FLAG;
    chatServicesUrl = msg.SPA_ENV_MCAP_CHAT_SERVICES_URL;
    window.agentIdVar = msg.SPA_ENV_MCAP_AGENT_ID;
    window.videoAssistUrl = msg.SPA_ENV_MCAP_VIDEO_ASSIST_URL;

    console.log("maintMode=", maintMode);
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("Request failed: " + textStatus);
    console.log("default values are assigned: ");
  });
}

function initAll() {

  // Can also get assist js location from config server and load dynamically
  // addScript(assistjs_url)
  //   .done(initCobrowse)
  //   .fail(onCobrowseFailToLoad);
  initCobrowse();
}

function initCobrowse() {
  AssistBoot.addAssistBehaviour();
}

function onCobrowseFailToLoad() {
  console.error("Network error, unable to load assist.js", assistjs_url);
  $('.js-cobrowse').on('click', function () {
    alert("Network error: Unable to load assist.js from " + assistjs_url);
  });
}

