(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],f=0,p=[];f<c.length;f++)s=c[f],a[s]&&p.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/kitty-friends/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"483d":function(t,e,n){},"4ede":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Kitty Friends")]),n("Search",{on:{"params-change":function(e){return t.setParams(e)}}}),n("Card-List",{attrs:{params:t.searchParams}}),n("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.cats.length?n("div",{staticClass:"card-list"},t._l(t.cats,function(t){return n("div",{key:t.id,staticClass:"card"},[n("Card",{attrs:{cat:t}})],1)}),0):n("div",{staticClass:"error"},[n("p",[t._v("Oops.. were you expecting someone?")])])])},c=[],o=(n("7f7f"),n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"card-image",attrs:{src:t.url,alt:"kitty"}}),n("div",[n("h2",[t._v(t._s(t.cat.name))]),n("p",[t._v(t._s(t.cat.email))])])])}),u=[],l={name:"Card",props:{cat:{type:Object}},computed:{url:function(){return"https://robohash.org/".concat(this.cat.id,"?set=set4")}}},f=l,p=(n("949a"),n("2877")),d=Object(p["a"])(f,o,u,!1,null,"318e9164",null),h=d.exports,v={name:"Card-List",components:{Card:h},props:{params:{type:String,default:""}},data:function(){return{catsList:[]}},computed:{cats:function(){var t=this;return this.catsList.length?this.catsList.filter(function(e){return!0===e.name.toLowerCase().includes(t.params.toLowerCase())}):""}},created:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()}).then(function(e){t.catsList=e})}},m=v,b=(n("92d0"),Object(p["a"])(m,s,c,!1,null,"0634e53b",null)),_=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("input",{attrs:{type:"text",placeholder:"search kitties..."},on:{input:function(e){return t.$emit("params-change",e.target.value)}}})])},g=[],j={name:"Search"},O=j,w=(n("d4a4"),Object(p["a"])(O,y,g,!1,null,"ed04640e",null)),C=w.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"footer-nav"},[n("li",{staticClass:"push"},[t._v("Made with ❤ by Ronnie Villarini")]),n("li",[n("a",{attrs:{href:"#"}},[t._v("GitHub")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Twitter")])])])])}],L={name:"Footer"},S=L,$=(n("bc52"),Object(p["a"])(S,x,P,!1,null,"04ee7570",null)),k=$.exports,E={name:"app",components:{CardList:_,Search:C,Footer:k},data:function(){return{searchParams:""}},methods:{setParams:function(t){this.searchParams=t.trim()}}},M=E,F=(n("034f"),Object(p["a"])(M,a,i,!1,null,null,null)),T=F.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(T)}}).$mount("#app")},"64a9":function(t,e,n){},"65d4":function(t,e,n){},"92d0":function(t,e,n){"use strict";var r=n("4ede"),a=n.n(r);a.a},"949a":function(t,e,n){"use strict";var r=n("65d4"),a=n.n(r);a.a},a999:function(t,e,n){},bc52:function(t,e,n){"use strict";var r=n("a999"),a=n.n(r);a.a},d4a4:function(t,e,n){"use strict";var r=n("483d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.8b2f6af5.js.map