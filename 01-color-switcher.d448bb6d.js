const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let r=null;e.addEventListener("click",(function(){r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0,o.removeAttribute("disabled")}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),o.disabled=!0,e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.d448bb6d.js.map
