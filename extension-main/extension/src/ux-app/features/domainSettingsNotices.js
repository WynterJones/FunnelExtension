chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // check if root domain page is not selected
        if (document.querySelector("#domain_root_page_id").value === "") {
          const notice = document.createElement("div");
          notice.innerHTML = `<div class='tfe_notification_wrapper' style="margin: 20px 0;">
          <p><strong>Notice:</strong> You need to select a default funnel for your domain. Otherwise your just driving free traffic to ClickFunnels. 😳 </p>
          
        </div>`;
          document
            .querySelector(
              "#cf-layout-standard > div > div.ui.accordion.cf-settings > div:nth-child(1)"
            )
            .appendChild(notice);
          document
            .querySelector(
              "#cf-layout-standard > div > div.ui.accordion.cf-settings > div:nth-child(1) > div.ui.basic.right.floated.button.expand"
            )
            .click();
        }

        // check if 404 page not selected
        if (document.querySelector("#domain_error_page_id").value === "") {
          const notice = document.createElement("div");
          notice.innerHTML = `<div class='tfe_notification_wrapper' style="margin: 20px 0;">
          <p><strong>Notice:</strong> You need to select a 404 (error) funnel for your domain. Otherwise your just driving free traffic to ClickFunnels. 😳 </p>
          
        </div>`;
          document
            .querySelector(
              "#cf-layout-standard > div > div.ui.accordion.cf-settings > div:nth-child(4)"
            )
            .appendChild(notice);
          document
            .querySelector(
              "#cf-layout-standard > div > div.ui.accordion.cf-settings > div:nth-child(4) > div.ui.basic.right.floated.button.expand"
            )
            .click();
        }
      }
    }
  });
});
