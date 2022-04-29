chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // replace logo with white version
        document
          .querySelector(
            "body > div.ui.equal.width.grid.cf-fill-height > div.ui.two.column.cf-no-padding > div > img"
          )
          .setAttribute(
            "src",
            "https://goto.clickfunnels.com/hosted/images/uploads/digital_asset/file/176633/clickfunnels-logo-white.svg"
          );
        document
          .querySelector(
            "body > div.ui.equal.width.grid.cf-fill-height > div.ui.two.column.cf-no-padding > div > img"
          )
          .setAttribute("style", "display: block !important");
      }
    }
  });
});
