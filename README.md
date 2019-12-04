# moh-mcap
ServiceBC Multi-Channel Access Page.

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

## Hours of Operations - Web Chat

In your application you would want to disable web chat operations outside of the hours of operations, both daily and on holidays.

There exists a simple REST api to obtain this information.  Before allowing your web chat function, you will need to make a GET REST call to get the status of the availabity of web chat through our server.

The endpoint of the HTTP GET call and its format is:

    http://[WebChatHost].maximusbchealth.local:91/api/skill/status/[WebChatToken]
    
Please contact HIBC to obtain the WebChatHost and WebChatToken values.

If the REST call is successful, you will receive an HTTP status of 200, along with the following JSON payload (if during business hours):

    {"status":"open"}
    
Outside of business hours, you will receive:

    {"status":"closed"}

If you cannot connect to the server, the HTTP status will indicate the error number instead of 200.

## Hours of Operations - CoBrowse

Since CoBrowse requires you to be on the call first, you will not need any additional programming for hours of operations.  The voice call will let you know if you are calling outside of business hours.

