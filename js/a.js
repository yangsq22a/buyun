(function(window) {
    var svgSprite = '<svg><symbol id="icon-home2" viewBox="0 0 1024 1024"><path d="M938.412716 480.847489 556.823881 104.126522c-1.89721-2.258437-6.142907-6.194072-12.037151-10.081613-9.920954-6.544043-21.162995-10.520611-33.496905-10.520611-13.180184 0-24.690332 3.997034-34.357506 10.623965-5.846148 4.010337-9.876951 8.102538-12.157901 11.154038L84.209914 480.894561c-14.700817 14.481829-14.700817 38.014802 0 52.529377 14.585183 14.427594 33.995255 8.343015 50.529837-7.945973l25.607214-25.314549 38.918381-37.700647c-1.359974 1.686409-2.282996 2.963495-2.284019 3.373841L196.981327 847.484797c0 50.006927 40.941458 90.427522 91.442642 90.427522l141.713582 0 10.423397 0L440.560948 927.486876 440.560948 686.440961c0-17.467837 14.411221-31.683607 32.223912-31.683607l77.051887 0c17.814738 0 32.223912 14.21577 32.223912 31.683607L582.060659 927.486876l0 10.425444 10.425444 0 141.713582 0c50.485835 0 91.442642-40.428781 91.442642-90.427522L825.642327 467.251843l62.246693 61.207014c20.142759 13.266142 37.897122 17.434068 50.523697 4.963035C953.114556 518.910387 953.114556 495.361041 938.412716 480.847489z"  ></path></symbol></svg>';
    var script = function() { var scripts = document.getElementsByTagName("script"); return scripts[scripts.length - 1] }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else {
                var loadFn = function() {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) { IEContentLoaded(window, fn) }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function() {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function() {
                try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50); return }
                init()
            };
            polling();
            d.onreadystatechange = function() {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function(el, target) { target.parentNode.insertBefore(el, target) };
    var prepend = function(el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } }
    ready(appendSvg)
})(window)