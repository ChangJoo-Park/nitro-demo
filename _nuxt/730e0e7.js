(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(e,t,r){"use strict";(function(e){var n=r(44),c=(r(35),r(3));function o(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function t(r){var n,c,o,time;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.process.hrtime(),t.next=3,r;case 3:return c=t.sent,o=e.process.hrtime(n),time=(1e9*o[0]+o[1])/1e6,t.abrupt("return",[time,c]);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f={vercel:"https://sigma-demo.nuxt-js.vercel.app",browser:"https://nuxt.github.io/sigma-demo",netlify:"https://sigma-demo.netlify.app",cloudflare:"https://sigma-demo.nuxt.workers.dev",azure:"https://nuxt-sigma.azurewebsites.net/",default:""};t.a={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,path,r,c,l,m,h,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.browser||f.default,path="/api/hello",e.next=4,o($fetch(path).then((function(e){return e.text()})));case 4:return r=e.sent,c=Object(n.a)(r,1),l=c[0],m=t+path,e.next=10,o($fetch(m).then((function(e){return e.text()})));case 10:return h=e.sent,v=Object(n.a)(h,1),d=v[0],e.abrupt("return",{directTime:l,urlTime:d,url:m});case 14:case"end":return e.stop()}}),e)})))()}}}).call(this,r(23))},179:function(e,t,r){"use strict";r.r(t);var n=r(165).a,c=r(8),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("br"),e._v(" "),r("div",[e._v("\n    Direct SSR calls makes fetch super fast!\n    "),r("br"),e._v(" "),r("div",[r("code",[e._v("$fetch('/api/hello')")]),e._v(" "+e._s(e.directTime)+"ms")]),e._v(" "),r("div",[r("code",[e._v("$fetch('"+e._s(e.url)+"')")]),e._v(" "+e._s(e.urlTime)+"ms")])])])}),[],!1,null,null,null);t.default=component.exports}}]);