(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),l=n.n(o),c=(n(17),n(18),n(3),n(2)),i=n(5),s=n(11),m=n.n(s),d=Object(i.b)({name:"markdown",initialState:{text:""},reducers:{convertMarkdown:function(e,t){e.text=m()(t.payload,{sanitize:!0,headerIds:!1})}}}),u=d.actions,f=u.convertMarkdown,w=(u.setText,function(e){return e.markdown.text}),b=d.reducer,v=function(){var e=Object(c.b)();return a.a.createElement("div",{className:"bg-white m-1 mb-3 flex flex-1"},a.a.createElement("textarea",{onChange:function(t){return e(f(t.target.value))},resize:"0",className:"p-1 w-full border-solid border-2 border-gray-600 resize-none bg-white"}))},x=function(){var e=Object(c.c)(w);return a.a.createElement("div",{className:"bg-green-200 m-1 mb-3 flex flex-1 flex-grow-50 max-w-50"},a.a.createElement("div",{className:"p-1 w-full border-solid border-2 border-gray-600 bg-white text-left break-words resize-none",dangerouslySetInnerHTML:{__html:e}}))},g=function(){return a.a.createElement("div",{className:"bg-indigo-200 h-10 flex-shrink-0 flex items-center"},a.a.createElement("div",{className:"flex-1"},"Input"),a.a.createElement("div",{className:"flex-1"},"Preview"))};var h=function(){return a.a.createElement("div",{className:"App h-screen bg-indigo-200 flex flex-col"},a.a.createElement(g,null),a.a.createElement("div",{className:"flex justify-around flex-1"},a.a.createElement(v,null),a.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=Object(i.a)({reducer:{markdown:b}});l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:E},a.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.5d3fa30a.chunk.js.map