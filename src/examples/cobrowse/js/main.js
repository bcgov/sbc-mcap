const appConfig = {
  videoAssistUrl: "https://video-poc1.maximusbc.ca",
  spaEnvServerURL: "https://spa-env-server-dev.pathfinder.gov.bc.ca/env",
  token: "spaenv 5993117a-2384-4b70-ad42-1e9b9e6044d9",
  agentId: "sip:7783727966@aaa.qaz",
};

// Run when page has finished loading
$(function () {

  window.agentIdVar = appConfig.agentId;
  window.videoAssistUrl = appConfig.videoAssistUrl;

  // Enable Live Assist
  if (!AssistSDK.isBrowserSupported()) {
    alert("Your browser is not supported");
  }
  else {
    AssistBoot.addAssistBehaviour();
  }

  // Setup click handlers for the buttons
  $("#startButton").on("click", () => $("#assist-modal-help").modal("show"));
  $("#envButton").on("click", () => readEnv());
  $("#clr").on("click", () => $("#envText").text(""));
});

function readEnv() {
  console.log('Loading Environment from ENV_SERVER');
  // This is what we want the remote Environment Server to return
  const envVars = {
    "SPA_ENV_MCAP_MAINTENANCE_FLAG": "", "SPA_ENV_MCAP_MAINTENANCE_MESSAGE": "",
    "SPA_ENV_MCAP_ASSISTJS_URL": "", "SPA_ENV_MCAP_VIDEO_ASSIST_URL": "",
    "SPA_ENV_MCAP_CHAT_SERVICES_URL": "", "SPA_ENV_MCAP_AGENT_ID": ""
  };

  var request = $.ajax({
    type: "POST",
    beforeSend: function (request) {
      request.setRequestHeader("Authorization", appConfig.token);
      request.setRequestHeader("SPA_ENV_NAME", JSON.stringify(envVars));
    },
    url: appConfig.spaEnvServerURL,
    processData: false
  });

  request.done(function (msg) {
    $("#envText").text(JSON.stringify(msg, null, "  "));
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("Request failed: " + textStatus);
    console.log(jqXHR);
  });
}

