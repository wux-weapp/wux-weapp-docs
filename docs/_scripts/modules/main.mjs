// import { graysale } from './graysale.mjs'
import { regSW } from './regSW.mjs'

document.addEventListener('DOMContentLoaded', () => {
  import('./mouseEffects.mjs').then(({ mouseEffects }) => {
    document.body.addEventListener('click', (e) => {
      mouseEffects.run(e.pageX, e.pageY)
    })
  })
  import('./doraemon.mjs').then(({ DoraemonView }) => {
    window.customElements.define('dora-view', DoraemonView)
    const rootEl = document.createElement('div')
    rootEl.innerHTML = `<dora-view></dora-view>`
    document.body.appendChild(rootEl)
    DoraemonView.observer(rootEl, (hide) => {
      rootEl.style.display = hide ? 'none' : 'block'
    })
  })
  // import('./LAB/init.mjs').then(({ initLAB }) => {
  //   initLAB()
  // })

  // graysale()
  regSW()
})
