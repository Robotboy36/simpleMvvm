!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.prefix=t||"Debugger",this.color=n||"#ec7259"}var t,n,i;return t=e,(n=[{key:"debug",value:function(){var e=this;return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.unshift("%c".concat(e.prefix,":"),"color: ".concat(e.color,";")),window.console.log.apply(window.console,n)}}}])&&r(t.prototype,n),i&&r(t,i),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subs=[]}var t,n,r;return t=e,(n=[{key:"add",value:function(e){this.subs.push(e)}},{key:"notify",value:function(){this.subs.forEach((function(e){return e.update()}))}}])&&o(t.prototype,n),r&&o(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.expr=t,this.vm=n,this.cb=r,a.watcher=this,this.value=this.getValue(),a.watcher=null}var t,n,r;return t=e,(n=[{key:"getValue",value:function(){return h._getValue(this.expr,this.vm)}},{key:"update",value:function(){var e=this.getValue();e!==this.oldValue&&this.cb(e)}}])&&u(t.prototype,n),r&&u(t,r),e}();function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new i("Compiler").debug();var p=/\{\{(.+?)\}\}/,h={_getValue:function(e,t){return e.split(".").reduce((function(e,t){return e[t]}),t.$data)},_setValue:function(e,t,n){return e.split(".").reduce((function(e,t){e[t]=n}),t.$data)},_getContentValue:function(e,t){var n=this;return e.replace(/\{\{(.+?)\}\}/g,(function(e,r){return n._getValue(r,t)}))},text:function(e,t,n){var r=this,i="";p.test(t)?(i=this._getContentValue(t,n),t.replace(/\{\{(.+?)\}\}/g,(function(i,o){new c(o,n,(function(){r.updater.textUpdater(e,r._getContentValue(t,n))}))}))):(i=this._getValue(t,n),new c(t,n,(function(t){return r.updater.textUpdater(e,t)}))),this.updater.textUpdater(e,i)},html:function(e,t,n){var r=this,i=this._getValue(t,n);new c(t,n,(function(t){return r.updater.htmlUpdater(e,t)})),this.updater.htmlUpdater(e,i)},value:function(e,t,n){var r=this,i=this._getValue(t,n);new c(t,n,(function(t){return r.updater.modelUpdater(e,t)})),this.updater.modelUpdater(e,i)},model:function(e,t,n){var r=this;this.value(e,t,n),e.addEventListener("input",(function(e){r._setValue(t,n,e.target.value)}),!1)},bind:function(e,t,n,r){var i=this;if("value"!==r){var o=this._getValue(t,n);console.log("bind",t,r,o),new c(t,n,(function(t){return i.updater.attrUpdater(e,r,t)})),this.updater.attrUpdater(e,r,o)}else this.value(e,t,n)},on:function(e,t,n,r){e.addEventListener(r,(function(e){n.$methods[t].call(n,e)}),!1)},updater:{textUpdater:function(e,t){e.textContent=t},htmlUpdater:function(e,t){e.innerHTML=t},modelUpdater:function(e,t){e.value=t},attrUpdater:function(e,t,n){e.setAttribute(t,n)}}},d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.vm=n;var r=this.createFragment(t);this.compiler(r,n),t.appendChild(r)}var t,n,r;return t=e,(n=[{key:"createFragment",value:function(e){for(var t=document.createDocumentFragment(),n=null;n=e.firstChild;)t.appendChild(n);return t}},{key:"compiler",value:function(e,t){var n=this;f(e.childNodes).forEach((function(e){n.isNode(e)?n.compilerElement(e):n.compilerText(e),e.childNodes&&e.childNodes.length&&n.compiler(e,t)}))}},{key:"compilerElement",value:function(e){var t=this;f(e.attributes).forEach((function(n){var r=n.name,i=n.value;if(t.isDirective(r)){var o=l(r.split(/\-/),2),a=o[0],u=l((o[1]||a).split(/:|@/),2),c=u[0],f=u[1];/@/.test(a)?c="on":/:/.test(a)&&(c="bind"),h[c](e,i,t.vm,f),e.removeAttribute(r)}}))}},{key:"compilerText",value:function(e){var t=e.textContent;p.test(t)&&h.text(e,t,this.vm)}},{key:"isDirective",value:function(e){return/^(v\-)|@|:/.test(e)}},{key:"isNode",value:function(e){return 1===e.nodeType}}])&&s(t.prototype,n),r&&s(t,r),e}(),v=Object.prototype.toString,y=function(e){return v.call(e).slice(8,-1).toLowerCase()},b=function(e){return"object"===y(e)};function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observe(t)}var t,n,r;return t=e,(n=[{key:"observe",value:function(e){for(var t in e)this.defineReactive(e,t,e[t])}},{key:"defineReactive",value:function(e,t,n){var r=this,i=new a;Object.defineProperty(e,t,{get:function(){return a.watcher&&i.add(a.watcher),n},set:function(o){o!==n&&(n=o,i.notify(),b(n)&&r.observe(e,t,n))}}),b(n)&&this.observe(n)}}])&&m(t.prototype,n),r&&m(t,r),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new i("Main").debug();new(function(){function e(t){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=document.querySelector(t.el),this.$data=(n=t.data,"function"===y(n)?t.data():t.data),this.$options=t,this.$methods=t.methods,!this.$el)throw new Error("元素必传");this.observe(this.$data),this.compiler(this.$el,this),this.proxy(this.$data)}var t,n,r;return t=e,(n=[{key:"observe",value:function(e){new g(e)}},{key:"compiler",value:function(e,t){new d(e,t)}},{key:"proxy",value:function(e){var t=this,n=function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t}})};for(var r in e)n(r)}}])&&w(t.prototype,n),r&&w(t,r),e}())({el:"#app",data:function(){return{who:{name:"血饮狂刀",age:1e3},manager:"步惊云",boss:"雄霸",inputType:"password",index:0}},methods:{onClick:function(){this.manager="聂风:"+this.index,this.index++,this.inputType=this.index%2?"text":"password"}}})}]);