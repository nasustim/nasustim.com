(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(307)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),i=n(1003),s=n(7795),a=n(4465),u=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function _(e,t,n,o){if(i.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function v(e){return"string"==typeof e?e:s.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let n,o;let{href:s,as:h,children:m,prefetch:x,passHref:y,replace:j,shallow:b,scroll:g,locale:w,onClick:k,onMouseEnter:E,onTouchStart:C,legacyBehavior:M=!0!==Boolean(!0)}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,M&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let S=!1!==x,O=l.default.useContext(u.RouterContext),N=l.default.useContext(c.AppRouterContext),I=null!=O?O:N,T=!O,{href:L,as:R}=l.default.useMemo(()=>{if(!O){let e=v(s);return{href:e,as:h?v(h):e}}let[t,n]=i.resolveHref(O,s,!0);return{href:t,as:h?i.resolveHref(O,h):n||t}},[O,s,h]),B=l.default.useRef(L),K=l.default.useRef(R);M&&(o=l.default.Children.only(n));let q=M?o&&"object"==typeof o&&o.ref:t,[A,D,H]=f.useIntersection({rootMargin:"200px"}),U=l.default.useCallback(e=>{(K.current!==R||B.current!==L)&&(H(),K.current=R,B.current=L),A(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[R,q,L,H,A]);l.default.useEffect(()=>{I&&D&&S&&_(I,L,R,{locale:w})},[R,L,D,w,S,null==O?void 0:O.locale,I]);let Z={ref:U,onClick(e){M||"function"!=typeof k||k(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,o,r,s,a,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:s,locale:u,scroll:a}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,I,L,R,j,b,g,w,T,S)},onMouseEnter(e){M||"function"!=typeof E||E(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&(S||!T)&&_(I,L,R,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof C||C(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&(S||!T)&&_(I,L,R,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||y||"a"===o.type&&!("href"in o.props)){let z=void 0!==w?w:null==O?void 0:O.locale,X=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(R,z,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);Z.href=X||p.addBasePath(a.addLocale(R,z,null==O?void 0:O.defaultLocale))}return M?l.default.cloneElement(o,Z):l.default.createElement("a",Object.assign({},P,Z),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:a}=e,u=a||!l,[c,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!u&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=s.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=i.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},s.push(n),i.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),i.delete(o);let t=s.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,u,n,t,c]);let h=o.useCallback(()=>{f(!1)},[]);return[p,c,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,i=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2870:function(e,t,n){"use strict";var o=n(5893);n(7294);var r=n(1582),l=n.n(r);let i=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:l().root,children:(0,o.jsx)("div",{className:l().inner,children:t})})};t.Z=i},307:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return O},default:function(){return N}});var o=n(5893),r=n(7294),l=n(2870),i=n(5676),s=n.n(i);let a=e=>{let{children:t}=e;return(0,o.jsx)("section",{className:s().root,children:t})};var u=n(8013),c=n.n(u);let f=e=>{let{children:t}=e;return(0,o.jsx)("ul",{className:c().root,children:t})};var d=n(1657),p=n.n(d);let h=e=>{let{children:t}=e;return(0,o.jsx)("p",{className:p().root,children:t})},_=e=>{let{children:t}=e;return(0,o.jsx)("li",{children:(0,o.jsx)(h,{children:t})})};var v=n(3646),m=n.n(v);let x=e=>{let{children:t}=e;return(0,o.jsx)("h1",{className:m().root,children:t})};var y=n(1032),j=n.n(y);let b=e=>{let{children:t}=e;return(0,o.jsx)("h2",{className:j().root,children:t})};var g=n(9477);let w=e=>{let{width:t,height:n,src:l}=e,i="image-3d";return(0,r.useEffect)(()=>{var e;document.querySelectorAll("#".concat(i," > *")).forEach(e=>{var t;null===(t=document.getElementById(i))||void 0===t||t.removeChild(e)});let o=new g.xsS,r=new g.CP7({alpha:!0,antialias:!0});r.setSize(t,n),r.setPixelRatio(1),null===(e=document.getElementById(i))||void 0===e||e.appendChild(r.domElement);let s=new g.cPb(50,1,1,1e3);s.position.set(0,0,100);let a=new g.Mig(16777215);o.add(a);let u=new g.dpR().load(l,e=>{let t=new g._12(1,1,64,64),n=new g.vBJ({map:u}),r=new g.Kj0(t,n);r.scale.set(95,95,1),o.add(r)});!function e(){requestAnimationFrame(e),r.render(o,s)}()},[]),(0,o.jsx)("div",{style:{width:"".concat(t,"px"),height:"".concat(n,"px")},id:i})};var k=n(1664),E=n.n(k),C=n(3599),M=n.n(C);let P=e=>(0,o.jsx)(E(),{href:e.to,className:M().root,target:e.isInternal?"":"_blank",children:e.children}),S=e=>(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(x,{children:"nasustim.com"}),(0,o.jsx)(w,{src:"/static/profile_400x400.jpg",width:150,height:150}),(0,o.jsx)(a,{children:(0,o.jsxs)(h,{children:["岐阜県岐阜市出身、都内在住のソフトウェアエンジニア。現在は",(0,o.jsx)(P,{to:"https://mixi.co.jp/",children:"株式会社MIXI"}),"で美容サロン予約サービスのサーバサイド, インフラ開発を担当している。"]})}),(0,o.jsxs)(a,{children:[(0,o.jsx)(b,{children:"Links"}),(0,o.jsxs)(f,{children:[(0,o.jsxs)(_,{children:["Keybase: ",(0,o.jsx)(P,{to:"https://keybase.io/nasustim",children:"https://keybase.io/nasustim"})]}),(0,o.jsxs)(_,{children:["GitHub: ",(0,o.jsx)(P,{to:"https://github.com/nasustim",children:"https://github.com/nasustim"})]}),(0,o.jsxs)(_,{children:["Facebook: ",(0,o.jsx)(P,{to:"https://www.facebook.com/mitsuhibino",children:"https://www.facebook.com/mitsuhibino"})]})]})]})]});var O=!0,N=S},3599:function(e){e.exports={root:"Link_root__5up7S"}},3646:function(e){e.exports={root:"PageTitle_root___hYQ_"}},1032:function(e){e.exports={root:"SectionTitle_root__Oqkg4"}},1657:function(e){e.exports={root:"Text_root__O4Va3"}},1582:function(e){e.exports={root:"layout_root__QiSSO",inner:"layout_inner__lgzws"}},8013:function(e){e.exports={root:"ul_root__5jWPt"}},5676:function(e){e.exports={root:"Section_root__wBnIf"}},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[737,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);