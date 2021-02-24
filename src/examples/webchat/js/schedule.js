// This code is only used to check the webchat open/closed status
// it is not needed for core Webchat functionality
(function () {
  const URL = "https://mcap-schedule-3a0694-test.apps.silver.devops.gov.bc.ca/api/status/SBC_WebChat";

  axios.get(URL)
    .then(res => {
      const schedule = res.data;
      // console.log(`status`, schedule);
      const closed = schedule.status === "closed";

      const buttons = document.querySelectorAll('button');
      for (const button of buttons) {
        // Uncomment this to have the buttons disabled if closed
        // button.disabled = closed;
      }
      const div = document.querySelector('.schedule');
      div.innerHTML = "Service " + schedule.status;
    })
    .catch(error => console.error(error));

})();   // Runs this function once when page loads
