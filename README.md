# ServiceBC Multi-Channel Access Pages (MCAP)

This project contains examples of how to build web pages that can implement Service BC Multi-Channel Contact functions. The three functions demonstrated in this project are:
- Web Chat
- Live Assist - video chat
- Live Assist - co-browswe

You can run all these application locally on your computer. Instructions for doing so are included in the `README.MD` file included in each sub-project.  No special infrastructure or software is required. They can all be run using readily available free software, well-known to all web developers, such as Visual Studeo Code, node.js, etc.  Most of the example applications can be run directly from a browser with no additional software at all.

All of the example pages contained herein require familiarity with web page development including html, css and javascript.  Familiarity with the JQuery javascript library would be very useful as well as some minimal understanding of Bootstrap CSS, although that is not as important unless you want to modify the look and feel of the underlying controls.

#### MCAP Single Page Demo App (src/demo-spa)
  http://localhost:8080/<br>
  This is a Single Page Application (SPA) "Contact Us" page written with JQuery and Bootstrap so demonstrate a full user experience page.  It contains links to the 3 functions that are the core of MCAP.  Many of the links on this page are just placeholders and have no real functions.  Some familiarity with jQuery and Bootstrap is required to use and modify this SPA.



  #### Simple html-based examples (src/examples)
  There are two simplified example applications:
  - Web Chat
  - Live Assist (both video and co-browse)

Both of these example sub-projects contain the minimal html/css/javascript required to implement each of the MCAP functions they demonstrate.  These example do not require node.js or any other infrastructure to run.  They can be run directly from a browser or placed on any web server and used directly.  For more information please refer to the `README.MD` in each sub-project.


Please note the code contained herein is example code only. This code can be used as a starting 
point for a developing your own production application but is not intended or expected to be 
interpreted as a supported or finished project. 


