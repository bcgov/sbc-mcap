# moh-mcap
BC Ministry of Health Multi-Channel Access Page.

# Setup the environment

## Step 1
	
Import below scripts in your html.
	
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/assist-support.js"></script>    
    <script src="js/main.js"></script>

Library Paths

* src\js\assist-support.js
* src\js\main.js

## Step 2
	
In the main.js file, setup the urls for the serverConfig variable in beginning of the script. 

    var serverConfig = {
      "AssistJSUrl":"https://t1cafex.maximusbc.ca/assistserver/sdk/web/consumer/assist.js",
      "ChatServicesUrl":"https://testchatservices.maximusbc.ca/Home/Chat",
      "agentId":"sip:2504100784@aaa.qaz",
      "videoAssistUrl":"https://t1cafex.maximusbc.ca"
    }
	
## Setup a Chat Button

Goto the main.js file and add you button class at line#58 or in your button click event make sure the action attribute is set to ChatServiceUrl
	
For Example, to open a chat popup in the below HTML add the button class 
![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `chatpopup` in the main.js Line 58 and add the action attribute as a chatServiceUrl

Example HTML
    
      <form target="print_popup" onsubmit="window.open('about:blank','print_popup','width=400,height=400');" 
            method="post" class='form-horizontal chatpopup'>
          <button type="submit">
            Chat
          </button>
        <form>
	

main.js 
	
    $(".chatpopup").attr('action', chatServicesUrl);
	
## Setup a Video Button

Goto assist-support.js and add your button Id at line 77.  
	
For example, to open a video chat, add the button id ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `videoChatBtn` in assist-support.js

Example HTML
	
    <button type="button" id="videoChatBtn" class="btn btn-success btn-lg btn-block">
      Start Video Chat
    </button>

In assist-support.js, addAssistBehaviour method, at Line 77 add the button id.
	
    document.getElementById('videoChatBtn').addEventListener('click', function () 
