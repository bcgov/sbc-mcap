//By waiting for document.ready, we know the previous two JS files have loaded. 
$(function (event) {
    console.log("Page loaded")
    addScript('https://video-poc1.maximusbc.ca:8443/assistserver/sdk/web/consumer/assist.js');
    $('#cobrowse').on('click', initCobrowse);
});

//Load a remote JS file 
function addScript(url) {
    console.log("adding script: ", url);
    var element = document.createElement('script');
    element.setAttribute('src', url);
    document.head.appendChild(element);
}

function initCobrowse() {
    console.log('initCobrowse called');
    //isBrowserSupported is defined in assist.js, so we know it's loaded. 
    if (AssistSDK.isBrowserSupported && AssistSDK.isBrowserSupported()) {
        // These are set in appConfig.js
        window.agentIdVar=appConfig.agentId;
        window.videoAssistUrl=appConfig.videoAssistUrl;
        AssistBoot.addAssistBehaviour();
        AssistBoot.startAssistDialog();
    }
} 