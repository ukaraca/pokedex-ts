(this["webpackJsonppokedex-case-study"]=this["webpackJsonppokedex-case-study"]||[]).push([[0],{46:function(e,n,r){e.exports=r(75)},75:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),m=r(24),i=r.n(m),c=r(16),o=r(14),s=r(4),l=r(6),f=r(8),u=r.n(f),d=r(15),p=r(3),v=r(41),b=r(1),h=r(2);function g(){var e=Object(b.a)(["\n  position: relative;\n  .title {\n    background-color: unset !important;\n  }\n\n  .flex {\n    height: 100%;\n  }\n\n  article {\n    height: 250px;\n    width: 250px;\n    background-color: #fff;\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 85px !important;\n  }\n"]);return g=function(){return e},e}var x=h.a.main(g()),E=r(43),j=r.n(E),k=function(e){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e,".png")},O=function(e){var n=e.src,r=e.alt,t=e.styles;return a.a.createElement("img",{className:t,src:n,alt:r})},w=r(28),y=Object(t.createContext)(void 0),N=function(e){var n=e.children,r=Object(t.useState)([]),m=Object(p.a)(r,2),i=m[0],c=m[1];return Object(t.useEffect)((function(){var e=localStorage.getItem("list");if(e)return c(JSON.parse(e))}),[]),a.a.createElement(y.Provider,{value:{pokemons:i,addPokemon:function(e){if(i.filter((function(n){return n.id===e.id})).length<1)return localStorage.setItem("list",JSON.stringify([].concat(Object(w.a)(i),[e]))),c([].concat(Object(w.a)(i),[e]))},removePokemon:function(e){var n=i.filter((function(n){return n.id!==e}));return localStorage.setItem("list",JSON.stringify(n)),c(n)}}},n)};function S(){var e=Object(b.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  font-style: italic;\n  text-transform: capitalize;\n"]);return S=function(){return e},e}var C=h.a.section(S()),_=function(e){var n=e.data,r=Object(s.f)(),m=Object(t.useContext)(y),i=Object(t.useState)(!1),c=Object(p.a)(i,2),o=c[0],l=c[1];return a.a.createElement(j.a,{partialVisibility:!0,onChange:l},a.a.createElement(C,{className:"m1 p1"},o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{src:k(n.id),alt:n.name}),a.a.createElement("span",{className:"nes-text is-primary"},n.name),a.a.createElement("div",{className:"mb1"},a.a.createElement("span",{className:"mr3",onClick:function(){return r.push("/pokemon/".concat(n.id.toString()))}},a.a.createElement("i",{className:"nes-pointer nes-icon trophy"})),a.a.createElement("span",{onClick:function(){return null===m||void 0===m?void 0:m.addPokemon({id:n.id,name:n.name})}},a.a.createElement("i",{className:"nes-pointer nes-icon heart"}))))))};function P(){var e=Object(b.a)(["\n  width: 12rem;\n  height: 12rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n\n  .pixel {\n    width: 1rem;\n    height: 1rem;\n    box-shadow: \n    /* row 1 */ 0rem 0rem 0 -0.05rem #fff,\n      1rem 0rem 0 -0.05rem #fff, 2rem 0rem 0 -0.05rem #fff,\n      3rem 0rem 0 -0.05rem #fff, 4rem 0rem 0 -0.05rem #222,\n      5rem 0rem 0 -0.05rem #222, 6rem 0rem 0 -0.05rem #222,\n      7rem 0rem 0 -0.05rem #222, 8rem 0rem 0 -0.05rem #fff,\n      9rem 0rem 0 -0.05rem #fff, 10rem 0rem 0 -0.05rem #fff,\n      11rem 0rem 0 -0.05rem #fff, /* row 2 */ 0rem 1rem 0 -0.05rem #fff,\n      1rem 1rem 0 -0.05rem #fff, 2rem 1rem 0 -0.05rem #222,\n      3rem 1rem 0 -0.05rem #222, 4rem 1rem 0 -0.05rem #f00,\n      5rem 1rem 0 -0.05rem #f00, 6rem 1rem 0 -0.05rem #f00,\n      7rem 1rem 0 -0.05rem #f00, 8rem 1rem 0 -0.05rem #222,\n      9rem 1rem 0 -0.05rem #222, 10rem 1rem 0 -0.05rem #fff,\n      11rem 1rem 0 -0.05rem #fff, /* row 3 */ 0rem 2rem 0 -0.05rem #fff,\n      1rem 2rem 0 -0.05rem #222, 2rem 2rem 0 -0.05rem #f00,\n      3rem 2rem 0 -0.05rem #f00, 4rem 2rem 0 -0.05rem #f00,\n      5rem 2rem 0 -0.05rem #f00, 6rem 2rem 0 -0.05rem #f00,\n      7rem 2rem 0 -0.05rem #f00, 8rem 2rem 0 -0.05rem #f00,\n      9rem 2rem 0 -0.05rem #f00, 10rem 2rem 0 -0.05rem #222,\n      11rem 2rem 0 -0.05rem #fff, /* row 4 */ 0rem 3rem 0 -0.05rem #fff,\n      1rem 3rem 0 -0.05rem #222, 2rem 3rem 0 -0.05rem #f00,\n      3rem 3rem 0 -0.05rem #f00, 4rem 3rem 0 -0.05rem #f00,\n      5rem 3rem 0 -0.05rem #f00, 6rem 3rem 0 -0.05rem #f00,\n      7rem 3rem 0 -0.05rem #f00, 8rem 3rem 0 -0.05rem #f00,\n      9rem 3rem 0 -0.05rem #f00, 10rem 3rem 0 -0.05rem #222,\n      11rem 3rem 0 -0.05rem #fff, /* row 5 */ 0rem 4rem 0 -0.05rem #222,\n      1rem 4rem 0 -0.05rem #f00, 2rem 4rem 0 -0.05rem #f00,\n      3rem 4rem 0 -0.05rem #f00, 4rem 4rem 0 -0.05rem #f00,\n      5rem 4rem 0 -0.05rem #f00, 6rem 4rem 0 -0.05rem #f00,\n      7rem 4rem 0 -0.05rem #f00, 8rem 4rem 0 -0.05rem #f00,\n      9rem 4rem 0 -0.05rem #f00, 10rem 4rem 0 -0.05rem #f00,\n      11rem 4rem 0 -0.05rem #222, /* row 6 */ 0rem 5rem 0 -0.05rem #222,\n      1rem 5rem 0 -0.05rem #f00, 2rem 5rem 0 -0.05rem #f00,\n      3rem 5rem 0 -0.05rem #f00, 4rem 5rem 0 -0.05rem #f00,\n      5rem 5rem 0 -0.05rem #222, 6rem 5rem 0 -0.05rem #222,\n      7rem 5rem 0 -0.05rem #f00, 8rem 5rem 0 -0.05rem #f00,\n      9rem 5rem 0 -0.05rem #f00, 10rem 5rem 0 -0.05rem #f00,\n      11rem 5rem 0 -0.05rem #222, /* row 7 */ 0rem 6rem 0 -0.05rem #222,\n      1rem 6rem 0 -0.05rem #222, 2rem 6rem 0 -0.05rem #f00,\n      3rem 6rem 0 -0.05rem #f00, 4rem 6rem 0 -0.05rem #222,\n      5rem 6rem 0 -0.05rem #fff, 6rem 6rem 0 -0.05rem #fff,\n      7rem 6rem 0 -0.05rem #222, 8rem 6rem 0 -0.05rem #f00,\n      9rem 6rem 0 -0.05rem #f00, 10rem 6rem 0 -0.05rem #222,\n      11rem 6rem 0 -0.05rem #222, /* row 8 */ 0rem 7rem 0 -0.05rem #222,\n      1rem 7rem 0 -0.05rem #fff, 2rem 7rem 0 -0.05rem #222,\n      3rem 7rem 0 -0.05rem #222, 4rem 7rem 0 -0.05rem #222,\n      5rem 7rem 0 -0.05rem #fff, 6rem 7rem 0 -0.05rem #fff,\n      7rem 7rem 0 -0.05rem #222, 8rem 7rem 0 -0.05rem #222,\n      9rem 7rem 0 -0.05rem #222, 10rem 7rem 0 -0.05rem #fff,\n      11rem 7rem 0 -0.05rem #222, /* row 9 */ 0rem 8rem 0 -0.05rem #fff,\n      1rem 8rem 0 -0.05rem #222, 2rem 8rem 0 -0.05rem #fff,\n      3rem 8rem 0 -0.05rem #fff, 4rem 8rem 0 -0.05rem #fff,\n      5rem 8rem 0 -0.05rem #222, 6rem 8rem 0 -0.05rem #222,\n      7rem 8rem 0 -0.05rem #fff, 8rem 8rem 0 -0.05rem #fff,\n      9rem 8rem 0 -0.05rem #fff, 10rem 8rem 0 -0.05rem #222,\n      11rem 8rem 0 -0.05rem #fff, /* row 10 */ 0rem 9rem 0 -0.05rem #fff,\n      1rem 9rem 0 -0.05rem #222, 2rem 9rem 0 -0.05rem #fff,\n      3rem 9rem 0 -0.05rem #fff, 4rem 9rem 0 -0.05rem #fff,\n      5rem 9rem 0 -0.05rem #fff, 6rem 9rem 0 -0.05rem #fff,\n      7rem 9rem 0 -0.05rem #fff, 8rem 9rem 0 -0.05rem #fff,\n      9rem 9rem 0 -0.05rem #fff, 10rem 9rem 0 -0.05rem #222,\n      11rem 9rem 0 -0.05rem #fff, /* row 11 */ 0rem 10rem 0 -0.05rem #fff,\n      1rem 10rem 0 -0.05rem #fff, 2rem 10rem 0 -0.05rem #222,\n      3rem 10rem 0 -0.05rem #222, 4rem 10rem 0 -0.05rem #fff,\n      5rem 10rem 0 -0.05rem #fff, 6rem 10rem 0 -0.05rem #fff,\n      7rem 10rem 0 -0.05rem #fff, 8rem 10rem 0 -0.05rem #222,\n      9rem 10rem 0 -0.05rem #222, 10rem 10rem 0 -0.05rem #fff,\n      11rem 10rem 0 -0.05rem #fff, /* row 12 */ 0rem 11rem 0 -0.05rem #fff,\n      1rem 11rem 0 -0.05rem #fff, 2rem 11rem 0 -0.05rem #fff,\n      3rem 11rem 0 -0.05rem #fff, 4rem 11rem 0 -0.05rem #222,\n      5rem 11rem 0 -0.05rem #222, 6rem 11rem 0 -0.05rem #222,\n      7rem 11rem 0 -0.05rem #222, 8rem 11rem 0 -0.05rem #fff,\n      9rem 11rem 0 -0.05rem #fff, 10rem 11rem 0 -0.05rem #fff,\n      11rem 11rem 0 -0.05rem #fff;\n  }\n"]);return P=function(){return e},e}var z=h.a.div(P()),I=function(){return a.a.createElement(z,null,a.a.createElement("div",{className:"pixel"}))};function M(){var e=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 75px;\n  }\n"]);return M=function(){return e},e}var B=h.a.div(M()),J=function(e){var n=e.value,r=e.onSearch;return a.a.createElement(B,null,a.a.createElement("div",{className:"nes-field"},a.a.createElement("input",{list:"pokemon-list",value:n,onChange:function(e){return r(e.target.value)},type:"text",className:"nes-input",placeholder:"Search Pok\xe9mons..."})))},T=r(27),W=r.n(T),A=W.a.CancelToken,F=W.a.create({baseURL:"https://pokeapi.co/api/v2/",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}});F.interceptors.request.use((function(e){return e.cancelToken=new A((function(e){e})),e}),(function(e){return Promise.reject(e)}));var U=function(e){var n=e.split("/pokemon/")[1].replace("/","");return Number(n)},H=function(e){for(var n=[e[0]],r=0;r<e.length-1;r++){var t=e[r],a=e[r+1];t.slice(0,10)!==a.slice(0,10)&&n.push(a)}return n},L=function(){var e=Object(d.a)(u.a.mark((function e(n){var r,t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("pokemon?limit=".concat(n));case 2:return r=e.sent,t=r.data,a=t.results.map((function(e){var n=U(e.url);return Object(l.a)(Object(l.a)({},e),{},{id:n})})),e.abrupt("return",Object(l.a)(Object(l.a)({},t),{},{results:a}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(u.a.mark((function e(n){var r,t,a,m,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.next.split("v2"),e.next=3,F.get(r[1]);case 3:return t=e.sent,a=t.data,i=(m=a).results.map((function(e){var n=U(e.url);return Object(l.a)(Object(l.a)({},e),{},{id:n})})),e.abrupt("return",Object(l.a)(Object(l.a)({},m),{},{results:n.results.concat(i)}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),q=r(45);function R(){var e=Object(b.a)(["\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 75px;\n    top: 60px;\n  }\n"]);return R=function(){return e},e}var $=h.a.div(R()),D=function(){var e=Object(s.f)(),n=Object(t.useContext)(y),r=Object(t.useState)(!1),m=Object(p.a)(r,2),i=m[0],c=m[1];Object(t.useEffect)((function(){(null===n||void 0===n?void 0:n.pokemons.length)&&(c(!0),setTimeout((function(){c(!1)}),500))}),[null===n||void 0===n?void 0:n.pokemons]);return a.a.createElement($,null,a.a.createElement("div",{className:"nes-select ".concat(i?"is-success":"")},a.a.createElement("select",{onChange:function(n){return"view_all"===(r=n.target.value)?e.push("/list"):r?e.push("/pokemon/".concat(r)):void 0;var r}},a.a.createElement("option",null,"My Pok\xe9mons"),null===n||void 0===n?void 0:n.pokemons.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.name)})),(null===n||void 0===n?void 0:n.pokemons.length)?a.a.createElement("option",{value:"view_all"},"View All"):null)))},G={count:0,next:"",previous:"",results:[{name:"",url:"",id:0}]},K=function(){var e=Object(s.f)(),n=Object(t.useState)(!0),r=Object(p.a)(n,2),m=r[0],i=r[1],c=Object(t.useState)(G),o=Object(p.a)(c,2),f=o[0],b=o[1],h=Object(t.useState)(""),g=Object(p.a)(h,2),E=g[0],j=g[1],k=Object(t.useState)(G),O=Object(p.a)(k,2),w=O[0],y=O[1],N=function(){var e=Object(d.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(n);case 2:r=e.sent,i(!1),y(r),b(r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(f);case 2:n=e.sent,b(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){if(!E)return b(w);var e=w.results.filter((function(e){return Object(q.startsWith)(e.name.toUpperCase(),E.toUpperCase())}));b(Object(l.a)(Object(l.a)({},w),{},{results:e}))}),[E,w,e]),Object(t.useEffect)((function(){var e,n,r,t,a=(null!==(e=null===(n=document.getElementById("root"))||void 0===n?void 0:n.clientHeight)&&void 0!==e?e:150)*(null!==(r=null===(t=document.getElementById("root"))||void 0===t?void 0:t.clientWidth)&&void 0!==r?r:200),m=Math.floor(a/3e4);N(m)}),[]),m?a.a.createElement(I,null):a.a.createElement("div",{className:"container"},a.a.createElement(x,{className:"nes-container with-title is-rounded"},a.a.createElement(J,{value:E,onSearch:j}),a.a.createElement(D,null),a.a.createElement(v.a,{style:{overflow:"hidden",marginTop:60},dataLength:f.results.length,next:S,hasMore:!!f.next,loader:null},a.a.createElement("div",{className:"flex flex-wrap justify-center"},f.results.map((function(e){return a.a.createElement("article",{className:"col col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nes-container is-rounded",key:e.id},a.a.createElement(_,{data:e}))}))))))};function Q(){var e=Object(b.a)(["\n  * {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n  #root {\n    min-height: 100vh;\n  }\n  html {\n    font-family: 'Press Start 2P', cursive;\n    box-sizing: border-box;\n    font-size: 15px;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    background: transparent\n      url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/50859/bit-tile-blue.gif)\n      repeat-x 50% 0;\n    background-repeat: repeat;\n    animation: infinite-shift-left 5000s linear;\n  }\n  .container {\n    padding-right: 1rem;\n    padding-left: 1rem;\n    margin: 2rem auto 2rem auto;\n    overflow: overlay;\n  }\n  img {\n    image-rendering: pixelated;\n  }\n  .pokemon-sprite {\n    width: 100%;\n    display: flex;\n    image-rendering: pixelated;\n    border: inset #9aa28b 3px;\n    border-radius: 5px;\n    margin: 10px 0;\n    box-sizing: border-box;\n    background: linear-gradient(\n      15deg,\n      #cad5b5 64%,\n      #dde2d4 70%,\n      #dde2d4 81%,\n      #fff 86%,\n      #dde2d4 89%,\n      #dde2d4 100%\n    );\n  }\n\n  .pokemon-description {\n    font-size: 18px;\n    letter-spacing: 0;\n    min-height: 115px;\n    box-sizing: border-box;\n    flex: 1;\n  }\n  .screen {\n    background: linear-gradient(\n      14deg,\n      rgb(165, 205, 83) 60%,\n      rgb(193, 217, 144) 65%\n    );\n    padding: 5px;\n  }\n\n  .pokemon-badge {\n    width: 300px;\n  }\n\n  @media (min-width: 768px) {\n    .container {\n      width: 750px;\n    }\n  }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px;\n    }\n  }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px;\n    }\n  }\n  @keyframes infinite-shift-left {\n    0% {\n      background-position: 50000px;\n    }\n    100% {\n      background-position: 0;\n    }\n  }\n"]);return Q=function(){return e},e}var X=Object(c.c)(Q());function Y(){var e=Object(b.a)(["\n  min-height: 100vh;\n\n  .nes-container {\n    width: 75%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .title {\n    text-transform: uppercase;\n  }\n  .inner-container {\n    width: 100%;\n    position: relative;\n    display: flex;\n\n    justify-content: space-between;\n  }\n"]);return Y=function(){return e},e}var Z=h.a.section(Y()),ee=function(e){var n=Object(t.useState)(!0),r=Object(p.a)(n,2),a=r[0],m=r[1],i=Object(t.useState)(!1),c=Object(p.a)(i,2),o=c[0],s=c[1],l=Object(t.useState)(),f=Object(p.a)(l,2),v=f[0],b=f[1],h=Object(t.useState)(),g=Object(p.a)(h,2),x=g[0],E=g[1],j=Object(t.useState)([]),k=Object(p.a)(j,2),O=k[0],w=k[1],y=Object(t.useState)([]),N=Object(p.a)(y,2),S=N[0],C=N[1],_=Object(t.useCallback)(Object(d.a)(u.a.mark((function n(){var r,t,a,i,c,o,l,f,d,p,v,h,g,x,j,k,O,y,N,S;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,F.get("pokemon/".concat(e));case 4:return r=n.sent,t=r.data,a=t.species.url,n.next=9,F.get(a);case 9:return i=n.sent,c=i.data,o=c.flavor_text_entries.filter((function(e){return"en"===e.language.name})).map((function(e){return e.flavor_text})),l=H(o),f=c.evolution_chain.url,n.next=16,F.get(f);case 16:return d=n.sent,p=d.data,v=[],h=p.chain,n.next=22,F.get("pokemon/".concat(h.species.name,"/"));case 22:if(j=n.sent,k=j.data,v.push(k),!(g=h.evolves_to[0])){n.next=33;break}return n.next=29,F.get("pokemon/".concat(g.species.name,"/"));case 29:O=n.sent,y=O.data,v.push(y),x=g.evolves_to[0];case 33:if(!x){n.next=39;break}return n.next=36,F.get("pokemon/".concat(x.species.name,"/"));case 36:N=n.sent,S=N.data,v.push(S);case 39:b(t),w(l),C(v),E(c),m(!1),n.next=51;break;case 46:n.prev=46,n.t0=n.catch(0),s(!0),console.error(n.t0),m(!1);case 51:case"end":return n.stop()}}),n,null,[[0,46]])}))),[e]);return Object(t.useEffect)((function(){e&&_()}),[e,_]),{loading:a,data:v,species:x,evolutions:S,descriptions:O,error:o}},ne=r(19);function re(){var e=Object(b.a)(["\n  .nes-container {\n    margin: 0;\n    width: 90%;\n  }\n  .buttons {\n    width: 90%;\n  }\n  .screen {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  p {\n    height: 200px;\n    overflow-y: auto;\n  }\n"]);return re=function(){return e},e}var te=h.a.div(re());function ae(){var e=Object(b.a)(["\n  .nes-container::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #f5f5f5;\n  }\n\n  .nes-container::-webkit-scrollbar {\n    width: 10px;\n    background-color: #f5f5f5;\n  }\n\n  .nes-container::-webkit-scrollbar-thumb {\n    background-color: #0ae;\n\n    background-image: -webkit-gradient(\n      linear,\n      0 0,\n      0 100%,\n      color-stop(0.5, rgba(255, 255, 255, 0.2)),\n      color-stop(0.5, transparent),\n      to(transparent)\n    );\n  }\n"]);return ae=function(){return e},e}var me=h.a.div(ae()),ie=function(e){var n=e.descriptions,r=Object(t.useState)(0),m=Object(p.a)(r,2),i=m[0],c=m[1],o=function(e){return e>n.length-1?c(0):e<0?c(n.length-1):void c(e)};return a.a.createElement(me,null,a.a.createElement("div",{className:"nes-container is-rounded screen flex items-center content-stretch"},a.a.createElement("span",{onClick:function(){return o(i-1)}},a.a.createElement("i",{className:"snes-logo"})),a.a.createElement("p",{className:"p2"},n[i]),a.a.createElement("span",{onClick:function(){return o(i+1)}},a.a.createElement("i",{className:"snes-jp-logo"}))))},ce=function(e){var n=e.data,r=e.descriptions,m=Object(t.useState)({front:!0,female:!1,shiny:!1}),i=Object(p.a)(m,2),c=i[0],o=i[1],s=Object(t.useState)(""),f=Object(p.a)(s,2),u=f[0],d=f[1];Object(t.useEffect)((function(){if(n.sprites){var e=v(c);d(n.sprites[e])}}),[c,n.sprites]);var v=function(e){var n=e.front?"front":"back",r=e.shiny?"_shiny":"_default",t=e.female?"_female":"";return"_female"===t&&"_default"===r?n+t:n+r+t},b=function(e){var r=Object(l.a)(Object(l.a)({},c),{},Object(ne.a)({},e,!c[e])),t=v(r);if(!n.sprites||n.sprites[t])return o(Object(l.a)(Object(l.a)({},c),{},Object(ne.a)({},e,!c[e])))};return a.a.createElement(te,{className:"col-12 lg-col-6 flex flex-column justify-between"},a.a.createElement("div",{className:"nes-container is-rounded"},u&&a.a.createElement(O,{src:u,alt:n.name,styles:"pokemon-sprite"})),a.a.createElement("div",{className:"flex buttons justify-around mt2 mb2"},a.a.createElement("button",{type:"button",className:"nes-btn is-primary",onClick:function(){return b("female")}},c.female?"Male":"Female"),a.a.createElement("button",{type:"button",className:"nes-btn is-primary",onClick:function(){return b("shiny")}},"Shiny"),a.a.createElement("button",{type:"button",className:"nes-btn is-primary",onClick:function(){return b("front")}},"Back")),a.a.createElement(ie,{descriptions:r}))};function oe(){var e=Object(b.a)(["\n  font-size: 12px;\n  .nes-container {\n    margin: 0;\n    width: 100%;\n  }\n  img {\n    height: 120px;\n    width: 120px;\n    margin: 3px 0;\n  }\n\n  .flex {\n    justify-content: space-between;\n    text-align: center;\n  }\n"]);return oe=function(){return e},e}var se=h.a.div(oe()),le=function(e){var n=e.evolutions,r=Object(s.f)();return a.a.createElement(se,{className:"mt2"},a.a.createElement("div",{className:"nes-container is-rounded flex flex-wrap"},n.map((function(e,n){return a.a.createElement("div",{key:n,className:"flex flex-column nes-pointer",onClick:function(){return r.push("/pokemon/".concat(e.id))}},a.a.createElement(O,{src:e.sprites.front_default||" ",styles:"pokemon-sprite",alt:e.name}),a.a.createElement("div",null,e.name))}))))};function fe(){var e=Object(b.a)(["\n  margin-top: 2rem;\n  .nes-container {\n    width: 100%;\n  }\n  .move-screen {\n    margin: 3px;\n    padding: 10px 20px;\n    flex: 1;\n    height: 100%;\n  }\n\n  .move-controls {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding: 0 10px 0 7px;\n  }\n\n  p {\n    height: unset;\n  }\n"]);return fe=function(){return e},e}var ue=h.a.div(fe()),de=function(e){var n=e.moves,r=Object(t.useState)(0),m=Object(p.a)(r,2),i=m[0],c=m[1],o=function(e){return e>n.length-4?c(0):e<0?c(n.length-4):void c(e)};return a.a.createElement(ue,null,a.a.createElement("div",{className:"nes-container is-rounded flex"},a.a.createElement("div",{className:"nes-container is-rounded screen move-screen"},a.a.createElement("p",null,n[i].move.name),a.a.createElement("p",null,n[i+1].move.name),a.a.createElement("p",null,n[i+2].move.name),a.a.createElement("p",null,n[i+3].move.name)),a.a.createElement("div",{className:"move-controls"},a.a.createElement("span",{onClick:function(){return o(i-4)}},a.a.createElement("i",{className:"snes-logo"})),a.a.createElement("span",{onClick:function(){return o(i+4)}},a.a.createElement("i",{className:"snes-jp-logo"})))))};function pe(){var e=Object(b.a)(["\n  .nes-container {\n    width: 100%;\n  }\n  .progress-div {\n    display: flex;\n  }\n\n  .nes-progress {\n    height: 1rem;\n  }\n"]);return pe=function(){return e},e}var ve=h.a.div(pe()),be=function(e){var n=e.stats;return a.a.createElement(ve,null,a.a.createElement("div",{className:"nes-container is-rounded"},n.map((function(e,n){return a.a.createElement("div",{key:n},a.a.createElement("label",{htmlFor:e.stat.name},e.stat.name,":",e.base_stat),a.a.createElement("progress",{id:e.stat.name,className:"nes-progress",value:e.base_stat,max:"100"}))}))))};function he(){var e=Object(b.a)(["\n  .nes-container {\n    margin: 0;\n  }\n\n  .screen {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  p {\n    height: 200px;\n    overflow-y: auto;\n  }\n"]);return he=function(){return e},e}var ge=h.a.div(he()),xe=["is-dark","is-success","is-warning","is-error"],Ee=function(e){var n=e.badges;return a.a.createElement("div",{className:"pokemon-type mt2 flex flex-wrap"},n.map((function(e,n){var r,t;return a.a.createElement("div",{className:"nes-badge",key:n},a.a.createElement("span",{className:(t=xe,t[Math.floor(Math.random()*t.length)])},null===(r=e.type)||void 0===r?void 0:r.name))})))},je=function(e){var n=e.evolutions,r=e.pokemon;return a.a.createElement(ge,{className:"col-12 lg-col-6"},a.a.createElement(be,{stats:r.stats}),a.a.createElement(Ee,{badges:r.types}),a.a.createElement(le,{evolutions:n}),a.a.createElement(de,{moves:r.moves}))},ke=function(){var e=Object(s.f)(),n=Object(t.useContext)(y),r=Object(s.g)().id,m=ee(r),i=m.data,c=m.loading,o=(m.species,m.evolutions),l=m.descriptions,f=m.error;return c||!i?a.a.createElement(I,null):f?a.a.createElement("p",null,"something went wrong!"):a.a.createElement(Z,{className:"flex items-center"},a.a.createElement("div",{className:"nes-container is-rounded with-title"},a.a.createElement(D,null),a.a.createElement("div",{className:"flex flex-wrap items-center"},a.a.createElement("div",{className:"mr2 nes-pointer",onClick:function(){return e.push("/")}},"Home"),a.a.createElement("div",{className:"nes-badge is-splited pokemon-badge"},a.a.createElement("span",{className:"is-dark",style:{width:"75%"}},null===i||void 0===i?void 0:i.name),a.a.createElement("span",{className:"is-warning",style:{width:"25%"}},"#",i.id)),a.a.createElement("div",{className:"ml2"},a.a.createElement("i",{className:"nes-icon heart nes-pointer",onClick:function(){return null===n||void 0===n?void 0:n.addPokemon({id:i.id,name:i.name})}})),a.a.createElement("div",{className:"ml2"},a.a.createElement("i",{className:"nes-icon is-transparent heart nes-pointer",onClick:function(){return null===n||void 0===n?void 0:n.removePokemon(i.id)}}))),a.a.createElement("div",{className:"inner-container nes-container flex-wrap is-rounded"},a.a.createElement(ce,{data:i,descriptions:l}),a.a.createElement(je,{evolutions:o,pokemon:i}))))};function Oe(){var e=Object(b.a)(["\n  .nes-container {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);return Oe=function(){return e},e}var we=h.a.div(Oe()),ye=function(e){var n=e.pokemon,r=Object(t.useContext)(y);return a.a.createElement(we,null,a.a.createElement("div",{className:"nes-container is-rounded flex justify-between items-center"},a.a.createElement("div",null,a.a.createElement(O,{src:k(n.id),alt:n.name,styles:"screen"})),a.a.createElement("div",null,a.a.createElement("p",null,n.name)),a.a.createElement("div",null,a.a.createElement("i",{className:"nes-icon close nes-pointer",onClick:function(){return null===r||void 0===r?void 0:r.removePokemon(n.id)}}))))};function Ne(){var e=Object(b.a)(["\n  min-height: 100vh;\n\n  .nes-container {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  @media (max-width: 768px) {\n    .nes-container {\n      width: 80%;\n    }\n  }\n"]);return Ne=function(){return e},e}var Se=h.a.div(Ne()),Ce=function(){var e=Object(s.f)(),n=Object(t.useContext)(y);return Object(t.useEffect)((function(){(null===n||void 0===n?void 0:n.pokemons.length)||e.push("/")}),[n,e]),a.a.createElement(Se,{className:"flex items-center"},a.a.createElement("div",{className:"nes-container is-centered with-title is-rounded"},a.a.createElement("p",{className:"title"},"My Pok\xe9mons"),null===n||void 0===n?void 0:n.pokemons.map((function(e){return a.a.createElement(ye,{key:e.id,pokemon:{id:e.id,name:e.name}})}))))},_e=function(){return a.a.createElement(N,null,a.a.createElement(o.a,{basename:"pokedex-ts/"},a.a.createElement(c.a,{styles:X}),a.a.createElement(s.c,null,a.a.createElement(s.a,{component:K,path:"/",exact:!0}),a.a.createElement(s.a,{component:ke,path:"/pokemon/:id",exact:!0}),a.a.createElement(s.a,{component:Ce,path:"/list",exact:!0}))))};r(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.39475e47.chunk.js.map