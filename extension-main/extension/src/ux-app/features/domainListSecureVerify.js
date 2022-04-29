chrome.extension.sendMessage({}, (response) => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      if (
        localStorage.getItem("tfe_isAppOn") &&
        localStorage.getItem("tfe_isAppOn") === "true"
      ) {
        // check if has localstorage timestamp for verification
        document.querySelectorAll("tr.domain_row").forEach((e) => {
          const urlArray = e
            .querySelector("td:first-child a")
            .href.replace("https://", "")
            .split("/");
          const domain_id = urlArray[2];
          const timestamp = localStorage.getItem(
            `tfe_domain_verified_timestamp_${domain_id}`
          );
          const subdomain = window.location.host.split(".")[1]
            ? window.location.host.split(".")[0]
            : false;
          if (timestamp) {
            console.log("has timestamp", timeSince(timestamp));
            const htmlTimestamp = document.createElement("div");
            htmlTimestamp.innerHTML = `<div style="width: 200px;margin-top: -10px;">Last verified ${timeSince(
              timestamp
            )} ago
            <small style="display: block;line-height: normal;margin-top: -10px;white-space: break-spaces;margin-bottom: 10px;color: #999">If not verified in 10 minutes you can try to update the settings in your domain provider and click "Verify" to try again. If does not work at all, try to delete and re-add the domain. You might just need to be patient also. 🤓</small>
      </div>
      <a style="display: block;width: 70px;line-height: 14px;text-align:center;padding: 5px;background: #000;color: #fff;border-radius: 7px;" href="https://${subdomain}.clickfunnels.com/domains/process_setup?domain_id=${domain_id}" data-domain-id="${domain_id}" class="tfe_inline_verify">Verify
      </a>`;
            if (
              e.querySelector(".label").textContent.trim().toLowerCase() ==
              "unverified"
            ) {
              e.querySelector("td:nth-child(2)").appendChild(htmlTimestamp);
              e.querySelector(".tfe_inline_verify").addEventListener(
                "click",
                (e) => {
                  e.preventDefault();
                  console.log("hey");
                  const domainID = e.target.getAttribute("data-domain-id");
                  localStorage.setItem(
                    `tfe_domain_verified_timestamp_${domainID}`,
                    new Date().getTime()
                  );
                  window.location.href = e.target.getAttribute("href");
                }
              );
            }
          }

          if (
            e.querySelector(".label").textContent.trim().toLowerCase() ==
            "verified"
          ) {
            const auth_token = document
              .querySelector('meta[name="csrf-token"]')
              .getAttribute("content");
            const htmlAddSSL = document.createElement("div");
            htmlAddSSL.innerHTML = `<div class="tfe_addSSLWrapper"><a style="display: block;width: 70px;line-height: 14px;text-align:center;padding: 5px;background: #000;color: #fff;border-radius: 7px;" href="#" class="tfe_inline_addSSL">Add SSL</a>
            
            
            
            <form style="display:block" class="tfe_hiddenAddSSLForm" action="/domains/initiate_ssl" accept-charset="UTF-8" method="post" ><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="${auth_token}"><input value="${domain_id}" type="hidden" name="domain[id]" id="domain_id"></form></div>`;
            e.querySelector("td:nth-child(2)").appendChild(htmlAddSSL);

            e.querySelector(".tfe_inline_addSSL").addEventListener(
              "click",
              (e) => {
                e.preventDefault();
                console.log("hey");
                e.target
                  .closest(".tfe_addSSLWrapper")
                  .querySelector(".tfe_hiddenAddSSLForm")
                  .submit();
              }
            );
          }

          if (
            e.querySelector(".label").textContent.trim().toLowerCase() ==
            "securing"
          ) {
            const htmlAddReTrySSL = document.createElement("div");
            htmlAddReTrySSL.innerHTML = `<a style="display: block;width: 120px;line-height: 14px;text-align:center;padding: 5px;background: #000;color: #fff;border-radius: 7px;" href="https://${subdomain}.clickfunnels.com/domains/complete_ssl?domain_id=${domain_id}" class="tfe_inline_verify">Check SSL Now</a>`;
            e.querySelector("td:nth-child(2)").appendChild(htmlAddReTrySSL);
          }
          console.log("hey", timestamp, urlArray[2]);
        });
      }
    }
  });
});

function formatDate(template, date) {
  var specs = "YYYY:MM:DD:HH:mm:ss".split(":");
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
  console.log(date);
  return date
    .toISOString()
    .split(/[-:.TZ]/)
    .reduce(function (template, item, i) {
      return template.split(specs[i]).join(item);
    }, template);
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function displayTime(date) {
  var str = "";

  var currentTime = date;
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  str += hours + ":" + minutes + ":" + seconds + " ";
  if (hours > 11) {
    str += "PM";
  } else {
    str += "AM";
  }
  return str;
}
