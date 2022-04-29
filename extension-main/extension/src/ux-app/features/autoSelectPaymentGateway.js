chrome.extension.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        document
          .querySelector(
            "input[name='funnel_steps_products_billings_form[billing_integration]']:nth-child(1)"
          )
          .setAttribute("checked", "true");
        document
          .querySelector(
            "#new_funnel_steps_products_billings_form > div:nth-child(3) > div > a:nth-child(1)"
          )
          .classList.add("active");
      }
    }
  });
});
