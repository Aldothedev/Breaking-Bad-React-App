(this["webpackJsonpbreaking-bad-cast"]=this["webpackJsonpbreaking-bad-cast"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},17:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},18:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(3),s=a.n(i),u=a(14),m=a(2),o=a(15),d=a.n(o),E=a(16),f=a.n(E),p=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:f.a,alt:""}))},g=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status)))))},b=a(17),h=a.n(b),v=function(){return r.a.createElement("img",{src:h.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},k=function(e){var t=e.items;return e.isLoading?r.a.createElement(v,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(g,{key:e.char_id,item:e})})))},y=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],i=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search characters",value:l,onChange:function(e){return a=e.target.value,i(a),void t(a);var a},autoFocus:!0})))},N=(a(42),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],E=i[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),b=g[0],h=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,d()("https://www.breakingbadapi.com/api/characters?name=".concat(b));case 3:t=e.sent,console.log(t.data),c(t.data),E(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(y,{getQuery:function(e){return h(e)}}),r.a.createElement(k,{isLoading:o,items:a}))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7ef3cdcd.chunk.js.map