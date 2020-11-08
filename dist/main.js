(()=>{"use strict";var e={982:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(645),r=n.n(o),i=n(667),a=n.n(i),s=n(62),c=r()((function(e){return e[1]})),d=a()(s.Z);c.push([e.id,'body {\n  background-color: whitesmoke;\n}\n\ninput,\nselect {\n  margin-bottom: 8px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n  cursor: pointer;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nh1 {\n  font-family: "Patrick Hand SC", cursive;\n  font-size: 70px;\n  text-align: center;\n  background-color: #f8e953;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.new-btns {\n  font-family: "Patrick Hand SC", cursive;\n  border-radius: 0;\n  border: none;\n  padding: 10px;\n  font-size: 25px;\n  margin: 5px;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n}\n\n.content {\n  width: 100%;\n}\n\nh2 {\n  font-family: "Patrick Hand SC", cursive;\n  width: auto;\n  background: whitesmoke;\n  padding: 8px;\n  font-size: 30px;\n}\n\n.pin {\n  margin: 0 10px;\n}\n\n.board {\n  background-image: url('+d+');\n  min-height: 480px;\n  width: 80%;\n  margin: 45px auto;\n  padding: 10px;\n  border: 15px solid #69542b;\n}\n\n#new-project {\n  background: #ee9193;\n}\n\n#new-todo {\n  background: #82d37a;\n}\n\n.todos-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n.todo-item {\n  padding: 5px;\n  background: #ee9193;\n  min-height: 170px;\n  margin: 5px;\n}\n\nh3 {\n  font-family: "Patrick Hand SC", cursive;\n  margin: 0;\n  background-color: whitesmoke;\n  width: auto;\n  padding: 8px;\n  font-size: 20px;\n}\n\n.todo-item button {\n  font-family: "Patrick Hand SC", cursive;\n  background: transparent;\n  border: none;\n  font-size: 20px;\n}\n\np {\n  font-family: "Patrick Hand SC", cursive;\n  font-size: 18px;\n  margin: 8px;\n}\n\n.hover-under:hover {\n  text-decoration: underline;\n}\n\n.addForms {\n  background-image: url('+d+");\n  border: 15px solid #69542b;\n  width: 30%;\n  min-height: 300px;\n  padding: 10px;\n  margin: 25px auto;\n}\n\n.add-forms {\n  background: whitesmoke;\n  padding: 15px;\n  width: auto;\n  margin: 10px auto;\n}\n\n.display-none {\n  display: none !important;\n}\n\n#edit-form {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  background-color: rgba(24, 23, 23, 0.836);\n}\n\n#close {\n  text-align: right;\n  background-color: transparent;\n  margin: 0;\n  font-size: 45px;\n  color: red;\n}\n\n#close:hover {\n  cursor: pointer;\n}\n",""]);const l=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},62:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"43abda5eeff87c236e2c60fe6ae99eb9.jpg"},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:f(p,t),references:1}),o.push(l)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,m=0;function f(e,t){var n,o,r;if(t.singleton){var i=m++;n=g||(g=c(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),o=n(982);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=document.getElementById("formProject"),i=document.getElementById("formToDo"),a=document.getElementById("span-select-project"),s=document.createElement("select"),c=document.getElementById("content"),d=document.createElement("div");function l(e){const t=document.createElement("option");t.innerText=e.title,t.setAttribute("value",e.title),s.appendChild(t)}function u(e,t){const n=document.createElement("div");n.setAttribute("class","board"),n.innerHTML=`<h2><img class='pin' src='../src/images/pin.svg' height='35px'>${e.title}</h2>`,function(e,t,n){const o=document.createElement("div");o.setAttribute("class","todos-grid"),e.forEach(((e,t)=>((e,t,n,o)=>{const r=document.createElement("div");r.setAttribute("class","todo-item"),r.style.backgroundColor=e.color,r.innerHTML=`<h3><img class="pin" src="../src/images/pin.svg" height="18px">${e.title} </h3>`;const i=document.createElement("div");i.innerHTML=`<p> Date:  ${e.date} </p><p> Priority: ${e.priority} </p>`,r.appendChild(i);const a=document.createElement("div");a.setAttribute("class","todo-buttons"),a.innerHTML=`<button> <span class="hover-under" id="btnedit-${o}-${t}"> Edit/Details →</span></button>\n           <button> <img class="trash"  id="remove-${o}-${t}" src="../src/images/trash.svg" height="18px"> </button> </p>`,r.appendChild(a),n.appendChild(r)})(e,t,o,n))),t.appendChild(o)}(e.todos,n,t),d.appendChild(n)}const p=()=>{i.classList.contains("display-none")||i.classList.add("display-none"),r.classList.toggle("display-none")},g=e=>{r.classList.contains("display-none")||r.classList.add("display-none"),(e=>{s.setAttribute("id","project"),s.setAttribute("name","project"),e.forEach(l),a.appendChild(s)})(e),i.classList.toggle("display-none")},m=e=>{e.forEach(u),c.appendChild(d)},f=(e,t,n)=>{const o=e[t].todos[n];document.getElementById("title-edit").setAttribute("value",o.title),document.getElementById("current-date").innerText=""+o.date,document.getElementById("edit-description").value=o.description,document.getElementById("current-priority").innerText=""+o.priority,document.getElementById("btnEdit").innerHTML=`<p id=change-${t}-${n}>Save Changes</p>`,document.getElementById("edit-form").classList.toggle("display-none")},h=()=>{document.getElementById("edit-form").classList.toggle("display-none")},v=e=>{document.getElementById(e).classList.remove("display-none")};let y=[];const b=()=>{localStorage.setItem("projects",JSON.stringify(y)),document.location.reload()},x=e=>{let t="";return"Low"===e&&(t="#82d37a"),"Medium"===e&&(t="#f8e953"),"High"===e&&(t="#ee9193"),t};let E=[];y=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):[{title:"Default",todos:[]}],E=y,m(E),document.addEventListener("click",(e=>{if(e.target&&"submit-project"===e.target.id)(e=>{const t=document.getElementById("title").value;if(t){const n=((e,t=[])=>({title:e,todos:t}))(t);e.push(n),localStorage.setItem("projects",JSON.stringify(e)),b()}else v("project-warning")})(E);else if(e.target&&"new-project"===e.target.id)p();else if(e.target&&"new-todo"===e.target.id)g(E);else if(e.target&&"submit-todo"===e.target.id)(e=>{const t=document.getElementById("title-todo").value,n=document.getElementById("date").value,o=document.getElementById("description").value,r=document.getElementById("priority").value,i=document.getElementById("project").value;t&&n&&o&&r?(((e,t)=>{const n=e.findIndex((e=>e.title===t.project));e[n].todos.push(t),localStorage.setItem("projects",JSON.stringify(e))})(e,((e,t,n,o,r)=>({title:e,date:t,description:n,priority:o,project:r,color:x(o)}))(t,n,o,r,i)),b()):v("todo-warning")})(E);else if(e.target&&e.target.id.includes("remove-")){const t=e.target.id.split("-");E=((e,t,n)=>{const o=[...e];return o[t].todos.splice(n,1),localStorage.setItem("projects",JSON.stringify(o)),o})(E,t[1],t[2]),b()}else if(e.target&&"close"===e.target.id||e.target&&"edit-form"===e.target.id)h();else if(e.target&&e.target.id.includes("btnedit")){const t=e.target.id.split("-");f(E,t[1],t[2])}else if(e.target&&e.target.id.includes("change")){const t=e.target.id.split("-");E=((e,t,n)=>{const o=[...e],r=o[t].todos[n],i=document.getElementById("title-edit").value,a=document.getElementById("edit-date").value,s=document.getElementById("edit-description").value,c=document.getElementById("edit-priority").value;return o[t].todos[n]=((e,t,n,o,r)=>{const i=e;if(t&&(i.title=t),n&&(i.date=n),i.description=o,"nil"!==r){i.priority=r;const e=x(r);i.color=e}return i})(r,i,a,s,c),localStorage.setItem("projects",JSON.stringify(o)),o})(E,t[1],t[2]),b()}}))})()})();