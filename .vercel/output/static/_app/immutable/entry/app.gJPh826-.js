const __vite__fileDeps=["../nodes/0.B93wVazI.js","../chunks/index.DJuFnhGY.js","../chunks/runtime.DDjRgbeA.js","../chunks/disclose-version.B-hLH5kf.js","../chunks/control.CYgJF_JY.js","../chunks/if.BIDFABO2.js","../chunks/class.CTwLLMHQ.js","../chunks/style.iv2mhl8q.js","../chunks/this.BVWmpjgx.js","../chunks/lifecycle.Dwr_-_8E.js","../chunks/stores.DL9AZrMW.js","../chunks/entry.DFsZ7VbH.js","../chunks/index-client.Dvsx0NXl.js","../chunks/HeaderNav.svelte_svelte_type_style_lang.BOaGD4ME.js","../assets/HeaderNav.hS9m3bn4.css","../chunks/6.C-fJVoPU.js","../chunks/props.GCjS4c-Y.js","../chunks/Button.Dse6T-Vv.js","../chunks/Icon.gh31iTKL.js","../chunks/micromodal.es.CJCzk-G3.js","../chunks/actions.B3legGYV.js","../chunks/LogoutButton.BlcegMND.js","../chunks/tippy.DIS1eJDj.js","../chunks/toasts.DKt_b5Ez.js","../assets/0.BhqFg0vN.css","../nodes/1.DTOB6Hso.js","../assets/1.rP2J_rdx.css","../nodes/2.bm4vFw7l.js","../chunks/fetch-refresh.CoktrdpI.js","../chunks/Card.DpYgZsTY.js","../chunks/music.Dh4XsNpo.js","../assets/2.CZw5X3d8.css","../nodes/3.DWXWheOt.js","../chunks/ItemPage.C-H0ZPAG.js","../chunks/Player.BXI3JX_F.js","../chunks/forms.C2Yu6mSk.js","../assets/3.Bc9jehmY.css","../nodes/4.BI-UVeIU.js","../assets/4.Buvb-AEf.css","../nodes/5.DQSqFIhN.js","../assets/5.Cfcrt1pw.css","../nodes/7.Cxex1j6X.js","../chunks/PlaylistForm.C4pMH_yR.js","../chunks/Modal.Hglc8NYm.js","../assets/7.C5sOGbJ9.css","../nodes/8.BV3LLO8P.js","../nodes/9.DBhWWYF-.js","../chunks/Pagination.C2OWy05d.js","../assets/9._hd2Wnus.css","../nodes/10.BAoMHzSg.js","../nodes/11.CYtNvJTw.js","../assets/11.Bl88bvAv.css","../nodes/12.B0mt8m8i.js","../assets/12.BTpbWMA0.css","../nodes/13.jmCWb-xc.js","../assets/13.BB6voPMV.css","../nodes/14.FCm-XJ53.js","../assets/14.VDQJAede.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var U=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var _=(e,t,r)=>(U(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},D=(e,t,r,s)=>(U(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r);import{$ as G,S as m,aa as H,ab as J,ac as Y,f as w,L as M,s as E,U as L,h as q,m as K,g as b,A as Q,u as X,a3 as $,p as tt,w as et,x as rt,a9 as nt,a as st,r as ot}from"../chunks/runtime.DDjRgbeA.js";import{w as it,x as at,y as ct,h as x,a as P,t as Z,f as A,e as z,d as lt,c as ut,g as dt}from"../chunks/disclose-version.B-hLH5kf.js";import{i as V}from"../chunks/if.BIDFABO2.js";import{c as k}from"../chunks/6.C-fJVoPU.js";import{b as S}from"../chunks/this.BVWmpjgx.js";import{p as C}from"../chunks/props.GCjS4c-Y.js";import{o as _t}from"../chunks/index-client.Dvsx0NXl.js";function R(e,t=!0,r=null){if(typeof e=="object"&&e!=null&&!G(e)){if(m in e){const n=e[m];if(n.t===e||n.p===e)return n.p}const s=$(e);if(s===H||s===J){const n=new Proxy(e,ft);return Y(e,m,{value:{s:new Map,v:w(0),a:M(e),i:t,p:n,t:e},writable:!0,enumerable:!1}),n}}return e}function N(e,t=1){E(e,e.v+t)}const ft={defineProperty(e,t,r){if(r.value){const s=e[m],n=s.s.get(t);n!==void 0&&E(n,R(r.value,s.i,s))}return Reflect.defineProperty(e,t,r)},deleteProperty(e,t){const r=e[m],s=r.s.get(t),n=r.a,o=delete e[t];if(n&&o){const i=r.s.get("length"),y=e.length-1;i!==void 0&&i.v!==y&&E(i,y)}return s!==void 0&&E(s,L),o&&N(r.v),o},get(e,t,r){var o;if(t===m)return Reflect.get(e,m);const s=e[m];let n=s.s.get(t);if(n===void 0&&(!(t in e)||(o=q(e,t))!=null&&o.writable)&&(n=(s.i?w:K)(R(e[t],s.i,s)),s.s.set(t,n)),n!==void 0){const i=b(n);return i===L?void 0:i}return Reflect.get(e,t,r)},getOwnPropertyDescriptor(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);if(r&&"value"in r){const n=e[m].s.get(t);n&&(r.value=b(n))}return r},has(e,t){var o;if(t===m)return!0;const r=e[m],s=Reflect.has(e,t);let n=r.s.get(t);return(n!==void 0||Q!==null&&(!s||(o=q(e,t))!=null&&o.writable))&&(n===void 0&&(n=(r.i?w:K)(s?R(e[t],r.i,r):L),r.s.set(t,n)),b(n)===L)?!1:s},set(e,t,r,s){const n=e[m];let o=n.s.get(t);o===void 0&&(X(()=>s[t]),o=n.s.get(t)),o!==void 0&&E(o,R(r,n.i,n));const i=n.a,y=!(t in e);if(i&&t==="length")for(let a=r;a<e.length;a+=1){const u=n.s.get(a+"");u!==void 0&&E(u,L)}if(e[t]=r,y){if(i){const a=n.s.get("length"),u=e.length;a!==void 0&&a.v!==u&&E(a,u)}N(n.v)}return!0},ownKeys(e){const t=e[m];return b(t.v),Reflect.ownKeys(e)}};function mt(e){return class extends ht{constructor(t){super({component:e,...t})}}}var g,h;class ht{constructor(t){T(this,g,void 0);T(this,h,void 0);const r=R({...t.props||{},$$events:{}},!1);D(this,h,(t.hydrate?it:at)(t.component,{target:t.target,props:r,context:t.context,intro:t.intro,recover:t.recover})),D(this,g,r.$$events);for(const s of Object.keys(_(this,h)))s==="$set"||s==="$destroy"||s==="$on"||Y(this,s,{get(){return _(this,h)[s]},set(n){_(this,h)[s]=n},enumerable:!0});_(this,h).$set=s=>{Object.assign(r,s)},_(this,h).$destroy=()=>{ct(_(this,h))}}$set(t){_(this,h).$set(t)}$on(t,r){_(this,g)[t]=_(this,g)[t]||[];const s=(...n)=>r.call(this,...n);return _(this,g)[t].push(s),()=>{_(this,g)[t]=_(this,g)[t].filter(n=>n!==s)}}$destroy(){_(this,h).$destroy()}}g=new WeakMap,h=new WeakMap;const vt="modulepreload",yt=function(e,t){return new URL(e,t).href},W={},l=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),y=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(r.map(a=>{if(a=yt(a,s),a in W)return;W[a]=!0;const u=a.endsWith(".css"),I=u?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const v=o[f];if(v.href===a&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${I}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":vt,u||(c.as="script",c.crossOrigin=""),c.href=a,y&&c.setAttribute("nonce",y),document.head.appendChild(c),u)return new Promise((f,v)=>{c.addEventListener("load",f),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},Et=e=>["section","category","artist","profile"].includes(e),xt={list:Et};var gt=Z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),pt=Z("<!> <!>",1);function bt(e,t){tt(t,!0);let r=C(t,"components",11,()=>[]),s=C(t,"data_0",3,null),n=C(t,"data_1",3,null);et(()=>t.stores.page.set(t.page)),rt(()=>{t.stores,t.page,t.constructors,r(),t.form,s(),n(),t.stores.page.notify()});let o=w(!1),i=w(!1),y=w(null);_t(()=>{const p=t.stores.page.subscribe(()=>{b(o)&&(E(i,!0),nt().then(()=>{E(y,R(document.title||"untitled page"))}))});return E(o,!0),p});var a=pt(),u=A(a);V(u,()=>t.constructors[1],p=>{var c=x(),f=A(c);k(f,()=>t.constructors[0],v=>{S(v(f,{get data(){return s()},children:(d,Pt)=>{var j=x(),B=A(j);k(B,()=>t.constructors[1],F=>{S(F(B,{get data(){return n()},get form(){return t.form}}),O=>r()[1]=O,()=>{var O;return(O=r())==null?void 0:O[1]})}),P(d,j)}}),d=>r()[0]=d,()=>{var d;return(d=r())==null?void 0:d[0]})}),P(p,c)},p=>{var c=x(),f=A(c);k(f,()=>t.constructors[0],v=>{S(v(f,{get data(){return s()},get form(){return t.form}}),d=>r()[0]=d,()=>{var d;return(d=r())==null?void 0:d[0]})}),P(p,c)});var I=z(z(u,!0));V(I,()=>b(o),p=>{var c=gt(),f=ut(c);V(f,()=>b(i),v=>{var d=dt(v);ot(()=>lt(d,b(y))),P(v,d)}),P(p,c)}),P(e,a),st()}const Vt=mt(bt),kt=[()=>l(()=>import("../nodes/0.B93wVazI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url),()=>l(()=>import("../nodes/1.DTOB6Hso.js"),__vite__mapDeps([25,3,2,5,9,10,11,12,4,21,17,13,1,14,8,16,26]),import.meta.url),()=>l(()=>import("../nodes/2.bm4vFw7l.js"),__vite__mapDeps([27,28,1,2,3,4,9,11,12,17,13,14,8,16,29,5,6,30,18,31]),import.meta.url),()=>l(()=>import("../nodes/3.DWXWheOt.js"),__vite__mapDeps([32,28,1,2,3,4,9,11,12,13,14,33,5,7,30,16,18,34,20,6,8,10,17,22,35,23,36]),import.meta.url),()=>l(()=>import("../nodes/4.BI-UVeIU.js"),__vite__mapDeps([37,1,2,3,4,28,5,9,11,12,17,13,14,8,16,29,6,30,18,33,7,34,20,10,22,35,23,38]),import.meta.url),()=>l(()=>import("../nodes/5.DQSqFIhN.js"),__vite__mapDeps([39,3,2,1,4,11,12,17,13,14,8,16,40]),import.meta.url),()=>l(()=>import("../chunks/6.C-fJVoPU.js").then(e=>e._),__vite__mapDeps([15,2]),import.meta.url),()=>l(()=>import("../nodes/7.Cxex1j6X.js"),__vite__mapDeps([41,28,1,2,3,4,5,20,8,9,10,11,12,35,17,13,14,16,33,7,30,18,34,6,22,23,42,43,19,44]),import.meta.url),()=>l(()=>import("../nodes/8.BV3LLO8P.js"),__vite__mapDeps([45,28,1,2,3,4,9,11,12,13,14,42,5,20,6,16,17,8,35]),import.meta.url),()=>l(()=>import("../nodes/9.DBhWWYF-.js"),__vite__mapDeps([46,28,1,2,3,4,5,9,11,12,17,13,14,8,16,29,6,30,18,23,47,10,42,20,35,43,19,48]),import.meta.url),()=>l(()=>import("../nodes/10.BAoMHzSg.js"),__vite__mapDeps([49,3,2,9,11,12,4,13,1,14,42,5,20,6,16,17,8,35]),import.meta.url),()=>l(()=>import("../nodes/11.CYtNvJTw.js"),__vite__mapDeps([50,28,1,2,3,4,5,9,11,12,17,13,14,8,16,29,6,30,18,33,7,51]),import.meta.url),()=>l(()=>import("../nodes/12.B0mt8m8i.js"),__vite__mapDeps([52,28,1,2,3,4,5,9,53]),import.meta.url),()=>l(()=>import("../nodes/13.jmCWb-xc.js"),__vite__mapDeps([54,28,1,2,3,4,5,9,11,12,13,14,29,6,30,16,18,55]),import.meta.url),()=>l(()=>import("../nodes/14.FCm-XJ53.js"),__vite__mapDeps([56,28,1,2,3,4,5,9,11,12,13,14,29,6,30,16,18,23,47,10,17,8,57]),import.meta.url)],St=[0],Ct={"/":[2],"/album/[id]":[3],"/artist/[id]":[4],"/login":[5],"/playlists":[9],"/playlists/new":[10],"/playlist":[6],"/playlist/[id]":[7],"/playlist/[id]/edit":[8],"/profile":[11],"/search":[12],"/search/[query]":[13],"/[list=list]/[...rest]":[14]},jt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Ct as dictionary,jt as hooks,xt as matchers,kt as nodes,Vt as root,St as server_loads};
