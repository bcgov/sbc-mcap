const appConfig = {
  videoAssistUrl: "https://video-poc1.maximusbc.ca",
  agentId: "sip:7783727966@aaa.qaz",
};

$(function () {

  window.agentIdVar = appConfig.agentId;
  window.videoAssistUrl = appConfig.videoAssistUrl;

  console.log(AssistSDK);

  if (!AssistSDK) {
    console.error("startAssistDialog error, AssistSDK is not defined.");
  }

  if (!AssistSDK.isBrowserSupported) {
    console.error("startAssistDialog error, AssistSDK.isBrowserSupported is not defined.");
  }

  AssistBoot.addAssistBehaviour();

  $("#start").on("click", () => {
    $("#assist-modal-help").modal("show");
  });

});


