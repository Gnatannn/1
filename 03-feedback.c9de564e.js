!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire4c75=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||l.default(e,t)||f.default()};var u=c(o("8slrw")),a=c(o("7AJDX")),f=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d="Expected a function",p=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,y=/^0o[0-7]+$/i,b=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,_=g||O||Function("return this")(),j=Object.prototype.toString,x=Math.max,h=Math.min,w=function(){return _.Date.now()};function M(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(d);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function m(e){return l=e,a=setTimeout(b,t),c?v(e):u}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function b(){var e=w();if(y(e))return g(e);a=setTimeout(b,function(e){var r=t-(e-f);return s?h(r,i-(e-l)):r}(e))}function g(e){return a=void 0,p&&n?v(e):(n=o=void 0,u)}function O(){var e=w(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(s)return a=setTimeout(b,t),v(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=I(t)||0,S(r)&&(c=!!r.leading,i=(s="maxWait"in r)?x(I(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:g(w())},O}function S(t){var r=void 0===t?"undefined":e(s)(t);return!!t&&("object"==r||"function"==r)}function I(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(s)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(S(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=S(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var n=m.test(t);return n||y.test(t)?b(t.slice(2),n?2:8):v.test(t)?NaN:+t}var N,P=document.querySelector(".feedback-form"),T="feedback-form-state",A={};P.addEventListener("input",(function(e){A[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(A))})),P.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements,r=t.email,n=t.message,o=r.value,i=n.value,u={emailValue:o,messageValue:i};""===o||""===i?window.alert("Please fill the form right now! Otherwise I'll call your mom!"):(console.log(u),P.reset(),localStorage.removeItem(T))})),(N=JSON.parse(localStorage.getItem(T)))&&Object.entries(N).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];A[n]=o,P.elements[n].value=o,console.log(N)}))}();
//# sourceMappingURL=03-feedback.c9de564e.js.map
