import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";const t=document.querySelector("button[data-start]"),d=document.querySelector("#datetime-picker"),h=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");t.disabled=!0;let a;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<new Date?(t.disabled=!0,f.error({fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:5e3,backgroundColor:"red",progressBar:!1,message:"Please choose a date in the future"})):t.disabled=!1}};m("#datetime-picker",S);function n(e){return String(e).padStart(2,"0")}function g(e){const i=n(Math.floor(e/864e5)),c=n(Math.floor(e%864e5/36e5)),u=n(Math.floor(e%864e5%36e5/6e4)),l=n(Math.floor(e%864e5%36e5%6e4/1e3));return{days:i,hours:c,minutes:u,seconds:l}}t.addEventListener("click",()=>{t.disabled=!0,d.disabled=!0;const e=setInterval(()=>{const o=g(a-Date.now());C(o),a-Date.now()<500&&(clearInterval(e),t.disabled=!1,d.disabled=!1)},1e3)});function C({days:e,hours:o,minutes:s,seconds:r}){h.textContent=`${e}`,p.textContent=`${o}`,y.textContent=`${s}`,b.textContent=`${r}`}
//# sourceMappingURL=commonHelpers.js.map