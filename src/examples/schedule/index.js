$(document).ready(() => {
  $("#statusButton").on("click", showStatus);
});

const showStatus = function () {
  const url =
    "https://mcap-schedule-3a0694-test.apps.silver.devops.gov.bc.ca/api/status/SBC_WebChat";

  $.ajax({
    url: url,
    dataType: "json",
    success: function (result) {
      alert("Data Loaded: " + result);
    },
  });
};
