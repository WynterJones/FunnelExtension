chrome.runtime.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      console.log("Hello from CF Editor Apps Chrome Extension");

      initialize(() => {
        buildAppButton(
          "Editor Updates",
          "Get updates to editor bugs from the original developers.",
          "life-ring"
        );
        buildAppButton(
          "Gradient Picker",
          "Add gradient background to any element.",
          "paint-brush"
        );
        buildAppButton(
          "Drop Shadow",
          "Add better drop shadow to any element.",
          "square"
        );
        buildAppButton(
          "Text Shadows",
          "Add better text shadows for any element.",
          "font"
        );
        buildAppButton(
          "Spacing Controls",
          "Better padding & margin control for any element.",
          "cog"
        );
        buildAppButton(
          "Border Controls",
          "Better border control for any element.",
          "cog"
        );
        buildAppButton(
          "Z Index",
          "Easily edit z index for any element for easier layering.",
          "cog"
        );
        buildAppButton(
          "Quick Edit",
          "Open editor from any of your cf page urls.",
          "cog"
        );
        buildAppButton(
          "Toggle 2 Step",
          "Easily preview second step of 2 step order form.",
          "cog"
        );
        buildAppButton(
          "Resize Custom CSS",
          "Move and resize the custom css box.",
          "cog"
        );
        buildAppButton(
          "Auto Find Product ID",
          "Quickly find the product you need in dropdown.",
          "cog"
        );
      });
    }
  });
});

function initialize(callback) {
  document.querySelector("#appStoreModal .imagepopupMainTitle2 h2").innerHTML =
    '<i class="fa fa-plug" style="margin-left: 0;margin-right: 6px;"></i> Enhanced Editor Apps';
  document.querySelector(
    "#appStoreModal .imagepopupMainTitle2 h4"
  ).style.display = "none";
  document
    .querySelectorAll(
      ".addNewElementBlockWrapper.appStoreBlockActive.appStoreBlock"
    )
    .forEach((block) => {
      block.style.display = "none";
    });
  addHeader();
  fixTextEditor();
  addInlineColorPicker();
  align5ColumnRow();
  pageChanged();
  callback();
}

function align5ColumnRow() {
  const all5ColRows = document.querySelectorAll('[data-title="5 column row"]');
  all5ColRows.forEach((row) => {
    const allColumns = row.querySelectorAll(".innerContent");
    allColumns[0].classList.remove("col-md-4");
    allColumns[0].classList.add("col-md-2");
    allColumns[0].classList.add("col-md-offset-1");
    row.addEventListener("mouseover", () => {
      setTimeout(() => {
        row.querySelectorAll(".ui-resizable-handle").forEach((handle) => {
          handle.style.display = "none";
        });

        row.querySelector(".de-row-col-2").style.left = "25.5%";
        row.querySelector(".de-row-col-3").style.left = "41.8%";
        row.querySelector(".de-row-col-4").style.left = "58%";
        row.querySelector(".de-row-col-13").style.left = "74.8%";
        row.querySelector(".de-row-col-31").style.left = "100%";
      }, 10);
    });
  });
}

function pageChanged() {
  const Observe = (sel, opt, cb) => {
    const Obs = new MutationObserver((m) => [...m].forEach(cb));
    document.querySelectorAll(sel).forEach((el) => Obs.observe(el, opt));
  };

  Observe(
    "body > div.containerWrapper",
    {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
    },
    (mutation) => {
      if (mutation.type === "childList") {
        align5ColumnRow();
      }
    }
  );
}

