import{f as C}from"../chunks/fetch-refresh.CoktrdpI.js";import{a as l,t as n,c as f,d as U,b as V,f as D,e as s}from"../chunks/disclose-version.B-hLH5kf.js";import{p as E,l as x,c as G,g as a,r as H,a as J,m as R,d as F,s as _,b as I,M as K}from"../chunks/runtime.DDjRgbeA.js";import{i as M}from"../chunks/if.BIDFABO2.js";import{b as Q,i as W}from"../chunks/index.DJuFnhGY.js";import{i as X}from"../chunks/lifecycle.Dwr_-_8E.js";import{b as Y}from"../chunks/entry.naXCMhCl.js";import{B as O}from"../chunks/Button.Dse6T-Vv.js";import"../chunks/HeaderNav.svelte_svelte_type_style_lang.BOaGD4ME.js";import{C as Z}from"../chunks/Card.DpYgZsTY.js";import{I as ee}from"../chunks/ItemPage.C-H0ZPAG.js";const ae=async({fetch:u,parent:o})=>{const{user:e}=await o(),w=C(u,"/api/spotify/me/following?type=artist&limit=6");let r;e!=null&&e.images&&e.images.length>0&&(r=C(u,`/api/average-color?${new URLSearchParams({image:e.images[0].url}).toString()}`));const[d,m]=await Promise.all([w,r]);return{following:d.ok?d.json():void 0,title:e==null?void 0:e.display_name,color:m!=null&&m.ok?m.json().then(h=>h.color):null}},be=Object.freeze(Object.defineProperty({__proto__:null,load:ae},Symbol.toStringTag,{value:"Module"}));var te=n("Retry",1),oe=n('<div class="fail svelte-1qd7pe4"><p>Failed to load data.</p> <!></div>'),re=n('<div class="grid-item"><!></div>'),ie=n('View All <span class="visually-hidden">artists that you are following</span>',1),le=n('<div class="following svelte-1qd7pe4"><h2 class="svelte-1qd7pe4">Following</h2> <div class="grid-items"></div> <div class="view-all-button svelte-1qd7pe4"><!></div></div>'),se=n("<!> <!>",1),ne=n('<span slot="meta" class="following-count svelte-1qd7pe4"> </span>'),de=n('<div id="profile-page" class="svelte-1qd7pe4"><!></div>');function Pe(u,o){E(o,!1);const e=R(),w=R(),r=R();let d=R(!1);const m=Intl.NumberFormat("en",{notation:"compact"});x(()=>I(o.data),()=>{_(e,o.data.user)}),x(()=>I(o.data),()=>{_(w,o.data.color)}),x(()=>I(o.data),()=>{_(r,o.data.following)}),G(),X();var h=de(),z=f(h),A=F(()=>{var t;return((t=a(e))==null?void 0:t.display_name)||""}),L=F(()=>{var t,y,i;return(t=a(e))!=null&&t.images&&((i=(y=a(e))==null?void 0:y.images)==null?void 0:i.length)>0?a(e).images[0].url:void 0}),N=F(()=>{var t;return(t=a(e))==null?void 0:t.type});ee(z,{get color(){return a(w)},get title(){return a(A)},get image(){return a(L)},get type(){return a(N)},children:(t,y)=>{var i=se(),b=D(i);M(b,()=>a(r)===void 0,v=>{var c=oe(),k=f(c),q=s(s(k,!0));O(q,{get disabled(){return a(d)},element:"button",$$events:{click:async()=>{_(d,!0),await Y(g=>g.pathname==="/api/spotify/me/following"),_(d,!1)}},children:(g,$)=>{var p=te();l(g,p)}}),l(v,c)});var P=s(s(b,!0));M(P,()=>a(r)&&a(r).artists.items.length>0,v=>{var c=le(),k=f(c),q=s(s(k,!0));Q(q,9,()=>a(r).artists.items,W,(p,j,B)=>{var S=re(),T=f(S);Z(T,{get item(){return K(j)}}),l(p,S)});var g=s(s(q,!0)),$=f(g);O($,{element:"a",variant:"outline",href:"/profile/following",children:(p,j)=>{var B=ie();l(p,B)}}),l(v,c)}),l(t,i)},$$slots:{meta:(t,y)=>{var i=ne(),b=f(i);H(()=>{var P,v;return U(b,`${V(m.format(((v=(P=a(e))==null?void 0:P.followers)==null?void 0:v.total)||0))} Followers`)}),l(t,i)}}}),l(u,h),J()}export{Pe as component,be as universal};