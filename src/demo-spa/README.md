# MCAP Single Page Demo App (src/demo-spa)

This sub-project a Single Page Application (SPA) "Contact Us" page written with JQuery and Bootstrap so demonstrate a full user experience page.  It contains links functions that are the core of MCAP.  Many of the links on this page are just placeholders and have no real functions.  Some familiarity with jQuery and Bootstrap is required to use and modify this SPA. In this readme we will cover how to setup your local environment to edit and run this SPA.  The page will be available at the following local url:<br>
http://localhost:8080/<br>

This example page requires good familiarity with web page development including html, css and javascript.  This application also makes extensive use of the JQuery javascript library Bootstrap CSS.  You do not need to be an expert in Bootstrap but you should have JQuery experience to understand what its doing.

## Installing the Project Locally
To install this project on your local development environment simple perform the following steps:
- ensure you have node.js installed. v10.x or higher is best
- clone the MCAP project
- from the terminal change to the SPA directory: `#cd sbc-mcap/src/demo-spa`
- install the required node modules `#npm install`
- ensure you have the required enviroment variables set (see below)
- run the node app that serves the static pages `#node index.js`

## Included Web Server Application Description
`index.js` is a small node.js web server application that simply serves the static files of the SPA demo application.  It is not a part to the SPA Demo but simply a convenience web server to allow you to serve the SPA demo page locally.  All this application does is read a few environmment variables and writes them to a `serverconfig.js` file that the SPA's index.html can load.  You can see that config load by looking in the index.html file itself. This application has no other significance and is only included for convenience of local  development.  The SPA Demo itself is NOT a node.js application.  It is a set of static html, css and js files that can served from any web server.

## Environment Variables
If you choose to use the build in node.js app to serve the SPA Demo files you will need to setup a few enviroment variables before running:

AGENT_ID = use the agent ID provided<br>
SPA_ENV_AUTH_TOKEN = use the auth token provided<br>
VIDEO_ASSIST_URL = https://video-poc1.maximusbc.ca<br>
CHAT_SERVICES_URL = https://testchatservices.maximusbc.ca/Home/Chat<br>
SPA_ENV_SERVER_URL = https://spa-env-server-dev.pathfinder.gov.bc.ca/env<br>

You can also setup a launch config in your Visual Studio Code IDE to set these environment variables at launch.

If you choose to instead have the SPA Demo pages served by a different web server such as Apache or NGinx you can create your own serverconfig.js file used by index.html. You may need to edit the `<script>` tag within index.html depending on the location of your `serverconfig.js` file.  Alternatively you may wish to have the config variables load some other way.  The implementation is completely up to you as long as there is `serverConfig` object available to the SPA.

## Running the SPA Demo page
Once you have the static pages available, either through the development node application or on your own web server, simple browse to the url of the SPA Demo page.  For a localhost setup the url will be http://localhost:8080



<i>Please note the code contained in this project is example code only. This code can be used as a starting 
point for a developing your own production application but is not intended or expected to be 
interpreted as a supported or finished project. </i>


