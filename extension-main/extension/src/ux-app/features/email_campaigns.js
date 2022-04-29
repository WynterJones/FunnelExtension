chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // change title
        document.querySelector(
          "body > div.main > div.container > div > div.funnelHeaderWrapper.clearfix > div.funnelHeaderNameAndIcon.pull-left.clearfix > div.funnelHeaderName.pull-left > span > b"
        ).textContent = "(legacy) Email Campaigns";
      }
    }
  });
});
