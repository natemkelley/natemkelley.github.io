/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{297:function(t,e,n){"use strict";function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},o=Object.keys(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}n.d(e,"a",(function(){return o}))},339:function(t,e,n){"use strict";var o=n(3),r=n(19),l=n(25),c=n(102),f=n(58),h=n(9),d=n(43).f,m=n(59).f,y=n(8).f,v=n(397).trim,w=o.Number,S=w,k=w.prototype,O="Number"==l(n(74)(k)),C="trim"in String.prototype,T=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,l=(e=C?e.trim():v(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(O?h((function(){k.valueOf.call(n)})):"Number"!=l(n))?c(new S(T(e)),n,w):T(e)};for(var E,P=n(7)?d(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),B=0;P.length>B;B++)r(S,E=P[B])&&!r(w,E)&&y(w,E,m(S,E));w.prototype=k,k.constructor=w,n(11)(o,"Number",w)}},397:function(t,e,n){var o=n(6),r=n(24),l=n(9),c=n(398),f="["+c+"]",h=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,n){var r={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=r[t]=f?e(y):c[t];n&&(r[n]=h),o(o.P+o.F*f,"String",r)},y=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},398:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},399:function(t,e,n){"use strict";(function(t){var n=this&&this.__spreadArrays||function(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],o=0,r=a.length;o<r;o++,n++)e[n]=a[o];return e};Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e,n){this.name=t,this.version=e,this.os=n};e.BrowserInfo=o;var r=function(e){this.version=e,this.name="node",this.os=t.platform};e.NodeInfo=r;var l=function(){this.bot=!0,this.name="bot",this.version=null,this.os=null};e.BotInfo=l;var c=3,f=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],h=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function d(t){var e=""!==t&&f.reduce((function(e,n){var o=n[0],r=n[1];if(e)return e;var l=r.exec(t);return!!l&&[o,l]}),!1);if(!e)return null;var r=e[0],h=e[1];if("searchbot"===r)return new l;var d=h[1]&&h[1].split(/[._]/).slice(0,3);return d?d.length<c&&(d=n(d,function(t){for(var output=[],e=0;e<t;e++)output.push("0");return output}(c-d.length))):d=[],new o(r,d.join("."),m(t))}function m(t){for(var e=0,n=h.length;e<n;e++){var o=h[e],r=o[0];if(o[1].test(t))return r}return null}function y(){return void 0!==t&&t.version?new r(t.version.slice(1)):null}e.detect=function(t){return t?d(t):"undefined"!=typeof navigator?d(navigator.userAgent):y()},e.parseUserAgent=d,e.detectOS=m,e.getNodeVersion=y}).call(this,n(75))},403:function(t,e,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(element){this.element=element}return t.prototype.getHorizontalScroll=function(){return this.element.scrollLeft},t.prototype.getVerticalScroll=function(){return this.element.scrollTop},t.prototype.getMaxHorizontalScroll=function(){return this.element.scrollWidth-this.element.clientWidth},t.prototype.getMaxVerticalScroll=function(){return this.element.scrollHeight-this.element.clientHeight},t.prototype.getHorizontalElementScrollOffset=function(t){return t.getBoundingClientRect().left+this.element.scrollLeft-this.element.getBoundingClientRect().left},t.prototype.getVerticalElementScrollOffset=function(t){return t.getBoundingClientRect().top+this.element.scrollTop-this.element.getBoundingClientRect().top},t.prototype.scrollTo=function(t,e){this.element.scrollLeft=t,this.element.scrollTop=e},t}(),l=function(){function t(){}return t.prototype.getHorizontalScroll=function(){return window.scrollX||document.documentElement.scrollLeft},t.prototype.getVerticalScroll=function(){return window.scrollY||document.documentElement.scrollTop},t.prototype.getMaxHorizontalScroll=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth},t.prototype.getMaxVerticalScroll=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight},t.prototype.getHorizontalElementScrollOffset=function(t){return(window.scrollX||document.documentElement.scrollLeft)+t.getBoundingClientRect().left},t.prototype.getVerticalElementScrollOffset=function(t){return(window.scrollY||document.documentElement.scrollTop)+t.getBoundingClientRect().top},t.prototype.scrollTo=function(t,e){window.scrollTo(t,e)},t}(),c={elements:[],cancelMethods:[],add:function(element,t){c.elements.push(element),c.cancelMethods.push(t)},stop:function(element){var t=c.elements.indexOf(element);t>-1&&(c.cancelMethods[t](),c.elements.splice(t,1),c.cancelMethods.splice(t,1))}},f="undefined"!=typeof window,h={cancelOnUserAction:!0,easing:function(t){return--t*t*t+1},elementToScroll:f?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function d(t,e){if(void 0===e&&(e={}),!f)return new Promise((function(t){t(!1)}));if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";var n,d,m,y=o(o({},h),e),v=y.elementToScroll===window,w=!!y.elementToScroll.nodeName;if(!v&&!w)throw"Element to scroll needs to be either window or DOM element.";var S=v?new l:new r(y.elementToScroll);if(t instanceof Element)m=t,n=S.getHorizontalElementScrollOffset(m),d=S.getVerticalElementScrollOffset(m);else if("number"==typeof t)n=S.getHorizontalScroll(),d=t;else{if(!Array.isArray(t)||2!==t.length)throw"Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";n=null===t[0]?S.getHorizontalScroll():t[0],d=null===t[1]?S.getVerticalScroll():t[1]}n+=y.horizontalOffset,d+=y.verticalOffset;var k=S.getMaxHorizontalScroll(),O=S.getHorizontalScroll();n>k&&(n=k);var C=n-O,T=S.getMaxVerticalScroll(),E=S.getVerticalScroll();d>T&&(d=T);var P=d-E,B=Math.abs(Math.round(C/1e3*y.speed)),M=Math.abs(Math.round(P/1e3*y.speed)),N=B>M?B:M;return N<y.minDuration?N=y.minDuration:N>y.maxDuration&&(N=y.maxDuration),new Promise((function(t,e){var o;0===C&&0===P&&t(!0),c.stop(y.elementToScroll);var r=function(){m(),cancelAnimationFrame(o),t(!1)};c.add(y.elementToScroll,r);var l=y.cancelOnUserAction?r:function(t){return t.preventDefault()},f=y.cancelOnUserAction?{passive:!0}:{passive:!1},h=["wheel","touchstart","keydown","mousedown"],m=function(){h.forEach((function(t){y.elementToScroll.removeEventListener(t,l)}))};h.forEach((function(t){y.elementToScroll.addEventListener(t,l,f)}));var v=Date.now(),w=function(){var e=Date.now()-v,r=e/N,l=Math.round(O+C*y.easing(r)),c=Math.round(E+P*y.easing(r));e<N&&(l!==n||c!==d)?(S.scrollTo(l,c),o=requestAnimationFrame(w)):(S.scrollTo(n,d),cancelAnimationFrame(o),m(),t(!0))};o=requestAnimationFrame(w)}))}e.default=d,f&&(window.animateScrollTo=d)},406:function(t,e,n){"use strict";n(407)("blink",(function(t){return function(){return t(this,"blink","","")}}))},407:function(t,e,n){var o=n(6),r=n(9),l=n(24),c=/"/g,f=function(t,e,n,o){var r=String(l(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(o).replace(c,"&quot;")+'"'),f+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),o(o.P+o.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},412:function(t,e,n){var o;o=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(1),l=n(3),c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r.initializer.load(this,n,e),this.begin()}return o(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=l.htmlParser.typeHtmlChars(t,e,n);var o=0,c=t.substr(e);if("^"===c.charAt(0)&&/^\^\d+/.test(c)){var f=1;f+=(c=/\d+/.exec(c)[0]).length,o=parseInt(c),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+f),n.toggleBlinking(!0)}if("`"===c.charAt(0)){for(;"`"!==t.substr(e+r).charAt(0)&&!(e+ ++r>t.length););var h=t.substring(0,e),d=t.substring(h.length+1,e+r),m=t.substring(e+r+1);t=h+d+m,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),o)}),o):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var o=t.substr(0,e);this.replaceText(o),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=l.htmlParser.backSpaceHtmlChars(t,e,n);var o=t.substr(0,e);if(n.replaceText(o),n.smartBackspace){var r=n.strings[n.arrayPos+1];r&&o===r.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),o)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=c,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(2),f=(o=c)&&o.__esModule?o:{default:o},h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return l(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=r({},f.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(s){return s.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var o=Array.prototype.slice.apply(t.stringsElement.children),l=o.length;if(l)for(var i=0;i<l;i+=1){var c=o[i];t.strings.push(c.innerHTML.trim())}}for(var i in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[i]=i;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-typed-js-css",!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e))}}}]),t}();e.default=h;var d=new h;e.initializer=d},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if("<"===o||"&"===o){var r="";for(r="<"===o?">":";";t.substr(e+1).charAt(0)!==r&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if(">"===o||";"===o){var r="";for(r=">"===o?"<":"&";t.substr(e-1).charAt(0)!==r&&!(--e<0););e--}return e}}]),t}();e.default=o;var r=new o;e.htmlParser=r}])},t.exports=o()}}]);