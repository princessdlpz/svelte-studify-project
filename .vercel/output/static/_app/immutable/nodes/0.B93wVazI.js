import{g as Ue,d as Se,b as _e,s as se,i as Pe,c as je,r as De}from"../chunks/index.DJuFnhGY.js";import{B as Ge,h as A,s as V,a as g,f as E,m as Ne,n as D,d as J,b as ee,t as B,c as y,e as f,$ as Ve}from"../chunks/disclose-version.B-hLH5kf.js";import{N as ve,K as Ke,am as Xe,an as Ye,e as Be,u as ze,k as Qe,A as Ze,ao as Je,r as F,p as te,s as q,l as X,g as d,b as be,c as he,M as R,a as re,m as O,a9 as qe,ap as et,d as Ce}from"../chunks/runtime.DDjRgbeA.js";import{i as H}from"../chunks/if.BIDFABO2.js";import{t as Y,s as tt}from"../chunks/class.CTwLLMHQ.js";import{s as ye}from"../chunks/style.iv2mhl8q.js";import{b as ae}from"../chunks/this.BVWmpjgx.js";import{i as ne}from"../chunks/lifecycle.Dwr_-_8E.js";import{u as oe,s as ie,p as ce}from"../chunks/stores.DL9AZrMW.js";import{c as Ae,d as we,e as Me}from"../chunks/entry.DFsZ7VbH.js";import{b as rt,c as st,g as at}from"../chunks/HeaderNav.svelte_svelte_type_style_lang.BOaGD4ME.js";import{c as $e}from"../chunks/6.C-fJVoPU.js";import{l as W,s as U}from"../chunks/props.GCjS4c-Y.js";import{b as ue}from"../chunks/Button.Dse6T-Vv.js";import{I as Q}from"../chunks/Icon.gh31iTKL.js";import{X as xe,l as nt}from"../chunks/micromodal.es.CJCzk-G3.js";import{a as ot}from"../chunks/actions.B3legGYV.js";import{L as it}from"../chunks/LogoutButton.BlcegMND.js";import{t as lt,h as ct}from"../chunks/tippy.DIS1eJDj.js";import{t as Ee}from"../chunks/toasts.DKt_b5Ez.js";const ut=!0,Oe=typeof window<"u",dt=Oe?requestAnimationFrame:ve,vt=Oe?()=>performance.now():()=>Date.now(),G={tick:l=>dt(l),now:()=>vt(),tasks:new Set};function Fe(l){G.tasks.forEach(e=>{e.c(l)||(G.tasks.delete(e),e.f())}),G.tasks.size!==0&&G.tick(Fe)}function ft(l){let e;return G.tasks.size===0&&G.tick(Fe),{promise:new Promise(t=>{G.tasks.add(e={c:l,f:t})}),abort(){G.tasks.delete(e)}}}function pt(l,e,{bubbles:t=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(l,t,s,e),r}function de(l,e){l.dispatchEvent(pt(e))}function ht(l){const e=l.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function mt(l){const e={},t=l.split(";");for(const s of t){const[r,n]=s.split(":");if(!r||n===void 0)break;const c=ht(r.trim());e[c]=n.trim()}return e}const gt=l=>l;function _t(l,e,t){var s=Ue,r,n,c,v=null;s.a??(s.a={element:l,measure(){r=this.element.getBoundingClientRect()},apply(){if(c==null||c.abort(),n=this.element.getBoundingClientRect(),r.left!==n.left||r.right!==n.right||r.top!==n.top||r.bottom!==n.bottom){const o=e()(this.element,{from:r,to:n},t==null?void 0:t());c=fe(this.element,o,void 0,1,()=>{c==null||c.abort(),c=void 0})}},fix(){var o=getComputedStyle(l);if(o.position!=="absolute"&&o.position!=="fixed"){var i=l.style;v={position:i.position,width:i.width,height:i.height},i.position="absolute",i.width=o.width,i.height=o.height;var x=l.getBoundingClientRect();if(r.left!==x.left||r.top!==x.top){var p=`translate(${r.left-x.left}px, ${r.top-x.top}px)`;i.transform=i.transform?`${i.transform} ${p}`:p}}},unfix(){if(v){var o=l.style;o.position=v.position,o.width=v.width,o.height=v.height}}}),s.a.element=l}function Le(l,e,t,s){var r=(l&Je)!==0,n="both",c,v=e.inert,o,i;function x(){return c??(c=t()(e,s==null?void 0:s(),{direction:n}))}var p={is_global:r,in(){e.inert=v,de(e,"introstart"),o=fe(e,x(),i,1,()=>{de(e,"introend"),o=c=void 0})},out(a){e.inert=!0,de(e,"outrostart"),i=fe(e,x(),o,0,()=>{de(e,"outroend"),i=c=void 0,a==null||a()}),i.reset},stop:()=>{o==null||o.abort(),i==null||i.abort()}},_=Ze;if((_.transitions??(_.transitions=[])).push(p),Ge){let a=r;if(!a){for(var $=_.parent;$&&$.f&Ke;)for(;($=$.parent)&&!($.f&Xe););a=!$||($.f&Ye)!==0}a&&Be(()=>{ze(()=>p.in())})}}function fe(l,e,t,s,r){if(Qe(e)){var n;return Be(()=>{var b=ze(()=>e({direction:s===1?"in":"out"}));n=fe(l,b,t,s,r)}),{abort:()=>n.abort(),deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:b=>n.t(b)}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return r==null||r(),{abort:ve,deactivate:ve,reset:ve,t:()=>s};var{delay:c=0,duration:v,css:o,tick:i,easing:x=gt}=e,p=G.now()+c,_=(t==null?void 0:t.t(p))??1-s,$=s-_;v*=Math.abs($);var a=p+v,u,h;if(o){for(var S=[],C=Math.ceil(v/16.666666666666668),T=0;T<=C;T+=1){var w=_+$*x(T/C),z=o(w,1-w);S.push(mt(z))}u=l.animate(S,{delay:c,duration:v,easing:"linear",fill:"forwards"}),u.finished.then(()=>{r==null||r(),s===1&&u.cancel()}).catch(b=>{if(u.startTime!==null&&u.currentTime!==null)throw b})}else _===0&&(i==null||i(0,1)),h=ft(b=>{if(b>=a)return i==null||i(s,1-s),r==null||r(),!1;if(b>=p){var k=_+$*x((b-p)/v);i==null||i(k,1-k)}return!0});return{abort:()=>{u==null||u.cancel(),h==null||h.abort()},deactivate:()=>{r=void 0},reset:()=>{s===0&&(i==null||i(1,0))},t:b=>{var k=_+$*x((b-p)/v);return Math.min(1,Math.max(0,k))}}}function bt(l,e,t){var s=()=>{n=!0,clearTimeout(c),c=setTimeout(v,100),t(window.scrollY)};addEventListener("scroll",s,{passive:!0});var r=0,n=!1,c,v=()=>{n=!1};F(()=>{r=e(),r!==void 0&&(n||(n=!0,clearTimeout(c),scrollTo(window.scrollX,r),c=setTimeout(v,100)))}),F(()=>()=>{removeEventListener("scroll",s)})}const yt=ut,$t=({data:l,url:e})=>{const{user:t,userAllPlaylists:s}=l||{};if(t&&e.pathname==="/login")throw Se(307,"/");if(!t&&e.pathname!=="/login")throw Se(307,"/login");return{user:t,userAllPlaylists:s}},qr=Object.freeze(Object.defineProperty({__proto__:null,load:$t},Symbol.toStringTag,{value:"Module"}));function wt(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["path",{d:"m6 9 6 6 6-6"}]];var r=A(),n=E(r);Q(n,U({name:"chevron-down"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}function xt(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["path",{d:"m15 18-6-6 6-6"}]];var r=A(),n=E(r);Q(n,U({name:"chevron-left"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}function kt(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["path",{d:"m9 18 6-6-6-6"}]];var r=A(),n=E(r);Q(n,U({name:"chevron-right"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}function St(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];var r=A(),n=E(r);Q(n,U({name:"external-link"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}function Pt(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["polyline",{points:"9 22 9 12 15 12 15 22"}]];var r=A(),n=E(r);Q(n,U({name:"home"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}function qt(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]];var r=A(),n=E(r);Q(n,U({name:"list-music"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}function Ct(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];var r=A(),n=E(r);Q(n,U({name:"menu"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}function Re(l,e){const t=W(e,["children","$$slots","$$events"]),s=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];var r=A(),n=E(r);Q(n,U({name:"search"},()=>t,{iconNode:s,children:(c,v)=>{var o=A(),i=E(o);V(i,e.children,{}),g(c,o)}})),g(l,r)}const Mt=l=>l;function Et(l){const e=l-1;return e*e*e+1}function Te(l){const e=typeof l=="string"&&l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[l,"px"]}function Tt(l,{delay:e=0,duration:t=400,easing:s=Mt}={}){const r=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:s,css:n=>`opacity: ${n*r}`}}function Nt(l,{delay:e=0,duration:t=400,easing:s=Et,x:r=0,y:n=0,opacity:c=0}={}){const v=getComputedStyle(l),o=+v.opacity,i=v.transform==="none"?"":v.transform,x=o*(1-c),[p,_]=Te(r),[$,a]=Te(n);return{delay:e,duration:t,easing:s,css:(u,h)=>`
			transform: ${i} translate(${(1-u)*p}${_}, ${(1-u)*$}${a});
			opacity: ${o-x*h}`}}var Bt=B(`<style>body {
				overflow: hidden;
			}</style>`),zt=B('<div class="overlay svelte-sbq14w"></div>'),At=B('<a class="svelte-sbq14w"><!> </a>'),Ot=B('<a class="svelte-sbq14w"><!> </a>'),Ft=B('<li class="svelte-sbq14w"><!></li>'),Lt=B('<li class="svelte-sbq14w"><a class="svelte-sbq14w"> </a></li>'),Rt=B('<div class="all-playlists svelte-sbq14w"><ul class="svelte-sbq14w"></ul></div>'),Ht=B('<div class="nav-content svelte-sbq14w"><!> <nav aria-label="Main"><!> <div class="nav-content-inner svelte-sbq14w"><!> <div class="logo-and-menu svelte-sbq14w"><h1>Studify</h1> <ul class="svelte-sbq14w"></ul></div> <!></div></nav></div>');function He(l,e){te(e,!1);const t={};oe(t);const s=()=>ie(ce,"$page",t),r=O();let n=O(!1),c=O(),v=O(),o=O();const i=O([{path:"/",label:"Home",icon:Pt},{path:"/search",label:"Search",icon:Re},{path:"/playlists",label:"Playlists",icon:qt}]),x=async()=>{q(n,!0),await qe(),d(v).getButton().focus()},p=async()=>{q(n,!1),await qe(),d(c).getButton().focus()},_=P=>{e.desktop||P.key==="Tab"&&P.shiftKey&&(P.preventDefault(),d(o).focus())},$=P=>{e.desktop||P.key==="Tab"&&!P.shiftKey&&(P.preventDefault(),d(v).getButton().focus())},a=P=>{P.key==="Escape"&&p()};Ae(()=>{q(n,!1)}),X(()=>(be(e.desktop),d(n)),()=>{q(r,e.desktop||d(n))}),he(),ne();var u=Ht();Ne(P=>{var m=A(),M=E(m);H(M,()=>!e.desktop&&d(n),L=>{var K=Bt();g(L,K)}),g(P,m)});var h=y(u);H(h,()=>!e.desktop&&d(n),P=>{var m=zt();Le(3,m,()=>Tt,()=>({duration:200})),D("click",m,p,!1),D("keyup",m,a,!1),g(P,m)});var S=f(f(h,!0)),C=y(S);H(C,()=>!e.desktop,P=>{var m=A(),M=E(m);ae(pe(M,{icon:Ct,label:"Open menu",get"aria-expanded"(){return d(r)},class:"menu-button",$$events:{click:x}}),L=>q(c,L),()=>d(c)),g(P,m)});var T=f(f(C,!0)),w=y(T);H(w,()=>!e.desktop,P=>{var m=A(),M=E(m);ae(pe(M,{icon:xe,label:"Close Menu",class:"close-menu-button",$$events:{click:p,keydown:_}}),L=>q(v,L),()=>d(v)),g(P,m)});var z=f(f(w,!0)),b=y(z),k=f(f(b,!0));_e(k,9,()=>d(i),Pe,(P,m,M)=>{var L=Ft();const K=et(()=>({focusable:"false","aria-hidden":!0,color:"var(--text-color)",size:26,strokeWidth:2}));var ke=y(L);H(ke,()=>d(i).length===R(M)+1,Z=>{var I=At();ae(I,le=>q(o,le),()=>d(o));var j=y(I);$e(j,()=>R(m).icon,le=>{le(j,U(()=>d(K)))});var me=f(j,!0);F(()=>{se(I,"href",R(m).path),J(me,` ${ee(R(m).label)}`)}),D("keydown",I,$,!1),g(Z,I)},Z=>{var I=Ot(),j=y(I);$e(j,()=>R(m).icon,le=>{le(j,U(()=>d(K)))});var me=f(j,!0);F(()=>{se(I,"href",R(m).path),J(me,` ${ee(R(m).label)}`)}),g(Z,I)}),F(()=>Y(L,"active",R(m).path===s().url.pathname)),g(P,L)});var N=f(f(z,!0));H(N,()=>e.userAllPlaylists&&e.userAllPlaylists.length>0,P=>{var m=Rt(),M=y(m);_e(M,9,()=>e.userAllPlaylists,Pe,(L,K,ke)=>{var Z=Lt(),I=y(Z),j=y(I);F(()=>{Y(Z,"active",s().url.pathname===`/playlist/${R(K).id}`),se(I,"href",`/playlist/${ee(R(K).id)}`),J(j,R(K).name)}),g(L,Z)}),g(P,m)}),F(()=>{Y(u,"desktop",e.desktop),Y(u,"mobile",!e.desktop),Y(T,"is-hidden",!d(r)),ye(T,"visibility",d(r)?"visible":"hidden")}),D("keyup",T,a,!1),g(l,u),re()}var It=B('<div class="search-form svelte-1c1gesq"><!></div>'),Wt=B('<img alt="" class="svelte-1c1gesq">'),Ut=B('<div class="content svelte-1c1gesq"><div class="left svelte-1c1gesq"><!> <!> <!></div> <div class="right"><div id="profile-button"><button class="profile-button svelte-1c1gesq"><!> <span class="visually-hidden">Profile menu</span> <!></button></div> <div id="profile-menu" style="display: none;" class="svelte-1c1gesq"><div class="profile-menu-content svelte-1c1gesq"><ul class="svelte-1c1gesq"><li class="svelte-1c1gesq"><a target="_blank" rel="noopener noreferrer" class="svelte-1c1gesq">View on Spotify <!></a></li> <li class="svelte-1c1gesq"><a href="/profile" class="svelte-1c1gesq">View Profile</a></li> <li class="svelte-1c1gesq"><!></li></ul></div></div></div></div>');function jt(l,e){te(e,!1);const t={};oe(t);const s=()=>ie(ce,"$page",t),r=O();X(()=>s(),()=>{q(r,s().data.user)}),he(),ne();var n=Ut(),c=y(n),v=y(c);H(v,()=>yt,m=>{var M=A(),L=E(M);He(L,{desktop:!1,get userAllPlaylists(){return e.userAllPlaylists}}),g(m,M)});var o=f(f(v,!0));Jt(o,{});var i=f(f(o,!0));H(i,()=>s().url.pathname.startsWith("/search"),m=>{var M=It(),L=y(M);Ie(L,{}),g(m,M)});var x=f(f(c,!0)),p=y(x),_=y(p),$=y(_);H($,()=>{var m;return((m=d(r))==null?void 0:m.images)&&d(r).images.length>0},m=>{var M=Wt();F(()=>se(M,"src",d(r).images[0].url)),g(m,M)});var a=f($,!0),u=f(a),h=f(f(u,!0));wt(h,{class:"profile-arrow",size:22});var S=f(f(p,!0)),C=y(S),T=y(C),w=y(T),z=y(w),b=f(y(z));St(b,{focusable:"false","aria-hidden":!0,size:20});var k=f(f(w,!0)),N=f(f(k,!0)),P=y(N);it(P,{}),F(()=>{var m,M;J(a,` ${ee((m=d(r))==null?void 0:m.display_name)} `),se(z,"href",(M=d(r))==null?void 0:M.external_urls.spotify)}),ot(_,(m,M)=>lt(m,M),()=>({content:document.getElementById("profile-menu")||void 0,onMount:()=>{const m=document.getElementById("profile-menu");m&&(m.style.display="block")},trigger:"click",placement:"bottom-end",interactive:!0,theme:"menu",hideOnPopperBlur:!0})),g(l,n),re()}var Dt=B('<button><!> <span class="visually-hidden"> </span></button>');function pe(l,e){const t=W(e,["children","$$slots","$$events"]),s=W(t,["getButton","icon","label"]);te(e,!1);let r=O();function n(){return d(r)}var c=Dt();ae(c,p=>q(r,p),()=>d(r));let v;var o=y(c);$e(o,()=>e.icon,p=>{p(o,{color:"var(--text-color)","aria-hidden":"true",focusable:"false"})});var i=f(f(o,!0)),x=y(i);return F(()=>{v=je(c,v,{...s},!0,"svelte-1m8k0ey"),J(x,e.label)}),D("click",c,function(p){ue.call(this,e,p)}),D("mouseover",c,function(p){ue.call(this,e,p)}),D("focus",c,function(p){ue.call(this,e,p)}),D("keydown",c,function(p){ue.call(this,e,p)}),g(l,c),rt(e,"getButton",n),re({getButton:n})}function Gt(l){const e=l-1;return e*e*e+1}function Vt(l,{from:e,to:t},s={}){const r=getComputedStyle(l),n=r.transform==="none"?"":r.transform,[c,v]=r.transformOrigin.split(" ").map(parseFloat),o=e.left+e.width*c/t.width-(t.left+c),i=e.top+e.height*v/t.height-(t.top+v),{delay:x=0,duration:p=$=>Math.sqrt($)*120,easing:_=Gt}=s;return{delay:x,duration:typeof p=="function"?p(Math.sqrt(o*o+i*i)):p,easing:_,css:($,a)=>{const u=a*o,h=a*i,S=$+a*e.width/t.width,C=$+a*e.height/t.height;return`transform: ${n} translate(${u}px, ${h}px) scale(${S}, ${C});`}}}var Kt=B('<div><div class="content" role="status"> </div> <button class="close svelte-qupmqz" aria-label="Close toast"><!></button></div>'),Xt=B('<div class="toasts svelte-qupmqz"></div>');function Yt(l,e){te(e,!1);const t={};oe(t);const s=()=>ie(Ee,"$toasts",t);ne();var r=A(),n=E(r);H(n,()=>s().length>0,c=>{var v=Xt();_e(v,29,s,(o,i)=>R(o).id,(o,i,x)=>{var p=Kt();Le(3,p,()=>Nt,()=>({x:100,duration:300})),_t(p,()=>Vt,()=>({duration:300}));var _=y(p),$=y(_),a=f(f(_,!0)),u=y(a);xe(u,{focusable:"false","aria-hidden":!0,color:"var(--text-color)"}),F(()=>{tt(p,`toast ${ee(R(i).type)} svelte-qupmqz`),J($,R(i).message)}),D("click",a,()=>{Ee.remove(R(i).id)},!1),g(o,p)}),g(c,v)}),g(l,r),re()}var Qt=B('<form action="/search" method="GET" role="search"><div class="search-input-wrapper svelte-bvut78"><!> <input name="q" class="search-input svelte-bvut78" type="search" size="30" placeholder="Search for albums, artists or playlists." aria-label="Search for albums, artists or playlists."></div></form>');function Ie(l,e){te(e,!1);const t={};oe(t);const s=()=>ie(ce,"$page",t),r=O();let n=O();we(()=>{d(n).focus()}),X(()=>s(),()=>{q(r,s().params.query||"")}),he(),ne();var c=Qt(),v=y(c),o=y(v);Re(o,{"aria-hidden":!0,focusable:"false"});var i=f(f(o,!0));ae(i,x=>q(n,x),()=>d(n)),De(i),F(()=>i.value=d(r)),g(l,c),re()}var Zt=B("<!> <!>",1);function Jt(l,e){te(e,!1);const t={};oe(t);const s=()=>ie(ce,"$page",t);let r=O([]),n=O([]),c=O(!1);we(({from:_,to:$})=>{if(_){if(d(c)){q(c,!1);return}q(r,[...d(r),_.url.pathname]),q(n,[])}}),ne();var v=Zt(),o=E(v),i=Ce(()=>d(r).length===0);pe(o,{label:"Go Back",get disabled(){return d(i)},icon:xt,class:"nav-button",$$events:{mouseover:()=>{if(d(r).length===0)return;const _=d(r)[d(r).length-1];Me(_)},click:async()=>{if(d(r).length===0)return;q(c,!0);const _=s().url.pathname;history.back(),q(n,[...d(n),_]),q(r,d(r).slice(0,-1))}}});var x=f(f(o,!0)),p=Ce(()=>d(n).length===0);pe(x,{label:"Go Forward",get disabled(){return d(p)},icon:kt,class:"nav-button",$$events:{mouseover:()=>{if(d(n).length===0)return;const _=d(n)[d(n).length-1];Me(_)},click:async()=>{if(d(n).length===0)return;q(c,!0);const _=s().url.pathname;history.forward(),q(r,[...d(r),_]),q(n,d(n).slice(0,-1))}}}),g(l,v),re()}var We={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(l,e){(function(t,s){l.exports=s()})(st,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(a){var u,h;for(u in a)h=a[u],h!==void 0&&a.hasOwnProperty(u)&&(s[u]=h);return this},t.status=null,t.set=function(a){var u=t.isStarted();a=r(a,s.minimum,1),t.status=a===1?null:a;var h=t.render(!u),S=h.querySelector(s.barSelector),C=s.speed,T=s.easing;return h.offsetWidth,v(function(w){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),o(S,c(a,C,T)),a===1?(o(h,{transition:"none",opacity:1}),h.offsetWidth,setTimeout(function(){o(h,{transition:"all "+C+"ms linear",opacity:0}),setTimeout(function(){t.remove(),w()},C)},C)):setTimeout(w,C)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var a=function(){setTimeout(function(){t.status&&(t.trickle(),a())},s.trickleSpeed)};return s.trickle&&a(),this},t.done=function(a){return!a&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(a){var u=t.status;return u?(typeof a!="number"&&(a=(1-u)*r(Math.random()*u,.1,.95)),u=r(u+a,0,.994),t.set(u)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var a=0,u=0;t.promise=function(h){return!h||h.state()==="resolved"?this:(u===0&&t.start(),a++,u++,h.always(function(){u--,u===0?(a=0,t.done()):t.set((a-u)/a)}),this)}}(),t.render=function(a){if(t.isRendered())return document.getElementById("nprogress");x(document.documentElement,"nprogress-busy");var u=document.createElement("div");u.id="nprogress",u.innerHTML=s.template;var h=u.querySelector(s.barSelector),S=a?"-100":n(t.status||0),C=document.querySelector(s.parent),T;return o(h,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),s.showSpinner||(T=u.querySelector(s.spinnerSelector),T&&$(T)),C!=document.body&&x(C,"nprogress-custom-parent"),C.appendChild(u),u},t.remove=function(){p(document.documentElement,"nprogress-busy"),p(document.querySelector(s.parent),"nprogress-custom-parent");var a=document.getElementById("nprogress");a&&$(a)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var a=document.body.style,u="WebkitTransform"in a?"Webkit":"MozTransform"in a?"Moz":"msTransform"in a?"ms":"OTransform"in a?"O":"";return u+"Perspective"in a?"translate3d":u+"Transform"in a?"translate":"margin"};function r(a,u,h){return a<u?u:a>h?h:a}function n(a){return(-1+a)*100}function c(a,u,h){var S;return s.positionUsing==="translate3d"?S={transform:"translate3d("+n(a)+"%,0,0)"}:s.positionUsing==="translate"?S={transform:"translate("+n(a)+"%,0)"}:S={"margin-left":n(a)+"%"},S.transition="all "+u+"ms "+h,S}var v=function(){var a=[];function u(){var h=a.shift();h&&h(u)}return function(h){a.push(h),a.length==1&&u()}}(),o=function(){var a=["Webkit","O","Moz","ms"],u={};function h(w){return w.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(z,b){return b.toUpperCase()})}function S(w){var z=document.body.style;if(w in z)return w;for(var b=a.length,k=w.charAt(0).toUpperCase()+w.slice(1),N;b--;)if(N=a[b]+k,N in z)return N;return w}function C(w){return w=h(w),u[w]||(u[w]=S(w))}function T(w,z,b){z=C(z),w.style[z]=b}return function(w,z){var b=arguments,k,N;if(b.length==2)for(k in z)N=z[k],N!==void 0&&z.hasOwnProperty(k)&&T(w,k,N);else T(w,b[1],b[2])}}();function i(a,u){var h=typeof a=="string"?a:_(a);return h.indexOf(" "+u+" ")>=0}function x(a,u){var h=_(a),S=h+u;i(h,u)||(a.className=S.substring(1))}function p(a,u){var h=_(a),S;i(a,u)&&(S=h.replace(" "+u+" "," "),a.className=S.substring(1,S.length-1))}function _(a){return(" "+(a.className||"")+" ").replace(/\s+/gi," ")}function $(a){a&&a.parentNode&&a.parentNode.removeChild(a)}return t})})(We);var er=We.exports;const ge=at(er);var tr=B('<a href="#main-content" class="skip-link">Skip to Content</a>'),rr=B('<div id="sidebar"><!></div>'),sr=B('<div class="message svelte-scgxk5" role="status"> <a class="close svelte-scgxk5"><!> <span class="visually-hidden">Close message</span></a></div>'),ar=B('<div id="topbar" class="svelte-scgxk5"><div class="topbar-bg svelte-scgxk5"></div> <!></div>'),nr=B('<div class="search-form svelte-scgxk5"><!></div>'),or=B('<!> <!> <div id="main" class="svelte-scgxk5"><!> <div id="content" class="svelte-scgxk5"><!> <!> <main id="main-content" class="svelte-scgxk5"><!> <!></main></div></div>',1);function Cr(l,e){te(e,!1);const t={};oe(t);const s=()=>ie(ce,"$page",t),r=O(),n=O(),c=O(),v=O();ge.configure({showSpinner:!1}),nt.init();let o=O(),i=O(),x=O(0);we(()=>{ge.done()}),Ae(()=>{ge.start(),ct()}),X(()=>(d(o),d(i)),()=>{d(o)&&q(x,d(i)/d(o).offsetHeight<1?d(i)/d(o).offsetHeight:1)}),X(()=>s(),()=>{q(r,s().url.searchParams.get("error"))}),X(()=>s(),()=>{q(n,s().url.searchParams.get("success"))}),X(()=>be(e.data),()=>{q(c,e.data.user)}),X(()=>be(e.data),()=>{q(v,e.data.userAllPlaylists)}),he(),ne();var p=or();Ne(b=>{F(()=>Ve.title=`Studify${ee(s().data.title?` - ${s().data.title}`:"")}`)});var _=E(p);H(_,()=>d(c),b=>{var k=tr();g(b,k)});var $=f(f(_,!0));Yt($,{});var a=f(f($,!0)),u=y(a);H(u,()=>d(c),b=>{var k=rr(),N=y(k);He(N,{desktop:!0,get userAllPlaylists(){return d(v)}}),g(b,k)});var h=f(f(u,!0)),S=y(h);H(S,()=>d(r)||d(n),b=>{var k=sr(),N=y(k),P=f(N),m=y(P);xe(m,{"aria-hidden":!0,focusable:"false"}),F(()=>{Y(k,"error",d(r)),Y(k,"success",d(n)),J(N,`${ee(d(r)??d(n))} `),se(P,"href",s().url.pathname)}),g(b,k)});var C=f(f(S,!0));H(C,()=>d(c),b=>{var k=ar();ae(k,m=>q(o,m),()=>d(o));var N=y(k),P=f(f(N,!0));jt(P,{get userAllPlaylists(){return d(v)}}),F(()=>{ye(N,"background-color",s().data.color?s().data.color:"var(--header-color)"),ye(N,"opacity",`${d(x)}`)}),g(b,k)});var T=f(f(C,!0)),w=y(T);H(w,()=>s().url.pathname.startsWith("/search"),b=>{var k=nr(),N=y(k);Ie(N,{}),g(b,k)});var z=f(f(w,!0));V(z,e.children,{}),F(()=>Y(T,"logged-in",d(c))),bt("y",()=>d(i),b=>q(i,b)),g(l,p),re()}export{Cr as component,qr as universal};
