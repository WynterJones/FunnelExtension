chrome.extension.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // rearrange UI
        const salesActivity = document.querySelector(".sales-activity");
        const affiliateStats = document.querySelector(".affiliate-earnings");
        document.querySelector(".sales-activity").remove();
        document.querySelector(".affiliate-earnings").remove();

        salesActivity.style.display = "block";
        affiliateStats.style.display = "block";

        document
          .querySelector(".follow-up-funnels-stats")
          .insertAdjacentHTML("afterEnd", salesActivity.outerHTML);
        document
          .querySelector(".follow-up-funnels-stats")
          .insertAdjacentHTML("afterEnd", affiliateStats.outerHTML);
      }
    }
  });
});
