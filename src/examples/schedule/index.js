$(document).ready(() => {
  $("#statusButton").on("click", showStatus);
});

const BASEURL = "https://mcap-schedule-3a0694-test.apps.silver.devops.gov.bc.ca/api/status/";
const BASELOCAL = "http://localhost:8080/api/status/";

const showStatus = function () {
  const code = $("#code").val();
  const url = BASELOCAL + code;

  console.log(url);

  $.ajax({
    url,
    dataType: "json",
    success: function (result) {
      console.log(result);
      $("#statusText").html(result.status);
    },
  });
};
