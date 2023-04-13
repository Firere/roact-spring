"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||n;return r?i.createElement(h,l(l({ref:t},s),{},{components:r})):i.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6437:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=r(7462),a=(r(7294),r(3905));const n={},l="Changelog",o={type:"mdx",permalink:"/roact-spring/CHANGELOG",source:"@site/pages/CHANGELOG.md",title:"Changelog",description:"Unreleased",frontMatter:{}},p=[{value:"Unreleased",id:"unreleased",level:2},{value:"1.1.3-ts.1 (Apr 13, 2023)",id:"113-ts1-apr-13-2023",level:2},{value:"1.1.3 (Jan 20, 2023)",id:"113-jan-20-2023",level:2},{value:"1.1.2 (Nov 29, 2022)",id:"112-nov-29-2022",level:2},{value:"1.1.1 (Nov 5, 2022)",id:"111-nov-5-2022",level:2},{value:"1.0.1 (May 26, 2022)",id:"101-may-26-2022",level:2},{value:"1.0.0 (April 21, 2022)",id:"100-april-21-2022",level:2},{value:"0.3.1 (March 29, 2022)",id:"031-march-29-2022",level:2},{value:"0.3.0 (March 29, 2022)",id:"030-march-29-2022",level:2},{value:"0.2.3 (Feburary 20, 2022)",id:"023-feburary-20-2022",level:2},{value:"0.2.2 (Feburary 19, 2022)",id:"022-feburary-19-2022",level:2},{value:"0.2.1 (Feburary 17, 2022)",id:"021-feburary-17-2022",level:2},{value:"0.2.0 (Feburary 11, 2022)",id:"020-feburary-11-2022",level:2},{value:"0.1.1 (February 3, 2022)",id:"011-february-3-2022",level:2}],u={toc:p},s="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h2",{id:"unreleased"},"Unreleased"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed luau typings (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/42"},"#42"),")")),(0,a.kt)("h2",{id:"113-ts1-apr-13-2023"},"1.1.3-ts.1 (Apr 13, 2023)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"isRoact17")," pointing to one too many ",(0,a.kt)("inlineCode",{parentName:"li"},"Parents"))),(0,a.kt)("h2",{id:"113-jan-20-2023"},"1.1.3 (Jan 20, 2023)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed roblox-ts typings (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Xuleos"},"Xuleos")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/29"},"#29"),")"),(0,a.kt)("li",{parentName:"ul"},"Fixed roblox-ts false positives when running plugins on roblox-ts games (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sasial-dev"},"sasial-dev")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/40"},"#40"),")")),(0,a.kt)("h2",{id:"112-nov-29-2022"},"1.1.2 (Nov 29, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"reset")," prop not properly resetting velocity, previously yielding really fast springs in certain cases (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/36"},"#36"),")")),(0,a.kt)("h2",{id:"111-nov-5-2022"},"1.1.1 (Nov 5, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," when passing reset = true without using from prop (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/28"},"#28"),")"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," when passing from prop without including all keys (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/28"},"#28"),")"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"useTrail")," not returning promises on api.start (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rwilliaise"},"@rwilliaise")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/33"},"#33"),")"),(0,a.kt)("li",{parentName:"ul"},"Added support for Roact17 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/35"},"#35"),")")),(0,a.kt)("h2",{id:"101-may-26-2022"},"1.0.1 (May 26, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed documentation incorrectly using dot operator for controllers"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"from")," prop during imperative updates (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lopi-py"},"@lopi-py")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/22"},"#22"),")"),(0,a.kt)("li",{parentName:"ul"},"Added Additional Notes section to docs")),(0,a.kt)("h2",{id:"100-april-21-2022"},"1.0.0 (April 21, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bumped promise version to v4.0 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/20"},"#20"),")"),(0,a.kt)("li",{parentName:"ul"},"Bumped roact-hooks version to v0.4 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/20"},"#20"),")"),(0,a.kt)("li",{parentName:"ul"},"Fixed calculations not responding to fps differences (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/20"},"#20"),")")),(0,a.kt)("h2",{id:"031-march-29-2022"},"0.3.1 (March 29, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where duration-based anims would always start from the same position")),(0,a.kt)("h2",{id:"030-march-29-2022"},"0.3.0 (March 29, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removed implementation detail from return table"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"getting started")," page to documentation"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"reset")," prop (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/17"},"#17"),")"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"loop")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," props (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/18"},"#18"),")")),(0,a.kt)("h2",{id:"023-feburary-20-2022"},"0.2.3 (Feburary 20, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated npm metadata"),(0,a.kt)("li",{parentName:"ul"},"Fixed library requires from packages")),(0,a.kt)("h2",{id:"022-feburary-19-2022"},"0.2.2 (Feburary 19, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"progress")," config for easing animations (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/13"},"#13"),")"),(0,a.kt)("li",{parentName:"ul"},"Hooks now cancel animations when they are unmounted"),(0,a.kt)("li",{parentName:"ul"},"Added staggered text story to demos"),(0,a.kt)("li",{parentName:"ul"},"Fixed useSprings not removing unused springs when length arg decreases"),(0,a.kt)("li",{parentName:"ul"},"Added tests for ",(0,a.kt)("inlineCode",{parentName:"li"},"useSpring")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"useSprings")),(0,a.kt)("li",{parentName:"ul"},"Added rbxts typings")),(0,a.kt)("h2",{id:"021-feburary-17-2022"},"0.2.1 (Feburary 17, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"useTrail")," delaying the wrong amount for varying delay times"),(0,a.kt)("li",{parentName:"ul"},"Fixed typo in docs")),(0,a.kt)("h2",{id:"020-feburary-11-2022"},"0.2.0 (Feburary 11, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed color3 animating with wrong values"),(0,a.kt)("li",{parentName:"ul"},"Cleaned up all stories to use circle button component"),(0,a.kt)("li",{parentName:"ul"},"Added support for hex color strings (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie"},"@chriscerie")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chriscerie/roact-spring/pull/6"},"#6"),")"),(0,a.kt)("li",{parentName:"ul"},"Added motivation in docs"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"delay")," prop"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"useTrail")),(0,a.kt)("li",{parentName:"ul"},"Added optional dependency array to hooks")),(0,a.kt)("h2",{id:"011-february-3-2022"},"0.1.1 (February 3, 2022)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"useSpring")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"useSprings")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Controller")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"SpringValue")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"config")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"easings"))))}c.isMDXComponent=!0}}]);