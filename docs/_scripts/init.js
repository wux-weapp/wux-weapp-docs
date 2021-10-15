!(function () {
  $LAB
  .script('_scripts/mouseEffects.js')
  .script('_scripts/layer/layer.js')
  .script('_scripts/html2json.js')
  .script('_scripts/doraemon.js')
  .script('_scripts/hmac-sha1.js')
  .script('_scripts/weather.js')
  .wait(function () {
    $('#ilove').css({
      width: '640px',
      height: '400px'
    })
    .html(`
      <div class="ilove__title">
        <p></p>
        <p>iLove恋爱小事 - by hcc</p>
        <p>记录您的幸福瞬间 & 传递爱的讯息！</p>
        <p>快邀请你的另一半，一起来体验吧~</p>
      </div>
      <img src="_images/wx_mini_qrcode.jpg" alt="微信小程序 - iLove恋爱小事" width="256" height="256">
      <img src="_images/qq_mini_qrcode.jpg" alt="QQ小程序 - iLove恋爱小事" width="256" height="256">
    `)
    setTimeout(function () {
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
    var day = new Date().getDate()
    var month = new Date().getMonth() + 1
    if (month === 12 && [24, 25].includes(day)) {
      $LAB.script('_scripts/snow.js')
    } else {
      var s = Math.floor(Math.random() * 5)
      setTimeout(function () {
        $LAB.script(weather())
      }, s * 1000)
    }
    window.showWeather = function showWeather (res) {
      if (res && res.results) {
        var code = res.results[0].now.code
        var text = res.results[0].now.text
        if ([20, 21, 22, 23, 24, 25].indexOf(code) !== -1) {
          $LAB.script('_scripts/snow.js')
        }
        document.querySelector('#ilove').children[0].children[0].textContent = month + '月' + day + '日 ' + text
      }
    }
  })
})()