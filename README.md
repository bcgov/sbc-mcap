# ServiceBC Multi-Channel Access Pages (MCAP)

This project contains examples of how to build web pages that can implement Service BC Multi-Channel Contact functions. The three functions demonstrated in this project are:
- Web Chat - Web Chat is a method for citizens to chat online with an SBC representative to assist in Government Services.
  * Features
    * API to show application availability
    * Initiate a Web Chat session
  * User
    * Add link to onboarding to SBC Contact Center Service

- Live Assist (Video Chat) - Video Chat is a method for citizens to video chat with an SBC representative to assist in Government Services.
  * Features
    * API to show application availability
    * Initiate a Video Chat session
  * User
    * Add link to onboarding to SBC Contact Center Service
- Live Assist (Co-Browse) - Co-Browse is an online function to provide the citizen the ability to share their screen with a SBC representative.
  * Features
    * API to show application availability
    * Initiate a Co-Browse session
  * User
    * Add link to onboarding to SBC Contact Center Service

You can run all these application locally on your computer. Instructions for doing so are included in the `README.MD` file included in each sub-project.  No special infrastructure or software is required. They can all be run using readily available free software, well-known to all web developers, such as Visual Studio Code, node.js, etc.  Most of the example applications can be run directly from a browser with no additional software at all.

All of the example pages contained herein require familiarity with web page development including html, css and javascript.  Familiarity with the JQuery javascript library would be very useful as well as some minimal understanding of Bootstrap CSS, although that is not as important unless you want to modify the look and feel of the underlying controls.

#### MCAP Single Page Demo App (src/demo-spa)
  This is a Single Page Application (SPA) "Contact Us" page written with JQuery and Bootstrap so demonstrate a full user experience page.  It contains links to the 3 functions that are the core of MCAP.  Many of the links on this page are just placeholders and have no real functions.  Some familiarity with jQuery and Bootstrap is required to use and modify this SPA.



  #### Simple html-based examples (src/examples)
  There are two simplified example applications:
  - Web Chat
  - Live Assist (both Video Chat and Co-Browse)

Both of these example sub-projects contain the minimal html/css/javascript required to implement each of the MCAP functions they demonstrate.  These example do not require node.js or any other infrastructure to run.  They can be run directly from a browser or placed on any web server and used directly.  For more information please refer to the `README.MD` in each sub-project.


Please note the code contained herein is example code only. This code can be used as a starting 
point for developing your own production application but is not intended or expected to be 
interpreted as a supported or finished project. 

### Prerequisites

In order to setup Webchat and Live Assist (video chat and co-browse), the following information is required from MAXIMUS Canada:
- Agent ID
- MCAP Test and Production url



