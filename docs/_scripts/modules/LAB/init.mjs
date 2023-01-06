import { loadScript } from '../../utils/loadScript.mjs'
import { loadWeather } from '../../utils/loadWeather.mjs'

const initLAB = () => {
  loadScript('_scripts/modules/LAB/LAB.min.js').then(() => {
    $LAB
    .script('_scripts/modules/LAB/jquery.min.js')
    .script('_scripts/modules/LAB/layer/layer.js')
    .script('_scripts/modules/LAB/hmac-sha1.js')
    .wait(() => {
      $('#ilove').css({
        'width': '640px',
        'height': 'auto',
        'max-width': '95vw',
        'max-height': '100vh'
      })
      .html(`
        <div class="ilove__title">
          <p></p>
          <p>iLove恋爱小事 - by hcc</p>
          <p>记录您的幸福瞬间 & 传递爱的讯息！</p>
          <p>快邀请你的另一半，一起来体验吧~</p>
        </div>
        <div class="ilove__content">
          <img src="_images/tinified/wx_mini_qrcode.jpg" alt="微信小程序 - iLove恋爱小事" width="256" height="256">
          <img src="_images/tinified/qq_mini_qrcode.jpg" alt="QQ小程序 - iLove恋爱小事" width="256" height="256">
        </div>
      `)
      setTimeout(() => {
        layer.open({
          type: 1,
          title: false,
          closeBtn: 0,
          area: ['auto'],
          skin: 'layui-layer-nobg',
          shadeClose: true,
          content: $('#ilove')
        })
      }, 5000)
      const day = new Date().getDate()
      const month = new Date().getMonth() + 1
      if (month === 12 && [24, 25].includes(day)) {
        $LAB.script('_scripts/modules/LAB/snow.js')
      } else {
        const s = Math.floor(Math.random() * 5)
        setTimeout(() => {
          $LAB.script(loadWeather())
        }, s * 1000)
      }
      window.showWeather = (res) => {
        if (res && res.results) {
          const code = res.results[0].now.code
          const text = res.results[0].now.text
          if ([20, 21, 22, 23, 24, 25].indexOf(code) !== -1) {
            $LAB.script('_scripts/modules/LAB/snow.js')
          }
          document.querySelector('#ilove').children[0].children[0].textContent = month + '月' + day + '日 ' + text
        }
      }
    })
  })
}

export {
  initLAB
}