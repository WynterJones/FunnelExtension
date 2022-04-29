chrome.extension.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        const url = new URL(window.location);
        const domain_id = url.searchParams.get("domain_id");

        // set localstorage for domain id and timestamp (used on domain list page)
        localStorage.setItem(
          `tfe_domain_verified_timestamp_${domain_id}`,
          new Date().getTime()
        );

        // put notice about selecting default page
        const addDefaultPageNotice = document.createElement("div");
        addDefaultPageNotice.innerHTML = `<div class='tfe_notification_wrapper' style="margin: 20px 0;">
        <p><strong>Warning:</strong> You need to select a default funnel for your domain. Otherwise you are giving away free traffic to ClickFunnels without your affiliate link! 😳 By adding a default page this page will also be the 404 / error page. </p>
        
      </div>`;
        document
          .querySelector(
            "#cf-layout-standard > div > div > div > div.twelve.wide.column > div:nth-child(3) > h5"
          )
          .appendChild(addDefaultPageNotice);
      }
    }
  });
});

function displayTime() {
  var str = "";

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  str += hours + ":" + minutes + ":" + seconds + " ";
  if (hours > 11) {
    str += "PM";
  } else {
    str += "AM";
  }
  return str;
}
