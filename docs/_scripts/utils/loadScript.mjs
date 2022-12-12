export const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'

    // IE.
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === 'loaded' ||
          script.readyState === 'complete'
        ) {
          resolve(true)
        } else {
          reject(new Error())
        }
        script.onreadystatechange = null
      }

      // Others.
    } else {
      script.addEventListener('load', onLoad)
      script.addEventListener('error', onError)
    }

    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)

    function onLoad() {
      resolve(true)
      removeListener()
    }

    function onError() {
      reject(new Error())
      removeListener()
    }

    function removeListener() {
      script.removeEventListener('load', onLoad)
      script.removeEventListener('error', onError)
    }
  })
}