function addInlineColorPicker() {
  const link = document.querySelector("#ce-link");
  const clonedlink = link.cloneNode(true);

  clonedlink.id = "ce-pickcolor";
  clonedlink.querySelector("i").setAttribute("class", "fa fa-paint-brush");

  document.querySelector(".ce-toolbar-actions").appendChild(clonedlink);

  addCustomCSS();

  document.querySelector("#ce-pickcolor").addEventListener("click", () => {
    document.querySelector("#ce-link").click();
    document.querySelector(".eLinkHighlight").classList.add("is-colored-span");
    document.querySelector(".eLinkHighlight").removeAttribute("target");
    document.querySelector(".eLinkHighlight").removeAttribute("href");
    document.querySelector(".eLinkHighlight").removeAttribute("rel");

    setTimeout(() => {
      document.querySelector("#edit-link-text").style.display = "none";
      document.querySelector("#edit-link").style.display = "none";
      document.querySelector("#remove-ce-link").style.display = "none";
      document.querySelector("#new-window-ce-link").style.display = "none";
      document.querySelector(
        ".ce-toolbar-link-edit .colorSpectrumLink"
      ).style.marginLeft = "15px";

      setEvents();
    }, 30);
  });

  document.querySelector("#ce-link").addEventListener("click", () => {
    setEvents();
    setTimeout(() => {
      document.querySelector("#edit-link-text").style.display = "inline-block";
      document.querySelector("#edit-link").style.display = "inline-block";
      document.querySelector("#remove-ce-link").style.display = "inline-block";
      document.querySelector("#new-window-ce-link").style.display =
        "inline-block";
      document.querySelector(
        ".ce-toolbar-link-edit .colorSpectrumLink"
      ).style.marginLeft = "0";
    }, 10);
  });

  document.querySelector(".de-editable").addEventListener("click", () => {
    setEvents();
  });

  function addCustomCSS() {
    const currentCSS = document.querySelector("#custom-css").innerHTML;
    let newCSS = "";
    if (!currentCSS.includes(".is-colored-span")) {
      newCSS = `/* ------- */
/* CF Editor Apps CSS for Colored Text */
.is-colored-span:hover {
  text-decoration: none !important;
}
/* ------- */
${currentCSS}`;
      document.querySelector("#custom-css").innerHTML = newCSS;
    }
  }

  function setEvents() {
    setTimeout(() => {
      document.querySelectorAll(".de-editing-now a").forEach((element) => {
        element.addEventListener("click", (e) => {
          document.querySelector("#edit-link-text").style.display =
            "inline-block";
          document.querySelector("#edit-link").style.display = "inline-block";
          document.querySelector("#remove-ce-link").style.display =
            "inline-block";
          document.querySelector("#new-window-ce-link").style.display =
            "inline-block";
          document.querySelector(
            ".ce-toolbar-link-edit .colorSpectrumLink"
          ).style.marginLeft = "0";
        });
      });

      document.querySelectorAll(".is-colored-span").forEach((element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          setTimeout(() => {
            document.querySelector("#edit-link-text").style.display = "none";
            document.querySelector("#edit-link").style.display = "none";
            document.querySelector("#remove-ce-link").style.display = "none";
            document.querySelector("#new-window-ce-link").style.display =
              "none";
            document.querySelector(
              ".ce-toolbar-link-edit .colorSpectrumLink"
            ).style.marginLeft = "15px";
          }, 10);
        });
      });
    }, 100);
  }
}

function fixTextEditor() {
  const Observe = (sel, opt, cb) => {
    const Obs = new MutationObserver((m) => [...m].forEach(cb));
    document.querySelectorAll(sel).forEach((el) => Obs.observe(el, opt));
  };

  Observe(
    ".ce-toolbar",
    {
      attributesList: ["style"],
      attributeOldValue: true,
    },
    (m) => {
      fixPosition();
    }
  );
}

function fixPosition() {
  if (document.querySelector(".de-editing-now")) {
    const editingElement = document
      .querySelector(".de-editing-now")
      .getBoundingClientRect();

    document.querySelector(".ce-toolbar").style.top = `${
      editingElement.top - 32
    }px`;
  }
}

function addHeader() {
  var manifestData = chrome.runtime.getManifest();
  var wrapper = document.createElement("div");
  wrapper.innerHTML = `<div class="cfeditorapp_header">
  <span class="version">version ${manifestData.version}</span>
  <h3>Woohoo! 🥳 You've Unlocked More Features!</h3>
  <p>Start using a bunch of new features for the ClickFunnels editor using the "CF Editor Apps" Chrome Extension you've installed. Pretty awesome! We've got tonnes more coming and all you have to do is just update with one click! Created by original developer Wynter Jones and other hardcore funnel hackers. <a href="#" target="_blank">Click here to stay updated or get support.</a></p>
</div>`;
  var div = wrapper.firstChild;
  document
    .querySelector("#appStoreModal .modalSearch.modalTitleUpper")
    .appendChild(div);
}

function buildAppButton(title, subtitle, faicon) {
  const block = document.querySelector(".appStoreBlock");
  const clonedBlock = block.cloneNode(true);

  clonedBlock.style.display = "block";
  clonedBlock.querySelector(".add_elementTitle").textContent = title;
  clonedBlock.querySelector(".add_elementSubtitle").textContent = subtitle;
  clonedBlock
    .querySelector(".appStoreImage i")
    .setAttribute("class", `fa fa-${faicon}`);

  document
    .querySelector(".appStore_tabs.appStore_app")
    .appendChild(clonedBlock);
}
