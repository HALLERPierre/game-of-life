import{S as Y,i as j,s as V,l as W,g as q,L as X,M as D,a as R,d as b,b as m,N as H,O as B,P as J,e as I,t as K,k as L,c as M,h as P,m as O,Q as te,J as A,R as le,T as se,j as ne,K as U,U as re,V as ie,W as oe,w as ae,X as ce,x as he,y as ue,q as fe,o as _e,B as de}from"../chunks/vendor-f5c9bb2d.js";function Q(e,t,l){const n=e.slice();return n[19]=t[l],n[21]=l,n}function F(e,t,l){const n=e.slice();return n[19]=t[l],n[23]=l,n}function Z(e){let t,l,n,s,i,r,f,_;function y(){return e[14](e[21],e[23])}return{c(){t=X("rect"),this.h()},l(d){t=D(d,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0}),R(t).forEach(b),this.h()},h(){m(t,"class",l=""+(H(e[1].includes(`${e[21]}:${e[23]}`)?"selected":"rect")+" svelte-6r1rvs")),m(t,"x",n=e[21]*e[6]),m(t,"y",s=e[23]*e[6]),m(t,"width",i=e[6]-G),m(t,"height",r=e[6]-G)},m(d,o){q(d,t,o),f||(_=B(t,"click",y),f=!0)},p(d,o){e=d,o&2&&l!==(l=""+(H(e[1].includes(`${e[21]}:${e[23]}`)?"selected":"rect")+" svelte-6r1rvs"))&&m(t,"class",l),o&64&&n!==(n=e[21]*e[6])&&m(t,"x",n),o&64&&s!==(s=e[23]*e[6])&&m(t,"y",s),o&64&&i!==(i=e[6]-G)&&m(t,"width",i),o&64&&r!==(r=e[6]-G)&&m(t,"height",r)},d(d){d&&b(t),f=!1,_()}}}function $(e){let t,l=Array(e[4]),n=[];for(let s=0;s<l.length;s+=1)n[s]=Z(F(e,l,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=W()},l(s){for(let i=0;i<n.length;i+=1)n[i].l(s);t=W()},m(s,i){for(let r=0;r<n.length;r+=1)n[r].m(s,i);q(s,t,i)},p(s,i){if(i&338){l=Array(s[4]);let r;for(r=0;r<l.length;r+=1){const f=F(s,l,r);n[r]?n[r].p(f,i):(n[r]=Z(f),n[r].c(),n[r].m(t.parentNode,t))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},d(s){J(n,s),s&&b(t)}}}function ge(e){let t,l,n,s,i,r=(e[0]?"Stop":"Start")+"",f,_,y,d,o,E,k=Array(e[5]),h=[];for(let u=0;u<k.length;u+=1)h[u]=$(Q(e,k,u));return{c(){t=I("div"),l=I("button"),n=K("Clear"),s=L(),i=I("button"),f=K(r),_=L(),y=X("svg");for(let u=0;u<h.length;u+=1)h[u].c();this.h()},l(u){t=M(u,"DIV",{class:!0});var v=R(t);l=M(v,"BUTTON",{class:!0});var c=R(l);n=P(c,"Clear"),c.forEach(b),s=O(v),i=M(v,"BUTTON",{class:!0});var C=R(i);f=P(C,r),C.forEach(b),_=O(v),y=D(v,"svg",{width:!0,height:!0});var T=R(y);for(let N=0;N<h.length;N+=1)h[N].l(T);T.forEach(b),v.forEach(b),this.h()},h(){m(l,"class","reset svelte-6r1rvs"),m(i,"class","start svelte-6r1rvs"),m(y,"width","100%"),m(y,"height","100%"),m(t,"class","grid svelte-6r1rvs"),te(()=>e[15].call(t))},m(u,v){q(u,t,v),A(t,l),A(l,n),A(t,s),A(t,i),A(i,f),A(t,_),A(t,y);for(let c=0;c<h.length;c+=1)h[c].m(y,null);d=le(t,e[15].bind(t)),o||(E=[B(window,"wheel",e[9]),B(l,"click",e[13]),B(i,"click",function(){se(e[0]?e[11]:e[10])&&(e[0]?e[11]:e[10]).apply(this,arguments)})],o=!0)},p(u,[v]){if(e=u,v&1&&r!==(r=(e[0]?"Stop":"Start")+"")&&ne(f,r),v&370){k=Array(e[5]);let c;for(c=0;c<k.length;c+=1){const C=Q(e,k,c);h[c]?h[c].p(C,v):(h[c]=$(C),h[c].c(),h[c].m(y,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=k.length}},i:U,o:U,d(u){u&&b(t),J(h,u),d(),o=!1,re(E)}}}let G=2;function me(e,t,l){let n,s,i,r=0,f=0,_=50,y,{playing:d=!1}=t,{alivedCells:o=[]}=t;const E=ie(_);oe(e,E,a=>l(6,i=a));function k(a){const p=[];for(let g=-1;g<=1;g++)for(let w=-1;w<=1;w++){const z=g+a.x,S=w+a.y;z<0||S<0||z>n||S>s||z===a.x&&S===a.y||p.push(`${z}:${S}`)}return p}function h(a,p){const g=`${a}:${p}`;o.includes(g)?l(1,o=o.filter(w=>w!==g)):l(1,o=[...o,g])}function u(a){a.deltaY<0&&l(12,_+=2),a.deltaY>0&&_>20&&l(12,_-=2)}function v(){const a=[];for(let p=0;p<n;p++)for(let g=0;g<s;g++){const w=o.includes(`${p}:${g}`),z=k({x:p,y:g}),S=z.filter(ee=>o.includes(ee)).length;console.log({x:p,y:g,isAlive:w,neighboors:z}),w&&(S===2||S===3)?a.push(`${p}:${g}`):S===3&&a.push(`${p}:${g}`)}l(1,o=a)}function c(){l(0,d=!0),y=setInterval(v,200)}function C(){l(0,d=!1),clearInterval(y)}const T=()=>l(1,o=[]),N=(a,p)=>h(a,p);function x(){r=this.clientHeight,f=this.clientWidth,l(2,r),l(3,f)}return e.$$set=a=>{"playing"in a&&l(0,d=a.playing),"alivedCells"in a&&l(1,o=a.alivedCells)},e.$$.update=()=>{e.$$.dirty&4104&&l(5,n=Math.floor(f/_)+1),e.$$.dirty&4100&&l(4,s=Math.floor(r/_)+1),e.$$.dirty&4096&&E.set(_)},[d,o,r,f,s,n,i,E,h,u,c,C,_,T,N,x]}class ve extends Y{constructor(t){super();j(this,t,me,ge,V,{playing:0,alivedCells:1})}}function pe(e){let t,l,n;return l=new ve({}),{c(){t=L(),ae(l.$$.fragment),this.h()},l(s){ce('[data-svelte="svelte-mb0vpf"]',document.head).forEach(b),t=O(s),he(l.$$.fragment,s),this.h()},h(){document.title="Game of Life"},m(s,i){q(s,t,i),ue(l,s,i),n=!0},p:U,i(s){n||(fe(l.$$.fragment,s),n=!0)},o(s){_e(l.$$.fragment,s),n=!1},d(s){s&&b(t),de(l,s)}}}class be extends Y{constructor(t){super();j(this,t,null,pe,V,{})}}export{be as default};