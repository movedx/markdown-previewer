(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),l=(n(17),n(18),n(3),n(2)),i=n(5),s=n(11),d=n.n(s),u=Object(i.b)({name:"markdown",initialState:{text:""},reducers:{convertMarkdown:function(e,t){e.text=d()(t.payload,{sanitize:!0,headerIds:!1})}}}),m=u.actions,f=m.convertMarkdown,w=(m.setText,function(e){return e.markdown.text}),b=u.reducer,v=function(){var e=Object(l.b)();return a.a.createElement("div",{className:"bg-white w-full m-1 mb-3 flex"},a.a.createElement("textarea",{onChange:function(t){return e(f(t.target.value))},resize:"0",className:"p-1 w-full border-solid border-2 border-gray-600 resize-none bg-white"}))},g=function(){var e=Object(l.c)(w);return a.a.createElement("div",{className:"bg-green-200 w-full m-1 mb-3 flex"},a.a.createElement("div",{className:"p-1 w-full border-solid border-2 border-gray-600 bg-white text-left"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})))},h=function(){return a.a.createElement("div",{className:"bg-indigo-200 h-20 flex-shrink-0"})};var E=function(){return a.a.createElement("div",{className:"App h-screen bg-indigo-200 flex flex-col"},a.a.createElement(h,null),a.a.createElement("div",{className:"flex justify-around flex-1"},a.a.createElement(v,null),a.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=Object(i.a)({reducer:{markdown:b}});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:x},a.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a7816892.chunk.js.map