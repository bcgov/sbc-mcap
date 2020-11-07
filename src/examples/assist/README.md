## Live Assist Simple Example Page

This is a basic single file example for how to open a Live Assist session.
You can run this from any http server or even as a local file directly from your browser. 

To use:
1. Open index.html with your browser
2. Click the "Start Web Chat" button
3. Select "Call Support and then share" for Video Chat
4. Select "Already on the call, want to share" for Co-Browse

The file `index.html` is the `"hello world"` equivalent of a Live Assist.  It contains the bare minimum to open up a Live Assist dialog in a 'popup' frame.  In this file is a single button with a jQuery `click` listener to which will bring up the Live Assist dialog. This dialog is identical to that displayed in the SPA Demo page and is built into the example SDK.  The asociated `index.js` file is loaded by `index.html` and handles initialization of Live Assist as well as the `click` handler on the button. 

Clicking the button in this example simply makes the Live Assist dialog visible with the following line:<br>
`$("#assist-modal-help").modal("show");`

## Live Assist SDK
The following two files make up the Live Assist  SDK. These files are included in this project and you can edit and experiment with them to change things like the dialog text, etc.
  - assist-support.js  
  - short-code-assist.js

These files in turn have several remote dependancies. These are included in `index.html`. 

## Running the Live Assist Demo page

You can  open the Live Assist example page from within the node.js mini web server application included with the SPA Demo page.  Simply start that node app and navigate to: http://localhost:8080/assist/ 

Note, depending on the time of day and other factors, the Video Chat window may not open immediately. It may take a couple of tries for it to respond.

## Start Assistance Button

The Start Assistance button on this example page is attached to a jQuery click handler in the jQuery startup function in main.js.  All the click handler does is make the Live Assist dialog visible so the user can select Video Chat or Co-Browse

## Read Remote Env Button

The Read Remote Environment button on this example page is attached to a jQuery click handler in the jQuery startup function in main.js.  This click handler fetches the current values of the environment variables from the Remote Environment Server. These are the same environment variables that are needed to initialize Web Chat and Live Assist which means, given the env server url and its auth token, you can retrieve everything else you need from the remote environment server.  This is what the Assist SDK does on startup.  This environmemt server also reports if the webchat and live assist services are currently open or "after hours  (SPA_ENV_MCAP_MAINTENANCE_FLAG)