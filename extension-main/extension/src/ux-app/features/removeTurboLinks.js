chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // remove flippin turbolinks
        document.querySelectorAll('[data-turbolinks="true"]').forEach((e) => {
          e.removeAttribute("data-turbolinks");
        });
      }
    }
  });
});
