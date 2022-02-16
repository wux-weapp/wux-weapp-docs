! function () {
  var n, t, o, s, i, a, r, g, v, c, p, d, x, l, h, I, m, u, w, f, b;

  function y() {
    (function () {
      {
        var t;
        a = (r = n.ls) && r ? (t = r.getItem("mkt_egg_script_chrismas2020"), t ? parseInt(t) : 1) : -1
      }
    }(), p = !0, h.appendChild(I), h.appendChild(m), T(), function () {
      for (var s = [], i = [], a = [], r = [], c = [], p = [], d = [], l = [], t = 0; t < v; t++) s.push(parseInt(230 * Math.random(), 10)), i.push(parseInt(300 * Math.random() + 30, 10)), a.push(parseInt(130 * Math.random(), 10)), r.push(parseInt(10 * Math.random() + 50, 10)), c.push(parseInt(10 * Math.random() - 10, 10)), p.push(parseInt(100 * Math.random(), 10)), d.push(p[t] * I.width / 100), l.push(Math.random());
      var h = I.getContext("2d"),
        m = I.height + 160,
        e = window.orientation;
      90 !== e && -90 !== e || (m = I.height + 160);
      var u = [],
        w = 3 * g,
        f = 24 * w,
        y = -1;
      ! function o() {
        y++, x = requestAnimationFrame(function () {
          h.clearRect(0, 0, I.width, I.height);
          for (var t = 0; t < v; t++) {
            u[t] = {}, 45 <= p[t] && p[t] <= 55 ? u[t].right = (a[t] - i[t] + 10) * I.width / 100 : 30 <= p[t] && p[t] < 45 || 55 < p[t] && p[t] <= 70 ? u[t].left = (i[t] - s[t] + 20) * I.width / 100 : u[t].left = (s[t] - a[t] + 20) * I.width / 100, u[t].top = m;
            var e = l[t] * f,
              n = y - e <= 0 ? -1 : (y - e) / w / 3;
            h.drawImage(b[t % 2], 0, 0, 200, 200, d[t] + u[t].left * n, c[t] + u[t].top * n, r[t], r[t])
          }
          o()
        })
      }()
    }(), c = !0, window.addEventListener("scroll", E), l.push(setTimeout(function () {
      d = !0
    }, 1e3 * g + 3e3)), n.ls && n.ls.setItem("mkt_egg_script_chrismas2020", a + 1))
  }

  function E() {
    c ? o.scrollTop > 2.5 * i ? m.style.display = "none" : (M(), d ? l.push(setTimeout(_, 800)) : T(), c = !1) : l.push(setTimeout(function () {
      c = !0
    }, 5e3))
  }

  function T() {
    l.push(setTimeout(function () {
      m.style.opacity = "1", m.style.top = Math.floor(.75 * i) + "px"
    }, 800))
  }

  function M() {
    m.style.transition = "all ease .8s 0s", m.style.opacity = "0", m.style.top = i + "px", l.push(setTimeout(function () {
      m.style.transition = "top linear ".concat(g, "s 0s, opacity ease 2s 0s")
    }, 100))
  }

  function _() {
    p && (h.removeChild(I), h.removeChild(m)), p = !1,
      function () {
        cancelAnimationFrame(x);
        for (var t = 0; t < l.length; t++) clearTimeout(l[t])
      }()
  }
  window.performance && (e = "snow", n = { ls: window.localStorage }, t = document.body, o = document.getElementsByTagName("html")[0], s = window.innerWidth, i = window.innerHeight, g = 150, v = 500, d = p = !(c = !0), l = [], h = t, (I = document.createElement("canvas")).height = 2 * (i + 50), I.width = 2 * s, I.style.height = i + 50 + "px", I.style.width = s + "px", I.style.position = "fixed", I.style.zIndex = "300", I.style.left = "0", I.style.top = "0", I.style.pointerEvents = "none", m = document.createElement("div"), (u = new Image).src = "https://mms-mis.cdn.bcebos.com/tox/sd2020/%E9%9B%AA%E5%9C%B0-0.png", u.style.height = "100%", m.appendChild(u), m.style.height = i + "px", m.style.width = s + "px", m.style.position = "fixed", m.style.zIndex = "300", m.style.left = "0", m.style.top = i + "px", m.style.display = 720 <= s ? "none" : "block", m.style.transition = "top linear ".concat(g, "s 0s, opacity ease 2s 0s"), m.addEventListener("click", function () {
    M(), d ? l.push(setTimeout(_, 800)) : T()
  }), (w = new Image).src = "https://mms-mis.cdn.bcebos.com/tox/sd2020/%E9%9B%AA%E8%8A%B1.png", (f = new Image).src = "https://mms-mis.cdn.bcebos.com/tox/sd2020/snowball.png", b = [w, f])
  var called = false
  var timer = setTimeout(function () {
    if (!called) {
      called = true
      clearTimeout(timer)
      y()
    }
  }, 1500)
  window.onload = function () {
    if (!called) {
      called = true
      clearTimeout(timer)
      y()
    }
  }
  window.onunload = function () {
    _()
  }
}();