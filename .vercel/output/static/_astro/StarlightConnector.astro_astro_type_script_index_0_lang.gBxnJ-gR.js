import{T as s,i as d,a as u,b as m}from"./router.wICcf_OV.js";function l(e){b(),i(document),i(e.newDocument),y(e)}function f(e){S(e)}function b(){document.body.hasAttribute("data-mobile-menu-expanded")&&document.body.querySelector("starlight-menu-button")?.closest("nav")?.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape",code:"Escape",charCode:27,keyCode:27,shiftKey:!1,ctrlKey:!1,altKey:!1,metaKey:!1}))}function i(e){e.body.querySelector("div.main-frame")?.setAttribute("data-vtbot-replace","main")}function y(e){const t=document.querySelector('meta[name="vtbot-main-transition-scope"]');if(!t)return;const n=t.content||"none";o(document,n),o(e.newDocument,n);function o(a,c){const r=a.querySelector(".main-frame main");r&&(r.dataset.astroTransitionScope=c)}}function S(e){const t=e.newDocument.querySelector("nav.sidebar");if(!t)document.querySelector("nav.sidebar")?.remove();else{const n=document.querySelector("nav.sidebar");if(!n)document.querySelector("div.main-frame")?.insertAdjacentElement("beforebegin",t);else{const o=n.querySelector(".sidebar-content"),a=t.querySelector(".sidebar-content");o&&a?o.replaceWith(a):n.replaceWith(t)}}}document.addEventListener(s,e=>{if(d(e)){const t=e.loader;e.loader=async()=>{await t(),l(e)}}});document.addEventListener(u,e=>{m(e)&&f(e)});
