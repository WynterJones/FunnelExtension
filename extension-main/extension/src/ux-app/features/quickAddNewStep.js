chrome.extension.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // grab funnel id
        const pageURL = window.location.href;
        const funnel_id = pageURL.replace("https://", "").split("/")[2];

        // grab auth token from <head>
        const auth_token = document
          .querySelector('meta[name="csrf-token"]')
          .getAttribute("content");

        // build html form
        const hiddenForm = `<form id="tfe_quickAddForm" style="display: none !important;" action="/funnel_steps" accept-charset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="✓">
        <input type="hidden" name="authenticity_token" value="${auth_token}">
        <input type="hidden" value="${funnel_id}" name="funnel_step[funnel_id]" id="funnel_step_funnel_id">
        <input required="required" aria-required="true" placeholder="Name Of Your Page..." type="text" name="funnel_step[name]" value="Untitled">
        <input value="1" type="hidden" name="funnel_step[in_funnel]">
        <input type="text" name="funnel_step[path]" id="funnel_step_path">
      </form>`;

        // add hidden form to page
        const hiddenFormContainer = document.createElement("div");
        hiddenFormContainer.innerHTML = hiddenForm;
        document
          .querySelector(".funnelSideStepAddNewPage")
          .appendChild(hiddenFormContainer);

        // make a button and add to page
        const quickAddFunnelStep = document.createElement("div");
        quickAddFunnelStep.innerHTML = `<a href="#" class="addNewFunnelStep tfe_quickAddFunnelStep" style="pointer: cursor !important">
        <i class="fa fa-bolt"></i>
        Quick Add New Step
      </a>`;
        document
          .querySelector(".funnelSideStepAddNewPage")
          .appendChild(quickAddFunnelStep);

        // add click event that submits the form with defaults:
        // name: "Untitled"
        // path: auto
        // in_funnel: true
        document
          .querySelector(".tfe_quickAddFunnelStep")
          .addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            document.querySelector("#tfe_quickAddForm").submit();
          });
      }
    }
  });
});
