chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // create and add button to page
      // const toggleButton = document.createElement("div");
      // toggleButton.innerHTML = `<div id="tfe_togglebutton">
      //     <div><span id="tfe_toggleVanilla">Vanilla <strong class="tfe_togglebutton_progress"></strong></span></div>
      //     <div><span id="tfe_toggleEnhanced">Enhanced  <strong class="tfe_togglebutton_progress"></strong></span></div>
      //   </div>
      //   <div id="tfe_togglebutton_freebie_badge">
      //   <a href="https://funnelextension.com" target="_blank">Powered by TheFunnelExtension.com</a>
      // </div>`;
      // document.querySelector("body").appendChild(toggleButton);

      // hide if frontend cf page or login page
      if (
        document.querySelector("html").classList.contains("clickfunnels-com")
      ) {
        document.querySelector("#tfe_togglebutton").style.display = "none";
        document.querySelector(
          "#tfe_togglebutton_freebie_badge"
        ).style.display = "none";
      }

      // check and set local storage
      const isToggled = localStorage.getItem("tfe_isAppOn");

      // check if doesnt exist, if so set to false
      if (!isToggled) {
        localStorage.setItem("tfe_isAppOn", "false");
        document
          .querySelector("#tfe_toggleVanilla")
          .classList.add("tfe_togglebutton_active");
      }

      if (isToggled && isToggled === "false") {
        document
          .querySelector("#tfe_toggleVanilla")
          .classList.add("tfe_togglebutton_active");
      } else {
        document
          .querySelector("#tfe_toggleEnhanced")
          .classList.add("tfe_togglebutton_active");
        document.querySelector("body").classList.add("tfe_xxx");
      }

      // click button for Vanilla
      document
        .querySelector("#tfe_toggleVanilla")
        .addEventListener("click", (e) => {
          localStorage.setItem("tfe_isAppOn", "false");
          document
            .querySelector("#tfe_toggleVanilla")
            .classList.add("tfe_togglebutton_active");
          document
            .querySelector("#tfe_toggleEnhanced")
            .classList.remove("tfe_togglebutton_active");
          document
            .querySelector("#tfe_toggleVanilla .tfe_togglebutton_progress")
            .classList.add("startAnimatingWidth");
          setTimeout(() => {
            document
              .querySelector("#tfe_togglebutton")
              .classList.add("startAnimatingShakeyShake");
          }, 700);
          setTimeout(() => {
            location.reload();
          }, 1200);
        });

      // click button for Enhanced
      document
        .querySelector("#tfe_toggleEnhanced")
        .addEventListener("click", (e) => {
          localStorage.setItem("tfe_isAppOn", "true");
          document
            .querySelector("#tfe_toggleEnhanced")
            .classList.add("tfe_togglebutton_active");
          document
            .querySelector("#tfe_toggleVanilla")
            .classList.remove("tfe_togglebutton_active");
          document
            .querySelector("#tfe_toggleEnhanced .tfe_togglebutton_progress")
            .classList.add("startAnimatingWidth");
          setTimeout(() => {
            document
              .querySelector("#tfe_togglebutton")
              .classList.add("startAnimatingShakeyShake");
          }, 700);
          setTimeout(() => {
            location.reload();
          }, 1200);
        });
    }
  });
});
