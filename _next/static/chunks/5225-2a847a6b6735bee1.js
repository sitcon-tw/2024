"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5225],{9744:function(e,t,n){n.d(t,{OR:function(){return u},Yz:function(){return i},LI:function(){return c},iP:function(){return o}});var r=n(2265),u=function(e,t,n,u){let i=(0,r.useRef)(t);c(()=>{i.current=t},[t]),(0,r.useEffect)(()=>{var t;let r=null!==(t=null==n?void 0:n.current)&&void 0!==t?t:window;if(!(r&&r.addEventListener))return;let f=e=>i.current(e);return r.addEventListener(e,f,u),()=>{r.removeEventListener(e,f,u)}},[e,n,u])},i=function(e,t){let n=(0,r.useRef)(e);c(()=>{n.current=e},[e]),(0,r.useEffect)(()=>{if(!t&&0!==t)return;let e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])};let f="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;var c=f,o=function(){let[e,t]=(0,r.useState)({width:0,height:0}),n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return u("resize",n),c(()=>{n()},[]),e}},3162:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(609),u=n(538),i=n(2363);function f(e,t){let n=(0,r.c)(t()),f=()=>n.set(t());return f(),(0,u.L)(()=>{let t=()=>i.Wi.update(f,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,i.Pn)(f)}}),n}},728:function(e,t,n){n.d(t,{H:function(){return l}});var r=n(3245);let u=e=>e&&"object"==typeof e&&e.mix,i=e=>u(e)?e.mix:void 0;var f=n(3162),c=n(961),o=n(4101);function l(e,t,n,u){if("function"==typeof e)return function(e){o.S1.current=[],e();let t=(0,f.N)(o.S1.current,e);return o.S1.current=void 0,t}(e);let c="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,u=e[0+n],f=e[1+n],c=e[2+n],o=e[3+n],l=(0,r.s)(f,c,{mixer:i(c[0]),...o});return t?l(u):l}(t,n,u);return Array.isArray(e)?a(e,c):a([e],([e])=>c(e))}function a(e,t){let n=(0,c.h)(()=>[]);return(0,f.N)(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);