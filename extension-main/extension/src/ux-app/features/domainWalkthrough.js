chrome.extension.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        document.querySelector("#cf-layout-standard > div").style.display =
          "none";

        const toggleButton = document.createElement("div");
        toggleButton.innerHTML = `<div style="padding-top: 30px;" id="tfe_customdomainDoc"><div class="tfe_cfdoc">
          <h4>Support Desk Article</h4>
          <a href="https://help.clickfunnels.com/hc/en-us/articles/360006038414-Custom-Domain-FAQ" target="_blank"><i class="life ring icon"></i> Custom Domain FAQ</a>
        </div></div>
        <div id="tfe_domainWalkthrough">
        <div><div class="ui card" id="tfe_select_sub_domain">
          <h1>Select Sub Domain</h1>
          <p>Click here if you want to add something like:</p>
          <ul>
            <li><span>https://</span>coolname.yourdomain<span>.com</span></li>
          </ul>
          <div class="tfe_wiki_explainer">
            <h6>What is a Sub Domain? <small>And when should I use it?</small></h6>
            <p>Once you buy a domain you can create as many subdomains as you want on it.<br>Their are two main reasons to use a subdomain.<br><br>1. Your already using the domain for something else outside of ClickFunnels<br><br>2. You want to change how your links works ex:<br><br>deals.mydomain.com or secure.mydomain.com</p>
          </div>
          
        </div></div>

        <div><div class="ui card" id="tfe_select_root_domain">
          <h1>Select Root Domain</h1>
          <p>Click here if you want to add something like:</p>
          <ul>
            <li><span>https://</span>yourdomain<span>.com</span></li>
            <li><span>https://</span>www.yourdomain<span>.com</span></li>
          </ul>
          <div class="tfe_wiki_explainer">
            <h6>What is a Root Domain? <small>And when should I use it?</small></h6>
            <p>A domain name is an identification string that defines a realm of administrative autonomy, authority or control within the Internet. Domain names are used in various networking contexts and for application-specific naming and addressing purposes.</p>
          </div>
        </div></div>
    </div>

    <div id="tfe_domainWalkthrough_selectProvider_title" style="display:none">
        Please Follow Instructions for Your Specific Domain Provider Before Adding Domain
    </div>
    <div id="tfe_domainWalkthrough_selectProvider" style="display:none">
        <div><div class="ui card" id="tfe_select_cloudflare">
          <img src="https://res.cloudinary.com/marketlify/image/upload/v1627342894/funnelextension/Untitled_2.png"  />
          <a class="tfe_helpbutton" data-domain-type="root" href="https://help.clickfunnels.com/hc/en-us/articles/360005906094" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
          <a class="tfe_helpbutton" data-domain-type="subdomain" style="display:none" href="https://help.clickfunnels.com/hc/en-us/articles/360005906774" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
        </div></div>

        <div><div class="ui card" id="tfe_select_cloudflare">
          <img src="https://res.cloudinary.com/marketlify/image/upload/v1627342892/funnelextension/Untitled_4.png"  />
          <a class="tfe_helpbutton"  data-domain-type="root" href="https://help.clickfunnels.com/hc/en-us/articles/360005909694" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
          <a class="tfe_helpbutton" data-domain-type="subdomain" style="display:none" href="https://help.clickfunnels.com/hc/en-us/articles/4404416577303" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
        </div></div>

        <div><div class="ui card" id="tfe_select_cloudflare">
          <img src="https://res.cloudinary.com/marketlify/image/upload/v1627342891/funnelextension/Untitled_5.png"  />
          <a class="tfe_helpbutton"  data-domain-type="root" href="https://help.clickfunnels.com/hc/en-us/articles/360006338213" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
          <a class="tfe_helpbutton" data-domain-type="subdomain" style="display:none" href="https://help.clickfunnels.com/hc/en-us/articles/360006338193" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
        </div></div>


        <div><div class="ui card" id="tfe_select_cloudflare">
          <img src="https://res.cloudinary.com/marketlify/image/upload/v1627342890/funnelextension/Untitled_6.png"  />
          <a class="tfe_helpbutton"  data-domain-type="root" href="https://help.clickfunnels.com/hc/en-us/articles/360006777313" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
          <a class="tfe_helpbutton" data-domain-type="subdomain" style="display:none" href="https://help.clickfunnels.com/hc/en-us/articles/360006777573" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
        </div></div>

        <div><div class="ui card" id="tfe_select_cloudflare">
          <img src="https://res.cloudinary.com/marketlify/image/upload/v1627342889/funnelextension/Untitled_7.png"  />
          <a class="tfe_helpbutton"  data-domain-type="root" href="https://help.clickfunnels.com/hc/en-us/articles/360006328213" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
          <a class="tfe_helpbutton" data-domain-type="subdomain" style="display:none" href="https://help.clickfunnels.com/hc/en-us/articles/360006262134" target="_blank"><i class="life ring icon"></i> View Tutorial</a>
        </div></div>
    </div>
    `;
        document.querySelector("#cf-layout-standard").appendChild(toggleButton);

        document
          .querySelector("#tfe_select_sub_domain")
          .addEventListener("click", (e) => {
            showNextStep("Sub Domain");
          });

        document
          .querySelector("#tfe_select_root_domain")
          .addEventListener("click", (e) => {
            showNextStep("Root Domain");
          });

        function showNextStep(selectedType) {
          document.querySelector("#tfe_domainWalkthrough").style.display =
            "none";
          document.querySelector("#tfe_customdomainDoc").style.display = "none";
          document.querySelector("#cf-layout-standard > div").style.display =
            "block";
          document.querySelector(
            "#tfe_domainWalkthrough_selectProvider"
          ).style.display = "flex";
          document.querySelector(
            "#tfe_domainWalkthrough_selectProvider_title"
          ).style.display = "block";
          document
            .querySelector("#cf-layout-standard > div.ui.basic.segment")
            .classList.add("card");

          document
            .querySelector("#cf-layout-standard > div.ui.basic.segment")
            .setAttribute(
              "style",
              "display: block;width: 100%;padding: 40px;margin-top: 20px;"
            );
          if (selectedType === "Sub Domain") {
            document
              .querySelectorAll('a[data-domain-type="subdomain"')
              .forEach((element) => {
                element.style.display = "block";
              });
            document
              .querySelectorAll('a[data-domain-type="root"')
              .forEach((element) => {
                element.style.display = "none";
              });

            document.querySelector("#domain_domain").value = "";
            document
              .querySelector("#domain_domain")
              .addEventListener("focus", (e) => {
                const domainInput = document.querySelector("#domain_domain");
                setTimeout(() => {
                  if (domainInput.value === "www.") {
                    domainInput.value = "";
                  }
                }, 10);
              });
          }

          document.querySelector("#new_domain > button").style.opacity = "0.2";

          const formValidator = document.createElement("div");
          formValidator.innerHTML = `<div id="tfe_domain_validator">Hi there! This is a domain validator brought to you by TheFunnelExtension.com to help you during the process. Just start typing your domain to get started.</div>`;
          insertAfter(document.querySelector("#domain_domain"), formValidator);

          function insertAfter(referenceNode, newNode) {
            referenceNode.parentNode.insertBefore(
              newNode,
              referenceNode.nextSibling
            );
          }

          var isSubdomain = function (url) {
            var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);

            return !!url.match(regex);
          };

          function isValidDomain(domain) {
            var re = new RegExp(
              /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/
            );
            return domain.match(re);
          }

          document
            .querySelector("#domain_domain")
            .addEventListener("input", (e) => {
              const domainInput = document.querySelector("#domain_domain");
              let message = "";
              let data = domainInput.value;
              if (data.includes(".co.uk")) {
                data = data.replace(".co.uk", ".com");
              }
              if (data.includes("http://") || data.includes("https://")) {
                message =
                  "Uh oh this domain will not work with the included 'http://' or 'https://' please remove that and try again.";
                document.querySelector("#new_domain > button").style.opacity =
                  "0.3";
              } else {
                if (isSubdomain(data)) {
                  if (data.split(".")[0] === "www") {
                    message =
                      "Awesome! 😎 This is a valid <strong>Root Domain</strong> and will work. Make sure you follow the correct instructions for your domain provider below.";
                    document.querySelector(
                      "#new_domain > button"
                    ).style.opacity = "1";
                  } else {
                    message =
                      "Amazing! 🥳 This is a valid <strong>Sub Domain</strong> and will work. Make sure you follow the correct instructions for your domain provider below.";
                    document.querySelector(
                      "#new_domain > button"
                    ).style.opacity = "1";
                  }
                } else {
                  if (isValidDomain(data)) {
                    message = `Looks like your trying to add a root domain, you might find it easier to just add it with www. at the start. <strong>www.${data}</strong> If you really don't want that, you can point your domain to CloudFlare BEFORE adding it to ClickFunnels. Follow the two tutorials below to setup correctly.
                        
                        <a style="display: block;margin-top: 15px;margin-bottom: 5px;" href="https://support.cloudflare.com/hc/en-us/articles/201720164-Creating-a-Cloudflare-account-and-adding-a-website" target="_blank">Step #1 - Add Domain to CloudFlare Tutorial</a>
                        <a style="display: block;margin-bottom: 5px;" href="https://help.clickfunnels.com/hc/en-us/articles/360005906094-Adding-A-Cloudflare-Domain" target="_blank">Step #2 - Add CloudFlare Domain to ClickFunnels Tutorial</a>`;
                    document.querySelector(
                      "#new_domain > button"
                    ).style.opacity = "1";
                  } else {
                    message =
                      "Uh oh this domain is not valid domain. It might work though, you can always try! 😀";
                    document.querySelector(
                      "#new_domain > button"
                    ).style.opacity = "0.3";
                  }
                }
              }

              document.querySelector("#tfe_domain_validator").innerHTML =
                message;
            });

          document
            .querySelector("#cf-layout-standard > div.ui.basic.segment")
            .classList.remove("segment");
          document.querySelector(
            "#new_domain > p.ui.cf.checkbox"
          ).style.marginTop = "-15px";
          document.querySelector(
            "#new_domain > p.ui.cf.checkbox"
          ).style.display = "block";

          document.querySelector(
            "#cf-layout-standard > div.ui.basic.card > h2"
          ).innerHTML = `Add a <strong style='text-decoration: underline'>${selectedType}</strong> to Your Account
          <p style="font-size: 13px;font-weight: normal;">You must own this domain name. If you want to you can <a href="https://app.clickfunnels.com/domains/searches/new">register a new domain name</a>.</p>`;
        }
      }
    }
  });
});
