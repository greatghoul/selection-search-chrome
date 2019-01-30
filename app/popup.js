function showSearchResult (keyword) {
  const url = 'https://m.baidu.com/s?word=' + keyword
  document.querySelector('#search').src = url
}

window.onload = () => {
  chrome.tabs.query({ active: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `window.getSelection().toString()`
    }, selections => {
      console.log(selections)
      if (selections && selections[0]) {
        showSearchResult(selections[0])
      }
    })
  })
}
