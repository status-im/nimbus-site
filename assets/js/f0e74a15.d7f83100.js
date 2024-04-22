"use strict";(self.webpackChunknimbus_docusaurus_template=self.webpackChunknimbus_docusaurus_template||[]).push([[364],{44050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"Contributor Guide",sidebar_label:"Contributor Guide",sidebar_position:6},a=void 0,u={unversionedId:"contributor_guide",id:"contributor_guide",title:"Contributor Guide",description:"How to help with funding",source:"@site/about/contributor_guide.md",sourceDirName:".",slug:"/contributor_guide",permalink:"/about/contributor_guide",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Contributor Guide",sidebar_label:"Contributor Guide",sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"FAQ",permalink:"/about/faq"},next:{title:"Software Libraries",permalink:"/about/libraries"}},l={},s=[{value:"How to help with funding",id:"how-to-help-with-funding",level:2},{value:"How to get involved with Nimbus&#39; development",id:"how-to-get-involved-with-nimbus-development",level:2},{value:"Thought experiments",id:"thought-experiments",level:2},{value:"Guidelines",id:"guidelines",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-help-with-funding"},"How to help with funding"),(0,o.kt)("p",null,"We have a donation box set up at address ",(0,o.kt)("inlineCode",{parentName:"p"},"0xDeb4A0e8d9a8dB30a9f53AF2dCc9Eb27060c6557"),", as well as a ",(0,o.kt)("a",{parentName:"p",href:"https://gitcoin.co/grants/137/nimbus-2/"},"Gitcoin Grant page"),"."),(0,o.kt)("p",null,"We use funds from donations to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fund bounties"),(0,o.kt)("li",{parentName:"ul"},"fund audits of our production code"),(0,o.kt)("li",{parentName:"ul"},"fund hardware on which to build Nimbus for you, from Raspberry Pis to feature phones")),(0,o.kt)("p",null,"If you'd like to donate a conditional amount, i.e. one that depends on a certain milestone or deadline, please ",(0,o.kt)("a",{parentName:"p",href:"mailto:jacek@status.im"},"get in touch"),"."),(0,o.kt)("h2",{id:"how-to-get-involved-with-nimbus-development"},"How to get involved with Nimbus' development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"look around ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/status-im/nimbus-eth2"},"the repo"),", especially the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/status-im/nimbus-eth2/issues"},"open issues")),(0,o.kt)("li",{parentName:"ul"},"check out some ",(0,o.kt)("a",{parentName:"li",href:"https://gitcoin.co/explorer?keywords=nimbus&order_by=-web3_created"},"open bounties")),(0,o.kt)("li",{parentName:"ul"},"learn about the source code by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/status-im/nimbus-eth2/tree/master/tests"},"dissecting"))),(0,o.kt)("p",null,"To configure your setup for development:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/status-im/nimbus-eth2\ncd nimbus-eth2\nmake update\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/eth2.html"},"Build")," and start hacking!"),(0,o.kt)("h2",{id:"thought-experiments"},"Thought experiments"),(0,o.kt)("blockquote",{className:"twitter-tweet","data-theme":"dark"},(0,o.kt)("p",{lang:"en",dir:"ltr"},"Still hoping to just have my ",(0,o.kt)("a",{href:"https://twitter.com/ethstatus?ref_src=twsrc%5Etfw"},"@ethstatus")," desktop wallet be my bn, and have my mobile device be my ",(0,o.kt)("a",{href:"https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw"},"@ethnimbus")," vc \ud83e\udd37\ud83c\udffd\u200d\u2640\ufe0f\ud83d\ude05. And then a nice little Rocketpool Staas run by ",(0,o.kt)("a",{href:"https://twitter.com/search?q=%24SNT&src=ctag&ref_src=twsrc%5Etfw"},"$SNT"),'... And anonymous staking in "dark pools" build on application layer, fees paid to client/network nodes. \ud83d\udc4c\ud83c\udffd\ud83d\ude3b.'),"\u2014 chloethedev.eth \u27e0 \u03b4\u03bf\u03cd\u03bb\u03bf\u03c2 \ud83c\udff3\ufe0f\u200d\u26a7\ufe0f (@Chloethedev) ",(0,o.kt)("a",{href:"https://twitter.com/Chloethedev/status/1320710462032515072?ref_src=twsrc%5Etfw"},"October 26, 2020")),(0,o.kt)("p",null,"If you have research ideas you'd like to throw at us, exotic hardware you'd like to test on, or anything else revolutionary cooking up in your mind let us know. We'll gladly experiment!"),(0,o.kt)("h2",{id:"guidelines"},"Guidelines"),(0,o.kt)("p",null,"Whatever you might expect to see in other projects applies here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Be nice to others"),(0,o.kt)("li",{parentName:"ul"},"When evaluating PRs, focus exclusively on the quality of the code"),(0,o.kt)("li",{parentName:"ul"},"If submitting code, make sure it's tested. All code MUST come with tests. To speed up the review, ping a team member."),(0,o.kt)("li",{parentName:"ul"},"If submitting typo fixes or documentation changes, speed up the review process by pinging a team member. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/arnetheduck"},"Jacek")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/unixpi"},"Sacha")," will usually review those very quickly. The same applies if submitting a tutorial for inclusion on the ",(0,o.kt)("a",{parentName:"li",href:"https://blog.nimbus.team/"},"official blog"),".")))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);