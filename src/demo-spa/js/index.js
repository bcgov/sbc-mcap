var EXPAND_CLASS = "expanded";
var MOBILE_MAX_WIDTH = 767; //px

chatServicesUrl = "";

var envVars = {
  SPA_ENV_MCAP_MAINTENANCE_FLAG: "",
  SPA_ENV_MCAP_MAINTENANCE_MESSAGE: "",
  SPA_ENV_MCAP_CHAT_SERVICES_URL: ""
};

$(function () {
  // Hide maintenance section on start
  $("div#maintenance").hide();

  // console.log('ChatServicesUrl=' + chatServicesUrl);

  if (chatServicesUrl) {
    $(".chatpopup").attr("action", chatServicesUrl);
  }
  $("#main-content .collapse").on("show.bs.collapse", onExpandSection);

  // Close collapsible sections when clicking outside.
  $("body").on("click", function () {
    //Improvement: Only do for desktop? Check MOBILE_MAX_WIDTH?
    $("#main-content .collapse.in").collapse("hide");
  });

  $("#main-content .collapse").on("click", function (e) {
    console.log("dropdown body clicked");
    e.stopPropagation();

    //Don't stop event if it's form  fission
    if (e.target.type === "submit") return true;
    if (e.target.href) return true;
    return false;
  });

  $.get("/api/env", function (data) {
    console.log(data);
    // $(".result").html(data);
  });

});

function readEnvironment() {
  console.log("Loading Environment from ENV_SERVER");

  var request = $.ajax({
    type: "POST",
    url: serverConfig.spaEnvServerURL,
    processData: false,
  });

  request.done(function (msg) {
    // Comment these lines if you don't want this logged
    console.log(msg);
    console.log("Maintenance: " + msg.SPA_ENV_MCAP_MAINTENANCE_FLAG);
    console.log("Chat services: " + msg.SPA_ENV_MCAP_CHAT_SERVICES_URL);

    // Note: Uncomment this if you want to disable after hours or maintenance mode
    // If NOT in maintenance mode
    // if (msg.SPA_ENV_MCAP_MAINTENANCE_FLAG == 'true') {
    //     $("div#pagecontentid").hide();
    //     $("div#maintenance").show();
    //     $("#maintNotice").text(msg.SPA_ENV_MCAP_MAINTENANCE_MESSAGE);
    // }
    // else
    {
      assistjs_url = msg.SPA_ENV_MCAP_ASSISTJS_URL;
      chatServicesUrl = msg.SPA_ENV_MCAP_CHAT_SERVICES_URL;
      window.agentIdVar = msg.SPA_ENV_MCAP_AGENT_ID;
      window.videoAssistUrl = msg.SPA_ENV_MCAP_VIDEO_ASSIST_URL;

      // console.log('agent ID:' + window.agentIdVar + "----assist js url-------" + assistjs_url + '--chatServicesUrl:' + chatServicesUrl + '-- videoAssistUrl:' + window.videoAssistUrl);
      $("div#maintenance").hide();
      $("div#pagecontentid").show();
    }
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("Request failed: " + textStatus);
    console.log("default values are assigned: ");
  });
}

function scrollTo($el, scrollTime) {
  if (!scrollTime) scrollTime = 500;
  setTimeout(function () {
    $("html, body").animate(
      {
        scrollTop: $el.offset().top - 75,
      },
      scrollTime
    );
  }, 250);
}

function onExpandSection() {
  //1. Make sure it's full-width (for desktop breakpoints)
  //2. Make sure it starts at the left (matching #main-content)
  // console.log("expand");

  //Close all others
  if ($("#main-content .collapse.in").length) {
    $("#main-content .collapse").collapse("hide");
  }

  //Full width
  var position = $("#main-content").position().left - $(this).position().left;
  var position = position + 45; //account for #main-content padding
  var baseWidth = parseInt($("#main-content").css("width"), 10);
  var width = baseWidth - position;
  $(this).css("width", width);

  //Start on left matching #main-content
  if ($(window).width() > MOBILE_MAX_WIDTH) {
    var mainOffset = $("#main-content").offset().left;
    // let dataParent = $(this).attr('data-parent');
    var parent = $(this).parents(".sbc-section");
    if (parent.length) {
      var parentOffset = $(this).parents(".sbc-section").offset().left;
      // var parentOffset = dataParent ? $(dataParent).offset().left  : $(this).parents('.sbc-section').offset().left
      var offset = mainOffset - parentOffset;
      offset += 15; //account for padding
      $(this).css("left", offset);
    }
  }
}
