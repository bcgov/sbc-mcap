## CoBrowse Simple Example Page

This is a basic single file example for how to open a CoBrowse session.

*Note: 
A web page with a CoBrowse function MUST be available on the internet to function correctly. If you try to run or test a cobrowse page on localhost it will not function.  For development purpose you will have to use something like "ngrok" or "localtunnel" to obtain a temporary public url in order to test and run the code.  Fortunately this is very easy and both of these are node modules that can be installed using npm or yarn.

## Running the CoBrowse Demo page
- install localtunnel or similar proxy.  `npm i -g localtunnel`
- Start any http server to serve the page.   `npx http-server`
- Start localtunnel.  `lt --port <http server port>`
- browse to the url provided by the proxy
- Click on the "Start a Session" button or the floating "Get Live Help" icon

If you clicked on the button and nothing happened there is a good chance that you are not using a public url to access this page.  See the node above regarding using a public proxy

The file `index.html` is the `"hello world"` equivalent of a CoBrowse.  It contains the bare minimum to open up a CoBrowse dialog in a 'popup' frame.  In this file is a single button with a `onClick` handler which will start a CoBrowse session. The asociated `index.js` file is loaded by `index.html` and handles initialization of CoBrowse. 

