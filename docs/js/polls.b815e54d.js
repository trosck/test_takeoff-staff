(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["polls"],{"1afc":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("layout-default",[t("to-tabs",{attrs:{headers:e.tabs,activeTab:e.currentTab},on:{pickTab:e.pickTab}}),t("div",{staticClass:"content"},[t(e.currentTab,{tag:"component"})],1)],1)},s=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wrapper"},e._l(e.headers,(function(n){return t("div",{key:n.value,staticClass:"item",class:{active:e.activeTab===n.value},on:{click:function(t){return e.$emit("pickTab",n.value)}}},[t("div",{staticClass:"name"},[e._v(e._s(n.name))]),t("div",{staticClass:"content"},[e._t("default")],2)])})),0)},i=[],r={name:"to-tabs",props:{headers:{type:Array,required:!0},activeTab:{type:String,required:!0}}},u=r,l=(t("1b97"),t("2877")),o=Object(l["a"])(u,c,i,!1,null,"23501052",null),d=o.exports,b={components:{conditions:()=>t.e("chunk-2d0b9a32").then(t.bind(null,"3494")),questions:()=>t.e("chunk-2d0c02f0").then(t.bind(null,"4163")),parameters:()=>t.e("chunk-2d20732c").then(t.bind(null,"a007")),logic:()=>t.e("chunk-2d0e1a0c").then(t.bind(null,"7af2")),respondents:()=>t.e("chunk-5096b691").then(t.bind(null,"7e35")),[d.name]:d},data(){return{currentTab:"respondents",tabs:[{name:"Conditions",value:"conditions"},{name:"Logic",value:"logic"},{name:"Parameters",value:"parameters"},{name:"Questions",value:"questions"},{name:"Respondents",value:"respondents"}]}},methods:{pickTab(e){this.currentTab=e}}},p=b,v=(t("322d"),Object(l["a"])(p,a,s,!1,null,"7d7f571b",null));n["default"]=v.exports},"1b97":function(e,n,t){"use strict";var a=t("67bf"),s=t.n(a);s.a},"322d":function(e,n,t){"use strict";var a=t("8724"),s=t.n(a);s.a},"67bf":function(e,n,t){},8724:function(e,n,t){}}]);
//# sourceMappingURL=polls.b815e54d.js.map