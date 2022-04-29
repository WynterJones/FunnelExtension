chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        const userEmail = document.querySelector(
          "body > div.main > div.container > div > div.funnelViewBlock > div.funnelViewInformation > div > div:nth-child(2) > div:nth-child(2) > div > dl > dd:nth-child(4) > a"
        ).textContent;
        const salesTotal = document.querySelector(
          `body
          > div.main
          > div.container
          > div
          > div.funnelViewBlock
          > div.funnelViewInformation
          > div
          > div:nth-child(3)
          > div
          > div
          > div.panel-body
          > table
          > tfoot strong`
        ).textContent;

        document.querySelector(
          "body > div.main > div.container > div > div.funnelHeaderWrapper.clearfix > div.funnelHeaderNameAndIcon.pull-left.clearfix > div.funnelHeaderName.pull-left > span > b"
        ).innerHTML = `Transaction for <span style="font-weight: normal !important;display:inline!important;">${userEmail}</span>`;

        var totalDiv = document.createElement("div");
        totalDiv.innerHTML = `<div style="position: absolute;
        top: 54px;
        right: 20px;
        font-size: 29px;"><span style="opacity: 0.4;display: inline !important;">Total:</span> ${salesTotal}</div>`;
        document
          .querySelector(
            "body > div.main > div.container > div > div.funnelHeaderWrapper.clearfix > div.funnelHeaderNameAndIcon.pull-left.clearfix > div.funnelHeaderName.pull-left"
          )
          .appendChild(totalDiv);
      }
    }
  });
});
