import{E as st,L as rt,H as et,F as it,O as ft,G as m,I as y,J as nt,Q as ut,e as V,u as ot,R as L,s as z,T as B,V as $,m as lt,f as F,W as vt,X as _t,Y as ct,Z as j,_ as dt,$ as Et,S as gt,a0 as pt,a1 as ht,a2 as At,D as Tt,a3 as G,a4 as bt,a5 as wt,a6 as St,a7 as It}from"./runtime.DDjRgbeA.js";import{i as I,p as J,q as k,k as Y,l as K,r as Ct,u as Rt,v as Ht}from"./disclose-version.B-hLH5kf.js";import{H as Nt,R as Lt}from"./control.CYgJF_JY.js";let D=null;function Xt(t){D=t}function qt(t,a){return a}function Dt(t,a,s){for(var i=[],f=t.length,c=0;c<f;c++)vt(t[c].e,i,!0);if(f>0&&i.length===0&&a!==null){var e=a.parentNode;Rt(e),e.append(a)}_t(i,()=>{for(var g=0;g<f;g++)ct(t[g].e);s!==void 0&&s()})}function zt(t,a,s,i,f,c=null){var e={flags:a,items:new Map,next:null},g=(a&j)!==0;if(g){var p=t;t=I?J(p.firstChild):p.appendChild(k())}var E=null;st(()=>{var h=s(),u=rt(h)?h:h==null?[]:Array.from(h),o=u.length,r=e.flags;r&$&&!Et(u)&&!(gt in u)&&(r^=$,r&pt&&!(r&L)&&(r^=L));let d=!1;if(I){var l=t.data===et;l!==(o===0)&&(it(K),Y(!1),d=!0)}if(I){for(var _=K[0],T=e,A,n=0;n<o;n++){if(_.nodeType!==8||_.data!==ft){d=!0,Y(!1);break}var v=_;_=J(_);var H=u[n],N=i(H,n);A=tt(v,_,T,null,H,N,n,f,r),e.items.set(N,A),_=_.nextSibling,T=A}if(o>0)for(;_!==t;){var C=_.nextSibling;_.remove(),_=C}}I||Ot(u,e,t,f,r,i),c!==null&&(o===0?E?m(E):E=y(()=>c(t)):E!==null&&nt(E,()=>{E=null})),d&&Y(!0)})}function Ot(t,a,s,i,f,c){var U,W,X,q;var e=(f&dt)!==0,g=(f&(L|B))!==0,p=t.length,E=a.items,h=a.next,u=h,o=new Set,r=a,d=new Set,l=[],_=[],T,A,n,v;if(e)for(v=0;v<p;v+=1)T=t[v],A=c(T,v),n=E.get(A),n!==void 0&&((U=n.a)==null||U.measure(),d.add(n));for(v=0;v<p;v+=1){if(T=t[v],A=c(T,v),n=E.get(A),n===void 0){var H=Ct(k()),N=u?u.o:s;N.before(H),r=tt(H,N,r,r.next,T,A,v,i,f),E.set(A,r),l=[],_=[],u=r.next;continue}if(g&&xt(n,T,v,f),n.e.f&ut&&(m(n.e),e&&((W=n.a)==null||W.unfix(),d.delete(n))),n!==u){if(o.has(n)){if(l.length<_.length){var C=_[0],b;r=C.prev;var Q=l[0],x=l[l.length-1];for(b=0;b<l.length;b+=1)Z(l[b],C,s);for(b=0;b<_.length;b+=1)o.delete(_[b]);S(Q.prev,x.next),S(r,Q),S(x,C),u=C,r=x,v-=1,l=[],_=[]}else o.delete(n),Z(n,u,s),S(n.prev,n.next),S(n,r.next),S(r,n),r=n;continue}for(l=[],_=[];u!==null&&u.k!==A;)o.add(u),_.push(u),u=u.next;if(u===null)continue;n=u}l.push(n),r=n,u=n.next}const w=Array.from(o);for(;u;)w.push(u),u=u.next;var at=f&j&&p===0?s:null;if(e){for(v=0;v<w.length;v+=1)(X=w[v].a)==null||X.measure();for(v=0;v<w.length;v+=1)(q=w[v].a)==null||q.fix()}Dt(w,at,()=>{for(var R=0;R<w.length;R+=1){var M=w[R];E.delete(M.k),S(M.prev,M.next)}}),e&&V(()=>{ot(()=>{var R;for(n of d)(R=n.a)==null||R.apply()})})}function xt(t,a,s,i){i&L&&z(t.v,a),i&B?z(t.i,s):t.i=s}function tt(t,a,s,i,f,c,e,g,p){var E=D;try{var h=(p&L)!==0,u=(p&$)===0,o=h?u?lt(f):F(f):f,r=p&B?F(e):e,d={i:r,v:o,k:c,a:null,e:null,o:t,prev:s,next:i};return s.next=d,i!==null&&(i.prev=d),D=d,d.e=y(()=>g(a,o,r)),d}finally{D=E}}function Z(t,a,s){for(var i=t.next?t.next.o:s,f=a?a.o:s,c=t.o;c!==i;){var e=c.nextSibling;f.before(c),c=e}}function S(t,a){t.next=a,a!==null&&(a.prev=t)}function Mt(t,a){if(a){const s=document.body;t.autofocus=!0,V(()=>{document.activeElement===s&&t.focus()})}}function Ft(t){if(I){const a=t.getAttribute("value");O(t,"value",null),O(t,"checked",null),a&&(t.value=a)}}function O(t,a,s){s=s==null?null:s+"";var i=t.__attributes??(t.__attributes={});I&&(i[a]=t.getAttribute(a),a==="src"||a==="href"||a==="srcset")||i[a]!==(i[a]=s)&&(s===null?t.removeAttribute(a):t.setAttribute(a,s))}function Yt(t,a,s){if(a in t){var i=t[a],f=typeof i=="boolean"&&s===""?!0:s;(typeof i!="object"||i!==f)&&(t[a]=f)}else O(t,a,s)}function $t(t,a,s,i,f){var c=f.length!==0;for(var e in a)e in s||(s[e]=null);c&&!s.class&&(s.class="");var g=ht(P,t.nodeName);g||At(P,t.nodeName,g=Bt(t));var p=t.__attributes??(t.__attributes={}),E=[];for(e in s){let r=s[e];if(r!==(a==null?void 0:a[e])){var h=e[0]+e[1];if(h!=="$$")if(h==="on"){const d={};let l=e.slice(2);var u=bt.includes(l);l.endsWith("capture")&&l!=="ongotpointercapture"&&l!=="onlostpointercapture"&&(l=l.slice(0,-7),d.capture=!0),!u&&(a!=null&&a[e])&&t.removeEventListener(l,a[e],d),r!=null&&(u?(t[`__${l}`]=r,Ht([l])):a?t.addEventListener(l,r,d):E.push(()=>t.addEventListener(l,r,d)))}else if(r==null)p[e]=null,t.removeAttribute(e);else if(e==="style")t.style.cssText=r+"";else if(e==="autofocus")Mt(t,!!r);else if(e==="__value"||e==="value")t.value=t[e]=t.__value=r;else{var o=e;i&&(o=o.toLowerCase(),o=wt[o]||o),g.includes(o)?I&&(o==="src"||o==="href"||o==="srcset")||(t[o]=r):typeof r!="function"&&(c&&o==="class"&&(r&&(r+=" "),r+=f),O(t,o,r))}}}return a||V(()=>E.forEach(Tt)),s}function Gt(t,a,s,i){if(t.tagName.includes("-")){for(var f in a)f in s||(s[f]=null);for(f in s)Yt(t,f,s[f]);return s}return $t(t,a,s,t.namespaceURI!==St,i)}var Vt=["width","height"],P=new Map;function Bt(t){for(var a=[],s,i=G(t);i.constructor.name!=="Element";){s=It(i);for(var f in s)s[f].set&&!Vt.includes(f)&&a.push(f);i=G(i)}return a}function Jt(t,a){throw new Nt(t,a)}function Kt(t,a){throw new Lt(t,a.toString())}new TextEncoder;export{Gt as a,zt as b,$t as c,Kt as d,Jt as e,Xt as f,D as g,qt as i,Ft as r,O as s};
