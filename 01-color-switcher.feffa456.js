const t={ourBody:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStart.addEventListener("click",(function(){t.btnStop.disabled=!1,t.btnStart.disabled=!0,e=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.ourBody.style.background=e}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(e)}));let e=null;t.btnStop.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.feffa456.js.map
