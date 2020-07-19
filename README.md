# ServiceBC Multi-Channel Access Pages (MCAP)

This project contains examples of how to build web pages that can implement Service BC Multi-Channel Contact centre functions. The three functions demonstrated in this project are:
- Web Chat - Web Chat is a method for citizens to chat online with an SBC representative to assist in Government Services.

- Live Assist (Video Chat) - Video Chat is a method for citizens to video chat with an SBC representative to assist in Government Services.

- Live Assist (Co-Browse) - Co-Browse is an online function to provide the citizen the ability to share their screen with a SBC representative.

You can run all these application locally on your computer. Instructions for doing so are included in the `README.MD` file included in each sub-project.  No special infrastructure or software is required. They can all be run using readily available free software, well-known to all web developers, such as Visual Studio Code, node.js, etc.  Most of the example applications can be run directly from a browser with no additional software at all.

All of the example pages contained herein require familiarity with web page development including html, css and javascript.  Familiarity with the JQuery javascript library would be very useful as well as some minimal understanding of Bootstrap CSS, although that is not as important unless you want to modify the look and feel of the underlying controls.

#### MCAP Single Page Demo App (src/demo-spa)
  This is a Single Page Application (SPA) "Contact Us" page written with JQuery and Bootstrap to demonstrate a full user experience page.  It contains links to the 3 functions that are the core of MCAP.  Many of the links on this page are just placeholders and have no real functions.  Some familiarity with jQuery and Bootstrap is required to use and modify this SPA.



  #### Simple html-based examples (src/examples)
  There are two simplified example applications:
  - Web Chat
  - Live Assist (both Video Chat and Co-Browse)

Both of these example sub-projects contain the minimal html/css/javascript required to implement each of the MCAP functions they demonstrate.  These examples do not require node.js or any other infrastructure to run.  They can be run directly from a browser or placed on any web server and used directly.  For more information please refer to the `README.MD` in each sub-project.


Please note the code contained herein is example code only. This code can be used as a starting 
point for developing your own production application but is not intended or expected to be 
interpreted as a supported or finished project. 

### Prerequisites

In order to setup Web Chat or Live Assist (Video Chat and Co-Browse), the following information is required from MAXIMUS Canada:
- Agent Skill / Reason Code - This is a dedicated queue assigned by Maximus to SBC for the purpose of replicating the functionalites of Web Chat and Live Assist.
- MCAP URL - This is a URL (depending on the environment required - Test or Production) that is required in the form template in order to gain access to Web Chat or Live Assist. This URL will be provided by Maximus when required.

### FREQUENTLY ASKED QUESTIONS (FAQ) 

Q. What platforms, operating systems or servers will I need to host my own page that uses the MCAP functions (web chat and/or live assist)?

>There is no specific requirement for the web environment on which you can host your own MCAP-capable pages.  All you need is a system to serve web pages to the user.  Commonly used platforms are Apache Web Server, NGinx or even IIS.  You can even write your own web server such as in the Demo SPA, which includes its own server written in node.js

Q. What platforms, operating systems or servers does the MCAP Single Page App run under?

>The SPA has its own built-in web server and runs as a node.js app.  It will run on any system with node.js available.  

Q. So do I need to run a node.js server in order to write or host my own MCAP pages?

>No. The SPA is simply an example of writing your own web server to serve an MCAP page. It also shows just one of several possible ways to initialize the required url's and keys needed for an MCAP page. The other examples in this repository do not include a built-in web server and would need to be hosted on one.

Q. Is there a public facing server that hosts the MCAP Demo SPA where I can preview it?

>There is a copy of the MCAP Demo SPA ruuning here <br>
 https://mcap-dev.pathfinder.gov.bc.ca/ <br>
 Please note that this is a demo site only and the contents may change without notice as code is modified or features added.  

Q. What do I need to write my own MCAP-capable pages or apps

>You will need a computer, of course, and your choice of code editing software, such as Microsoft Visual Studio Code, installed. You will need Git if you want to clone this project. You should have node.js available if you want to run the Demo SPA application with its built-in web server or want to write your own server code. More specific details on what libraries you need for each MCAP function is included in the example folder for each function

Q. How do I create a web page that has the WebChat or Live Assist function ?

>The best place to start would be with the code in the examples directory of this repository. They are stripped down pages with little more than the essentials needed for each function.  You can modify those pages and add your own content.

Q. How do I determine the "hours of operation" of the webchat & live assist services?

>Hours of Operation are determined by a single Web Service call.  An example of this is shown in the Live Assist example code.  The `SPA_ENV_MCAP_MAINTENANCE_FLAG` variable returned from that server determines if services are open.  This feature will be updated in future web service releases to include more granular hours of operation information.

Q. What is that `openshift` directory for?

>That just contains some deployment file needed to deploy the MCAP Demo page to an OpenShift server.  You can mostly ignore it unless you are interested in deploying to OpenShift.