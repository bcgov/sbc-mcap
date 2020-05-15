const initCobrowse = function () {
	console.log("initCobrowse called");
	// isBrowserSupported is defined in assist.js, so we know it's loaded.
	if (AssistSDK.isBrowserSupported && AssistSDK.isBrowserSupported()) {
		// These config items are set in appConfig.js
		window.agentIdVar = appConfig.agentId;
		window.videoAssistUrl = appConfig.videoAssistUrl;
		AssistBoot.addAssistBehaviour();
		AssistBoot.startAssistDialog();
	}
};
