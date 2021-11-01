const shuffleArray = function(array) {
  let currentIndex = array.length
  let randomIndex = 0

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

function copyTextToClipboard(text) {
  if (!navigator?.clipboard) {
    fallbackCopyTextToClipboard(text)
    return
  }
  
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!')
  }, function(err) {
    console.error('Async: Could not copy text: ', err)
  })
}

export { shuffleArray, copyTextToClipboard }
