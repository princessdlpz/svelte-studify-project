import{a as r,n as s,t as n,c as m}from"./disclose-version.B-hLH5kf.js";import{p as u,a as f}from"./runtime.DDjRgbeA.js";import{i as l}from"./lifecycle.Dwr_-_8E.js";import{i as c}from"./entry.DFsZ7VbH.js";import{B as v}from"./Button.Dse6T-Vv.js";import"./HeaderNav.svelte_svelte_type_style_lang.BOaGD4ME.js";import"./index.DJuFnhGY.js";function h(a){return function(...o){var t=o[0];return t.preventDefault(),a.apply(this,o)}}var d=n("Logout",1),g=n('<form method="POST" action="/api/auth/logout"><!></form>');function T(a,o){u(o,!1),l();var t=g(),i=m(t);v(i,{element:"button",type:"submit",children:(e,B)=>{var p=d();r(e,p)}}),s("submit",t,h(async()=>{(await fetch("/api/auth/logout",{method:"POST",headers:{accept:"application/json"}})).ok&&c()}),!1),r(a,t),f()}export{T as L};
