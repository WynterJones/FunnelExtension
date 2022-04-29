chrome.extension.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      console.log("Hello from CF Editor Apps Chrome Extension - UX");

      // remove tooltips (opinionated, also sometimes hard to see)
      document.querySelectorAll("a").forEach((link) => {
        link.removeAttribute("data-tooltip");
      });
    }
  });
});
