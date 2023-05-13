(self.webpackChunksiteme=self.webpackChunksiteme||[]).push([[599],{599:()=>{const n=4,e=[],t="\n#strips-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.strip {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n}\n\n.l-sector-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-shrink: 1;\n    position: relative;\n}\n\n.r-sector-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-shrink: 1;\n    position: relative;\n}\n\n.l-sector {\n    width: 0%;\n    height: 60%;\n    position: absolute;\n    background-image: linear-gradient(to right, rgb(210, 250, 255), rgb(230, 252, 255));\n    animation: l-sector-animation 4s forwards infinite;\n    animation-timing-function: cubic-bezier(.31, .58, .48, 1);\n}\n\n.r-sector {\n    width: 0%;\n    height: 60%;\n    position: absolute;\n    background-image: linear-gradient(to right, rgb(230, 252, 255), rgb(210, 250, 255));\n    animation: r-sector-animation 4s forwards infinite;\n    animation-timing-function: cubic-bezier(.69, 0, .73, .44);\n}\n\n@keyframes l-sector-animation {\n    0% {\n        width: 0%;\n        left: 0%;\n    }\n\n    25% {\n        width: 100%;\n        left: 0%;\n    }\n\n    80% {\n        width: 0%;\n        left: 100%;\n    }\n}\n\n@keyframes r-sector-animation {\n    20% {\n        width: 0%;\n        left: 0%;\n    }\n\n    75% {\n        width: 100%;\n        left: 0%;\n    }\n\n    100% {\n        width: 0%;\n        left: 100%;\n    }\n}\n";function i(){!function(){let n=document.getElementById("strips-container");if(null!=n)n.parentNode.replaceChild(n.cloneNode(!0),n);else{const n=document.createElement("div");n.id="strips-container";for(let e=0;e<25;e++)n.appendChild(o());document.getElementById("img-strip").appendChild(n),l()}}(),function(){let e=document.getElementsByClassName("l-sector-container"),t=document.getElementsByClassName("r-sector-container");l(),function(n,e){for(let t=0;t<n.length;t++){let i=(Math.round(2*Math.random()*100)/100).toString().concat("s");n[t].firstChild.style["animation-delay"]=i,e[t].firstChild.style["animation-delay"]=i}}(e,t),function(n,e){for(let t=0;t<n.length;t++){let i=Math.round((8*Math.random()+1)/10*100)/100;n[t].style["flex-shrink"]=1-i,e[t].style["flex-shrink"]=i}}(e,t),function(e,t){for(let i=0;i<e.length;i++)window.setTimeout((()=>{r(e[i],t[i])}),1e3*(Number(e[i].firstChild.style["animation-delay"].slice(0,-1))+n))}(e,t)}()}function o(){const n=document.createElement("div");n.className="strip";const e=document.createElement("div");e.className="l-sector-container",e.appendChild(function(){const n=document.createElement("div");return n.className="l-sector",n}());const t=document.createElement("div");return t.className="r-sector-container",t.appendChild(function(){const n=document.createElement("div");return n.className="r-sector",n}()),n.appendChild(e),n.appendChild(t),n}function l(){let n=document.getElementById("strips-css");null!=n&&document.head.removeChild(n);let e=document.createElement("style");e.id="strips-css",e.innerText=t,document.head.appendChild(e)}function r(t,i){let o=window.setInterval((()=>{let n=Math.round((8*Math.random()+1)/10*100)/100;t.style["flex-shrink"]=1-n,i.style["flex-shrink"]=n}),3e3*n);e.push(o)}document.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{i()}),2800)})),document.addEventListener("visibilitychange",(function(){if(!document.hidden){for(let n of e)clearInterval(n);i()}}))}}]);