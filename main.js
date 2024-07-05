(()=>{"use strict";var n={106:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),a=t.n(o),r=t(314),i=t.n(r),s=t(417),l=t.n(s),c=new URL(t(815),t.b),d=i()(a()),u=l()(c);d.push([n.id,`* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  /* sizes */\n  --size-main: 10px;\n  --size-xxs: 4px;\n  --size-xs: 6px;\n  --size-s: 8px;\n  --size-m: 14px;\n  --size-l: 18px;\n  --size-xxl: 28px;\n\n  /* gap */\n  --gap-main: var(--size-main);\n  --gap-l: var(--size-l);\n  /* padding */\n  --padding-main: var(--size-main);\n  --padding-xxl: var(--size-xxl);\n  /* margins */\n  --margin-main: var(--size-main);\n  --margin-xxl: var(--size-xxl);\n  /* colors */\n  --color-red: red;\n  --color-white: white;\n}\n\n.header {\n  background-image: url(${u});\n  background-repeat: no-repeat;\n  height: 60vh;\n  background-size: 100% 100%;\n  color: var(--color-white);\n  overflow: auto;\n  margin-bottom: 2rem;\n}\n.navBar {\n  margin: 50px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--padding-main);\n}\n.navItemes {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  gap: var(--gap-l);\n}\n.navIteme a {\n  display: flex;\n  justify-content: center;\n}\na {\n  color: aliceblue;\n  text-decoration: none;\n  display: flex;\n  height: 100%;\n  align-items: center;\n  width: 100px;\n  padding: var(--size-xs);\n}\na:active {\n  color: blue;\n}\n\na:hover {\n  background-color: red;\n}\n.headerMain {\n  margin: 50px;\n  margin-top: 100px;\n  gap: 3rem;\n  display: flex;\n  flex-direction: column;\n  height: 40%;\n  justify-content: space-around;\n}\n\n/* CSS */\n.button-9 {\n  appearance: button;\n  backface-visibility: hidden;\n  background-color: var(--color-red);\n  border-radius: 6px;\n  border-width: 0;\n  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue',\n    Ubuntu, sans-serif;\n  font-size: 100%;\n  height: 44px;\n  line-height: 1.15;\n  margin: 12px 0 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transform: translateZ(0);\n  transition: all 0.2s, box-shadow 0.08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n.buttons :nth-child(2) {\n  background-color: #fff;\n  color: black;\n}\n.button-9:disabled {\n  cursor: default;\n}\n\n.button-9:focus {\n  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,\n    rgba(50, 151, 211, 0.3) 0 0 0 4px;\n}\n.aboutSection {\n  display: grid;\n  margin: 5rem auto;\n  width: 70%;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--gap-l);\n}\n.aboutSection img {\n  width: 100%;\n}\n.about {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: var(--gap-l);\n}\n.about h2 {\n  font-size: xx-large;\n  margin-bottom: var(--margin-xxl);\n}\n.about h3 {\n  font-size: x-large;\n  margin-bottom: var(--margin-main);\n}\n.about p {\n  font-size: xx-large;\n}\n.button-read {\n  background-color: var(--color-white);\n  color: var(--color-red);\n  border: 1px solid var(--color-red);\n  margin-top: auto;\n}\n.mail_section_1 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: var(--gap-l);\n}\n.mail_section_1 input,\n.mail_section_1 textarea {\n  min-width: 400px;\n  border-radius: 1rem;\n  padding: 10px;\n  border: none;\n  background-color: aliceblue;\n}\n.mail_section_1 a {\n  color: var(--color-red);\n  background-color: var(--color-white);\n  border: 1px solid var(--color-red);\n  border-radius: 1rem;\n  margin-bottom: 2rem;\n}\n.footer {\n  color: var(--color-white);\n  background-color: black;\n  display: flex;\n  justify-content: center;\n\n  height: 150px;\n}\nul {\n  list-style: none;\n}\n`,""]);const p=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var l=o(n,a),c=0;c<r.length;c++){var d=t(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},815:(n,e,t)=>{n.exports=t.p+"images/banner-bg-375b7d4f60814704a11e.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),a=t.n(o),r=t(825),i=t.n(r),s=t(659),l=t.n(s),c=t(56),d=t.n(c),u=t(540),p=t.n(u),m=t(113),f=t.n(m),g=t(106),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),a()(g.A,b),g.A&&g.A.locals&&g.A.locals;const h=t.p+"images/about-img-9d446486a3917bfb7257.png",v=()=>{document.getElementsByClassName("hero")[0].innerHTML=`<section class="aboutSection">\n          <div class="about">\n            <h2>ABOUT OUR SHOP</h2>\n            <h3>Coffee distribution</h3>\n            <p>\n              has a more-or-less normal distribution of letters, as opposed to\n              using 'Content here, content here', making it look like readable\n              English. Many desktop publishing packages and web page editorhas a\n              more-or-less normal distribution of letters, as oppos\n            </p>\n            <button class="button-9 button-read">READ MORE</button>\n          </div>\n          <div><img src="${h}" alt="girl with phone" /></div>\n        </section>\n\n        \n      `},x=t.p+"images/logo-aa1a4495464cd5e59391.png",y=t.p+"images/blog-img2-0bff9a55264087d0d1fd.png";(()=>{const n=document.getElementsByClassName("header")[0],e=document.createElement("nav");e.innerHTML=`\n        <nav class="navBar">\n          <div class="logo"><img src="${x}" /></div>\n          <div>\n            <ul class="navItemes">\n              <li class="navIteme"><button class="button-9" id='homeButton' >home</button></li>\n              <li class="navIteme"><button class="button-9" id='coffes' >coffes</button></li>\n              <li class="navIteme"><button class="button-9" id='contact' >contact</button></li>\n            </ul>\n          </div>\n          <div class="logIn"><a href="#">LOGIN</a></div>\n        </nav>\n      \n        <div class="headerMain">\n          <h1 class="headerTitle">Zain Youssef Coffee Shop</h1>\n          <p>\n            more-or-less normal distribution of letters, as opposed to using\n          </p>\n          <div class="buttons">\n            <button class="button-9" role="button">About us</button>\n            <button class="button-9">Call now</button>\n          </div>\n        </div>\n        `,n.appendChild(e)})(),v(),document.getElementById("footer").innerHTML='\n        <ul class="footer">\n  <li>\n    <a href="#">Twitter</a>\n  </li>\n  <li>\n    <a href="#">Codepen</a>\n  </li>\n  <li>\n    <a href="#">Email</a>\n  </li>\n  <li>\n    <a href="#">Dribbble</a>\n  </li>\n  <li>\n    <a href="#">Github</a>\n  </li>\n</ul>\n        ',document.getElementById("contact").addEventListener("click",(()=>{document.getElementsByClassName("hero")[0].innerHTML='\n        <div class="mail_section_1">\n          <h2>GET IN TOUCH</h2>\n          <input\n            type="text"\n            class="mail_text"\n            placeholder="Your Name"\n            name="Your Name"\n          />\n          <input\n            type="text"\n            class="mail_text"\n            placeholder="Your Email"\n            name="Your Email"\n          />\n          <input\n            type="text"\n            class="mail_text"\n            placeholder="Your Phone"\n            name="Your Phone"\n          />\n          <textarea\n            class="massage-bt"\n            placeholder="Massage"\n            rows="5"\n            id="comment"\n            name="Massage"\n          ></textarea>\n          <div class="send_bt"><a href="#">Send</a></div>\n        </div>\n      '})),document.getElementById("homeButton").addEventListener("click",v),document.getElementById("coffes").addEventListener("click",(()=>{document.getElementsByClassName("hero")[0].innerHTML=`<section class="aboutSection">\n          <div class="about">\n            <h2>Coffes we serve</h2>\n            <h3>Menu</h3>\n            <p>\n              Deadly Espresso's Golden Sands Coffee is a proprietary blend with delicious tasting notes of rich toffee body with spiced figs and smooth chocolate nougat finish. Every bag purchased supports our soulful community development work. Connecting people in a 'deadly way. \n            </p>\n            <button class="button-9 button-read">READ MORE</button>\n          </div>\n          <div><img src="${y}" alt="girl with phone" /></div>\n        </section>\n\n        \n      `}))})();