## Live Assist Simple Example Page

This is a basic single file example for how to open a live asssist   session
You can run this from any http server or even as a local file directly from your browser. 

To use:
1. Open index.html with your browser.
2. Click the "Start Webchat" button
3. Select "Call Support and then share" for video chat
4. Select "Already on the call, want to share" for cobrowse

The file `index.html` is the `"hello world"` equivalent of a Live Assist.  It contains the bare minimum to open up a Live Assist dialog in a 'popup' frame.  In this file is a single button with a jQuery `click` listener to which will bring up the live assist dialog. This dialog is identical to that displayed in the SPA Demo page and is built into the example SDK.  The asociated `index.js` file is loaded by `index.html` and handles initialization of Live Assist as well as the `click` handler on the button. 

Clicking the button in this example simply makes the Live assist Dialog visible with the following line:<br>
`$("#assist-modal-help").modal("show");`

## Live Assist SDK
The following two files make up the Live Assist  SDK. These files are included in this project and you can edit and experiment with them to change things like the dialog text, etc.
  - assist-support.js  
  - short-code-assist.js

These files in turn have several remote dependancies. These are included in `index.html`. 

## Running the Live Assist Demo page

You can  open the Live Assist example page from within the node.js mini web server application included with the SPA Demo page.  Simple start that node app and navigate to: http://localhost:8080/assist/ 

Note.  Depending on the time of day and other factors, the video window may not open immediately. It may take an couple of tries for it to respond.

## Start Assistance Button

The Start Assistance button on this example page is attached to a jQuery click handler in the jQuery startup function in main.js.  All the click handler does is make the Live Assist Dialog Visible so the user can select Video Chat or CoBrowse

## Read Remote Env Button

The Read Remote Env button on this example page is attached to a jQuery click handler in the jQuery startup function in main.js.  This click handler fetches the current values of the environment variables from the Remote Environment Server. These are the same environment variables that are needed to initialize WebChat and Live Assist which means, given the env server url and its auth token, you can retrieve everything else you need from the remote environment server.  This is what the Assist SDK does on startup.
