var store;(()=>{"use strict";var e,r,t,n,o={70:(e,r,t)=>{var n={"./App":()=>Promise.all([t.e(707),t.e(416),t.e(406),t.e(102)]).then((()=>()=>t(102)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.c=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{102:"40ad486070e366e19830",294:"71da4cf8fcb6b6741295",406:"448578ded197d2ae4bf4",416:"6a0a860bb1bce3352cc8",707:"1ab14f4632a28f6bbe99",935:"5677b7f322d434991159",936:"84a2233aaebe81b9b33b"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="mfe1-store:",i.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,f;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){u=d;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var c=(r,n)=>{u.onerror=u.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=c.bind(null,u.onerror),u.onload=c.bind(null,u.onload),f&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},n={},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),i.m[e]=()=>{throw r},o.p=0},u=(e,t,n,i,u,f)=>{try{var s=e(t,n);if(!s||!s.then)return u(s,i,f);var l=s.then((e=>u(e,i)),a);if(!f)return l;r.push(o.p=l)}catch(e){a(e)}},f=(e,r,n)=>u(r.get,o[1],t,0,s,n),s=r=>{o.p=1,i.m[e]=e=>{e.exports=r()}};u(i,o[2],0,0,((e,r,t)=>e?u(i.I,o[0],0,e,f,t):a()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var a=i.S[t],u="mfe1-store",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(o[r]={get:t,from:u,eager:!!n})},s=[];return"default"===t&&(f("react-dom","18.2.0",(()=>Promise.all([i.e(935),i.e(416)]).then((()=>()=>i(935))))),f("react-router-dom","6.3.0",(()=>Promise.all([i.e(936),i.e(416)]).then((()=>()=>i(936))))),f("react","18.2.0",(()=>i.e(294).then((()=>()=>i(294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():t(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,f=!0;;u++,i++){var s,l,d=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(l=(typeof(s=t[i]))[0]))return!f||("u"==d?u>o&&!a:""==d!=a);if("u"==l){if(!f||"u"!=d)return!1}else if(f)if(d==l)if(u<=o){if(s!=r[u])return!1}else{if(a?s>r[u]:s<r[u])return!1;s!=r[u]&&(f=!1)}else if("s"!=d&&"n"!=d){if(a||u<=o)return!1;f=!1,u--}else{if(u<=o||l<d!=a)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?p()|p():2==h?p()&p():h?n(h,t):!p())}return!!p()},o=(e,o,i,u)=>{var f=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,i);return n(u,f)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,i,f,u)),a(e[i][f])},a=e=>(e.loaded=1,e.get()),u=e=>function(r,t,n,o){var a=i.I(r);return a&&a.then?a.then(e.bind(e,r,i.S[r],t,n,o)):e(r,i.S[r],t,n,o)},f=u(((e,r,t,n,a)=>r&&i.o(r,t)?o(r,0,t,n):a())),s=u(((e,t,o,u,f)=>{var s=t&&i.o(t,o)&&((e,t,o)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!n(o,t)||e&&!r(e,t)?e:t),0))&&a[t]})(t,o,u);return s?a(s):f()})),l={},d={416:()=>f("default","react",[1,18,2,0],(()=>i.e(294).then((()=>()=>i(294))))),159:()=>s("default","react-router-dom",[1,6,3,0],(()=>i.e(936).then((()=>()=>i(936)))))},c={406:[159],416:[416]};i.f.consumes=(e,r)=>{i.o(c,e)&&c[e].forEach((e=>{if(i.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete l[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var o=d[e]();o.then?r.push(l[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{var e={119:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(416!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),u=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,u,f]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);f&&f(i)}for(r&&r(t);s<a.length;s++)o=a[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmfe1_store=self.webpackChunkmfe1_store||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0;var u=i(70);store=u})();
//# sourceMappingURL=remoteEntry.js.map