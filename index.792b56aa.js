import{r as V,o as j,E as G,w as q,a as T,b as d,c as m,d as f,t as g,n as M,e as B,f as P,g as C,T as $,h as O,u as p,F as w,i as k,j as A,k as K,m as S,l as x,p as H}from"./vendor.db607760.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}};J();const Y="modulepreload",F={},W="/rubiks-cubicle/",X=function(t,i){return!i||i.length===0?t():Promise.all(i.map(s=>{if(s=`${W}${s}`,s in F)return;F[s]=!0;const e=s.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":Y,e||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),e)return new Promise((l,h)=>{o.addEventListener("load",l),o.addEventListener("error",h)})})).then(()=>t())};const Q={props:{init:Array,moves:Array},setup(a){const t=a;let i=null,s=null;const e=V(null);return j(()=>{i=new G(e.value,!0),X(()=>import("./scene.7b99a820.js").then(function(n){return n.X}),["scene.7b99a820.js","vendor.db607760.js"]).then(async({createScene:n,init:o})=>{const l=n(i),[h,r]=await o;s=r(l);for(const _ of[...t.init].reverse())await s(_.letter,_.mod?_.mod==="\u2032"?1:2:-1,0);h(l).attachControl(e.value,!0),i.runRenderLoop(()=>l.render())})}),q(()=>t.moves,async(n,o)=>{if(!!s){if(n.length)for(const l of n)await s(l.letter,l.mod?l.mod==="\u2032"?-1:2:1,16);else if(o.length)for(const l of[...o].reverse())await s(l.letter,l.mod?l.mod==="\u2032"?1:2:-1,5)}}),T(()=>i==null?void 0:i.dispose()),(n,o)=>(d(),m("canvas",{ref_key:"canvasEl",ref:e},null,512))}};const Z={props:{index:Number,state:Number,letter:String,mod:String},setup(a){const t=a,i=`${t.index*100}ms`,s=`${t.index*300}ms`,e=["","absent","present","gmod","correct"];return(n,o)=>(d(),m("div",{class:B(["tile",a.letter&&"filled",a.state&&"revealed"])},[f("div",{class:"front",style:M({transitionDelay:s})},g(a.letter)+g(a.mod),5),f("div",{class:B(["back",e[a.state]]),style:M({animationDelay:i,transitionDelay:s})},g(a.letter)+g(a.mod),7)],2))}},ee=new Date("February 14, 2022 00:00:00").valueOf(),te=2**32,ne=a=>()=>{let t=a+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/te},se=["","\u2032","\xB2"],I=[..."FBUDLR"],re=[I,["Enter","\u2032","2","Backspace"]],R=(a,t)=>Array.from({length:a},t),b=a=>new Promise(t=>setTimeout(t,a)),oe=Math.floor((Date.now()-ee)/864e5),ae=a=>{const t=parseInt(a),i=isNaN(t)?Math.random:ne(t),s=h=>Math.floor(i()*h),e=(h,r)=>{let _=h;for(;_===h;)_=s(r);return _},n=[];let o,l=null;for(o=0;o<5;++o)l=e(l,6),n.push({letter:I[l],mod:se[s(3)]});return n},ie=a=>{const t=()=>JSON.parse(JSON.stringify(a));return i=>{const s=t();for(const[e,n]of i.entries())s[e].letter===n.letter&&s[e].mod===n.mod&&(n.state=4,s[e]={});for(const[e,n]of i.entries())n.state||s[e].letter===n.letter&&(n.state=3,s[e].letter="");for(const e of i){if(e.state)continue;const n=s.find(o=>o.letter===e.letter);n?(e.state=2,n.letter=""):e.state=1}return i.every(e=>e.state===4)}};const le={key:0,class:"message"},ce={key:0,id:"help"},ue=x(" Guess 5 moves to solve the cube. "),de=f("p",null,"Moves are represented in Singmaster Notation where each letter represents a face.",-1),fe=f("div",{style:{"text-align":"center"}},"(U)p, (D)own, (F)ront, (B)ack, (L)eft, (R)ight",-1),me=f("p",null,"For simplicity, F is Blue and R is Orange for this cube.",-1),he=f("p",null," A given letter means the face should be turned clockwise 90\xB0 (while facing it). A prime mark (\u2032) after the letter means it should be turned anti-clockwise 90\xB0, and a square (\xB2) means it should be turned 180\xB0 ",-1),pe=x(" Colours: "),_e=f("ul",null,[f("li",null,"Green: the move is in the correct spot"),f("li",null,"Blue: the face is correct but wrong amount of turning"),f("li",null,"Yellow: the face is used but in the wrong spot"),f("li",null,"Otherwise, the face is not used at all")],-1),ve=x(" Have fun! "),ye=[ue,de,fe,me,he,pe,_e,ve],we={id:"board"},ge={id:"keyboard"},ke={class:"krow"},be=["onClick"],xe={setup(a){let t=!0;const i={width:24,height:24},s=u=>u.length>1&&{class:"big","aria-label":u},e=["Genius","Magnificent","Impressive","Splendid","Great","Phew"],n="m0 0l5 7c1 1 1 1 2 1h14c1 0 2-1 2-2v-12c0-1-1-2-2-2h-14c-1 0-1 0-2 1zM9 4l8-8M9-4l8 8",o=ae(window.location.search.slice(1)||oe),l=ie(o),h=P(R(6,()=>R(5,()=>({letter:"",mod:"",state:0})))),r=P({cur:0,shake:-1,done:!1,help:!1,message:"",show:[]}),_=u=>{for(const c of[...h[r.cur]].reverse())if(!!c.letter){u?c.mod=u:(c.mod="",c.letter="");break}},D=async(u="")=>{r.message=u,r.shake=r.cur,await b(1200),t=!0,r.shake=-1,r.message=""},U=async()=>{t=!1;const u=h[r.cur];if(!u.every(c=>c.letter))return await D();if(u.slice(1).some((c,v)=>c.letter===u[v].letter))return await D("Adjacent letters should be different");r.show=u,l(u)?(await b(1e3),r.message=e[r.cur],r.done=!0):r.cur<5?(await b(2500),++r.cur,r.show=[],t=!0):(await b(1500),r.message=o.map(c=>`${c.letter}${c.mod}`).join(" "))},E=u=>{if(!t)return;const c=u.key||u;switch(c){case"Enter":U();break;case"Backspace":_();break;case"2":_("\xB2");break;case"`":case"\u2032":case"'":_("\u2032");break;default:if(!/^[bdflruBDFLRU]$/.test(c))return;for(const v of h[r.cur])if(!v.letter){v.letter=c.toUpperCase();return}}};return window.addEventListener("keyup",E),T(()=>window.removeEventListener("keyup",E)),(u,c)=>(d(),m(w,null,[C($,null,{default:O(()=>[p(r).message?(d(),m("div",le,g(p(r).message),1)):A("",!0)]),_:1}),C(Q,{init:p(o),moves:p(r).show},null,8,["init","moves"]),f("button",{id:"info","aria-label":"help",onClick:c[0]||(c[0]=v=>p(r).help=!p(r).help)},"?"),C($,null,{default:O(()=>[p(r).help?(d(),m("div",ce,ye)):A("",!0)]),_:1}),f("div",we,[(d(!0),m(w,null,k(p(h),(v,L)=>(d(),m("div",{class:B(["row",p(r).shake===L&&"shake",p(r).done&&p(r).cur===L&&"jump"])},[(d(!0),m(w,null,k(v,(y,N)=>(d(),K(Z,S(y,{index:N}),null,16,["index"]))),256))],2))),256))]),f("div",ge,[(d(!0),m(w,null,k(p(re),(v,L)=>(d(),m("div",ke,[(d(!0),m(w,null,k(v,y=>(d(),m("button",S(s(y),{onClick:N=>E(y)}),[y!=="Backspace"?(d(),m(w,{key:0},[x(g(y),1)],64)):(d(),m("svg",S({key:1},i,{viewBox:"0 -12 24 24"}),[f("path",{d:n})],16))],16,be))),256))]))),256))])],64))}},z=()=>document.body.style.setProperty("--vh",window.innerHeight+"px");z();window.addEventListener("resize",z);H(xe).mount("#app");export{X as _};
//# sourceMappingURL=index.792b56aa.js.map