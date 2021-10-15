var idx = 0
var tips = ['WuxUI 🐮', 'MiniProgram 🐶', 'VSCode 🐱', 'Atom 🐯', 'Sublime Text 2/3 🐻']
$(document).ready(function ($) {
  $('body').click(function (e) {
    var $i = $('<span></span>').text(tips[idx])
    idx = (idx + 1) % tips.length
    var x = e.pageX,
      y = e.pageY
    $i.css({
      'z-index': 10000,
      'top': y - 20,
      'left': x,
      'position': 'absolute',
      'font-weight': 'bold',
      'cursor': 'default',
      'user-select': 'none',
      'color': 'rgb(' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ')'
    })
    $('body').append($i)
    $i.animate({
        'top': y - 180,
        'opacity': 0
      },
      1500,
      function () {
        $i.remove()
      })
  })
})
