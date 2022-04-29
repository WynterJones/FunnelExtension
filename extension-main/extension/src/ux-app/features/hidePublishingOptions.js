chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // get full url
        const pageURL = window.location.href;

        // get full step ID from url by spliting it into array
        // and grabbing 4th split of a slash. It makes sense.
        // (would be risky if likely to change URL structure, unlikely)
        const funnelStepID = pageURL.replace("https://", "").split("/")[4];

        // grab the actual type from the sidebar using the specific ID
        const funnelStepDiv = `funnel_step_${funnelStepID}`;
        const theType = document.querySelector(
          `#${funnelStepDiv} .funnelSideStepPageViews`
        ).textContent;

        // check type and if one of the unpublishables than hide bad options.
        switch (theType.trim()) {
          case "Order Form":
            hideBadOptions();
            break;
          case "Order":
            hideBadOptions();
            break;
          case "Order Confirmation":
            hideBadOptions();
            break;
          case "OTO Page":
            hideBadOptions();
            break;
          case "OTO Downsale Page":
            hideBadOptions();
            break;
          case "Webinar Broadcast Room":
            hideBadOptions();
            break;
          case "Webinar Replay Room":
            hideBadOptions();
            break;
        }

        // modify bad options
        // index 2 = wordpress
        // index 4 = embed
        // index 5 = download
        function hideBadOptions() {
          const getAllOptions = document.querySelectorAll(
            ".innerAdvancedOptions"
          );

          getAllOptions.forEach((option, index) => {
            if (
              index === 0 ||
              index === 1 ||
              index === 2 ||
              index === 3 ||
              index === 4 ||
              index === 5
            ) {
              option.style.opacity = "0.4";
            }
          });

          showNotification();
        }

        // show notice on page
        function showNotification() {
          const notification = document.createElement("div");
          notification.innerHTML = `<div>
      <div class='tfe_notification_wrapper' style="margin: 0 15px;margin-top: 20px;position:relative;">
        <p><strong>Notice:</strong> We've hidden some publishing options that are not applicable to this <strong>${theType}</strong> page type. You are free to use the greyed out options, but be warned, they will not work. 🤓 </p>
      </div>
      </div>`;
          document
            .querySelector(".accountSettingsInner_inputs")
            .appendChild(notification);
        }

        hideBrokenFBButton();
        function hideBrokenFBButton() {
          const getAllOptions = document.querySelectorAll(
            ".innerAdvancedOptions"
          );

          getAllOptions.forEach((option, index) => {
            if (index === 3) {
              option.style.opacity = "0.4";
              const html = document.createElement("div");
              html.innerHTML = `<div>dfsdf</div>`;
              option.querySelector(
                "p"
              ).innerHTML = `<div style="font-weight:bold">Notice: This feature does not work for all users.</div>`;
            }
          });
        }
      }
    }
  });
});
