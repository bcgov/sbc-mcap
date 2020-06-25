const appConfig = {
  videoAssistUrl: "https://video-poc1.maximusbc.ca",
  agentId: "sip:7783727966@aaa.qaz",
};

// Run when page has finished loading
$(function () {

  window.agentIdVar = appConfig.agentId;
  window.videoAssistUrl = appConfig.videoAssistUrl;

  if (!AssistSDK.isBrowserSupported()) {
    alert("Your browser is not supported");
  }
  else {
    AssistBoot.addAssistBehaviour();
  }

  $("#start").on("click", () => {
    $("#assist-modal-help").modal("show");
  });

});


