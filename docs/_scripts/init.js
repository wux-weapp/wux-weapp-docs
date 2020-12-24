!(function () {
  $LAB
  .script('_scripts/mouseEffects.js')
  .script('_scripts/layer/layer.js')
  .script('_scripts/html2json.js')
  .script('_scripts/doraemon.js')
  .wait(function () {
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
    }, 1000)
    var day = new Date().getDate()
    var month = new Date().getMonth() + 1
    if (month === 12 && [24, 25].includes(day)) {
      $LAB.script('_scripts/snow.js')
    }
  })
})()