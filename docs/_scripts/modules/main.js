import { CustomDoraemon } from './doraemon.js'
import { mouseEffects } from './mouseEffects.js'
// import { graysale } from './graysale.js'
import { regSW } from './regSW.js'
import { initLAB } from './LAB/init.js'

document.addEventListener('DOMContentLoaded', () => {
  // graysale()
  regSW()
  initLAB()

  document.body.addEventListener('click', (e) => {
    mouseEffects.run(e.pageX, e.pageY)
  })

  window.customElements.define('custom-dora', CustomDoraemon)
  const rootEl = document.createElement('div')
  rootEl.innerHTML = `<custom-dora></custom-dora>`
  document.body.appendChild(rootEl)
  CustomDoraemon.observer(rootEl, (hide) => {
    rootEl.style.display = hide ? 'none' : 'block'
  })
})
