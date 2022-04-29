document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(
    '#backend-link'
  ).href = `chrome-extension://${chrome.runtime.id}/cfaddon/dashboard.html`
  console.log('hey', chrome.runtime.id)
})
