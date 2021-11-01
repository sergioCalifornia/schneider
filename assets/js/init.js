/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

function checkWebpFeature(feature, callback) {
  var kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',
    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',
    alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',
    animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'
  }
  var img = new Image()
  img.onload = function () {
    var result = (img.width > 0) && (img.height > 0)
    callback(feature, result)
  }
  img.onerror = function () {
    callback(feature, false)
  }
  img.src = 'data:image/webp;base64,' + kTestImages[feature]
}

checkWebpFeature('lossy', function (feature, isSupported) {
  window.webp = isSupported

  if (isSupported) {
    document.body.classList.add('webp')
  } else {
    document.body.classList.add('no-webp')
  }
})

window.iOS = /iPad|iPhone|iPod/.test(navigator.platform) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

if (window.iOS) {
  const match = navigator.userAgent.match(/Version\/([0-9.]+)/)
  window.iOS = (match && match.length > 1) ? parseFloat(match[1]) : true
  document.body.classList.add('ios')
}

window.android = /android/i.test(navigator.userAgent) && !window.MSStream
if (window.android) {
  document.body.classList.add('android')
}

window.safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream
if (window.safari) {
  document.body.classList.add('safari')
}
