# ServiceBC Multi-Channel Access Pages (MCAP)

This project contains examples of how to build web pages that can implement Service BC Multi-Channel Contact centre functions. The three functions demonstrated in this project are:
- Web Chat - Web Chat is a method for citizens to chat online with an SBC representative to assist in Government Services.

- Live Assist (Video Chat) - Video Chat is a method for citizens to video chat with an SBC representative to assist in Government Services.

- Live Assist (Co-Browse) - Co-Browse is an online function to provide the citizen the ability to share their screen with a SBC representative.

<iframe id="MCAPDemo"
    title="MCAP Demo SPA"
    width="300"
    height="200"
    src="https://mcap-dev.pathfinder.gov.bc.ca/">
</iframe>

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

Q. What platforms, operating systems or servers would I need to have my own page that uses MCAP (web chat and/or live assist)?

>There is no specific requirement for the environment on which you can host your own MCAP-capable pages.  All that it needed is a system that can serve web pages to the user.  Examples would be Apache Web Server, NGinx or even IIS.

Q. What platforms, operating systems or servers does the MCAP Single Page App run under?

>The SPA is a node.js app and will run on any computer or server with node.js installed.  

Q. Do i need to run a node.js server in order to write or run my own MCAP pages?

>No.  As described in the Demo SPA README, node.js is only used in the SPA to initialize some environment settings for the SPA before it loads, but is not needed to write or run your own MCAP page.  The SPA is using just one of several possible methods to initialize the required url's and keys needed for an MCAP page



Q. is there a public facing server that hosts the MCAP Demo SPA so I can preview it?

>There is a copy of the MCAP Demo SPA ruuning here <br>
 https://mcap-dev.pathfinder.gov.bc.ca/

