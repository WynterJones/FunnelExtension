// set default data
let value = { data: [] }
chrome.storage.local.set({ cfaddon_database_v1: value }, () => {})

// accept message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    // case 'saving':
    //   let currentData = null
    //   chrome.storage.local.get(['cfaddon_database_v1'], (result) => {
    //     currentData = result.cfaddon_database_v1
    //     currentData.data.push(request.data)
    //     chrome.storage.local.set({ cfaddon_database_v1: currentData }, () => {
    //       console.log('saving', currentData)
    //     })
    //   })
    //   sendResponse({
    //     message: 'Saved, buddy.',
    //   })

    //   break
    
  }
  sendResponse({
    message: 'Thanks for the message, buddy.',
  })
})
