;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-mobile" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M752.927894 22.263815l-454.08247 0c0 0-65.210849-1.038677-65.210849 67.446262l-0.338699 813.780816c0 0-6.119162 67.130143 62.162558 67.130143L755.976185 970.621036c0 0 63.178655 0.993517 63.178655-64.397971L819.15484 89.732657C819.15484 89.732657 821.141874 22.263815 752.927894 22.263815L752.927894 22.263815zM460.495171 55.027299l130.376538 0 0 32.650584-130.376538 0L460.495171 55.027299 460.495171 55.027299zM411.587034 55.027299c9.031974 0 16.325292 7.270739 16.325292 16.302712 0 9.031974-7.270739 16.370452-16.325292 16.370452-8.986814 0-16.280132-7.315899-16.280132-16.370452C395.306902 62.298037 402.577641 55.027299 411.587034 55.027299L411.587034 55.027299zM525.70602 905.206968c-18.041367 0-32.605424-14.631797-32.605424-32.695744 0-18.041367 14.586637-32.718324 32.605424-32.718324 18.018787 0 32.605424 14.676957 32.605424 32.718324C558.334024 890.552591 543.724807 905.206968 525.70602 905.206968L525.70602 905.206968zM755.276207 774.378831 296.113252 774.378831 296.113252 120.351047l459.162955 0L755.276207 774.378831 755.276207 774.378831zM755.276207 774.378831"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontweixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon363601" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M909.937778 664.803556c-18.432-110.876444-95.829333-183.523556-95.829333-183.523556 11.064889-100.664889-29.496889-118.528-29.496889-118.528C776.106667 51.313778 517.432889 56.775111 512 56.917333c-5.432889-0.142222-264.135111-5.603556-272.611556 305.863111 0 0-40.561778 17.863111-29.496889 118.528 0 0-77.397333 72.647111-95.829333 183.523556 0 0-9.841778 187.335111 88.462222 22.954667 0 0 22.129778 62.435556 62.663111 118.528 0 0-72.504889 25.486222-66.332444 91.761778 0 0-2.474667 73.898667 154.823111 68.835556 0 0 110.563556-8.903111 143.758222-57.344l29.240889 0c33.166222 48.440889 143.758222 57.344 143.758222 57.344 157.240889 5.091556 154.794667-68.835556 154.794667-68.835556 6.115556-66.247111-66.332444-91.761778-66.332444-91.761778 40.533333-56.092444 62.663111-118.528 62.663111-118.528C919.751111 852.167111 909.937778 664.803556 909.937778 664.803556L909.937778 664.803556zM909.937778 664.803556"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-email" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.983115 732.726124 320.004733 575.058175 0.020978 858.878289l1023.958044 0L703.993221 575.058175 511.983115 732.726124zM1023.977999 795.823184 1023.977999 322.789661 735.978702 543.524994 1023.977999 795.823184zM0.020978 322.789661l0 473.03557 288.00032-252.299213L0.020978 322.789661zM0.020978 165.120688l0 94.600565 511.963161 409.93851 511.994883-409.93851L1023.979022 165.120688 0.020978 165.120688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)