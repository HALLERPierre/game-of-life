import{L as re,S as W,i as X,s as H,l as K,g as G,M as Q,N as Z,a as z,d as y,b as g,O as F,P as U,Q as x,e as B,t as V,k as J,c as M,h as j,m as L,R as oe,J as k,T as ie,U as ae,j as ce,K as D,V as ue,W as $,v as he,X as _e,Y as fe,w as de,Z as ge,x as pe,y as ve,q as me,o as be,B as ye}from"../chunks/vendor-46be8023.js";const ke=()=>{const e=re("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},we={subscribe(e){return ke().page.subscribe(e)}};const{window:Se}=fe;function ee(e,s,t){const l=e.slice();return l[22]=s[t],l[24]=t,l}function te(e,s,t){const l=e.slice();return l[22]=s[t],l[26]=t,l}function se(e){let s,t,l,n,i,r,_,m;function w(){return e[16](e[24],e[26])}return{c(){s=Q("rect"),this.h()},l(c){s=Z(c,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0}),z(s).forEach(y),this.h()},h(){g(s,"class",t=""+(F(e[1].includes(`${e[24]}:${e[26]}`)?"selected":"rect")+" svelte-4ke69e")),g(s,"x",l=e[24]*e[6]),g(s,"y",n=e[26]*e[6]),g(s,"width",i=e[6]-P),g(s,"height",r=e[6]-P)},m(c,v){G(c,s,v),_||(m=U(s,"click",w),_=!0)},p(c,v){e=c,v&2&&t!==(t=""+(F(e[1].includes(`${e[24]}:${e[26]}`)?"selected":"rect")+" svelte-4ke69e"))&&g(s,"class",t),v&64&&l!==(l=e[24]*e[6])&&g(s,"x",l),v&64&&n!==(n=e[26]*e[6])&&g(s,"y",n),v&64&&i!==(i=e[6]-P)&&g(s,"width",i),v&64&&r!==(r=e[6]-P)&&g(s,"height",r)},d(c){c&&y(s),_=!1,m()}}}function le(e){let s,t=Array(e[4]),l=[];for(let n=0;n<t.length;n+=1)l[n]=se(te(e,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();s=K()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);s=K()},m(n,i){for(let r=0;r<l.length;r+=1)l[r].m(n,i);G(n,s,i)},p(n,i){if(i&338){t=Array(n[4]);let r;for(r=0;r<t.length;r+=1){const _=te(n,t,r);l[r]?l[r].p(_,i):(l[r]=se(_),l[r].c(),l[r].m(s.parentNode,s))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(n){x(l,n),n&&y(s)}}}function Ce(e){let s,t,l,n,i,r,_=(e[0]?"Stop":"Start")+"",m,w,c,v,S,u,A,I,O,C=Array(e[5]),f=[];for(let h=0;h<C.length;h+=1)f[h]=le(ee(e,C,h));return{c(){s=B("div"),t=B("div"),l=B("button"),n=V("Clear"),i=J(),r=B("button"),m=V(_),w=J(),c=B("button"),v=V("Copy"),S=J(),u=Q("svg");for(let h=0;h<f.length;h+=1)f[h].c();this.h()},l(h){s=M(h,"DIV",{class:!0});var b=z(s);t=M(b,"DIV",{class:!0});var a=z(t);l=M(a,"BUTTON",{class:!0});var E=z(l);n=j(E,"Clear"),E.forEach(y),i=L(a),r=M(a,"BUTTON",{class:!0});var Y=z(r);m=j(Y,_),Y.forEach(y),w=L(a),c=M(a,"BUTTON",{class:!0});var q=z(c);v=j(q,"Copy"),q.forEach(y),a.forEach(y),S=L(b),u=Z(b,"svg",{width:!0,height:!0});var o=z(u);for(let d=0;d<f.length;d+=1)f[d].l(o);o.forEach(y),b.forEach(y),this.h()},h(){g(l,"class","reset svelte-4ke69e"),g(r,"class","start svelte-4ke69e"),g(c,"class","start svelte-4ke69e"),g(t,"class","actions svelte-4ke69e"),g(u,"width","100%"),g(u,"height","100%"),g(s,"class","grid svelte-4ke69e"),oe(()=>e[17].call(s))},m(h,b){G(h,s,b),k(s,t),k(t,l),k(l,n),k(t,i),k(t,r),k(r,m),k(t,w),k(t,c),k(c,v),k(s,S),k(s,u);for(let a=0;a<f.length;a+=1)f[a].m(u,null);A=ie(s,e[17].bind(s)),I||(O=[U(Se,"wheel",e[9]),U(l,"click",e[14]),U(r,"click",function(){ae(e[0]?e[11]:e[10])&&(e[0]?e[11]:e[10]).apply(this,arguments)}),U(c,"click",e[15])],I=!0)},p(h,[b]){if(e=h,b&1&&_!==(_=(e[0]?"Stop":"Start")+"")&&ce(m,_),b&370){C=Array(e[5]);let a;for(a=0;a<C.length;a+=1){const E=ee(e,C,a);f[a]?f[a].p(E,b):(f[a]=le(E),f[a].c(),f[a].m(u,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=C.length}},i:D,o:D,d(h){h&&y(s),x(f,h),A(),I=!1,ue(O)}}}let P=2;function Ne(e,s,t){let l,n,i,r;$(e,we,o=>t(19,i=o));let _;he(()=>{t(12,_=i.url.searchParams.get("pattern"))});let m=0,w=0,c=50,v,{playing:S=!1}=s,{alivedCells:u=[]}=s;const A=_e(c);$(e,A,o=>t(6,r=o));function I(o){const d=[];for(let p=-1;p<=1;p++)for(let N=-1;N<=1;N++){const R=p+o.x,T=N+o.y;R<0||T<0||R>l||T>n||R===o.x&&T===o.y||d.push(`${R}:${T}`)}return d}function O(o,d){const p=`${o}:${d}`;u.includes(p)?t(1,u=u.filter(N=>N!==p)):t(1,u=[...u,p])}function C(o){o.deltaY<0&&t(13,c+=2),o.deltaY>0&&c>20&&t(13,c-=2)}function f(){const o=[];for(let d=0;d<l;d++)for(let p=0;p<n;p++){const N=u.includes(`${d}:${p}`),R=I({x:d,y:p}),T=R.filter(ne=>u.includes(ne)).length;console.log({x:d,y:p,isAlive:N,neighboors:R}),N&&(T===2||T===3)?o.push(`${d}:${p}`):T===3&&o.push(`${d}:${p}`)}t(1,u=o)}function h(){t(0,S=!0),v=setInterval(f,200)}function b(){t(0,S=!1),clearInterval(v)}const a=()=>t(1,u=[]),E=()=>navigator.clipboard.writeText(`${window.location.origin}?pattern=${encodeURI(JSON.stringify(u))}`),Y=(o,d)=>O(o,d);function q(){m=this.clientHeight,w=this.clientWidth,t(2,m),t(3,w)}return e.$$set=o=>{"playing"in o&&t(0,S=o.playing),"alivedCells"in o&&t(1,u=o.alivedCells)},e.$$.update=()=>{e.$$.dirty&8200&&t(5,l=Math.floor(w/c)+1),e.$$.dirty&8196&&t(4,n=Math.floor(m/c)+1),e.$$.dirty&8192&&A.set(c),e.$$.dirty&4096&&_!=null&&t(1,u=JSON.parse(decodeURI(_)))},[S,u,m,w,n,l,r,A,O,C,h,b,_,c,a,E,Y,q]}class Te extends W{constructor(s){super();X(this,s,Ne,Ce,H,{playing:0,alivedCells:1})}}function Ee(e){let s,t,l;return t=new Te({}),{c(){s=J(),de(t.$$.fragment),this.h()},l(n){ge('[data-svelte="svelte-mb0vpf"]',document.head).forEach(y),s=L(n),pe(t.$$.fragment,n),this.h()},h(){document.title="Game of Life"},m(n,i){G(n,s,i),ve(t,n,i),l=!0},p:D,i(n){l||(me(t.$$.fragment,n),l=!0)},o(n){be(t.$$.fragment,n),l=!1},d(n){n&&y(s),ye(t,n)}}}class ze extends W{constructor(s){super();X(this,s,null,Ee,H,{})}}export{ze as default};