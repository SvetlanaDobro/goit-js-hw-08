var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(S,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function S(){var e=m();if(j(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return v?d(n,i-(e-c)):n}(e))}function h(e){return f=void 0,b&&r?y(e):(r=o=void 0,a)}function w(){var e=m(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(v)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};let b={};const y={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};function x(){localStorage.setItem("feedback-form-state",JSON.stringify(b))}y.form.addEventListener("submit",(function(e){e.preventDefault(),b={},localStorage.removeItem("feedback-form-state"),y.form.reset()})),y.textarea.addEventListener("input",t((function(e){const t=e.target.value;b.message=t,x()}),500)),y.email.addEventListener("input",t((function(e){const t=e.target.value;b.email=t,x()}),500)),y.form.addEventListener("input",(e=>{b[e.target.name]=e.target.value,x()})),function(){const e=localStorage.getItem("feedback-form-state");e&&(b=JSON.parse(e),b.email&&(y.email.value=b.email),b.message&&(y.textarea.value=b.message))}(),console.log(b);
//# sourceMappingURL=03-feedback.d22a0c49.js.map