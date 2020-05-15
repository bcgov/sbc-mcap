const appConfig = {
	videoAssistUrl: "https://video-poc1.maximusbc.ca",
	agentId: "agent1"
};

const initCobrowse = function () {
	console.log("initCobrowse called");
	// AssistSDK is defined in assist.js, so we know it's loaded.
	if (AssistSDK && AssistSDK.isBrowserSupported()) {
		window.agentIdVar = appConfig.agentId;
		window.videoAssistUrl = appConfig.videoAssistUrl;
		AssistBoot.addAssistBehaviour();
		AssistBoot.startAssistDialog();
	}
};
