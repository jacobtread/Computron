(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{248:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("a1457a10",content,!0,{sourceMap:!1})},249:function(t,e,n){"use strict";n.r(e);var o={name:"TextBlock",props:{title:String,numbered:Boolean,centered:Boolean}},c=(n(257),n(20)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block",class:{"block--numbered":t.numbered,"block--centered":t.centered}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._t("default")],2),t._v(" "),n("div",{staticClass:"buttons"},[t._t("buttons")],2),t._v(" "),n("div",{staticClass:"extra"},[t._t("extra")],2)])}),[],!1,null,"86c39808",null);e.default=component.exports},257:function(t,e,n){"use strict";n(248)},258:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.block[data-v-86c39808]{display:block;width:100%;padding:0 1em;text-align:left}.block h1[data-v-86c39808]{display:inline-block;position:relative;color:#000;margin-bottom:.9em}.block h1[data-v-86c39808]:before{content:"";position:absolute;left:0;top:120%;width:80%;height:4px;background-color:#4a73c9}.block--numbered h1[data-v-86c39808]{font-size:4em}.block--numbered h1[data-v-86c39808]:before{width:150%}.block p[data-v-86c39808]{line-height:1.5}.block--centered[data-v-86c39808]{text-align:center}.block--centered h1[data-v-86c39808]:before{left:50%;right:auto;transform:translateX(-50%)}.block--centered p[data-v-86c39808]{margin:0 auto;max-width:600px}.block--centered .buttons[data-v-86c39808]{justify-content:center}.block--centered .extra[data-v-86c39808]{text-align:center}.buttons[data-v-86c39808]{display:flex;flex-flow:row;flex-wrap:wrap;margin-top:1em}.buttons .button[data-v-86c39808]{display:inline-block}.extra[data-v-86c39808]{display:block;text-align:left}.extra[data-v-86c39808]  a{display:block;color:#343534;margin-top:1.5em}@media screen and (max-width:700px){.block[data-v-86c39808]{flex-flow:column-reverse;text-align:center}.block h1[data-v-86c39808]:before{left:50%;right:auto;transform:translateX(-50%)}.buttons[data-v-86c39808]{justify-content:center}}',""]),t.exports=o},267:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("50505eb4",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n(267)},272:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.nav[data-v-740603c6]{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:center;max-width:1200px;margin:0 auto}.nav[data-v-740603c6]  .button{margin:.5em 1em}.padded[data-v-740603c6]{grid-gap:3em}.title[data-v-740603c6]{position:relative;display:inline-block;text-align:center}.title__wrapper[data-v-740603c6]{display:block;text-align:center}.title[data-v-740603c6]:before{content:"";position:absolute;left:50%;transform:translateX(-50%);top:120%;width:80%;height:4px;background-color:#4a73c9}.button--top[data-v-740603c6]{position:fixed;top:0;right:0;z-index:0;cursor:pointer}',""]),t.exports=o},288:function(t,e,n){"use strict";n.r(e);var o=n(6),c=(n(42),{components:{TextBlock:n(249).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("downloads").fetch();case 3:return o=e.sent,c=o.categories,e.abrupt("return",{categories:c});case 6:case"end":return e.stop()}}),e)})))()},methods:{scrollTo:function(t){document.querySelector(t).scrollIntoView()}},mounted:function(){for(var t=this,e=document.querySelectorAll(".nav > *"),n=function(i){var element=e[i];element.onclick=function(){t.scrollTo("#"+element.getAttribute("data-category"))}},i=0;i<e.length;i++)n(i)}}),r=(n(271),n(20)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TextBlock",{attrs:{title:"Quick Access",centered:""}},[t._v("\n    Here are some quick links to different categories clicking them will take you to the portion of the page that\n    contains the related download links\n  ")]),t._v(" "),n("nav",{staticClass:"nav",attrs:{id:"nav"}},t._l(t.categories,(function(e,o){return n("button",{key:o,staticClass:"button ignore-active",attrs:{"data-category":e.id}},[t._v(t._s(e.title)+"\n    ")])})),0),t._v(" "),n("div",{staticClass:"blocks"},t._l(t.categories,(function(e,o){return n("div",{key:o,attrs:{id:e.id}},[n("div",{staticClass:"title__wrapper"},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"blocks padded"},t._l(e.children,(function(e,o){return n("TextBlock",{key:o,attrs:{title:e.name},scopedSlots:t._u([{key:"buttons",fn:function(){return[n("a",{staticClass:"button",attrs:{href:e.link,rel:"noreferrer",target:"_blank"}},[t._v("\n              View Download\n            ")])]},proxy:!0}],null,!0)},[t._v("\n          "+t._s(e.description)+"\n          ")])})),1)])})),0),t._v(" "),n("button",{staticClass:"button--top button",on:{click:function(e){return t.scrollTo("header")}}},[t._v("Back to top ^")])],1)}),[],!1,null,"740603c6",null);e.default=component.exports;installComponents(component,{TextBlock:n(249).default})}}]);