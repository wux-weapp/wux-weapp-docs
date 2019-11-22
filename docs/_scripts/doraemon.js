(function() {
	// default theme
	window.$doraemon = {
		bodyColor: '#019FE8',
		bellColor: '#FFED37',
		mouthColor: '#DE032D',
	}

	// htmlText & cssText
	var cssText = '*{margin:0;padding:0;box-sizing:border-box;list-style:none;text-decoration:none}.doraemon{--theme-color:bodyColor;position:fixed;right:0;bottom:0;width:320px;height:320px;-webkit-animation:volar 1s linear 2s infinite alternate;animation:volar 1s linear 2s infinite alternate}.cajaovalo{width:100px;height:5px;background:0 0;margin:0 auto;position:relative;margin-bottom:10px}.ovalo{width:100px;height:5px;margin:0 auto;background-color:gray;-ms-border-radius:5px;-o-border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;border:2px solid gray;z-index:100;opacity:.6;position:absolute;top:5px;-webkit-animation-name:rotar;-webkit-animation-duration:.1s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:rotar;-moz-animation-duration:.1s;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;-ms-animation-name:rotar;-ms-animation-duration:.1s;-ms-animation-iteration-count:infinite;-ms-animation-timing-function:linear;-o-animation-name:rotar;-o-animation-duration:.1s;-o-animation-iteration-count:infinite;-o-animation-timing-function:linear;animation-name:rotar;animation-duration:.1s;animation-iteration-count:infinite;animation-timing-function:linear}@-webkit-keyframes rotar{from{-webkit-transform:rotate3D(0,1,0,0deg)}to{-webkit-transform:rotate3D(0,1,0,360deg)}}@-moz-keyframes rotar{from{-moz-transform:rotate3D(0,1,0,0deg)}to{-moz-transform:rotate3D(0,1,0,360deg)}}@-ms-keyframes rotar{from{-ms-transform:rotate3D(0,1,0,0deg)}to{-ms-transform:rotate3D(0,1,0,360deg)}}@-o-keyframes rotar{from{-o-transform:rotate3D(0,1,0,0deg)}to{-o-transform:rotate3D(0,1,0,360deg)}}@keyframes rotar{from{transform:rotate3D(0,1,0,0deg)}to{transform:rotate3D(0,1,0,360deg)}}.semi-circulo{width:20px;height:10px;display:block;border:2px solid #555;background:#bd8d22;-moz-border-radius:100px 100px 0 0;-webkit-border-radius:100px 100px 0 0;border-radius:100px 100px 0 0;position:absolute;right:0;top:0;left:0;bottom:0;margin:auto;z-index:2}.palo{width:7px;height:30px;z-index:1;background:#fcc136;position:relative;top:7px;border:2px solid #000;margin:0 auto}.cabeza{width:200px;height:200px;border-radius:50%;border:2px solid #000;margin:0 auto;position:relative;background:var(--theme-color,#35a1c9);z-index:100;overflow:hidden}.circulo-dos{width:170px;height:170px;border-radius:100%;background:#fff;border:2px solid #000;position:absolute;right:0;top:0;left:0;bottom:0;margin:auto}.boca{width:140px;height:70px;-moz-border-radius:140px 140px 0 0;-webkit-border-radius:140px 140px 0 0;border-radius:140px 140px 0 0;background:mouthColor;overflow:hidden;margin:0 auto;position:relative;top:-13px;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg)}.pupila{width:23px;height:15px;background:#000;border-radius:100%;-moz-transform:rotate(90deg);-webkit-transform:rotate(90deg);position:absolute;top:20px;left:58px}.pupila2{width:23px;height:15px;background:#000;border-radius:100%;-moz-transform:rotate(90deg);-webkit-transform:rotate(90deg);position:absolute;top:20px;right:58px}._navegacion{margin:0 auto}._navegacion_li{margin:0 0;background:#fff;width:48px;height:48px;border-radius:100%;border:1px solid #000;overflow:hidden}.elemento{width:48px;height:48px;background-color:#fff;position:relative;overflow:hidden;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;-webkit-animation-iteration-count:3;-moz-animation-iteration-count:3;-ms-animation-iteration-count:3;-o-animation-iteration-count:3;-webkit-animation-name:pulse;-moz-animation-name:pulse;-ms-animation-name:pulse;-o-animation-name:pulse;animation-name:pulse;animation-duration:1s;animation-iteration-count:3;z-index:100}.elemento:after{content:"⌒";width:48px;line-height:2.5;font-size:30px;color:#000;position:absolute;text-align:center;font-weight:700}@-webkit-keyframes pulse{to{bottom:100px}from{bottom:0}}@-ms-keyframes pulse{to{bottom:100px}from{bottom:0}}@-o-keyframes pulse{to{bottom:100px}from{bottom:0}}@-moz-keyframes pulse{to{bottom:100px}from{bottom:0}}@keyframes pulse{to{bottom:100px}from{bottom:0}}._navegacion{display:flex;align-items:center;align-content:center;flex-direction:row;justify-content:center;flex-wrap:wrap}.nariz{background:mouthColor;width:34px;height:34px;border-radius:100%;border:1px solid #000;margin:0 auto;position:relative;top:-8px}.palonariz{width:2px;height:20px;margin:0 auto;background-color:#000;position:relative;top:-8px}.lunar{width:10px;height:10px;border-radius:100%;border:1px solid #fff;position:absolute;background:#fff;top:6px;left:8px}.iris1{width:6px;height:3px;background:#fff;border-radius:100%;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);position:absolute;right:0;top:0;left:0;bottom:0;margin:auto}.iris2{width:6px;height:3px;background:#fff;border-radius:100%;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);position:absolute;right:0;top:0;left:0;bottom:0;margin:auto}.corazon{position:relative;width:100px;height:90px;margin:0 auto;top:-50px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.corazon::after,.corazon::before{content:"";position:absolute;left:50px;top:0;width:50px;display:block;height:80px;background:#ca2533;-webkit-border-radius:50px 50px 0 0;-moz-border-radius:50px 50px 0 0;-ms-border-radius:50px 50px 0 0;-o-border-radius:50px 50px 0 0;border-radius:50px 50px 0 0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;-moz-transform-origin:0 100%;-ms-transform-origin:0 100%;-o-transform-origin:0 100%;transform-origin:0 100%}.corazon::after{left:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;-moz-transform-origin:100% 100%;-ms-transform-origin:100% 100%;-o-transform-origin:100% 100%;transform-origin:100% 100%}.huevo{width:142px;height:172px;background:var(--theme-color,#35a1c9);border:2px solid #000;-webkit-border-radius:50% 50% 50% 50%/60% 60% 40% 40%;-moz-border-radius:50% 50% 50% 50%/60% 60% 40% 40%;-ms-border-radius:50% 50% 50% 50%/60% 60% 40% 40%;-o-border-radius:50% 50% 50% 50%/60% 60% 40% 40%;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;margin:0 auto;position:relative;top:-100px;z-index:2}.ovalocesta{width:100px;height:60px;margin:0 auto;background:#fff;-moz-border-radius:100px/60px;-webkit-border-radius:100px/60px;border-radius:100px/60px;position:relative;top:40px}.cesta{width:60px;height:30px;-moz-border-radius:60px 60px 0 0;-webkit-border-radius:60px 60px 0 0;border-radius:60px 60px 0 0;background:#fff;border:2px solid #000;position:absolute;right:0;top:0;left:0;bottom:-20px;margin:auto;z-index:2;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg)}.campana{width:35px;height:35px;border:2px solid #000;border-radius:100%;background-color:bellColor;position:absolute;right:0;top:0;left:0;bottom:-60px;margin:auto;z-index:3}.bolanegra{width:8px;height:8px;border-radius:100%;background-color:#000;position:absolute;right:0;top:8px;left:0;bottom:0;margin:auto}.palonegro{width:2px;height:15px;background-color:#000;margin:0 auto;-moz-transform:rotate(180deg);-webkit-transform:rotate(90deg);position:relative;top:18px}.bufanda{width:100px;height:50px;margin:0 auto;background:mouthColor;-moz-border-radius:100px/50px;-webkit-border-radius:100px/50px;border-radius:100px/50px;position:relative;top:55px;z-index:2}._pie{margin:0 auto}._pie_li{margin:-2px}._pie{display:flex;align-items:center;align-content:center;flex-direction:row;justify-content:center;flex-wrap:wrap;position:relative;bottom:150px}.pie1{width:55px;height:77px;margin:0 auto;background:#fff;-moz-border-radius:55px/77px;-webkit-border-radius:55px/77px;border-radius:55px/77px;border:2px solid #000;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg)}.pie2{width:55px;height:77px;margin:0 auto;background:#fff;-moz-border-radius:55px/77px;-webkit-border-radius:55px/77px;border-radius:55px/77px;border:2px solid #000;-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg)}._brazos{margin:0 auto}._brazos{display:flex;align-items:center;align-content:center;flex-direction:row;justify-content:center;flex-wrap:wrap}.brazo1{width:55px;height:85px;margin:0 auto;background:var(--theme-color,#35a1c9);-moz-border-radius:55px/85px;-webkit-border-radius:55px/85px;border-radius:55px/85px;border:2px solid #000;-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);position:relative;top:-90px;left:-46px}.brazo2{width:55px;height:77px;margin:0 auto;background:var(--theme-color,#35a1c9);-moz-border-radius:55px/85px;-webkit-border-radius:55px/85px;border-radius:55px/85px;border:2px solid #000;-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);position:relative;top:-90px;right:-46px}.mano1{width:60px;height:60px;border-radius:100%;background-color:#fff;border:2px solid #000;position:absolute;right:-3px;top:-34px}.mano2{width:60px;height:60px;border-radius:100%;background-color:#fff;border:2px solid #000;position:absolute;left:-3px;top:-34px}.bigotes{z-index:9999;position:relative;float:left;display:inline-block;top:59px;left:16px}.b1{width:60px;height:2px;background-color:#000;margin:0 auto;margin-bottom:18px;-moz-transform:rotate(25deg);-webkit-transform:rotate(25deg)}.b2{width:60px;height:2px;background-color:#000;margin:0 auto;margin-bottom:10px}.b3{width:60px;height:2px;background-color:#000;margin:0 auto;-moz-transform:rotate(-10deg);-webkit-transform:rotate(-10deg)}.bigotes2{z-index:9999;position:relative;float:right;display:inline-block;top:59px;right:16px}.b1_{width:60px;height:2px;background-color:#000;margin:0 auto;margin-bottom:18px;-moz-transform:rotate(-25deg);-webkit-transform:rotate(-25deg)}.b2_{width:60px;height:2px;background-color:#000;margin:0 auto;margin-bottom:10px}.b3_{width:60px;height:2px;background-color:#000;margin:0 auto;-moz-transform:rotate(10deg);-webkit-transform:rotate(10deg)}@-webkit-keyframes volar{0%{bottom:0;left:0}25%{bottom:0;left:100px}50%{bottom:100px;left:100px}75%{bottom:100px;left:0}100%{bottom:0;left:0}}@-moz-keyframes volar{0%{bottom:0;left:0}25%{bottom:0;left:100px}50%{bottom:100px;left:100px}75%{bottom:100px;left:0}100%{bottom:0;left:0}}@-ms-keyframes volar{0%{bottom:0;left:0}25%{bottom:0;left:100px}50%{bottom:100px;left:100px}75%{bottom:100px;left:0}100%{bottom:0;left:0}}@-o-keyframes volar{0%{bottom:0;left:0}25%{bottom:0;left:100px}50%{bottom:100px;left:100px}75%{bottom:100px;left:0}100%{bottom:0;left:0}}@keyframes volar{0%{bottom:0}25%{bottom:0}50%{bottom:50px}75%{bottom:50px}100%{bottom:0}}'
	var htmlText = '<div class="doraemon"><div class="cajaovalo"><div class="ovalo"></div><div class="semi-circulo"><div class="palo"></div></div></div><div class="cabeza"><ul class="bigotes"><li><div class="b1"></div></li><li><div class="b2"></div></li><li><div class="b3"></div></li></ul><ul class="bigotes2"><li><div class="b1_"></div></li><li><div class="b2_"></div></li><li><div class="b3_"></div></li></ul><div class="circulo-dos"><ul class="_navegacion"><li class="_navegacion_li"><div class="pupila"><div class="iris1"></div></div></li><li class="_navegacion_li"><div class="elemento"></div><div class="pupila2"><div class="iris2"></div></div></li></ul><div class="nariz"><div class="lunar"></div></div><div class="palonariz"></div><div class="boca"><ul class="corazon"></ul></div></div></div><div class="huevo"><div class="bufanda"></div><div class="campana"><div class="bolanegra"></div><div class="palonegro"></div></div><div class="ovalocesta"><div class="cesta"></div></div><ul class="_brazos"><li><div class="brazo1"><div class="mano1"></div></div></li><li><div class="brazo2"><div class="mano1"></div></div></li></ul></div><ul class="_pie"><li class="_pie_li"><div class="pie1"></div></li><li class="_pie_li"><div class="pie2"></div></li></ul></div>'

	// replace theme
	cssText = cssText.replace(/bodyColor/g, window.$doraemon.bodyColor)
		.replace(/bellColor/g, window.$doraemon.bellColor)
		.replace(/mouthColor/g, window.$doraemon.mouthColor)

	htmlText = getHTMLText(htmlText, cssText, function(match) {
		cssText = match ? cssText.replace(match, '') : cssText
	})

	// Inner CSS
	var style = document.createElement('style')
	style.type = 'text/css'
	style.appendChild(document.createTextNode(cssText))
	document.head.appendChild(style)

	// Inner HTML
	var div = document.createElement('div')
	div.innerHTML = htmlText
	document.body.appendChild(div)

	// Observer Node
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	var callback = function callback() {
	    document.write('多啦A梦hin生气，后果hin严重！！！')
	}
	var observer = new MutationObserver(function (mutations) {
	    mutations.forEach(callback)
	})
	observer.observe(div, {
	    attributes: true,
	    characterData: true,
	    childList: true,
	    subtree: true,
	})
	div.addEventListener('DOMNodeRemoved', callback)

	window.addEventListener('resize', onResize)

	/**
	 * onResize
	 */
	function onResize() {
		var hide = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
		if (observer && div) {
			observer.disconnect()
			div.style.display = hide ? 'none' : 'block'
			observer.observe(div, {
			    attributes: true,
			    characterData: true,
			    childList: true,
			    subtree: true,
			})
		}
	}

	onResize()

	/**
	 * Get Inline Style
	 * @param {String} cssText css style
	 * @param {String} selector element selector
	 */
	function getCssString(cssText, selector, callback) {
		if (!cssText || !selector) return ''
		var start = selector + '{'
		var start$ = selector.replace('.', '\\.') + '{'
		var end$ = '}'
		var reg = new RegExp(start$ + '.*?' + end$, 'g')
		var match = cssText.match(reg)
		if (match) {
			if (!match[0]) return ''
			var result = match.map(function(v) {
				return v.replace(start, '').replace(end$, '')
			}).join(';')
			callback && callback(start + result + end$)
			return result
		}
		return ''
	}

	/**
	 * getHTMLText
	 * @param {String} htmlText HTML
	 * @param {String} cssText css style
	 * @param {Function} callback callback function
	 */
	function getHTMLText(htmlText, cssText, callback) {
		var root = html2json(htmlText)
		root.child = deep(root.child, cssText, callback)
		return json2html(root)
	}

	/**
	 * deep
	 * @param {Array} childList nodes
	 * @param {String} cssText css style
	 * @param {Function} callback callback function
	 */
	function deep(childList, cssText, callback) {
		childList.forEach(function(child) {
			if (Array.isArray(child.child) && child.child.length > 0) {
				child.child = deep(child.child, cssText, callback)
			}
			if (child.node === 'element') {
				child.attr = child.attr || {}
				var className = child.attr.class
				if (cssText.indexOf(className + ':before') === -1 && cssText.indexOf(className + ':after') === -1) {
					if ('class' in child.attr) delete child.attr.class
					if ('id' in child.attr) delete child.attr.id
				}
				if (!className) return
				var style = getCssString(cssText, '.' + className, callback)
				var value = style && style.split(';')
					.filter(function(v) { return !!v })
					.map(function(v) { return v.split(':') })
					.reduce(function(acc, name) { return acc.concat(name) }, [])
					.map(function(v, i) { return (i + 1) % 2 !== 0 ? (v + ':') : (v + ';') })
				child.attr.style = style ? value : child.attr.style
			}
		})
		return childList
	}
})()