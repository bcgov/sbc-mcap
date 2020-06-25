# Webchat example code

### index.html

This is a basic single file example for how to open a webchat session
You can run this from any http server or even as a local file directly from your browser. It requires no Javascript for its basic operation although you may decide to add your own scripting for enhanced features.
A webchat session must be started with an http POST request as shown in the code.  It is possible to wrap a POST in a GET as shown in the autopost example below.

To use:
1. Edit the "action" attribute of the form element if needed.
2. Open index.html with your browser.
3. Click the "Start Webchat" button

## Description

The file `index.html` is the `"hello world"` equivalent of a WebChat page.  It contains the bare minimum to open up a webchat session in a 'popup' frame.  A WebChat session can be started from an http POST with the parameters shown in the file. The `form` is an example of the sort of POST that is required to start webChat. You will notice that no javascript files are required to start a webchat session. All that is required is a POST to the specified url.

The file `autopost.html` is identical to `index.html` but has some added javascript code to automatically perform the `submit` action on the form rather than requiring a user to press `Submit`.  It could be used in cases where a simple html link was desired rather than a form.  It performs exactly the same function as `index.html` but just posts immediately when loaded

The file `index-auto.html` is an example of how one might use `autopost.html`.  It is self documenting 

