$(function () {

  const appConfig = {
    videoAssistUrl: "https://video-poc1.maximusbc.ca",
    agentId: "sip:7783727966@aaa.qaz",
  };

  window.agentIdVar = appConfig.agentId;
  window.videoAssistUrl = appConfig.videoAssistUrl;
  
  AssistBoot.addAssistBehaviour();

  $("#start").on("click", () => {
    $("#assist-modal-help").modal("show");
  });

});


