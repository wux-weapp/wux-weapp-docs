const defaultTips = [
  'WuxUI 🐮',
  'MiniProgram 🐶',
  'VSCode 🐱',
  'Atom 🐯',
  'Sublime Text 2/3 🐻',
]

class MouseEffects {
  constructor(tips = defaultTips) {
    this.tips = tips
  }

  run(x, y, container = document.body) {
    const tip = this.tips[MouseEffects.id]
    const spanEl = document.createElement('span')
    spanEl.textContent = tip
    spanEl.style.transition = 'top 1.5s, opacity 1.5s'
    spanEl.style.zIndex = 1000
    spanEl.style.top = `${y - 20}px`
    spanEl.style.left = `${x}px`
    spanEl.style.position = 'absolute'
    spanEl.style.fontWeight = 'bold'
    spanEl.style.cursor = 'default'
    spanEl.style.userSelect = 'none'
    spanEl.style.color = `rgb(${~~(255 * Math.random())}, ${~~(
      255 * Math.random()
    )}, ${~~(255 * Math.random())})`
    container.appendChild(spanEl)
    setTimeout(() => {
      spanEl.style.top = `${y - 180}px`
      spanEl.style.opacity = '0'
    })
    spanEl.addEventListener('transitionend', spanEl.remove)
    MouseEffects.id = (MouseEffects.id + 1) % this.tips.length
  }
}

MouseEffects.id = 0

export const mouseEffects = new MouseEffects()
