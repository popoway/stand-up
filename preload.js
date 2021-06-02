// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  console.log("preload.js loaded")
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['stand-up', 'chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
  replaceText(`${require('./package.json').name}-version`, require('./package.json').version)
  replaceText(`${require('./package.json').name}-author`, require('./package.json').author)
  console.log("preload.js completed")
})