class DoraemonView extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    this.setNode(template.content)
    this.setStyle(template.content)
    shadow.appendChild(template.content.cloneNode(true))
    DoraemonView.observer(shadow)
  }

  setNode(container) {
    const node = document.createElement('div')
    node.classList.add('dora')
    node.innerHTML = `
      <div class="dora__hopter">
          <div class="dora__hopter-leaf"></div>
          <div class="dora__hopter-rod"></div>
      </div>
      <div class="dora__head">
          <div class="dora__face">
              <div class="dora__eyes">
                  <div class="dora__eye">
                      <div class="dora__eyeball"></div>
                  </div>
                  <div class="dora__eye">
                      <div class="dora__wink"></div>
                      <div class="dora__eyeball"></div>
                  </div>
              </div>
              <div class="dora__whiskers">
                  <div class="dora__whisker"></div>
                  <div class="dora__whisker"></div>
                  <div class="dora__whisker"></div>
              </div>
              <div class="dora__nose">
                  <div class="dora__nose-base"></div>
              </div>
              <div class="dora__whiskers">
                  <div class="dora__whisker"></div>
                  <div class="dora__whisker"></div>
                  <div class="dora__whisker"></div>
              </div>
              <div class="dora__mouth">
                  <div class="dora__tongue">
                      <div class="dora__tongue-left">
                          <div class="dora__tongue-left-inside"></div>
                      </div>
                      <div class="dora__tongue-right">
                          <div class="dora__tongue-right-inside"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="dora__body">
          <div class="dora__bell-rope"></div>
          <div class="dora__bell">
              <div class="dora__bell-curve"></div>
              <div class="dora__bell-curve"></div>
          </div>
          <div class="dora__pockets">
              <div class="dora__pocket"></div>
          </div>
      </div>
      <div class="dora__hands">
          <div class="dora__hand">
              <div class="dora__hand-claw"></div>
          </div>
          <div class="dora__hand">
              <div class="dora__hand-claw"></div>
          </div>
      </div>
      <div class="dora__legs">
          <div class="dora__leg"></div>
          <div class="dora__leg"></div>
      </div>
    `
    container.appendChild(node)
  }

  setStyle(container) {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes dora-rotar {
          from {
              transform: rotate3D(0, 1, 0, 0deg)
          }
          to {
              transform:rotate3D(0, 1, 0, 360deg)
          }
      }
      @keyframes dora-pulse { 
          to {
              bottom: 100px
          }
          from {
              bottom: 0
          }
      }
      @keyframes dora-volar {
          0% {
              bottom: 0
          }
          25% {
              bottom: 0
          }
          50% {
              bottom: 50px
          }
          75% {
              bottom: 50px
          }
          100% {
              bottom: 0
          }
      }
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      .dora {
          --dora-body-color: var(--theme-color, #35a1c9);
          --dora-bell-color: #fde746;
          --dora-blush-color: #ffc1c2;
          --dora-nose-color: #d80517;
          --dora-nose-color: #bc66fd;
          --dora-mouth-color: #e4161f;
          --dora-mouth-color: #e1aafd;
          --dora-tongue-color: #ef6c1c;
          --dora-tongue-color: #fc68a4;
          --dora-height: 256px;
          --dora-border-width: 1px;
          --dora-border-color: #000;
          --height-10: calc(var(--dora-height) * 0.625 / 20);
          position: fixed;
          right: 0;
          bottom: 0;
          z-index: 999;
          width: var(--dora-height);
          height: var(--dora-height);
          box-sizing: border-box;
          animation: dora-volar 1s linear 2s infinite alternate;
      }
      .dora__head {
          width: calc(var(--height-10) * 20);
          height: calc(var(--height-10) * 20);
          border-radius: 50%;
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          margin: 0 auto;
          position: relative;
          background: var(--dora-body-color,#35a1c9);
          z-index: 100;
          overflow: hidden;
      }
      .dora__hopter {
          --height: calc(var(--height-10) * 10);
          --top: calc(var(--height-10) * 0.5);
          width: var(--height);
          height: var(--top);
          background: 0 0;
          margin: 0 auto;
          position: relative;
          margin-bottom: calc(var(--top) * 2);
      }
      .dora__hopter-leaf {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          background-color: gray;
          border-radius: var(--top);
          border: calc(var(--dora-border-width) * 2) solid gray;
          z-index: 100;
          opacity: .6;
          position: absolute;
          top: var(--top);
          animation-name: dora-rotar;
          animation-duration: .1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
      }
      .dora__hopter-rod {
          width: calc(var(--top) * 4);
          height: calc(var(--top) * 2);
          display: block;
          border: calc(var(--dora-border-width) * 2) solid #555;
          background: #bd8d22;
          border-radius: var(--height) var(--height) 0 0;
          position: absolute;
          right: 0;
          top: calc(var(--top) * 0.8);
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          z-index: 2;
      }
      .dora__hopter-rod:after {
          content: '';
          width: calc(var(--top) * 1.4);
          height: calc(var(--top) * 4);
          z-index: 1;
          background: #fcc136;
          position: absolute;
          top: calc(var(--top) * 1.4);
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          margin: 0 auto;
          box-sizing: border-box;
          left: 50%;
          transform: translateX(-50%);
      }
      .dora__face {
          width: calc(var(--height-10) * 17);
          height: calc(var(--height-10) * 17);
          border-radius: 50%;
          background: #fff;
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          position: absolute;
          right: 0;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
      }
      .dora__eyes {
          margin: 0 auto;
          display: flex;
          align-items: center;
          align-content: center;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
      }
      .dora__eye {
          margin: 0 0;
          background: #fff;
          width: calc(var(--height-10) * 4.8);
          height: calc(var(--height-10) * 4.8);
          border-radius: 100%;
          border: var(--dora-border-width) solid var(--dora-border-color);
          overflow: hidden;
          position: relative;
      }
      .dora__eyeball {
          width: calc(var(--height-10) * 2.3);
          height: calc(var(--height-10) * 1.5);
          background: #000;
          border-radius: 100%;
          transform: rotate(90deg);
          position: absolute;
          top: calc(var(--height-10) * 2);
          right: 2px;
      }
      .dora__eyeball:after {
          content: '';
          width: calc(var(--height-10) * 0.6);
          height: calc(var(--height-10) * 0.3);
          background: #fff;
          border-radius: 100%;
          transform: rotate(180deg);
          position: absolute;
          right: 0;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
      }
      .dora__eye:last-child .dora__wink {
          width: 100%;
          height: 100%;
          background-color: inherit;
          position: relative;
          overflow: hidden;
          animation-name: dora-pulse;
          animation-duration: 1s;
          animation-iteration-count: 3;
          z-index: 100;
      }
      .dora__eye:last-child .dora__wink:after {
          content: "⌒";
          width: 100%;
          line-height: 2.5;
          font-size: calc(var(--height-10) * 3);
          color: #000;
          position: absolute;
          text-align: center;
          font-weight: 700;
      }
      .dora__eye:last-child .dora__eyeball {
          right: unset;
          left: 2px;
      }
      .dora__nose {
          background: var(--dora-nose-color, #d80517);
          width: calc(var(--height-10) * 3.4);
          height: calc(var(--height-10) * 3.4);
          border-radius: 100%;
          border: var(--dora-border-width) solid var(--dora-border-color);
          margin: 0 auto;
          position: relative;
          top: calc(var(--height-10) * -0.8);
      }
      .dora__nose:after {
          content: '';
          width: 30%;
          height: 30%;
          border-radius: 50%;
          border: var(--dora-border-width) solid #fff;
          position: absolute;
          background: #fff;
          top: calc(var(--height-10) * 0.6);
          left: calc(var(--height-10) * 0.8);
          box-sizing: border-box;
      }
      .dora__nose-base {
          width: 2px;
          height: calc(var(--height-10) * 2);
          margin: 0 auto;
          background-color: #000;
          position: relative;
          bottom: -100%;
      }
      .dora__whiskers {
          z-index: 9999;
          position: absolute;
          display: inline-block;
          top: calc(var(--height-10) * 4.5);
          left: 0;
      }
      .dora__whiskers:after {
        content: "";
        width: 70%;
        height: 40%;
        background: radial-gradient(var(--dora-blush-color, #ffc1c2), transparent);
        position: absolute;
        top: 6%;
        right: 2%;
        border-radius: 50%;
        filter: blur(2px);
        z-index: -1;
      }
      .dora__whiskers + .dora__nose + .dora__whiskers:after {
        right: unset;
        left: 2%;
      }
      .dora__whisker {
          width: calc(var(--height-10) * 6);
          height: 2px;
          background-color: #000;
          margin: 0 auto;
          margin-bottom: calc(var(--height-10) * 1.8);
          transform: rotate(25deg);
      }
      .dora__whisker:nth-child(2) {
          margin-bottom: var(--height-10);
          transform: rotate(0);
      }
      .dora__whisker:last-child {
          transform: rotate(-10deg);
      }
      .dora__whiskers + .dora__nose + .dora__whiskers {
          left: unset;
          right: 0;
      }
      .dora__whiskers + .dora__nose + .dora__whiskers > .dora__whisker {
          transform: rotate(-25deg);
      }
      .dora__whiskers + .dora__nose + .dora__whiskers > .dora__whisker:nth-child(2) {
          margin-bottom: var(--height-10);
          transform: rotate(0);
      }
      .dora__whiskers + .dora__nose + .dora__whiskers > .dora__whisker:last-child {
          transform: rotate(10deg);
      }
      .dora__mouth {
          width: calc(var(--height-10) * 14);
          height: calc(var(--height-10) * 7);
          border-radius: 0 0 calc(var(--height-10) * 14) calc(var(--height-10) * 14);
          background: var(--dora-mouth-color, #e4161f);
          overflow: hidden;
          margin: 0 auto;
          position: absolute;
          left: 50%;
          bottom: calc(var(--height-10) * 0.85);
          transform: translateX(-50%)
      }
      .dora__tongue {
          width: calc(var(--height-10) * 10);
          height: calc(var(--height-10) * 6.5);
          margin: calc(var(--height-10) * 0.5) auto 0;
          position: relative;
      }
      .dora__tongue-left {
          float: left;
          margin-top: calc(var(--height-10) * 1.5);
          margin-left: calc(var(--height-10) * 0.5);
          height: 100%;
          overflow: hidden;
          width: 60%;
          z-index: 2;
      }
      .dora__tongue-left-inside {
          border-top-left-radius: 50% 80%;
          border-top-right-radius: 50% 80%;
          border-bottom: none;
          height: 100%;
          width: 100%;
          z-index: 2;
          transform: rotate(-45deg);
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          background-color: var(--dora-tongue-color, #ef6c1c);
          margin-top: calc(var(--height-10) * 0.8);
      }
      .dora__tongue-right {
          float: left;
          margin-top: calc(var(--height-10) * -6.7);
          margin-left: calc(var(--height-10) * 5);
          height: 92%;
          overflow: hidden;
          width: 60%;
          z-index: 3;
      }
      .dora__tongue-right-inside {
          border-top-left-radius: 50% 80%;
          border-top-right-radius: 50% 80%;
          border-bottom: none;
          height: 100%;
          width: 100%;
          z-index: 2;
          transform: rotate(45deg);
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          background-color: var(--dora-tongue-color, #ef6c1c);
          margin-top: var(--height-10);
          margin-left: calc(var(--height-10) * -1);
      }
      .dora__body {
          width: calc(var(--height-10) * 14 + var(--dora-border-width) * 2);
          height: calc(var(--height-10) * 17 + var(--dora-border-width) * 2);
          background: var(--dora-body-color,#35a1c9);
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
          margin: 0 auto;
          position: relative;
          top: calc(var(--height-10) * -10);
          z-index: 2;
      }
      .dora__bell {
          width: calc(var(--height-10) * 3.5);
          height: calc(var(--height-10) * 3.5);
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          border-radius: 100%;
          background-color: var(--dora-bell-color, #fde746);
          position: absolute;
          right: 0;
          top: 0;
          left: 0;
          bottom: calc(var(--height-10) * -6);
          margin: auto;
          z-index: 3;
          overflow: hidden;
      }
      .dora__bell:before {
          content: '';
          width: calc(var(--height-10) * 0.6);
          height: calc(var(--height-10) * 0.6);
          border-radius: calc(var(--height-10) * 0.6);
          background-color: #fff;
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          position: absolute;
          right: 0;
          top: var(--height-10);
          left: 0;
          bottom: 0;
          margin: auto;
          z-index: 2;
      }
      .dora__bell:after {
          content: '';
          width: 2px;
          height: calc(var(--height-10) * 1.6);
          background-color: #000;
          margin: 0 auto;
          position: absolute;
          top: calc(var(--height-10) * 1.6 + 2px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
      }
      .dora__bell-curve {
          width: calc(var(--height-10) * 6);
          height: 100%;
          border-radius: 50%;
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          margin-top: calc(var(--height-10) * 0.5);
          margin-left: calc(var(--height-10) * -1.5);
      }
      .dora__bell-curve:last-child {
          margin-top: calc(var(--height-10) * -2.5);
      }
      .dora__bell-rope {
          width: calc(var(--height-10) * 10);
          height: calc(var(--height-10) * 5);
          margin: 0 auto;
          background: var(--dora-mouth-color, #e4161f);
          border-radius: calc(var(--height-10) * 10) / calc(var(--height-10) * 5);
          position: relative;
          top: calc(var(--height-10) * 5.5);
          z-index: 2;
      }
      .dora__pockets {
          width: calc(var(--height-10) * 10);
          height: calc(var(--height-10) * 6);
          margin: 0 auto;
          background: #fff;
          border-radius: calc(var(--height-10) * 10) / calc(var(--height-10) * 6);
          position: relative;
          top: calc(var(--height-10) * 4);
      }
      .dora__pocket {
          width: calc(var(--height-10) * 6);
          height: calc(var(--height-10) * 3);
          border-radius: calc(var(--height-10) * 6) calc(var(--height-10) * 6) 0 0;
          background: #fff;
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          position: absolute;
          right: 0;
          top: 0;
          left: 0;
          bottom: calc(var(--height-10) * -2);
          margin: auto;
          z-index: 2;
          transform: rotate(180deg);
      }
      .dora__legs {
          margin: 0 auto;
          display: flex;
          align-items: center;
          align-content: center;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          position: absolute;
          bottom: var(--height-10);
          left: 50%;
          transform: translateX(-50%);
      }
      .dora__leg {
          width: calc(var(--height-10) * 5.5);
          height: calc(var(--height-10) * 7.7);
          margin: 0 auto;
          background: #fff;
          border-radius: calc(var(--height-10) * 5.5) / calc(var(--height-10) * 7.7);
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          transform: rotate(180deg);
      }
      .dora__hands {
          margin: 0 auto;
          display: flex;
          align-items: center;
          align-content: center;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          position: absolute;
          bottom: var(--height-10);
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
      }
      .dora__hand {
          width: calc(var(--height-10) * 5.5);
          height: calc(var(--height-10) * 8.5);
          margin: 0 auto;
          background: var(--dora-body-color,#35a1c9);
          border-radius: calc(var(--height-10) * 5.5) / calc(var(--height-10) * 8.5);
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          transform: rotate(-45deg);
          position: relative;
          top: calc(var(--height-10) * -9);
          left: calc(var(--height-10) * -4.6);
      }
      .dora__hand:last-child {
          transform: rotate(45deg);
          left: unset;
          right: calc(var(--height-10) * -4.6);
      }
      .dora__hand-claw {
          width: calc(var(--height-10) * 6);
          height: calc(var(--height-10) * 6);
          border-radius: 100%;
          background-color: #fff;
          border: calc(var(--dora-border-width) * 2) solid var(--dora-border-color);
          position: absolute;
          right: -3px;
          top: calc(var(--height-10) * -3.4);
      }
    `
    container.appendChild(style)
  }
}

DoraemonView.disabled = false

DoraemonView.observer = (el, onResizeCb) => {
    const MutationObserver =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    const callback = () => {
      if (!DoraemonView.disabled) {
        DoraemonView.disabled = true
        document.body.textContent = '多啦A梦hin生气，后果hin严重！！！'
      }
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(callback)
    })
    const onResize = () => {
      const hide = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      if (observer && el) {
        observer.disconnect()
        onResizeCb && onResizeCb(hide)
        observer.observe(el, {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
        })
      }
    }
    observer.observe(el, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    })
    !MutationObserver && el.addEventListener('DOMNodeRemoved', callback)
    window.addEventListener('resize', onResize)
    onResize()
}

export { DoraemonView }
